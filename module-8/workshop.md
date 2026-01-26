# Module 8 Workshop: Component Props & Reusability

Welcome to Module 8! In this workshop, you'll transform your repetitive card code into a clean, maintainable solution using component props and data-driven rendering.

## What You'll Build

You'll refactor **~400 lines** of repetitive code into:

- 📦 A reusable `ProjectCard` component (~40 lines)
- 📊 A data file with project information (~60 lines)
- 🎨 A clean `App.tsx` that maps data to components (~20 lines)

**Result**: More maintainable, scalable, and professional code! ✨

---

## Starting Point

Make sure you've completed Module 7. Your `App.tsx` should have:

- ✅ 6 hard-coded Card components in a responsive grid
- ✅ Each card with similar structure but different content
- ✅ Hover effects, click handlers, and keyboard navigation

---

## Git: Create Feature Branch

Before starting, create a feature branch for this module:

```bash
git checkout -b feat/module-8-component-props
```

---

## Task 1: Create JSON Data File & TypeScript Interface

Let's start by identifying what data each card needs, creating a JSON file, and defining a TypeScript interface.

### Step 1.1: Analyze Card Data

Look at one of your cards. What information does it contain?

1. **Competition** - "EuroSkills 2025 Training HU"
2. **Title** - "ES2025 TRAINING HU S17 - Module B"
3. **Subtitle** - "SkillsShare Academy - Dynamic Website"
4. **Description** - "Create a server-side rendered..."
5. **Tags** - ["backend", "server-side", "MySQL", "authentication"]
6. **Focus Ring Color** - "blue-500" (for the focus state)

### Step 1.2: Create TypeScript Interface

Create a new file `src/types/project.ts`:

```bash
# Create types directory
mkdir src/types

# Create file (or use your editor)
# Windows: type nul > src\types\project.ts
# Mac/Linux: touch src/types/project.ts
```

Add the following interface:

```typescript
export interface Project {
  id: string;
  competition: string;
  title: string;
  subtitle: string;
  description: string;
  tags: Array<{
    label: string;
    color: string;
  }>;
  focusRingColor: string;
}
```

#### Interface Breakdown

- **`id`** - Unique identifier (will be used as React `key`)
- **`competition`** - Badge text (e.g., "EuroSkills 2025 Training HU")
- **`title`** - Main card title
- **`subtitle`** - Secondary heading
- **`description`** - Card description text
- **`tags`** - Array of tag objects with:
  - `label` - Tag text (e.g., "backend")
  - `color` - Color name (e.g., "blue", "green", "purple")
- **`focusRingColor`** - Color name for focus ring (e.g., "blue", "green")

### Step 1.3: Create Projects JSON File

Create `src/data/projects.json`:

```bash
# Create data directory
mkdir src/data

# Create file
# Windows: type nul > src\data\projects.json
# Mac/Linux: touch src/data/projects.json
```

Add the projects array in JSON format. Notice how we're storing just the **color names** (like `"blue"`, `"green"`) instead of full Tailwind classes:

```json
[
  {
    "id": "es2025-module-b",
    "competition": "EuroSkills 2025 Training HU",
    "title": "ES2025 TRAINING HU S17 - Module B",
    "subtitle": "SkillsShare Academy - Dynamic Website",
    "description": "Create a server-side rendered administrative interface for SkillShare Academy platform management with role-based access control and OWASP security compliance.",
    "tags": [
      {
        "label": "backend",
        "color": "blue"
      },
      {
        "label": "server-side",
        "color": "cyan"
      },
      {
        "label": "MySQL",
        "color": "sky"
      },
      {
        "label": "authentication",
        "color": "purple"
      }
    ],
    "focusRingColor": "blue"
  },
  {
    "id": "es2025-module-a",
    "competition": "EuroSkills 2025 Training HU",
    "title": "ES2025 TRAINING HU S17 - Module A",
    "subtitle": "Restaurant Portal - Mobile App",
    "description": "Develop a cross-platform mobile application for restaurant table reservations with real-time availability, push notifications, and offline-first architecture.",
    "tags": [
      {
        "label": "frontend",
        "color": "green"
      },
      {
        "label": "mobile",
        "color": "emerald"
      },
      {
        "label": "React Native",
        "color": "teal"
      },
      {
        "label": "offline-first",
        "color": "lime"
      }
    ],
    "focusRingColor": "green"
  },
  {
    "id": "ws2024-cloud-computing",
    "competition": "WorldSkills Lyon 2024",
    "title": "WS2024 Cloud Computing - Day 3",
    "subtitle": "Microservices Deployment Pipeline",
    "description": "Design and implement a CI/CD pipeline for microservices deployment on Kubernetes with automated testing, monitoring, and rollback capabilities.",
    "tags": [
      {
        "label": "DevOps",
        "color": "orange"
      },
      {
        "label": "CI/CD",
        "color": "amber"
      },
      {
        "label": "Kubernetes",
        "color": "yellow"
      },
      {
        "label": "Docker",
        "color": "red"
      }
    ],
    "focusRingColor": "orange"
  },
  {
    "id": "es2025-module-c",
    "competition": "EuroSkills 2025 Training HU",
    "title": "ES2025 TRAINING HU S17 - Module C",
    "subtitle": "E-Commerce Platform - Full Stack",
    "description": "Build a complete e-commerce platform with product catalog, shopping cart, payment integration, and admin dashboard using modern full-stack technologies.",
    "tags": [
      {
        "label": "full-stack",
        "color": "purple"
      },
      {
        "label": "Next.js",
        "color": "violet"
      },
      {
        "label": "PostgreSQL",
        "color": "fuchsia"
      },
      {
        "label": "Stripe",
        "color": "pink"
      }
    ],
    "focusRingColor": "purple"
  },
  {
    "id": "ws2024-cybersecurity",
    "competition": "WorldSkills Lyon 2024",
    "title": "WS2024 Cybersecurity - Module 2",
    "subtitle": "Web Application Security Audit",
    "description": "Perform comprehensive security audit of web applications, identify vulnerabilities using OWASP Top 10, and implement security fixes and best practices.",
    "tags": [
      {
        "label": "security",
        "color": "red"
      },
      {
        "label": "OWASP",
        "color": "rose"
      },
      {
        "label": "penetration-testing",
        "color": "pink"
      },
      {
        "label": "vulnerability",
        "color": "orange"
      }
    ],
    "focusRingColor": "red"
  },
  {
    "id": "es2025-module-d",
    "competition": "EuroSkills 2025 Training HU",
    "title": "ES2025 TRAINING HU S17 - Module D",
    "subtitle": "Analytics Dashboard - Data Visualization",
    "description": "Design and implement an interactive analytics dashboard with real-time data visualization, custom charts, and filtering capabilities using modern data libraries.",
    "tags": [
      {
        "label": "data-viz",
        "color": "indigo"
      },
      {
        "label": "React",
        "color": "blue"
      },
      {
        "label": "D3.js",
        "color": "sky"
      },
      {
        "label": "real-time",
        "color": "cyan"
      }
    ],
    "focusRingColor": "indigo"
  }
]
```

#### 💡 Why Simple Color Names?

Notice we're storing just `"blue"`, `"green"`, etc., instead of full Tailwind classes like `"bg-blue-50 text-blue-700 border-blue-200"`.

**Benefits:**

- 📦 **Cleaner data** - Easier to read and maintain
- 🔄 **Flexibility** - Can change the color scheme without updating data
- 🎨 **Dynamic generation** - We'll build the classes programmatically

We'll learn how to generate the full Tailwind classes from these color names in the next task!

### Step 1.4: Verify the Files

Make sure you have:

- ✅ `src/types/project.ts` with the `Project` interface
- ✅ `src/data/projects.json` with all 6 projects
- ✅ Valid JSON syntax (use a JSON validator if needed)
- ✅ Each project has a unique `id`
- ✅ All tags have both `label` and `color` (not `colorClass`)
- ✅ `focusRingColor` is a simple color name (not `"blue-500"`, just `"blue"`)

---

## Task 2: Create the ProjectCard Component

Now let's extract the card logic into a reusable component.

### Step 2.1: Create Component File

Create `src/components/ProjectCard.tsx`:

### Step 2.2: Import Dependencies

Start by importing what the component needs:

```tsx
import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Project } from "../types/project";
```

### Step 2.3: Define Props Interface

Define what props the component accepts:

```tsx
interface ProjectCardProps extends Project {
  onClick?: () => void;
}
```

#### Why `extends Project`?

- The component accepts all `Project` fields as props
- Plus an optional `onClick` callback
- Avoids duplicating the interface

### Step 2.4: Create the Component

Add the component function:

```tsx
// Mapping object for focus ring colors
// This is necessary because Tailwind's JIT compiler needs to see complete class names
// Template literals like `focus:ring-${color}` won't work as Tailwind can't detect them at build time
const focusRingClasses: Record<string, string> = {
  blue: "focus:ring-blue-500",
  green: "focus:ring-green-500",
  purple: "focus:ring-purple-500",
  orange: "focus:ring-orange-500",
  indigo: "focus:ring-indigo-500",
  red: "focus:ring-red-500",
};

export function ProjectCard({
  competition,
  title,
  subtitle,
  description,
  tags,
  focusRingColor,
  onClick,
}: ProjectCardProps) {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onClick?.();
    }
  };

  // Get the complete focus ring class from the mapping, fallback to blue-500
  const focusRingClass =
    focusRingClasses[focusRingColor] || focusRingClasses["blue"];

  return (
    <Card
      className={`hover:shadow-2xl hover:scale-[1.02] transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 ${focusRingClass}`}
      tabIndex={0}
      onClick={onClick}
      onKeyDown={handleKeyDown}
    >
      <CardHeader>
        <Badge variant="secondary">{competition}</Badge>
        <CardTitle className="text-2xl font-bold leading-tight">
          {title}
        </CardTitle>
        <CardDescription className="text-base font-semibold">
          {subtitle}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-4">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge
              key={tag.label}
              variant="outline"
              className={`bg-${tag.color}-50 text-${tag.color}-700 border-${tag.color}-200`}
            >
              {tag.label}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
```

#### 💡 Important Note About Dynamic Classes

Notice we're using template literals to generate classes dynamically:

```tsx
className={`bg-${tag.color}-50 text-${tag.color}-700 border-${tag.color}-200`}
```

**Save the file and check your browser** - you'll notice the tag colors are MISSING! 🤔

**Why?** Tailwind's JIT (Just-In-Time) compiler can't detect dynamically generated classes. It scans your code for complete class names like `bg-blue-50` but can't recognize template literals that build classes at runtime.

**Don't worry!** We'll fix this in the next step by configuring Tailwind's **safelist**.

#### Component Breakdown

**Props Destructuring:**

```tsx
{
  competition, title, subtitle, description, tags, focusRingColor, onClick;
}
```

- Extract all needed values from props
- Clean, readable code

**Key Handler:**

```tsx
const handleKeyDown = (e: React.KeyboardEvent) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    onClick?.();
  }
};
```

- Handle Enter/Space keys for accessibility
- `onClick?.()` - optional chaining (only calls if onClick exists)

**Dynamic Focus Ring:**

We use a mapping object for focus ring colors. This is necessary because Tailwind's JIT compiler needs to see complete class names at build time - template literals like `focus:ring-${color}` don't work!

```tsx
const focusRingClasses: Record<string, string> = {
  blue: "focus:ring-blue-500",
  green: "focus:ring-green-500",
  // ...
};
const focusRingClass =
  focusRingClasses[focusRingColor] || focusRingClasses["blue"];
```

- Uses the `focusRingColor` prop to look up the complete class name
- Each card can have a different color
- Falls back to blue if the color isn't in the mapping

**Mapping Tags with Template Literals:**

```tsx
{
  tags.map((tag) => (
    <Badge
      key={tag.label}
      variant="outline"
      className={`bg-${tag.color}-50 text-${tag.color}-700 border-${tag.color}-200`}
    >
      {tag.label}
    </Badge>
  ));
}
```

- Iterate over tags array
- Each tag needs a unique `key` (using `label`)
- **Dynamically generate Tailwind classes** from color names
- **Problem**: These classes won't work yet! We need to configure Tailwind's safelist (next task)

---

## Task 3: Configure Tailwind Safelist for Dynamic Classes

### Understanding the Problem

When you checked your browser, you probably noticed the tags have NO COLORS. Why?

**Tailwind's JIT Compiler:**

- Scans your code at build time
- Looks for complete class names like `bg-blue-50`
- Cannot detect dynamically generated classes like `bg-${tag.color}-50`
- Only includes classes it can find in the bundle

**Example:**

```tsx
// ✅ This works - Tailwind sees "bg-blue-50"
<div className="bg-blue-50">

// ❌ This doesn't work - Tailwind can't detect it
<div className={`bg-${color}-50`}>
```

### The Solution: Safelist

Tailwind's `safelist` option tells the compiler: "Include these classes even if you can't find them in the code."

### Step 3.1: Update Tailwind Config

**Open** `tailwind.config.ts`:

Add the `safelist` option with pattern matching:

```typescript
import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    // Background colors for all Tailwind color scales
    {
      pattern:
        /bg-(blue|cyan|sky|purple|green|emerald|teal|lime|orange|amber|yellow|red|rose|pink|violet|fuchsia|indigo)-50/,
    },
    // Text colors for all color scales
    {
      pattern:
        /text-(blue|cyan|sky|purple|green|emerald|teal|lime|orange|amber|yellow|red|rose|pink|violet|fuchsia|indigo)-700/,
    },
    // Border colors for all color scales
    {
      pattern:
        /border-(blue|cyan|sky|purple|green|emerald|teal|lime|orange|amber|yellow|red|rose|pink|violet|fuchsia|indigo)-200/,
    },
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;
```

#### 🔍 How Safelist Patterns Work

**Pattern syntax:**

```typescript
{
  pattern: /bg-(blue|cyan|sky)-50/,
}
```

- `/` - Regular expression delimiters
- `bg-` - Fixed prefix
- `(blue|cyan|sky)` - Match any of these color names (using `|` for "or")
- `-50` - Fixed shade
- This generates: `bg-blue-50`, `bg-cyan-50`, `bg-sky-50`

**Why patterns instead of listing every class?**

- 📦 Cleaner code - one pattern generates many classes
- 🔧 Maintainable - add a new color by updating the pattern
- 🎯 Precise - only includes the exact shades you need (50, 200, 700)

### Step 3.2: Restart Dev Server

**Important:** Tailwind config changes require a restart!

```bash
# Stop the dev server (Ctrl+C)
# Then restart it
npm run dev
```

### Step 3.3: Check Your Browser

**Refresh the page** - your tags should now have beautiful colors! 🎨

**What happened:**

1. Tailwind read the safelist patterns
2. Generated all matching color classes
3. Included them in the CSS bundle
4. Your template literals now work!

### Step 3.4: Verify All Colors

Check that all 6 project cards have colorful tags:

- ✅ **Project 1**: Blue, cyan, sky, purple tags
- ✅ **Project 2**: Green, emerald, teal, lime tags
- ✅ **Project 3**: Orange, amber, yellow, red tags
- ✅ **Project 4**: Purple, violet, fuchsia, pink tags
- ✅ **Project 5**: Red, rose, pink, orange tags
- ✅ **Project 6**: Indigo, blue, sky, cyan tags

#### 💡 Key Takeaway

**When to use safelist:**

- ✅ Dynamic classes from data (like our tags)
- ✅ User-generated content with custom colors
- ✅ Theme systems with runtime color switching

**When NOT to use safelist:**

- ❌ Static classes you can write in your code
- ❌ All possible Tailwind classes (huge bundle size!)
- ❌ Classes you're not actually using

**Best practice:** Only safelist the specific patterns you need!

### Step 2.5: Complete Component File

Your complete `src/components/ProjectCard.tsx` should look like this:

```tsx
import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Project } from "../types/project";

interface ProjectCardProps extends Project {
  onClick?: () => void;
}

// Mapping object for focus ring colors
// This is necessary because Tailwind's JIT compiler needs to see complete class names
// Template literals like `focus:ring-${color}` won't work as Tailwind can't detect them at build time
const focusRingClasses: Record<string, string> = {
  blue: "focus:ring-blue-500",
  green: "focus:ring-green-500",
  purple: "focus:ring-purple-500",
  orange: "focus:ring-orange-500",
  indigo: "focus:ring-indigo-500",
  red: "focus:ring-red-500",
  cyan: "focus:ring-cyan-500",
  pink: "focus:ring-pink-500",
  yellow: "focus:ring-yellow-500",
  teal: "focus:ring-teal-500",
};

export function ProjectCard({
  competition,
  title,
  subtitle,
  description,
  tags,
  focusRingColor,
  onClick,
}: ProjectCardProps) {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onClick?.();
    }
  };

  // Get the complete focus ring class from the mapping, fallback to blue
  const focusRingClass =
    focusRingClasses[focusRingColor] || focusRingClasses["blue"];

  return (
    <Card
      className={`hover:shadow-2xl hover:scale-[1.02] transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 ${focusRingClass}`}
      tabIndex={0}
      onClick={onClick}
      onKeyDown={handleKeyDown}
    >
      <CardHeader>
        <Badge variant="secondary">{competition}</Badge>
        <CardTitle className="text-2xl font-bold leading-tight">
          {title}
        </CardTitle>
        <CardDescription className="text-base font-semibold">
          {subtitle}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-4">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag.label} variant="outline" className={tag.colorClass}>
              {tag.label}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
```

---

## Task 4: Use the Component in App.tsx

Now let's replace all the hard-coded cards with our new component!

### Step 3.1: Update Imports in App.tsx

Replace the imports at the top of `src/App.tsx`:

**Before:**

```tsx
import { Badge } from "./components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./components/ui/card";
```

**After:**

```tsx
import { ProjectCard } from "./components/ProjectCard";
import projectsData from "./data/projects.json";
```

#### What Changed?

- ❌ Removed individual ShadCN imports (ProjectCard handles those)
- ✅ Added `ProjectCard` component import
- ✅ Added `projectsData` JSON import

**Note**: Vite supports importing JSON files directly! The data will be typed as `any[]` by default.

### Step 3.2: Replace Hard-Coded Cards with Mapped Components

Replace the entire grid content in your `App.tsx`.

**Before** (~400 lines of hard-coded cards):

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
  {/* Card 1: Backend/Server-Side */}
  <Card className="...">{/* ~70 lines */}</Card>

  {/* Card 2: Frontend/Mobile */}
  <Card className="...">{/* ~70 lines */}</Card>

  {/* ... 4 more cards */}
</div>
```

**After** (~10 lines with mapping):

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
  {projectsData.map((project) => (
    <ProjectCard
      key={project.id}
      {...project}
      onClick={() => console.log(`${project.title} clicked!`)}
    />
  ))}
</div>
```

#### Mapping Breakdown

**`projectsData.map((project) => (...))`**

- Iterate over the `projectsData` array (imported from JSON)
- For each `project`, render a `ProjectCard`

**`key={project.id}`**

- React requires unique `key` for list items
- Helps React efficiently update the DOM
- Use the `id` field from our data

**`{...project}`**

- Spread operator
- Passes all project properties as props
- Equivalent to: `competition={project.competition} title={project.title}...`

**`onClick={() => console.log(...)}`**

- Pass custom onClick handler
- Logs which card was clicked

### Step 3.3: Complete App.tsx

Your complete `src/App.tsx` should now look like this:

```tsx
import { ProjectCard } from "./components/ProjectCard";
import projectsData from "./data/projects.json";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              {...project}
              onClick={() => console.log(`${project.title} clicked!`)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
```

**That's it!** From ~420 lines to ~20 lines! 🎉

### Step 3.4: Test the Refactored App

Save all files and check your browser:

- ✅ All 6 cards should render
- ✅ Cards should look identical to Module 7
- ✅ Hover effects should work
- ✅ Click handlers should log to console
- ✅ Keyboard navigation (Tab, Enter, Space) should work
- ✅ Responsive grid should still function

---

## Task 5: Understanding What We Built

Let's review the architecture and benefits of our refactoring.

### Step 4.1: File Structure

You now have a clean, organized structure:

```
src/
├── components/
│   ├── ui/
│   │   ├── card.tsx         # ShadCN Card
│   │   └── badge.tsx        # ShadCN Badge
│   └── ProjectCard.tsx      # Our reusable component ✨
├── data/
│   └── projects.json        # Project data (JSON) ✨
├── types/
│   └── project.ts           # TypeScript interface ✨
├── App.tsx                  # Clean, simple App
├── index.css
└── main.tsx
```

### Step 4.2: Separation of Concerns

**Presentation Layer** (`ProjectCard.tsx`):

- How cards look
- How they behave
- Styling and interactions

**Data Layer** (`projects.json`):

- What data we have
- Project content
- Easy to update
- Standard JSON format (can come from APIs)

**Type Layer** (`project.ts`):

- Contract between data and presentation
- Type safety
- Documentation

**Application Layer** (`App.tsx`):

- Connects data to presentation
- Layout logic
- Minimal code

### Step 4.3: Benefits Recap

✅ **Maintainability**

- Change card styling? Edit one component file
- Fix a bug? Fix it once, not 6 times

✅ **Scalability**

- Add 10 more projects? Just add data
- No code changes needed in components

✅ **Type Safety**

- TypeScript catches errors at compile time
- Autocomplete helps write code faster

✅ **Testability**

- Easy to test `ProjectCard` with different props
- Data can be mocked easily

✅ **Readability**

- `App.tsx` is now clean and understandable
- Clear separation of concerns

✅ **Reusability**

- `ProjectCard` can be used anywhere
- Easy to create variations

### Step 4.4: Adding New Projects

Want to add a new project? Just add data to the JSON file:

```json
// In src/data/projects.json
[
  // ... existing projects
  {
    "id": "new-project-2025",
    "competition": "EuroSkills 2025 Training HU",
    "title": "ES2025 NEW PROJECT",
    "subtitle": "AI & Machine Learning",
    "description": "Build an AI-powered recommendation system...",
    "tags": [
      {
        "label": "AI",
        "colorClass": "bg-purple-50 text-purple-700 border-purple-200"
      },
      {
        "label": "Python",
        "colorClass": "bg-blue-50 text-blue-700 border-blue-200"
      }
    ],
    "focusRingColor": "purple-500"
  }
]
```

**That's it!** The card will automatically render. No component changes needed.

---

## Task 6: Commit Your Work

Excellent work on this major refactoring! Let's save your progress.

### Step 5.1: Check Your Changes

```bash
git status
```

You should see:

- `modified: src/App.tsx`
- `new file: src/components/ProjectCard.tsx`
- `new file: src/types/project.ts`
- `new file: src/data/projects.json`

### Step 5.2: Review Your Changes

```bash
git diff src/App.tsx
```

Notice how much simpler `App.tsx` is now!

### Step 5.3: Stage All Changes

```bash
git add src/App.tsx src/components/ProjectCard.tsx src/types/project.ts src/data/projects.json
```

### Step 5.4: Commit Your Changes

```bash
git commit -m "feat(module-8): refactor to reusable component with props

- Extract ProjectCard component with TypeScript props
- Create Project interface for type safety
- Move card data to projects.json
- Use array mapping for dynamic rendering with JSON import
- Reduce code from ~420 lines to ~20 lines in App.tsx"
```

### Step 5.5: Merge to Main

```bash
git checkout main
git merge feat/module-8-component-props
```

### Step 5.6: Push to GitHub

```bash
git push
```

---

## 🎉 Congratulations!

You've successfully **refactored your application** using professional React patterns! You learned:

- ✅ **Component Props** - Pass data to components
- ✅ **TypeScript Interfaces** - Define data shapes
- ✅ **Array Mapping** - Render lists dynamically
- ✅ **Spread Operator** - Pass props efficiently
- ✅ **Separation of Concerns** - Organize code properly
- ✅ **DRY Principle** - Don't Repeat Yourself
- ✅ **File Organization** - Structure projects professionally

## Key Takeaways

### 1. Component Props Pattern

```tsx
// Define interface
interface CardProps {
  title: string;
  description: string;
}

// Component receives props
function Card({ title, description }: CardProps) {
  return (
    <div>
      {title}: {description}
    </div>
  );
}

// Parent passes props
<Card title="My Title" description="My Description" />;
```

### 2. Array Mapping for Lists

```tsx
// Data
const items = [
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
];

// Render
{
  items.map((item) => <Component key={item.id} {...item} />);
}
```

**Remember:**

- Always provide a unique `key` prop
- Keys help React optimize re-renders

### 3. TypeScript for Type Safety

```tsx
// Interface defines the contract
interface Project {
  title: string;
  tags: string[];
}

// Component enforces the contract
function ProjectCard({ title, tags }: Project) {
  // TypeScript ensures title is string, tags is array
  return <div>{title}</div>;
}
```

### 4. Spread Operator for Props

```tsx
const project = { title: "My Project", description: "Cool" };

// Instead of listing each prop:
<ProjectCard title={project.title} description={project.description} />

// Use spread:
<ProjectCard {...project} />
```

### 5. Separation of Concerns

- **Data** (`projects.ts`) - What to show
- **Types** (`project.ts`) - Shape of data
- **Components** (`ProjectCard.tsx`) - How to show
- **App** (`App.tsx`) - Where to show

---

## What's Next?

In **Module 9**, you'll learn:

- 📊 Loading real data from JSON files
- 🔄 React hooks (useState, useEffect)
- 🔍 Filtering and searching projects
- ⚡ Error handling and loading states

You'll replace the hard-coded data with actual project data from the PRD!

---

## Experiments (Optional)

Want to explore more? Try these:

### Experiment 1: Add a New Project

Add a 7th project to `projects.json`:

```json
{
  "id": "custom-project",
  "competition": "Your Competition",
  "title": "Your Project Title",
  "subtitle": "Your Subtitle",
  "description": "Your description here...",
  "tags": [
    {
      "label": "custom",
      "colorClass": "bg-pink-50 text-pink-700 border-pink-200"
    }
  ],
  "focusRingColor": "pink-500"
}
```

Watch it automatically appear in the grid!

### Experiment 2: Add Click Navigation

Modify `onClick` to navigate to a URL:

```tsx
onClick={() => window.open(`https://example.com/${project.id}`, "_blank")}
```

### Experiment 3: Add a Project Counter

Show how many projects are displayed:

```tsx
<div className="max-w-7xl mx-auto">
  <p className="mb-4 text-gray-600">Showing {projectsData.length} projects</p>
  <div className="grid ...">{/* cards */}</div>
</div>
```

### Experiment 4: Add Optional Fields

Modify the interface to include optional fields:

```typescript
export interface Project {
  // ... existing fields
  difficulty?: "Easy" | "Medium" | "Hard";
  estimatedTime?: string;
}
```

Update `ProjectCard` to display these if present:

```tsx
{
  difficulty && <Badge className="mt-2">{difficulty}</Badge>;
}
```

### Experiment 5: Create Different Card Variants

Create variations of ProjectCard:

```tsx
// In ProjectCard.tsx
interface ProjectCardProps extends Project {
  variant?: "default" | "compact" | "detailed";
}

// Use variant prop to change layout
const isCompact = variant === "compact";
```

---

## Troubleshooting

### TypeScript Errors About Missing Props?

- ✅ Check that your `Project` interface matches the data in `projects.json`
- ✅ Verify all required fields are present in each project object
- ✅ Make sure imports are correct
- ✅ Ensure JSON syntax is valid (no trailing commas, proper quotes)

### Cards Not Rendering?

- ✅ Check console for errors
- ✅ Verify `projectsData` is imported correctly from JSON
- ✅ Ensure `ProjectCard` is exported with `export function`
- ✅ Check that `key` prop is unique for each card
- ✅ Validate JSON syntax (use a JSON validator)

### Styling Looks Different?

- ✅ Verify all Tailwind classes are in `ProjectCard.tsx`
- ✅ Check that `colorClass` in data matches previous Module 7 classes
- ✅ Ensure ShadCN components are imported correctly

### Focus Ring Not Working?

**Important:** The focus ring uses a mapping object approach due to Tailwind's JIT compiler limitations.

**The Problem:**
Tailwind's JIT (Just-In-Time) compiler scans your source code for **complete class names** at build time. Template literals like this won't work:

```tsx
className={`focus:ring-${focusRingColor}`}  // ❌ Won't work!
```

Even though `focusRingColor` is "blue", Tailwind can't detect `focus:ring-blue-500` because it only sees the template literal pattern, not the interpolated result.

**The Solution:**
We use a mapping object with all complete class names:

```tsx
const focusRingClasses: Record<string, string> = {
  blue: "focus:ring-blue-500",
  green: "focus:ring-green-500",
  // ... etc
};

const focusRingClass =
  focusRingClasses[focusRingColor] || focusRingClasses["blue"];
```

This way, Tailwind sees all the complete class names and includes them in the build.

**Key Takeaway:** Never use string interpolation/concatenation with Tailwind classes! Always use complete class names that Tailwind can detect at build time.

### Console Logs Not Working?

- ✅ Verify `onClick` prop is passed to `ProjectCard`
- ✅ Check that `onClick` is used in the `Card` component
- ✅ Ensure browser console is open

---

Ready to load real data from JSON? Continue to **Module 9**!
