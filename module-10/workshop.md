# Module 10 Workshop: Real Data Transformation

Welcome to the final module! In this workshop, you'll load real MITS project data from `collection.json` and transform it to display all 30+ actual projects with language badges, merged tags, and dynamic colors.

## What You'll Build

Starting from your Module 9 dashboard with dark mode, you'll:

- 📊 Load 30+ real projects from `collection.json`
- 🌍 Add language badges with flag emojis (🇬🇧 EN, 🇭🇺 HU, 🇫🇮 FI)
- 🎨 Merge technologies + tags with dynamic color assignment
- 🔄 Transform complex data structures
- 🛡️ Handle optional fields gracefully

---

## Starting Point

Make sure you've completed Module 9. Your project should have:

- ✅ Dark/light theme toggle working
- ✅ 6 project cards displaying
- ✅ Theme preference persisted
- ✅ All components styled for both themes

If you need the starting code, copy the Module 9 solution to your working directory.

---

## Git: Create Feature Branch

Before starting, create a feature branch for this module:

```bash
git checkout -b feat/module-10-real-data
```

---

## Task 1: Copy collection.json to Your Project

Let's get the real MITS project data into your project.

### Step 1.1: Copy the Data File

**Copy** `/.claude/context/collection.json` to `src/data/collection.json`:

```bash
# Windows (PowerShell):
copy .\.claude\context\collection.json src\data\collection.json

# Mac/Linux:
cp .claude/context/collection.json src/data/collection.json
```

### Step 1.2: Verify the File

**Check** that the file exists and has content:

- File should be ~900 lines
- Contains an array of 30+ project objects
- Each object has fields like `name`, `displayName`, `competition`, etc.

---

## Task 2: Update TypeScript Interfaces

We need to create interfaces for both the source data (collection.json) and the transformed data (UI).

### Step 2.1: Create Interface for Raw Data

**Open** `src/types/project.ts` and **add** the interface for the raw collection.json data:

```typescript
// Raw data structure from collection.json
export interface RawProject {
  name: string;
  displayName: string;
  description: string;
  url: string;
  skillDomainIds: number[];
  competition: string;
  estTime: number;
  authors: Array<{
    name: string;
    url: string;
  }>;
  technologies: string[];
  tags: string[];
  languages?: string[]; // Optional - not all projects have this
  status: string;
  isPrivate: boolean;
}
```

#### 💡 Key Points

- **`languages?: string[]`** - The `?` means this field is optional
- Not all projects have language information
- We won't use `url`, `authors`, `skillDomainIds`, etc. in the UI

### Step 2.2: Keep the Existing UI Interface

Your existing `Project` interface is perfect for the UI. Keep it as is:

```typescript
// UI data structure (keep this as is)
export interface Project {
  id: string;
  competition: string;
  title: string;
  subtitle: string;
  description: string;
  tags: Array<{
    label: string;
    colorClass: string;
  }>;
  languages?: string[]; // Add this line if not present
  focusRingColor: string;
}
```

**Add the `languages` field** if it's not already there.

---

## Task 3: Create Tag Color Assignment System

We need a system to assign colors to tags dynamically.

### Step 3.1: Create Color Utilities File

**Create** a new file `src/utils/colors.ts`:

```bash
# Windows: type nul > src\utils\colors.ts
# Mac/Linux: touch src/utils/colors.ts
```

**Add** the following code:

```typescript
// Predefined color palette for tags
// These work in both light and dark modes
const tagColorPalette = [
  "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/20 dark:text-blue-300 dark:border-blue-800",
  "bg-cyan-50 text-cyan-700 border-cyan-200 dark:bg-cyan-900/20 dark:text-cyan-300 dark:border-cyan-800",
  "bg-green-50 text-green-700 border-green-200 dark:bg-green-900/20 dark:text-green-300 dark:border-green-800",
  "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-900/20 dark:text-emerald-300 dark:border-emerald-800",
  "bg-teal-50 text-teal-700 border-teal-200 dark:bg-teal-900/20 dark:text-teal-300 dark:border-teal-800",
  "bg-sky-50 text-sky-700 border-sky-200 dark:bg-sky-900/20 dark:text-sky-300 dark:border-sky-800",
  "bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-900/20 dark:text-indigo-300 dark:border-indigo-800",
  "bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-900/20 dark:text-purple-300 dark:border-purple-800",
  "bg-violet-50 text-violet-700 border-violet-200 dark:bg-violet-900/20 dark:text-violet-300 dark:border-violet-800",
  "bg-fuchsia-50 text-fuchsia-700 border-fuchsia-200 dark:bg-fuchsia-900/20 dark:text-fuchsia-300 dark:border-fuchsia-800",
  "bg-pink-50 text-pink-700 border-pink-200 dark:bg-pink-900/20 dark:text-pink-300 dark:border-pink-800",
  "bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-900/20 dark:text-rose-300 dark:border-rose-800",
  "bg-orange-50 text-orange-700 border-orange-200 dark:bg-orange-900/20 dark:text-orange-300 dark:border-orange-800",
  "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-900/20 dark:text-amber-300 dark:border-amber-800",
  "bg-yellow-50 text-yellow-700 border-yellow-200 dark:bg-yellow-900/20 dark:text-yellow-300 dark:border-yellow-800",
  "bg-lime-50 text-lime-700 border-lime-200 dark:bg-lime-900/20 dark:text-lime-300 dark:border-lime-800",
];

// Focus ring colors that match the tag colors
const focusRingColors = [
  "blue-500",
  "cyan-500",
  "green-500",
  "emerald-500",
  "teal-500",
  "sky-500",
  "indigo-500",
  "purple-500",
  "violet-500",
  "fuchsia-500",
  "pink-500",
  "rose-500",
  "orange-500",
  "amber-500",
  "yellow-500",
  "lime-500",
];

/**
 * Assigns a color class to a tag based on its index
 * Colors cycle through the palette
 */
export function getTagColor(index: number): string {
  return tagColorPalette[index % tagColorPalette.length];
}

/**
 * Assigns a focus ring color based on project index
 * Colors cycle through the palette
 */
export function getFocusRingColor(index: number): string {
  return focusRingColors[index % focusRingColors.length];
}
```

#### 🔍 How It Works

- **`tagColorPalette`** - Array of 16 color combinations
- **`index % tagColorPalette.length`** - Cycles through colors (modulo operator)
- **Dark mode variants** - Each color has `dark:` variants built-in
- **Focus ring colors** - Matching colors for accessibility

---

## Task 4: Create Language Flag Mapping

We need to map language codes to flag emojis.

### Step 4.1: Add Flag Emoji Utilities

**Create** `src/utils/flags.ts`:

```typescript
// Map language codes to flag emojis
const flagEmojis: Record<string, string> = {
  EN: "🇬🇧", // English - Great Britain flag
  HU: "🇭🇺", // Hungarian - Hungary flag
  FI: "🇫🇮", // Finnish - Finland flag
  DE: "🇩🇪", // German - Germany flag
  FR: "🇫🇷", // French - France flag
  ES: "🇪🇸", // Spanish - Spain flag
  IT: "🇮🇹", // Italian - Italy flag
  // Add more as needed
};

/**
 * Gets the flag emoji for a language code
 * Returns empty string if not found
 */
export function getFlagEmoji(languageCode: string): string {
  return flagEmojis[languageCode.toUpperCase()] || "";
}

/**
 * Formats a language code with its flag emoji
 * Example: "EN" -> "🇬🇧 EN"
 */
export function formatLanguage(languageCode: string): string {
  const flag = getFlagEmoji(languageCode);
  return flag ? `${flag} ${languageCode.toUpperCase()}` : languageCode.toUpperCase();
}
```

---

## Task 5: Create Data Transformation Function

Now let's create the function that transforms `RawProject` to `Project`.

### Step 5.1: Create Transformation Utilities

**Create** `src/utils/transformData.ts`:

```typescript
import type { RawProject, Project } from "../types/project";
import { getTagColor, getFocusRingColor } from "./colors";

/**
 * Generates a unique ID from the project name
 * Example: "ES2023 S17 - Module A" -> "es2023-s17-module-a"
 */
function generateId(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-") // Replace non-alphanumeric with hyphens
    .replace(/^-|-$/g, ""); // Remove leading/trailing hyphens
}

/**
 * Transforms a raw project from collection.json to the UI format
 */
export function transformProject(
  rawProject: RawProject,
  projectIndex: number
): Project {
  // Merge technologies and tags into a single array
  const allTags = [...rawProject.technologies, ...rawProject.tags];

  // Remove duplicates (case-insensitive)
  const uniqueTags = Array.from(
    new Set(allTags.map((tag) => tag.toLowerCase()))
  ).map((tag) => {
    // Find the original casing
    return allTags.find((t) => t.toLowerCase() === tag) || tag;
  });

  // Limit to first 8 tags to avoid overcrowding
  const limitedTags = uniqueTags.slice(0, 8);

  // Assign colors to tags
  const coloredTags = limitedTags.map((tag, index) => ({
    label: tag,
    colorClass: getTagColor(index),
  }));

  // Transform to UI format
  return {
    id: generateId(rawProject.name),
    title: rawProject.name,
    subtitle: rawProject.displayName,
    description: rawProject.description,
    competition: rawProject.competition,
    languages: rawProject.languages, // May be undefined (optional)
    tags: coloredTags,
    focusRingColor: getFocusRingColor(projectIndex),
  };
}

/**
 * Transforms an array of raw projects
 */
export function transformProjects(rawProjects: RawProject[]): Project[] {
  return rawProjects.map((project, index) => transformProject(project, index));
}
```

#### 🔍 Transformation Steps Explained

1. **Merge arrays**: Combine `technologies` + `tags`
2. **Remove duplicates**: Case-insensitive deduplication
3. **Limit tags**: Keep first 8 to avoid overcrowding
4. **Assign colors**: Each tag gets a color from the palette
5. **Map fields**: Rename fields to match UI interface
6. **Generate ID**: Create URL-friendly identifier

---

## Task 6: Update ProjectCard to Display Languages

We need to add language badges to the card component.

### Step 6.1: Update ProjectCard Component

**Open** `src/components/ProjectCard.tsx` and **import** the flag utilities:

```typescript
import { formatLanguage } from "../utils/flags";
```

**Find** the CardHeader section and **add** language badges after the competition badge:

```typescript
<CardHeader>
  <div className="flex flex-wrap items-center gap-2 mb-2">
    {/* Competition Badge */}
    <Badge variant="secondary" className="dark:bg-slate-800 dark:text-slate-300">
      {competition}
    </Badge>

    {/* Language Badges (if present) */}
    {languages && languages.length > 0 && (
      <>
        {languages.map((lang) => (
          <Badge
            key={lang}
            variant="outline"
            className="bg-slate-100 text-slate-700 border-slate-300 dark:bg-slate-800 dark:text-slate-200 dark:border-slate-700"
          >
            {formatLanguage(lang)}
          </Badge>
        ))}
      </>
    )}
  </div>

  <CardTitle className="text-2xl font-bold leading-tight dark:text-white">
    {title}
  </CardTitle>
  {/* ... rest of the card ... */}
</CardHeader>
```

#### 💡 What Changed

- **Conditional rendering**: `{languages && languages.length > 0 && ...}`
- **Map over languages**: Create a badge for each language
- **formatLanguage()**: Adds flag emoji + code (e.g., "🇬🇧 EN")
- **Styling**: Neutral gray colors for language badges

---

## Task 7: Load and Use Real Data in App

Now let's load the real data and use our transformation function.

### Step 7.1: Update App.tsx

**Open** `src/App.tsx` and **replace** the imports and data loading:

```typescript
import { ProjectCard } from "./components/ProjectCard";
import { ThemeToggle } from "./components/ThemeToggle";
import collectionData from "./data/collection.json";
import { transformProjects } from "./utils/transformData";
import type { RawProject } from "./types/project";

function App() {
  // Transform the raw data to UI format
  const projects = transformProjects(collectionData as RawProject[]);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-slate-950 p-6 md:p-8 transition-colors duration-200">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              MITS Project Dashboard
            </h1>
            <p className="text-gray-600 dark:text-slate-400 mt-1">
              Explore our collection of {projects.length} skills training projects
            </p>
          </div>
          <ThemeToggle />
        </header>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              {...project}
              onClick={() => {
                console.log(`${project.title} clicked!`);
                // In a real app, you might navigate to the project URL
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
```

#### 🔍 What Changed

- **Import collection.json**: Load the real data
- **Import transformProjects**: Use our transformation function
- **Transform data**: `transformProjects(collectionData as RawProject[])`
- **Display count**: Show the number of projects dynamically
- **Map projects**: Use the transformed data

---

## Task 8: Test Your Dashboard

Let's verify everything works correctly!

### Step 8.1: Start the Development Server

```bash
npm run dev
```

### Step 8.2: Verification Checklist

**Open** your browser and verify:

- [ ] Dashboard loads without errors
- [ ] You see 30+ project cards (not just 6!)
- [ ] Each card displays:
  - [ ] Title (e.g., "ES2023 S17 - Module D")
  - [ ] Subtitle (e.g., "Interactive Frontend using an API")
  - [ ] Competition badge
  - [ ] Language badges (🇬🇧 EN, 🇭🇺 HU) for some projects
  - [ ] Multiple colored tags
  - [ ] Description text (truncated to 3 lines)
- [ ] Tags have different colors (cycling through palette)
- [ ] Some cards have language badges, some don't (this is correct!)
- [ ] Dark mode works correctly
- [ ] Hover effects work
- [ ] Focus rings work (Tab key navigation)

### Step 8.3: Check Console for Errors

**Open DevTools** (F12) and check the Console tab:

- ✅ Should have no errors
- ✅ Should log project name when clicking cards

---

## Task 9: Handle Edge Cases

Let's add error handling for robustness.

### Step 9.1: Add Error Boundary (Optional)

If you want to handle errors gracefully, you can wrap your app in an error boundary. For now, we'll rely on TypeScript and optional chaining.

### Step 9.2: Verify Optional Chaining

Make sure your code handles missing `languages` gracefully:

```typescript
// Good - uses optional chaining
{languages && languages.length > 0 && (
  // render language badges
)}

// Alternative - using optional chaining in the condition
{languages?.length > 0 && (
  // render language badges
)}
```

---

## Task 10: Git Commit

Commit your real data transformation implementation:

```bash
# Stage all changes
git add .

# Commit with descriptive message
git commit -m "feat(module-10): implement real data transformation

- Load all 30+ projects from collection.json
- Create data transformation pipeline
- Implement flag emoji mapping for languages
- Add dynamic tag color assignment system
- Update UI to display language badges
- Handle optional fields with TypeScript
- Merge technologies and tags arrays
- Test with real MITS project data"

# Create tag
git tag module-10-complete
```

---

## Challenges

### Challenge 1: Add "+N more" for Extra Tags

If a project has more than 8 tags, show "+N more" indicator:

```typescript
const extraCount = allTags.length - limitedTags.length;

// In the UI:
{extraCount > 0 && (
  <span className="text-xs text-muted-foreground">
    +{extraCount} more
  </span>
)}
```

### Challenge 2: Make Cards Clickable to GitHub

Open the project GitHub URL when clicked:

```typescript
onClick={() => {
  const rawProject = collectionData.find(p => p.name === project.title);
  if (rawProject?.url) {
    window.open(rawProject.url, '_blank');
  }
}}
```

### Challenge 3: Add Search/Filter Functionality

Add a search input to filter projects by title, tags, or competition:

```typescript
const [search, setSearch] = useState("");

const filteredProjects = projects.filter((project) =>
  project.title.toLowerCase().includes(search.toLowerCase()) ||
  project.competition.toLowerCase().includes(search.toLowerCase()) ||
  project.tags.some(tag => tag.label.toLowerCase().includes(search.toLowerCase()))
);
```

### Challenge 4: Sort Projects

Add sorting options (alphabetical, by competition, by number of tags):

```typescript
const sortedProjects = [...projects].sort((a, b) => {
  return a.title.localeCompare(b.title); // Alphabetical
  // or: a.tags.length - b.tags.length // By tag count
});
```

### Challenge 5: Add Competition Filter

Add buttons to filter by competition:

```typescript
const competitions = Array.from(new Set(projects.map(p => p.competition)));

// In UI:
{competitions.map(comp => (
  <button onClick={() => setFilter(comp)}>{comp}</button>
))}
```

---

## Common Issues and Solutions

### Issue: "Module not found: collection.json"

**Solution**: Make sure you copied `collection.json` to `src/data/collection.json`

### Issue: Language badges not showing

**Solution**: 
- Check that some projects have the `languages` field (they do!)
- Verify your conditional rendering: `{languages && languages.length > 0 && ...}`

### Issue: All tags same color

**Solution**: Check that you're calling `getTagColor(index)` with different indices

### Issue: Too many tags on some cards

**Solution**: The code limits to 8 tags - verify `limitedTags` logic

### Issue: Dark mode colors look wrong

**Solution**: Verify you included `dark:` variants in the color palette

---

## Summary

Congratulations! 🎉 You've completed the MITS Dashboard Tutorial!

### What You Built

✅ **Complete Dashboard** with 30+ real MITS projects  
✅ **Dark/Light Theme** with persistence  
✅ **Language Badges** with flag emojis  
✅ **Dynamic Tag Colors** from merged data sources  
✅ **Data Transformation** pipeline  
✅ **Responsive Design** for all devices  
✅ **Accessible** with keyboard navigation  
✅ **Production-Ready** code  

### What You Learned

Throughout all 10 modules, you mastered:

1. **Vite + React + TypeScript** project setup
2. **Tailwind CSS** utility-first styling
3. **Color systems** and responsive design
4. **ShadCN UI** component library
5. **React patterns** (components, props, state, context)
6. **Dark mode** implementation
7. **Data transformation** and mapping
8. **TypeScript** interfaces and type safety
9. **Git workflow** and version control
10. **Professional practices** and patterns

### Next Steps

- **Deploy Your Dashboard**: Host on Vercel, Netlify, or GitHub Pages
- **Add More Features**: Search, filter, sort, pagination
- **Customize Design**: Make it your own with different colors/layouts
- **Connect to API**: Replace JSON with real API calls
- **Add Authentication**: Implement user accounts
- **Build More Projects**: Apply these skills to your own ideas!

---

**Congratulations on completing the MITS Tailwind & ShadCN UI Tutorial!** 🚀✨

You now have the skills to build professional, production-ready React applications with Tailwind CSS and ShadCN UI. Keep building and learning! 💪


