# Module 6: Card Interactions & Hover Effects

## Overview

Static cards are fine, but interactive cards feel alive! In this module, you'll add hover effects, transitions, and click interactions to make your cards responsive to user actions. This creates a more engaging and professional user experience.

## What You'll Learn

- **Hover states** - Using Tailwind's `hover:` modifier
- **CSS transitions** - Smooth animations with `transition` utilities
- **Transform effects** - Scale, translate, and other transforms
- **Cursor states** - Changing cursor to indicate interactivity
- **Click handlers** - Making cards clickable with React
- **Accessibility** - Focus states and keyboard navigation

## Why This Matters

Interactive UI elements provide important feedback to users:

- **Visual feedback** - Users know elements are clickable
- **Engagement** - Micro-interactions make apps feel polished
- **Affordance** - Hover effects signal what's interactive
- **Professional feel** - Transitions create smooth, premium UX

## Starting Point

You should have completed **Module 5** and have:

- Three cards with ShadCN components
- Competition badges and technology tags
- Understanding of className customization
- Confidence with component composition

## What We're Building

We'll make cards interactive by adding:

1. **Hover shadow effect** - Shadow increases on hover
2. **Subtle scale animation** - Card grows slightly (1.02x)
3. **Smooth transitions** - Animations are smooth, not jarring
4. **Cursor pointer** - Shows the card is clickable
5. **Click handler** - Console log when card is clicked

## PRD Connection

This module implements:

> **Core Features → Card Interactions**
>
> Interactive cards with hover states and smooth transitions

## Time Estimate

**25-35 minutes**

## Module Structure

1. **Task 1**: Add hover shadow effect
2. **Task 2**: Add scale transform on hover
3. **Task 3**: Add smooth transitions
4. **Task 4**: Make cards clickable
5. **Task 5**: Apply to all cards
6. **Task 6**: Commit your work

## Expected Result

By the end of this module, you'll have:

- Cards that respond to hover with shadow and scale
- Smooth transitions between states
- Cursor changes to pointer on hover
- Click handlers logging to console
- Professional, polished card interactions
- Understanding of Tailwind's state modifiers

## Key Concepts

### Tailwind State Modifiers

Tailwind uses prefixes for different states:

```tsx
hover: shadow - xl; // Apply shadow-xl on hover
hover: scale - [1.02]; // Apply scale on hover
focus: ring - 2; // Apply ring on focus
active: scale - 95; // Apply scale when clicked
```

### CSS Transitions

Transitions make state changes smooth:

```tsx
transition-all       // Transition all properties
transition-shadow    // Transition only shadow
transition-transform // Transition only transforms
duration-200         // 200ms duration
duration-300         // 300ms duration
ease-in-out         // Easing function
```

### Transform Utilities

```tsx
scale-[1.02]        // Scale to 102%
translate-y-[-2px]  // Move up 2px
rotate-1            // Rotate 1 degree
```

## Learning Approach

This module emphasizes **layered enhancement**:

- Start with one effect
- Add transitions for smoothness
- Combine multiple effects
- Fine-tune timing and intensity
- Test across all card themes

Let's bring your cards to life!
