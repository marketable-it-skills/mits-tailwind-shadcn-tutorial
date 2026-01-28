# Module 8: Component Props & Reusability

## Overview

In this module, you'll transform your repetitive card code into a **clean, reusable component** using TypeScript props and data-driven rendering. You'll learn how professional React applications are structured to be maintainable and scalable.

## Learning Objectives

By the end of this module, you will be able to:

1. **Extract reusable React components** from repetitive code
2. **Define TypeScript interfaces** for component props
3. **Use props** to make components flexible and reusable
4. **Create data arrays** to represent application state
5. **Map arrays to JSX** using `.map()` for dynamic rendering
6. **Organize components** in separate files with proper imports
7. **Apply DRY principles** (Don't Repeat Yourself) in React

## What You'll Build

Starting from your 6 hard-coded cards, you'll:

- Create a **`ProjectCard` component** that accepts props
- Define a **TypeScript interface** for card data
- Create a **projects.json file** with all card information
- **Map the array** to render cards dynamically
- **Organize code** into separate component files
- Reduce **~400 lines** of repetitive code to **~50 lines** + a JSON data file

## The Problem

Your current `App.tsx` has **massive code duplication**:

```tsx
// Card 1 - ~70 lines
<Card className="...">
  <CardHeader>
    <Badge>EuroSkills 2025 Training HU</Badge>
    <CardTitle>ES2025 TRAINING HU S17 - Module B</CardTitle>
    // ...
  </CardHeader>
  <CardContent>
    // ...
  </CardContent>
</Card>

// Card 2 - ~70 lines (almost identical structure)
<Card className="...">
  <CardHeader>
    <Badge>EuroSkills 2025 Training HU</Badge>
    <CardTitle>ES2025 TRAINING HU S17 - Module A</CardTitle>
    // ...
  </CardHeader>
  <CardContent>
    // ...
  </CardContent>
</Card>

// ... 4 more times (Cards 3-6)
```

**Problems:**

- **~400 lines** of repetitive code
- **Hard to maintain** - changing styling requires editing 6 places
- **Error-prone** - easy to create inconsistencies
- **Not scalable** - adding 10 more cards means 700 more lines
- **Mixes concerns** - data and presentation are tangled

## The Solution

**Create a reusable component with props:**

```tsx
// Component (once)
function ProjectCard({ title, description, competition, tags }: ProjectCardProps) {
  return (
    <Card className="...">
      <CardHeader>
        <Badge>{competition}</Badge>
        <CardTitle>{title}</CardTitle>
        // ...
      </CardHeader>
    </Card>
  );
}

// Data (separate JSON file)
// projects.json
[
  { "id": "es2025-module-b", "title": "ES2025 Module B", "description": "...", ... },
  { "id": "es2025-module-a", "title": "ES2025 Module A", "description": "...", ... }
]

// Usage (App.tsx)
import projectsData from "./data/projects.json";

<div className="grid ...">
  {projectsData.map((project) => (
    <ProjectCard key={project.id} {...project} />
  ))}
</div>
```

**Benefits:**

- **~50 lines** instead of 400
- **Single source of truth** - change component once, affects all cards
- **Consistent** - impossible to have different card structures
- **Scalable** - adding cards means adding data, not code
- **Separation of concerns** - data separate from presentation
- **Type-safe** - TypeScript ensures data matches component expectations

## Connection to PRD

This module continues implementing the **Project Cards** feature from the PRD, focusing on the **Data Handling** specification:

> **Data Structure**: Array of project objects
>
> **Data Mapping**: Validate required fields before rendering
>
> **Component Composition**: Build complex UIs from smaller, reusable components

## Key Concepts

### 1. React Props

Props (properties) are how you pass data to React components:

```tsx
// Define what props the component accepts
interface ProjectCardProps {
  title: string;
  description: string;
}

// Component receives props
function ProjectCard({ title, description }: ProjectCardProps) {
  return (
    <div>
      {title}: {description}
    </div>
  );
}

// Parent passes data via props
<ProjectCard title="My Project" description="A cool project" />;
```

### 2. TypeScript Interfaces

Interfaces define the shape of data:

```tsx
interface ProjectCardProps {
  title: string; // Required string
  description: string; // Required string
  tags: string[]; // Required array of strings
  competition?: string; // Optional string
}
```

**Benefits:**

- Autocomplete in your editor
- Type checking prevents errors
- Self-documenting code

### 3. Array Mapping

Transform arrays into JSX using `.map()`:

```tsx
const numbers = [1, 2, 3];

// Map to JSX
const items = numbers.map((num) => <div key={num}>{num}</div>);

// Render: <div>1</div> <div>2</div> <div>3</div>
```

**Requirements:**

- Each element needs a unique `key` prop
- Key helps React efficiently update the UI

### 4. Spread Operator

Pass all object properties as props:

```tsx
const project = { title: "My Project", description: "Cool" };

// Instead of:
<ProjectCard title={project.title} description={project.description} />

// Use spread:
<ProjectCard {...project} />
```

### 5. Component File Organization

```
src/
├── components/
│   ├── ui/              # ShadCN components
│   │   ├── card.tsx
│   │   └── badge.tsx
│   └── ProjectCard.tsx  # Our custom component
├── data/
│   └── projects.json    # Project data (JSON)
├── types/
│   └── project.ts       # TypeScript interface
└── App.tsx              # Main app
```

## Prerequisites

Before starting this module:

- Complete Module 7 (Responsive Grid Layout)
- Have 6 hard-coded cards in a grid
- Understand basic TypeScript types
- Comfortable with JavaScript arrays and objects

## Module Structure

This module contains:

1. **This Overview** - Introduces component props and reusability
2. **Workshop** (`workshop.md`) - 5 hands-on tasks:
   - Task 1: Create JSON data file and TypeScript interface
   - Task 2: Create the ProjectCard component
   - Task 3: Use the component in App.tsx with JSON import
   - Task 4: Understanding the architecture
   - Task 5: Commit your work (Git)
3. **Solution** (`solution/`) - Complete refactored code

## Estimated Time

**45-60 minutes**

## What You'll Learn

### React Concepts

- Component props
- Component composition
- Reusable components
- File organization

### TypeScript

- Interfaces for props
- Type annotations
- Array types
- Optional properties

### JavaScript/ES6

- Array `.map()` method
- Spread operator (`...`)
- Arrow functions
- Object destructuring

### Best Practices

- DRY principle (Don't Repeat Yourself)
- Separation of concerns
- Single responsibility principle
- Type safety

## Let's Build!

Ready to eliminate code duplication and create professional React components? Head over to [`workshop.md`](./workshop.md) to get started!
