# Module 5: Adding Badges & Tags with ShadCN

## Overview

Now that you have cards built with ShadCN, it's time to add visual indicators! In this module, you'll add **badges** for competitions and **tags** for technologies using ShadCN's Badge component. This brings your cards closer to the final MITS Dashboard design.

## What You'll Learn

- **Installing ShadCN Badge** - Adding a new component to your project
- **Badge variants** - default, secondary, destructive, outline
- **Custom badge styling** - Creating colored badges with className overrides
- **Flexbox layouts** - Using flex-wrap for multiple tags
- **Component composition** - Combining Card and Badge components

## Why This Matters

Badges are essential UI elements for:

- **Visual categorization** - Quickly identify project types
- **Information hierarchy** - Highlight important metadata
- **User scanning** - Help users find relevant content fast
- **Design consistency** - Reusable styled indicators

## Starting Point

You should have completed **Module 4** and have:

- Three cards using ShadCN Card components
- Understanding of ShadCN installation process
- Confidence with component composition
- Knowledge of className prop for customization

## What We're Building

We'll enhance your cards with two types of badges:

1. **Competition Badge** - Shows which competition/training (e.g., "EuroSkills 2025 Training HU")
2. **Technology Tags** - Shows tech stack (e.g., "backend", "MySQL", "server-side")

**Visual Layout:**

```
┌─────────────────────────────────────┐
│ [Badge: Competition]                │
│ Title                               │
│ Subtitle                            │
├─────────────────────────────────────┤
│ Description text...                 │
│                                     │
│ [tag] [tag] [tag] [tag]            │
└─────────────────────────────────────┘
```

## PRD Connection

This module implements:

> **Core Features → Project Cards → Visual Components**
>
> - Competition Badge (indicating EuroSkills/WorldSkills)
> - Tag Collection (technology stack indicators)

## Time Estimate

**30-40 minutes**

## Module Structure

1. **Task 1**: Install ShadCN Badge component
2. **Task 2**: Add competition badge to CardHeader
3. **Task 3**: Add technology tags with flex-wrap layout
4. **Task 4**: Customize badge colors
5. **Task 5**: Apply badges to all three cards
6. **Task 6**: Commit your work

## Expected Result

By the end of this module, you'll have:

- Badge component installed and understood
- Competition badge at the top of each card
- 3-4 technology tags at the bottom
- Custom colored badges using className
- Responsive badge layout with flex-wrap
- Understanding of Badge variants

## Key Concepts

### Badge Variants

ShadCN Badge comes with built-in variants:

- **`default`** - Primary badge style
- **`secondary`** - Subdued style (perfect for competition badges)
- **`destructive`** - Error/warning style
- **`outline`** - Bordered style (perfect for tags with custom colors)

### Custom Colors

While variants provide base styles, you can override them:

```tsx
<Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
  custom colors
</Badge>
```

This combines the outline variant's structure with your custom color palette!

## Learning Approach

This module emphasizes **progressive enhancement**:

- Start with basic badges
- Add custom colors
- Create a cohesive design system
- Learn when to use variants vs custom styling

Let's add visual polish to your cards!
