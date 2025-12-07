# Module 6 Solution: Card Interactions & Hover Effects

## What Was Accomplished

This module adds interactive hover effects and click handlers to all three cards, making them feel responsive and professional.

## Key Changes

### 1. Added Hover Shadow Effect

Each card now increases its shadow on hover:

```tsx
hover:shadow-2xl
```

- Base shadow: `shadow-sm` (from ShadCN Card)
- Hover shadow: `shadow-2xl` (much more prominent)
- Creates depth and elevation effect

### 2. Added Scale Transform

Cards grow slightly on hover:

```tsx
hover:scale-[1.02]
```

- Scales card to 102% of original size
- Subtle enough to feel natural
- Arbitrary value syntax `[]` for precise control

### 3. Added Smooth Transitions

All effects animate smoothly:

```tsx
transition-all duration-200
```

- `transition-all` - Transitions all properties (shadow, transform)
- `duration-200` - 200ms duration (fast but smooth)
- Prevents jarring state changes

### 4. Added Cursor Pointer

Cards show pointer cursor on hover:

```tsx
cursor-pointer
```

- Changes cursor from arrow to hand
- Signals that cards are clickable
- Standard UI pattern for interactive elements

### 5. Added Click Handlers

Each card logs to console when clicked:

```tsx
onClick={() => console.log('Light card clicked!')}
onClick={() => console.log('Dark card clicked!')}
onClick={() => console.log('Colored card clicked!')}
```

- Demonstrates React event handling
- Foundation for future navigation (Module 8)
- Easy to test in browser console

### 6. Added Keyboard Accessibility

Cards are now keyboard-navigable:

```tsx
tabIndex={0}
focus:outline-none focus:ring-2 focus:ring-blue-500
onKeyDown={(e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    console.log('Card clicked!');
  }
}}
```

- `tabIndex={0}` - Makes cards focusable with Tab key
- `focus:ring-2` - Shows visible focus indicator (blue ring)
- `focus:outline-none` - Removes default browser outline
- `onKeyDown` - Allows Enter/Space to trigger click
- WCAG 2.1 compliant (keyboard navigation + visible focus)

## Complete Example

Here's one complete interactive and accessible card:

```tsx
<Card 
  className="w-80 hover:shadow-2xl hover:scale-[1.02] transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
  tabIndex={0}
  onClick={() => console.log('Light card clicked!')}
  onKeyDown={(e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      console.log('Light card clicked!');
    }
  }}
>
  <CardHeader>
    <Badge variant="secondary">EuroSkills 2025 Training HU</Badge>
    <CardTitle className="text-2xl font-bold leading-tight">
      ES2025 TRAINING HU S17 - Module B
    </CardTitle>
    <CardDescription className="text-base font-semibold">
      SkillsShare Academy - Dynamic Website
    </CardDescription>
  </CardHeader>
  <CardContent>
    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-4">
      Create a server-side rendered administrative interface for
      SkillShare Academy platform management with role-based access
      control and OWASP security compliance.
    </p>
    <div className="flex flex-wrap gap-2">
      <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
        backend
      </Badge>
      {/* ... more badges ... */}
    </div>
  </CardContent>
</Card>
```

## Project Structure

```
module-6/solution/
├── src/
│   ├── components/
│   │   └── ui/
│   │       ├── card.tsx          # Card components
│   │       └── badge.tsx         # Badge component
│   ├── lib/
│   │   └── utils.ts              # Utility functions
│   ├── App.tsx                   # Updated with interactions
│   ├── main.tsx                  # Entry point
│   └── index.css                 # Global styles + CSS variables
├── components.json               # ShadCN configuration
├── tsconfig.json                 # TypeScript config
├── vite.config.ts                # Vite config
├── package.json                  # Dependencies
└── index.html                    # HTML template
```

## How to Run

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Open in browser:**
   Visit `http://localhost:5173`

4. **Test interactions:**
   - **Mouse:** Hover over each card (see shadow & scale)
   - **Click:** Click each card (open DevTools Console to see logs)
   - **Keyboard:** Press Tab to focus cards, press Enter/Space to click
   - **Focus:** See blue ring appear when card is focused

## What Students Learn

1. **Tailwind State Modifiers**
   - Using `hover:` prefix for hover-specific styles
   - Applying multiple hover effects simultaneously

2. **CSS Transitions**
   - Making state changes smooth with `transition-all`
   - Choosing appropriate durations (200ms for hovers)

3. **Transform Utilities**
   - Scaling elements with arbitrary values
   - Using brackets `[]` for custom values

4. **React Event Handlers**
   - Adding `onClick` handlers to components
   - Using arrow functions for inline handlers
   - Logging for testing and debugging

5. **User Experience Principles**
   - Visual feedback for interactive elements
   - Cursor changes to indicate affordance
   - Subtle animations for polish

6. **Keyboard Accessibility**
   - Making interactive elements focusable
   - Custom focus indicators (rings)
   - Handling keyboard events (Enter/Space)
   - WCAG 2.1 compliance

7. **Layered Effects**
   - Combining shadow, scale, and transitions
   - Creating cohesive animations
   - Maintaining performance with CSS-only animations

## Visual Result

Three interactive cards that:
- **Increase shadow** smoothly on hover (shadow-sm → shadow-2xl)
- **Scale up** slightly on hover (100% → 102%)
- **Show pointer cursor** to indicate clickability
- **Log to console** when clicked
- **Animate smoothly** over 200ms

## Key Concepts

### State Modifiers in Tailwind

```tsx
hover:shadow-2xl      // Apply shadow-2xl on hover
hover:scale-[1.02]    // Apply scale on hover
focus:ring-2          // Apply ring on focus
active:scale-95       // Apply scale when active
```

### Transition Properties

```tsx
transition-all        // Transition all properties
transition-shadow     // Only shadow
transition-transform  // Only transforms
duration-200          // 200 milliseconds
ease-in-out          // Easing function
```

### Event Handling Pattern

```tsx
// Inline arrow function
onClick={() => console.log('Clicked!')}

// Reference to function
onClick={handleClick}

// With parameters
onClick={() => handleClick(projectId)}
```

## Design Decisions

### Why 1.02 Scale?
- **1.01** - Too subtle, barely noticeable
- **1.02** - Perfect balance ✓
- **1.05** - Too dramatic, feels jarring
- **1.10** - Way too much, breaks layout

### Why 200ms Duration?
- **100ms** - Too fast, feels abrupt
- **200ms** - Fast and smooth ✓
- **300ms** - Acceptable but slightly slow
- **500ms** - Too slow for hover effects

### Why transition-all?
- Could use `transition-shadow` + `transition-transform`
- But `transition-all` is simpler
- Performance difference is negligible
- Easier to maintain

## Accessibility Features ✓

All cards now include keyboard accessibility:

```tsx
<Card 
  className="... focus:outline-none focus:ring-2 focus:ring-blue-500"
  tabIndex={0}
  onClick={...}
  onKeyDown={(e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      console.log('Card clicked!');
    }
  }}
>
```

Features:
- ✅ `tabIndex={0}` - Makes card keyboard focusable
- ✅ `focus:ring-2` - Visible focus indicator (2px ring)
- ✅ `focus:ring-blue-500` - Blue ring on focus (purple on blue card)
- ✅ `focus:outline-none` - Removes default browser outline
- ✅ `onKeyDown` - Responds to Enter and Space keys
- ✅ Meets WCAG 2.1 Level AA standards

## Performance Note

These effects use CSS-only animations (no JavaScript):
- `transition` handles the animation
- `hover:` is a CSS pseudo-class
- GPU-accelerated transforms
- Minimal performance impact

## Next Steps

In **Module 7**, we'll:
- Create a responsive grid layout
- Display 6 cards instead of 3
- Adapt grid to different screen sizes
- Use breakpoints (md:, lg:)

Your cards are now interactive! 🎯✨
