# MITS Dashboard Tutorial - Module Plan (UI-First Approach)

## Overview

This document outlines the module-by-module breakdown for building the MITS Project Dashboard. The course follows a **UI-first approach**: students see immediate visual results and experiment with Tailwind CSS and colors before diving into complex data structures and TypeScript.

**Course Structure**: 11 modules total (10 core + 1 optional)

**Key Milestone**: **Module 4** introduces ShadCN UI after students have learned Tailwind fundamentals. This is the pivotal moment where students understand component libraries by comparing what they built manually (Modules 1-3) with ShadCN's abstractions.

## Teaching Philosophy

**UI-First, Visual-First**: Students start with a simple, centered card and play with colors, spacing, and typography. This builds confidence and understanding of Tailwind CSS before introducing React complexity, data loading, and TypeScript types.

**Learn the Foundation, Then the Tools**: By building cards manually with Tailwind first (Modules 1-3), students deeply understand what component libraries like ShadCN are doing. When ShadCN is introduced in Module 4, it's not "magic" - it's a welcomed abstraction that students can customize and extend.

---

## Module Breakdown

### Module 1: Project Setup & Your First Card

**Goal**: Set up the project and display a simple, centered card with title and description.

**What Students Will Learn**:

- Setting up a Vite + React + TypeScript project
- Installing and configuring Tailwind CSS
- Understanding Tailwind utility classes
- Flexbox centering techniques
- Basic card structure (padding, borders, shadows)

**Implementation Tasks**:

- Initialize Vite project: `npm create vite@latest`
- Install Tailwind CSS and configure `tailwind.config.js`
- Remove default Vite styling
- Create a simple card component with:
  - Hard-coded title: "ES2025 TRAINING HU S17 - Module B"
  - Hard-coded description: "Create a server-side rendered administrative interface for SkillShare Academy platform management with role-based access control..."
- Center the card on screen using flexbox
- Style the card with Tailwind classes:
  - Background, padding, rounded corners
  - Border and shadow
  - Max-width constraint

**Example Code**:

```jsx
function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md p-6 bg-white rounded-lg border border-gray-200 shadow-lg">
        <h2 className="text-xl font-bold text-gray-900">
          ES2025 TRAINING HU S17 - Module B
        </h2>
        <p className="mt-3 text-sm text-gray-600">
          Create a server-side rendered administrative interface for SkillShare
          Academy platform management with role-based access control...
        </p>
      </div>
    </div>
  );
}
```

**PRD Reference**: Core Features → Project Cards → Visual Components (Title, Description)

**Expected Output**: A single, beautiful card centered on the screen with clean typography.

---

### Module 2: Playing with Colors - Light & Dark Cards

**Goal**: Explore Tailwind's color palette by creating light and dark card variations.

**What Students Will Learn**:

- Tailwind CSS color system (gray, slate, blue scales)
- Color naming conventions (50, 100, 200...900, 950)
- Text contrast and readability
- Creating multiple color themes for the same component
- Background, text, and border color relationships

**Implementation Tasks**:

- Display 3 cards horizontally (or vertically on mobile):
  1. **Light Card** - white background, dark text
  2. **Dark Card** - dark background, light text
  3. **Blue/Colored Card** - blue/slate background
- Experiment with different combinations:
  - Light: `bg-white`, `text-gray-900`, `border-gray-200`
  - Dark: `bg-slate-900`, `text-white`, `border-slate-700`
  - Colored: `bg-blue-50`, `text-blue-900`, `border-blue-200`
- Let students modify colors in real-time
- Add a color reference section showing available scales

**Example Layout**:

```jsx
<div className="min-h-screen flex items-center justify-center gap-6 p-8 bg-gray-100">
  {/* Light Card */}
  <div className="w-80 p-6 bg-white rounded-lg border border-gray-200 shadow-lg">
    {/* Content */}
  </div>

  {/* Dark Card */}
  <div className="w-80 p-6 bg-slate-900 rounded-lg border border-slate-700 shadow-xl">
    {/* Content with light text */}
  </div>

  {/* Colored Card */}
  <div className="w-80 p-6 bg-blue-50 rounded-lg border border-blue-200 shadow-lg">
    {/* Content */}
  </div>
</div>
```

**Workshop Activity**:

- Students experiment with different color combinations
- Try slate-_, gray-_, blue-_, indigo-_ color scales
- Document their favorite 3 color combinations

**PRD Reference**: Theme System → Color Palette (Light Theme / Dark Theme)

**Expected Output**: 3 card variations showing different color schemes, with students understanding Tailwind's color system.

---

### Module 3: Typography & Text Styling

**Goal**: Refine typography, text sizing, and spacing for better readability.

**What Students Will Learn**:

- Tailwind typography utilities (font sizes, weights, line heights)
- Text truncation and overflow handling
- Spacing utilities (margin, padding, gap)
- Text color opacity

**Implementation Tasks**:

- Enhance the card with better typography:
  - Title: larger font, bolder weight
  - Subtitle: add a subtitle between title and description
  - Description: smaller text, reduced opacity
- Add text truncation (line clamp)
- Experiment with spacing (mt-_, mb-_, space-y-\*)
- Try different font weights (font-normal, font-semibold, font-bold)

**Example Enhancement**:

```jsx
<div className="w-96 p-6 bg-white rounded-lg border shadow-lg">
  <h1 className="text-2xl font-bold text-gray-900">
    ES2025 TRAINING HU S17 - Module B
  </h1>
  <h2 className="mt-2 text-lg text-gray-600">
    SkillShare Academy - Dynamic Website
  </h2>
  <p className="mt-4 text-sm text-gray-600 line-clamp-3">
    Create a server-side rendered administrative interface...
  </p>
</div>
```

**PRD Reference**: Core Features → Project Cards → Visual Components (Typography specifications)

**Expected Output**: Card with refined typography hierarchy and better readability.

---

### Module 4: Introducing ShadCN UI & Card Component

**Goal**: Install ShadCN UI and replace the hand-built card with ShadCN's Card component.

**What Students Will Learn**:

- What is a component library and why use one
- Installing and configuring ShadCN UI
- Understanding ShadCN's Card component structure
- Comparing hand-built vs library components
- Component composition patterns

**Implementation Tasks**:

- Install ShadCN UI: `npx shadcn@latest init`
- Configure `components.json` (select preferences)
- Install the Card component: `npx shadcn@latest add card`
- Understand the generated files in `/components/ui/`
- Replace the hand-built card with ShadCN Card:
  ```tsx
  <Card>
    <CardHeader>
      <CardTitle>ES2025 TRAINING HU S17 - Module B</CardTitle>
      <CardDescription>SkillShare Academy - Dynamic Website</CardDescription>
    </CardHeader>
    <CardContent>
      <p className="text-sm text-muted-foreground">
        Create a server-side rendered administrative interface...
      </p>
    </CardContent>
  </Card>
  ```
- Compare the code: hand-built vs ShadCN
- Understand how ShadCN uses Tailwind under the hood

**Key Learning Points**:

- ShadCN components are just Tailwind + React (not a black box!)
- You can customize ShadCN components because you own the code
- Component libraries save time and ensure consistency
- Understanding Tailwind first helps you customize component libraries

**Workshop Activity**:

- Show the old hand-built card code
- Show the new ShadCN Card code
- Discuss: What's simpler? What's the trade-off?
- Customize the ShadCN Card by modifying its styles

**Expected Output**: Card rebuilt using ShadCN Card component, students understand component libraries.

---

### Module 5: Adding Badges & Tags with ShadCN

**Goal**: Add colored badges for competition and tags using ShadCN Badge component.

**What Students Will Learn**:

- Installing and using ShadCN Badge component
- Badge variants (default, secondary, destructive, outline)
- Creating custom badge color variants
- Layout with flex-wrap for multiple badges

**Implementation Tasks**:

- Install ShadCN Badge: `npx shadcn@latest add badge`
- Add a competition badge in the CardHeader
- Add 3-4 technology tags in the CardContent or CardFooter
- Use Badge variants:
  - Competition: `<Badge variant="secondary">`
  - Tags: `<Badge variant="outline">` with custom colors
- Create a row of badges that wraps (flex-wrap)
- Customize Badge colors by extending variants or using className

**Example with ShadCN**:

```tsx
<Card>
  <CardHeader>
    <div className="flex items-center gap-2 mb-2">
      <Badge variant="secondary">EuroSkills 2025 Training - Hungary</Badge>
    </div>
    <CardTitle>ES2025 TRAINING HU S17 - Module B</CardTitle>
    <CardDescription>SkillShare Academy - Dynamic Website</CardDescription>
  </CardHeader>
  <CardContent>
    <p className="text-sm text-muted-foreground mb-4">
      Create a server-side rendered administrative interface...
    </p>
    <div className="flex flex-wrap gap-2">
      <Badge
        variant="outline"
        className="bg-blue-50 text-blue-700 border-blue-200"
      >
        backend
      </Badge>
      <Badge
        variant="outline"
        className="bg-cyan-50 text-cyan-700 border-cyan-200"
      >
        server-side
      </Badge>
      <Badge
        variant="outline"
        className="bg-sky-50 text-sky-700 border-sky-200"
      >
        MySQL
      </Badge>
    </div>
  </CardContent>
</Card>
```

**Workshop Activity**:

- Compare hand-built badges vs ShadCN Badge
- Experiment with different Badge variants
- Create custom color combinations using className

**PRD Reference**: Core Features → Project Cards → Visual Components (Competition Badge, Tag Collection)

**Expected Output**: Card with ShadCN Badges showing competition and technology tags with various colors.

---

### Module 6: Card Interactions & Hover Effects

**Goal**: Make the ShadCN Card interactive with hover effects and smooth transitions.

**What Students Will Learn**:

- Hover states with Tailwind (`hover:`)
- CSS transitions (`transition`, `duration`)
- Transform utilities (scale, translate)
- Cursor pointer
- Adding clickability

**Implementation Tasks**:

- Add hover state to the card:
  - Increase shadow on hover
  - Slight scale up (1.02)
  - Smooth transition
- Add cursor pointer
- Make entire card clickable (wrap in `<a>` tag or add onClick)
- Add focus state for accessibility

**Example Hover**:

```jsx
<div
  className="w-96 p-6 bg-white rounded-lg border shadow-lg 
                hover:shadow-xl hover:scale-[1.02] 
                transition-all duration-200 cursor-pointer"
>
  {/* Card content */}
</div>
```

**PRD Reference**: Core Features → Card Interactions

**Expected Output**: Interactive card with smooth hover animations.

---

### Module 6: Responsive Grid Layout

**Goal**: Display multiple cards in a responsive grid.

**What Students Will Learn**:

- CSS Grid with Tailwind
- Responsive breakpoints (sm:, md:, lg:)
- Grid columns (grid-cols-1, md:grid-cols-2, lg:grid-cols-3)
- Gap utilities
- Container and max-width

**Implementation Tasks**:

- Create 6-9 cards with different content (still hard-coded)
- Arrange in a responsive grid:
  - Mobile: 1 column
  - Tablet: 2 columns
  - Desktop: 3 columns
- Add proper spacing (gap-6)
- Center the grid with a container

**Example Grid**:

```jsx
<div className="min-h-screen bg-gray-50 p-8">
  <div className="max-w-7xl mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Multiple cards */}
      <Card />
      <Card />
      <Card />
    </div>
  </div>
</div>
```

**PRD Reference**: Core Features → Dashboard Layout, Technical Specifications → Responsive Breakpoints

**Expected Output**: Multiple cards in a beautiful responsive grid layout.

---

### Module 7: Component Extraction & Reusability

**Goal**: Refactor hard-coded cards into a reusable Card component.

**What Students Will Learn**:

- React component props
- Component composition
- TypeScript prop types (basic interface)
- Mapping arrays to components

**Implementation Tasks**:

- Create a `ProjectCard` component
- Define props interface (title, description, competition, tags)
- Create an array of project objects
- Map array to Card components
- Extract Card to separate file

**Example Component**:

```tsx
interface CardProps {
  title: string;
  description: string;
  competition: string;
  tags: string[];
}

function ProjectCard({ title, description, competition, tags }: CardProps) {
  return (
    <div className="p-6 bg-white rounded-lg border shadow-lg ...">
      {/* Card content using props */}
    </div>
  );
}
```

**PRD Reference**: Core Features → Project Cards

**Expected Output**: Clean, reusable Card component rendered from an array.

---

### Module 8: Loading Real Data from JSON

**Goal**: Load actual project data from collection.json instead of hard-coded data.

**What Students Will Learn**:

- Importing JSON in Vite/React
- useState and useEffect hooks
- TypeScript interfaces for data
- Mapping real data to components

**Implementation Tasks**:

- Copy `collection.json` to `/src/data/` folder
- Create TypeScript interface matching JSON structure
- Load data with import or fetch
- Map data to Card components
- Handle missing fields (optional chaining)

**PRD Reference**: Technical Specifications → Data Handling

**Expected Output**: All project cards displaying real data from collection.json.

---

### Module 9: Theme Toggle - Light & Dark Mode

**Goal**: Implement theme switching between light and dark modes.

**What Students Will Learn**:

- CSS variables for theming
- React state for theme
- localStorage for persistence
- Conditional classes based on state
- The `dark:` modifier in Tailwind

**Implementation Tasks**:

- Configure Tailwind for dark mode
- Create theme toggle button
- Implement theme state with useState
- Apply dark mode classes (`dark:bg-slate-900`, etc.)
- Persist theme to localStorage
- Test both themes

**PRD Reference**: Theme System → Theme Toggle, Color Palette

**Expected Output**: Fully functional theme toggle with smooth transitions between light and dark modes.

---

### Module 11: Final Polish & Advanced ShadCN Components (Optional)

**Goal**: Add advanced ShadCN components and final polish to the dashboard.

**What Students Will Learn**:

- Using advanced ShadCN components (Skeleton, Separator)
- Creating loading states with Skeleton
- Adding visual separators and dividers
- Performance optimization
- Final refinements

**Implementation Tasks**:

- Install ShadCN Skeleton: `npx shadcn@latest add skeleton`
- Create skeleton cards for loading state
- Add Separator component between sections (if applicable)
- Optimize component re-renders (React.memo)
- Add smooth page transitions
- Final visual polish and refinements

**PRD Reference**: Technical Specifications → Performance Requirements

**Expected Output**: Professional-grade dashboard with loading states and polished UX.

---

## Module Dependencies

```
Module 1 (Setup + First Card) ← START HERE
    ↓
Module 2 (Color Exploration) ← LEARN COLORS
    ↓
Module 3 (Typography) ← REFINE TEXT
    ↓
Module 4 (Introduce ShadCN) ← COMPONENT LIBRARY! 🎨
    ↓
Module 5 (Badges with ShadCN) ← ADD VISUAL ELEMENTS
    ↓
Module 6 (Hover & Interactions) ← MAKE IT INTERACTIVE
    ↓
Module 7 (Grid Layout) ← MULTIPLE CARDS
    ↓
Module 8 (Component Props) ← REACT PATTERNS
    ↓
Module 9 (Real Data) ← LOAD JSON
    ↓
Module 10 (Theme Toggle) ← DARK MODE
    ↓
Module 11 (Advanced Polish) ← FINAL TOUCHES (Optional)
```

## Recommended Paths

### Quick Start (6 modules for workshops):

1. **Module 1**: Setup + First Card (hand-built)
2. **Module 2**: Color Exploration
3. **Module 3**: Typography
4. **Module 4**: Introduce ShadCN (key turning point!)
5. **Module 5**: Badges + **Module 7**: Grid (combined)
6. **Module 10**: Theme Toggle

### Full Course (11 modules):

All modules 1-11 in sequence for comprehensive learning

### Minimum Viable (5 modules):

1. **Module 1**: Setup + First Card
2. **Module 2-3**: Colors + Typography (combined)
3. **Module 4**: Introduce ShadCN
4. **Module 5 + 7**: Badges + Grid (combined)
5. **Module 9**: Real Data

### Extended Course without Optional (10 modules):

Modules 1-10 (skip Module 11 - Advanced Polish)

## Success Criteria

By the end of the course, students should:

- ✅ Understand Tailwind CSS utility classes deeply
- ✅ Be comfortable with color systems and theming
- ✅ Know how to create responsive layouts
- ✅ Understand React component patterns and props
- ✅ Know what ShadCN UI is and how to use it
- ✅ Understand that component libraries are abstractions over basic patterns
- ✅ Be able to customize ShadCN components confidently
- ✅ Have built a professional-looking dashboard
- ✅ Feel confident building AND using component libraries

## Why This Approach Works

1. **Immediate Visual Feedback**: Students see results instantly
2. **Low Cognitive Load**: Start simple, add complexity gradually
3. **Experimentation**: Color exploration encourages play and discovery
4. **Confidence Building**: Early wins motivate continued learning
5. **Understanding Before Abstraction**: Students build with Tailwind first, THEN see how ShadCN abstracts it
6. **"Aha!" Moment with ShadCN**: By Module 4, students appreciate component libraries because they've done it manually
7. **Practical Skills**: Learn by building something real and useful

### Why Introduce ShadCN After Module 3?

**Perfect Timing**:

- Students have learned Tailwind basics (Modules 1-3)
- They understand card structure, colors, and typography
- They can appreciate what ShadCN abstracts away
- They're not overwhelmed by too many concepts at once
- They can compare hand-built vs library components meaningfully

**Educational Value**:

- Demystifies component libraries ("it's just Tailwind + React!")
- Shows the value of reusable components
- Students can customize ShadCN because they understand the underlying Tailwind
- Builds confidence: "I could build this myself, but ShadCN saves time"

## Next Steps

1. ✅ Review and approve this UI-first module plan (with ShadCN at Module 4)
2. Create detailed `overview.md` for Module 1
3. Create `workshop.md` with step-by-step instructions for Module 1
4. Build solution code for Module 1
5. After Module 3 is validated, prepare Module 4 (ShadCN introduction) carefully
6. Test with students and iterate

## Key Milestone: Module 4

**Module 4 is the pivotal module** where students transition from hand-coding everything to using a component library. This needs to be:

- Clear about WHY we're introducing ShadCN
- Show the comparison (before/after)
- Emphasize that ShadCN is not magic, just organized Tailwind + React
- Give students confidence that they understand what's happening "under the hood"
