# Module 8 Solution: Component Props & Reusability

This is the complete solution for Module 8, demonstrating professional React component architecture with TypeScript props and data-driven rendering.

## What's Implemented

### 1. TypeScript Interface for Type Safety

Created `src/types/project.ts` with a `Project` interface:

```typescript
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
  focusRingColor: string;
}
```

**Benefits:**
- ✅ Type checking at compile time
- ✅ Autocomplete in editor
- ✅ Self-documenting code
- ✅ Prevents runtime errors

### 2. Centralized JSON Data File

Created `src/data/projects.json` containing all 6 projects:

```json
[
  {
    "id": "es2025-module-b",
    "competition": "EuroSkills 2025 Training HU",
    "title": "ES2025 TRAINING HU S17 - Module B",
    ...
  },
  ...
]
```

**Benefits:**
- ✅ Single source of truth
- ✅ Easy to add/edit projects
- ✅ Data separate from presentation
- ✅ Standard JSON format (matches API responses)
- ✅ Can be replaced with API fetch later
- ✅ Vite supports JSON imports out of the box

### 3. Reusable ProjectCard Component

Created `src/components/ProjectCard.tsx`:

```tsx
interface ProjectCardProps extends Project {
  onClick?: () => void;
}

export function ProjectCard({
  competition,
  title,
  subtitle,
  description,
  tags,
  focusRingColor,
  onClick,
}: ProjectCardProps) {
  // ... component logic
}
```

**Features:**
- ✅ Accepts all project data as props
- ✅ Optional `onClick` callback
- ✅ Keyboard navigation support
- ✅ Dynamic focus ring colors
- ✅ Maps tags array to Badge components
- ✅ All styling and interactivity from Module 7

### 4. Clean App.tsx with JSON Import & Array Mapping

Refactored `src/App.tsx` to import JSON and use array mapping:

```tsx
import projectsData from "./data/projects.json";

{projectsData.map((project) => (
  <ProjectCard
    key={project.id}
    {...project}
    onClick={() => console.log(`${project.title} clicked!`)}
  />
))}
```

**From ~420 lines to ~20 lines!**

**Note**: Vite automatically handles JSON imports and provides type safety through the TypeScript interface.

### 5. Organized File Structure

```
src/
├── components/
│   ├── ui/
│   │   ├── card.tsx
│   │   └── badge.tsx
│   └── ProjectCard.tsx      # ✨ New reusable component
├── data/
│   └── projects.json        # ✨ New JSON data file
├── types/
│   └── project.ts           # ✨ New TypeScript interface
├── App.tsx                  # Refactored to use JSON import & mapping
├── index.css
└── main.tsx
```

## Code Reduction

**Before (Module 7):**
- `App.tsx`: ~420 lines (6 hard-coded cards)
- Total: 1 file, ~420 lines

**After (Module 8):**
- `App.tsx`: ~20 lines (grid + mapping + JSON import)
- `ProjectCard.tsx`: ~40 lines (component)
- `project.ts`: ~10 lines (interface)
- `projects.json`: ~140 lines (data in JSON)
- Total: 4 files, ~210 lines

**Result:**
- 50% reduction in total code
- 95% reduction in `App.tsx` complexity
- Infinitely more maintainable! 🎉

## Running the Solution

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Start development server:**

   ```bash
   npm run dev
   ```

3. **Open in browser:**
   - Navigate to `http://localhost:5173`

4. **Test functionality:**
   - All 6 cards should render
   - Hover effects work
   - Click handlers log to console
   - Keyboard navigation (Tab, Enter, Space)
   - Focus rings appear with correct colors
   - Responsive grid layout

## Key Learning Points

### 1. Component Props

Props are how data flows from parent to child in React:

```tsx
// Parent passes data
<ProjectCard title="My Project" description="Cool project" />

// Child receives data
function ProjectCard({ title, description }: Props) {
  return <div>{title}: {description}</div>;
}
```

**Rules:**
- Props flow downward (parent → child)
- Props are read-only (immutable)
- Use TypeScript to define prop types

### 2. TypeScript Interfaces

Interfaces define the shape of data:

```typescript
interface Project {
  id: string;              // Required
  title: string;           // Required
  tags: string[];          // Required array
  difficulty?: string;     // Optional (?)
}
```

**Benefits:**
- Catches errors at compile time
- Provides autocomplete
- Documents expected data shape
- Makes refactoring safer

### 3. Array Mapping in JSX

Transform arrays into UI elements:

```tsx
const items = ["a", "b", "c"];

// Map to JSX
{items.map((item) => (
  <div key={item}>{item}</div>
))}
```

**Requirements:**
- Each element needs a unique `key` prop
- Key should be stable (not array index if order changes)
- Key helps React efficiently update DOM

### 4. Spread Operator for Props

Pass all object properties as props:

```tsx
const project = { title: "Project", description: "Cool" };

// Instead of:
<ProjectCard title={project.title} description={project.description} />

// Use spread:
<ProjectCard {...project} />
```

**Equivalent to:**
```tsx
<ProjectCard
  id={project.id}
  competition={project.competition}
  title={project.title}
  subtitle={project.subtitle}
  description={project.description}
  tags={project.tags}
  focusRingColor={project.focusRingColor}
/>
```

### 5. Component File Organization

**Best Practices:**

```
src/
├── components/          # React components
│   ├── ui/             # Reusable UI components (ShadCN)
│   └── ProjectCard.tsx # Feature-specific components
├── types/              # TypeScript interfaces
├── data/               # Static data, constants
├── hooks/              # Custom React hooks (future)
├── utils/              # Helper functions (future)
└── App.tsx             # Main app component
```

### 6. Separation of Concerns

Each file has a single responsibility:

| File | Responsibility | Changes When... |
|------|---------------|-----------------|
| `project.ts` | Define data shape | Data structure changes |
| `projects.ts` | Store project data | Content changes |
| `ProjectCard.tsx` | Render card UI | Styling/layout changes |
| `App.tsx` | Compose app | App structure changes |

## Benefits of This Architecture

### ✅ Maintainability

**Change card styling:**
- Edit 1 file: `ProjectCard.tsx`
- All 6 cards update automatically

**Before:**
- Edit 6 places in `App.tsx`
- Easy to miss one or create inconsistencies

### ✅ Scalability

**Add 10 more projects:**
- Add 10 objects to `projects.ts`
- No code changes needed

**Before:**
- Copy/paste ~70 lines × 10 times
- 700 more lines in `App.tsx`

### ✅ Testability

**Test ProjectCard:**
```tsx
import { render } from "@testing-library/react";
import { ProjectCard } from "./ProjectCard";

test("renders project title", () => {
  const project = { title: "Test Project", /* ... */ };
  const { getByText } = render(<ProjectCard {...project} />);
  expect(getByText("Test Project")).toBeInTheDocument();
});
```

**Easy to test with different props!**

### ✅ Type Safety

**TypeScript catches errors:**
```tsx
// ❌ Error: Property 'title' is missing
<ProjectCard competition="Test" />

// ❌ Error: Type 'number' is not assignable to type 'string'
<ProjectCard title={123} />

// ✅ Correct: All required props with correct types
<ProjectCard title="Test" subtitle="Sub" /* ... */ />
```

### ✅ Reusability

**Use ProjectCard anywhere:**
```tsx
// In different pages
<ProjectCard {...featuredProject} />

// In search results
{searchResults.map((project) => (
  <ProjectCard key={project.id} {...project} />
))}

// With different variants
<ProjectCard {...project} variant="compact" />
```

## Adding New Projects

Want to add a new project? Just add data to the JSON file:

```json
// In src/data/projects.json
[
  ...existing projects,
  {
    "id": "new-project-2025",
    "competition": "EuroSkills 2025 Training HU",
    "title": "ES2025 NEW PROJECT",
    "subtitle": "AI & Machine Learning",
    "description": "Build an AI-powered recommendation system with machine learning...",
    "tags": [
      {
        "label": "AI",
        "colorClass": "bg-purple-50 text-purple-700 border-purple-200"
      },
      {
        "label": "Python",
        "colorClass": "bg-blue-50 text-blue-700 border-blue-200"
      },
      {
        "label": "TensorFlow",
        "colorClass": "bg-orange-50 text-orange-700 border-orange-200"
      }
    ],
    "focusRingColor": "purple-500"
  }
]
```

**That's it!** The card will automatically render. No component changes needed.

**Note**: Make sure JSON syntax is valid (proper quotes, no trailing commas).

## React Patterns Demonstrated

### 1. Component Composition

Break UI into reusable pieces:

```
App
└── Grid Container
    └── ProjectCard (×6)
        ├── Card
        │   ├── CardHeader
        │   │   ├── Badge (competition)
        │   │   ├── CardTitle
        │   │   └── CardDescription
        │   └── CardContent
        │       ├── Description text
        │       └── Tags container
        │           └── Badge (×4)
```

### 2. Props Down, Events Up

**Data flows down:**
```tsx
<ProjectCard title="My Project" />  // Props down
```

**Events flow up:**
```tsx
<ProjectCard onClick={handleClick} />  // Callback up
```

### 3. Single Source of Truth

**Data:**
- One place: `projects.ts`
- Multiple places: ❌

**Component:**
- One place: `ProjectCard.tsx`
- Multiple copies: ❌

### 4. DRY Principle

**Don't Repeat Yourself:**
- Write component once
- Use multiple times
- Change once, update everywhere

## What's Next?

In **Module 9**, we'll:
- 📊 Load data from JSON files (simulating API)
- 🔄 Use React `useState` and `useEffect` hooks
- ⚡ Add loading states
- ❌ Add error handling
- 🔍 Implement search/filter functionality

## Common Patterns to Remember

### Pattern 1: Define Interface → Create JSON → Build Component → Map

```typescript
// 1. Define interface
interface Item { id: string; name: string; }

// 2. Create JSON data
// items.json: [{ "id": "1", "name": "Item 1" }]

// 3. Import JSON
import itemsData from "./items.json";

// 4. Build component
function ItemCard({ id, name }: Item) {
  return <div>{name}</div>;
}

// 5. Map in parent
{itemsData.map((item) => <ItemCard key={item.id} {...item} />)}
```

### Pattern 2: Optional Props with Default Values

```tsx
interface Props {
  title: string;
  variant?: "default" | "compact";
}

function Component({ title, variant = "default" }: Props) {
  // variant defaults to "default" if not provided
}
```

### Pattern 3: Callback Props

```tsx
interface Props {
  onClick?: () => void;
  onDelete?: (id: string) => void;
}

function Component({ onClick, onDelete }: Props) {
  return (
    <div onClick={onClick}>
      <button onClick={() => onDelete?.("123")}>Delete</button>
    </div>
  );
}
```

### Pattern 4: Children Props

```tsx
interface Props {
  children: React.ReactNode;
}

function Container({ children }: Props) {
  return <div className="container">{children}</div>;
}

// Usage
<Container>
  <h1>Title</h1>
  <p>Content</p>
</Container>
```

## Browser Compatibility

Works in all modern browsers:
- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers

## Accessibility

Maintained from previous modules:
- ✅ Keyboard navigation (Tab, Enter, Space)
- ✅ Focus indicators (custom colored rings)
- ✅ Semantic HTML
- ✅ WCAG 2.1 Level AA compliant

---

**Congratulations!** You've learned professional React component patterns with TypeScript. Your code is now maintainable, scalable, and type-safe! 🎉
