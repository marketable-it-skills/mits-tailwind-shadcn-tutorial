# Module 7: Responsive Grid Layout

## Overview

In this module, you'll transform your single interactive card into a **professional multi-card dashboard** using CSS Grid and Tailwind's responsive utilities. You'll learn how to create layouts that automatically adapt to different screen sizes while maintaining visual harmony.

![Module Solution](/module-1/assets/project-description-images/module-1-solution.png)

## Learning Objectives

By the end of this module, you will be able to:

1. **Create responsive grid layouts** using Tailwind CSS Grid utilities
2. **Apply responsive breakpoints** (mobile-first design)
3. **Manage spacing** with gap utilities
4. **Center content** with containers and max-width constraints
5. **Display multiple cards** with consistent styling
6. **Test responsiveness** across different viewport sizes

## What You'll Build

Starting from your single interactive card, you'll:

- Display **6 project cards** in a responsive grid
- Implement **mobile-first responsive design**:
  - **Mobile** (< 768px): 1 column
  - **Tablet** (≥ 768px): 2 columns
  - **Desktop** (≥ 1024px): 3 columns
- Add proper spacing and alignment
- Maintain all interactivity (hover, click, keyboard navigation)

## Connection to PRD

This module implements the **Dashboard Layout** specification from the PRD:

> **Grid**: 3-column layout on desktop (≥1024px), 2-column on tablet (768-1023px), 1-column on mobile (<768px)
>
> **Gap**: Consistent spacing between cards (e.g., gap-6 or gap-8)
>
> **Container**: Centered with max-width constraint (e.g., max-w-7xl)
>
> **Padding**: Appropriate padding around the grid (e.g., p-6 or p-8)

## Key Concepts

### CSS Grid with Tailwind

Tailwind provides powerful Grid utilities:

- `grid` - Creates a grid container
- `grid-cols-1` - 1 column
- `grid-cols-2` - 2 columns
- `grid-cols-3` - 3 columns
- `gap-6` - Spacing between grid items

### Responsive Breakpoints

Tailwind uses a **mobile-first** approach with responsive prefixes:

- **No prefix** - Applies to all sizes (mobile first)
- `md:` - Medium screens and up (≥ 768px)
- `lg:` - Large screens and up (≥ 1024px)
- `xl:` - Extra large screens and up (≥ 1280px)

Example:

```tsx
<div className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
```

This means:

1. Start with 1 column (mobile)
2. Switch to 2 columns at medium breakpoint (tablet)
3. Switch to 3 columns at large breakpoint (desktop)

### Container Patterns

Professional dashboards use centered containers:

```tsx
<div className="max-w-7xl mx-auto">{/* Content centered with max width */}</div>
```

- `max-w-7xl` - Maximum width of 80rem (1280px)
- `mx-auto` - Horizontal margin auto (centers the container)

## Prerequisites

Before starting this module:

- ✅ Complete Module 6 (Card Interactions)
- ✅ Have 1 interactive card with hover, click, and keyboard navigation
- ✅ Understand Tailwind utility classes
- ✅ Comfortable with ShadCN Card and Badge components

## Module Structure

This module contains:

1. **This Overview** - Introduces grid layout concepts
2. **Workshop** (`workshop.md`) - 4 hands-on tasks:
   - Task 1: Set up the grid container
   - Task 2: Duplicate cards with varied content
   - Task 3: Make the grid responsive
   - Task 4: Commit your work (Git)
3. **Solution** (`solution/`) - Complete working grid layout

## Estimated Time

⏱️ **30-45 minutes**

## Let's Build!

Ready to create a professional dashboard layout? Head over to [`workshop.md`](./workshop.md) to get started!
