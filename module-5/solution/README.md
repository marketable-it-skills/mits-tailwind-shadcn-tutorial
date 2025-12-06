# Module 5 Solution: Adding Badges & Tags with ShadCN

## What Was Accomplished

This module adds visual badges to cards using ShadCN's Badge component - competition badges in the header and technology tags in the content area.

## Key Changes

### 1. Added ShadCN Badge Component

**Installed:**
```bash
npx shadcn@latest add badge
```

**Created Files:**
- `src/components/ui/badge.tsx` - Badge component with variants

### 2. Badge Component Structure

The Badge component uses `class-variance-authority` (cva) for variant management:

```tsx
const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 ...",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        secondary: "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive: "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90",
        outline: "text-foreground [a&]:hover:bg-accent",
      },
    },
  }
)
```

**Key Features:**
- Uses `rounded-full` for pill-shaped badges
- Renders as `<span>` with Slot support for composition
- Includes focus states and aria-invalid handling
- Hover effects only when inside links (`[a&]:hover:`)
- Uses `data-slot="badge"` for advanced styling

### 3. Added Competition Badges

Each card now has a competition badge in the CardHeader:

```tsx
<Badge variant="secondary">
  EuroSkills 2025 Training HU
</Badge>
```

- Uses `variant="secondary"` for subdued appearance
- Badge already has `w-fit` built-in (only as wide as content)
- CardHeader's `gap-2` provides spacing automatically

### 4. Added Technology Tags

Each card has 4 technology tags with custom colors:

```tsx
<div className="flex flex-wrap gap-2">
  <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
    backend
  </Badge>
  {/* ... more badges ... */}
</div>
```

**Layout:**
- `flex flex-wrap` allows tags to wrap to next line
- `gap-2` creates consistent spacing
- `variant="outline"` provides base structure
- Custom `className` overrides colors

### 5. Color Patterns by Card Theme

**Light Card:**
```tsx
className="bg-blue-50 text-blue-700 border-blue-200"
```

**Dark Card:**
```tsx
className="bg-blue-900/30 text-blue-300 border-blue-700"
```

**Colored Card:**
```tsx
className="bg-blue-100 text-blue-800 border-blue-300"
```

## Project Structure

```
module-5/solution/
├── src/
│   ├── components/
│   │   └── ui/
│   │       ├── card.tsx          # Card components (from Module 4)
│   │       └── badge.tsx         # NEW: Badge component
│   ├── lib/
│   │   └── utils.ts              # Utility functions
│   ├── App.tsx                   # Updated with badges
│   ├── main.tsx                  # Entry point
│   └── index.css                 # Global styles + CSS variables
├── components.json               # ShadCN configuration
├── tsconfig.json                 # TypeScript config
├── vite.config.ts                # Vite config
├── package.json                  # Dependencies (includes cva)
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

## What Students Learn

1. **Badge Component Usage**
   - Installing ShadCN components
   - Understanding Badge variants
   - Customizing with className

2. **Variant System**
   - How `class-variance-authority` works
   - Default variants vs custom styling
   - When to use variants vs className

3. **Flexbox Layout**
   - Using `flex flex-wrap` for responsive layouts
   - Gap spacing between elements
   - Creating tag collections

4. **Color Theming**
   - Adapting badge colors for light/dark themes
   - Creating consistent color patterns
   - Using Tailwind color scales

5. **Component Composition**
   - Combining Card + Badge components
   - Structuring content with badges
   - Managing spacing between elements

## Visual Result

Three cards, each with:
- **Competition badge** at top (gray secondary style)
- **Title and subtitle** (from Module 4)
- **Description text** with margin below
- **Four technology tags** in a flex-wrap row with custom colors:
  - backend (blue)
  - server-side (cyan)
  - MySQL (sky)
  - authentication (purple)

## Key Concepts

### Badge Variants

- **`default`**: Primary style with solid color
- **`secondary`**: Subdued style (used for competition badge)
- **`destructive`**: Error/warning style
- **`outline`**: Bordered style (used for technology tags)

### Customization Strategy

1. Start with a variant for base structure
2. Override colors with className
3. Add utility classes for sizing/spacing
4. Maintain consistent color patterns

### Color Pattern Best Practices

**For light backgrounds:**
- Background: `{color}-50` (very light)
- Text: `{color}-700` (dark)
- Border: `{color}-200` (subtle)

**For dark backgrounds:**
- Background: `{color}-900/30` (dark with opacity)
- Text: `{color}-300` (light)
- Border: `{color}-700` (medium)

## Next Steps

In **Module 6**, we'll add:
- Hover effects on cards
- Click interactions
- Transform animations
- Focus states
- Cursor pointer

Your cards are getting more polished! 🏷️
