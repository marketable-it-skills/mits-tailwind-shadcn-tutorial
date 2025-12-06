# Module 5 Workshop: Adding Badges & Tags with ShadCN

## Goal

Add visual badges to your cards using ShadCN's Badge component - competition badges at the top and technology tags at the bottom.

---

## Starting Point

Before you begin, make sure you have completed **Module 4** and your app shows three cards using ShadCN Card components.

### Start a New Feature Branch

```bash
git checkout -b feat/module-5-badges-tags
```

---

## Task 1: Install ShadCN Badge Component

Let's add the Badge component to our project.

### Step 1.1: Add Badge Component

Run:

```bash
npx shadcn@latest add badge
```

You should see:

```
✔ Checking registry.
✔ Created 1 file:
  - src\components\ui\badge.tsx
```

### Step 1.2: Inspect the Badge Component

Open `src/components/ui/badge.tsx` and explore!

**Notice:**

- Uses `cva` (class-variance-authority) for variant management
- Uses `rounded-full` (fully rounded pills, not slightly rounded)
- Renders as `<span>` element (not div)
- Has `asChild` prop for composition with Radix UI Slot
- Includes focus states, aria-invalid states, and hover effects
- Has four variants: `default`, `secondary`, `destructive`, `outline`
- Each variant has its own color scheme
- You can customize via `className` prop
- Uses `data-slot="badge"` for advanced styling hooks

**Badge Variants:**

```tsx
variants: {
  variant: {
    default: "bg-primary text-primary-foreground [a&]:hover:bg-primary/90"
    secondary: "bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90"
    destructive: "bg-destructive text-white [a&]:hover:bg-destructive/90"
    outline: "text-foreground [a&]:hover:bg-accent"
  }
}
```

> **💡 Note**: The `[a&]:hover:` syntax means the hover effect only applies when the badge is inside an anchor (`<a>`) tag.

---

## Task 2: Add Competition Badge to Light Card

Let's add a competition badge above the title in CardHeader.

### Step 2.1: Import Badge Component

At the top of `src/App.tsx`, add Badge to your imports:

```tsx
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
```

### Step 2.2: Add Badge to CardHeader

Update your light card to include a badge:

```tsx
{
  /* Light Card - ShadCN Version */
}
<Card className="w-80">
  <CardHeader>
    <Badge variant="secondary">EuroSkills 2025 Training HU</Badge>
    <CardTitle className="text-2xl font-bold leading-tight">
      ES2025 TRAINING HU S17 - Module B
    </CardTitle>
    <CardDescription className="text-base font-semibold">
      SkillShare Academy - Dynamic Website
    </CardDescription>
  </CardHeader>
  <CardContent className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
    Create a server-side rendered administrative interface for SkillShare
    Academy platform management with role-based access control and OWASP
    security compliance. This comprehensive system allows restaurant owners to
    manage all aspects of their business efficiently.
  </CardContent>
</Card>;
```

**What we added:**

- `<Badge variant="secondary">` - Uses the subdued secondary style
- Badge sits at the top of the CardHeader
- CardHeader's `gap-2` automatically spaces the badge from the title (no manual margins needed!)

### Step 2.3: Check Your Browser

You should see a gray badge above the card title! 🎉

---

## Task 3: Add Technology Tags

Now let's add technology tags below the description.

### Step 3.1: Add Tags to CardContent

Update the light card to include technology tags:

```tsx
<Card className="w-80">
  <CardHeader>
    <Badge variant="secondary">EuroSkills 2025 Training HU</Badge>
    <CardTitle className="text-2xl font-bold leading-tight">
      ES2025 TRAINING HU S17 - Module B
    </CardTitle>
    <CardDescription className="text-base font-semibold">
      SkillShare Academy - Dynamic Website
    </CardDescription>
  </CardHeader>
  <CardContent>
    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-4">
      {" "}
      Create a server-side rendered administrative interface for SkillShare Academy
      platform management with role-based access control and OWASP security compliance.
      This comprehensive system allows restaurant owners to manage all aspects of
      their business efficiently.
    </p>
    <div className="flex flex-wrap gap-2">
      <Badge variant="outline">backend</Badge>
      <Badge variant="outline">server-side</Badge>
      <Badge variant="outline">MySQL</Badge>
      <Badge variant="outline">authentication</Badge>
    </div>
  </CardContent>
</Card>
```

**What we added:**

- Changed CardContent from self-closing to have children
- Wrapped description in `<p>` tag with `mb-4` for spacing
- Added a `<div>` with `flex flex-wrap gap-2` for tag layout
- Four `<Badge variant="outline">` components for technologies
- `flex-wrap` allows tags to wrap to next line if needed

---

## Task 4: Customize Badge Colors

Let's make the technology tags colorful!

### Step 4.1: Add Custom Colors to Tags

Update the badges with custom color classes:

```tsx
<div className="flex flex-wrap gap-2">
  <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
    backend
  </Badge>
  <Badge variant="outline" className="bg-cyan-50 text-cyan-700 border-cyan-200">
    server-side
  </Badge>
  <Badge variant="outline" className="bg-sky-50 text-sky-700 border-sky-200">
    MySQL
  </Badge>
  <Badge
    variant="outline"
    className="bg-purple-50 text-purple-700 border-purple-200"
  >
    authentication
  </Badge>
</div>
```

**Color Pattern:**

- `bg-{color}-50` - Very light background
- `text-{color}-700` - Dark text for contrast
- `border-{color}-200` - Subtle border

This creates beautiful, readable badges with consistent styling!

---

## Task 5: Apply to All Cards

Now let's add badges to the dark and colored cards.

### Step 5.1: Update Dark Card

```tsx
{
  /* Dark Card - ShadCN Version */
}
<Card className="w-80 bg-slate-900 border-slate-700">
  <CardHeader>
    <Badge variant="secondary">EuroSkills 2025 Training HU</Badge>
    <CardTitle className="text-2xl font-bold leading-tight text-white">
      ES2025 TRAINING HU S17 - Module B
    </CardTitle>
    <CardDescription className="text-base font-semibold text-slate-400">
      SkillShare Academy - Dynamic Website
    </CardDescription>
  </CardHeader>
  <CardContent>
    <p className="text-sm text-slate-300 leading-relaxed line-clamp-3 mb-4">
      Create a server-side rendered administrative interface for SkillShare
      Academy platform management with role-based access control and OWASP
      security compliance. This comprehensive system allows restaurant owners to
      manage all aspects of their business efficiently.
    </p>
    <div className="flex flex-wrap gap-2">
      <Badge
        variant="outline"
        className="bg-blue-900/30 text-blue-300 border-blue-700"
      >
        backend
      </Badge>
      <Badge
        variant="outline"
        className="bg-cyan-900/30 text-cyan-300 border-cyan-700"
      >
        server-side
      </Badge>
      <Badge
        variant="outline"
        className="bg-sky-900/30 text-sky-300 border-sky-700"
      >
        MySQL
      </Badge>
      <Badge
        variant="outline"
        className="bg-purple-900/30 text-purple-300 border-purple-700"
      >
        authentication
      </Badge>
    </div>
  </CardContent>
</Card>;
```

**Dark Card Color Pattern:**

- `bg-{color}-900/30` - Dark background with opacity
- `text-{color}-300` - Light text for dark backgrounds
- `border-{color}-700` - Medium border

### Step 5.2: Update Colored Card

```tsx
{
  /* Colored Card - ShadCN Version */
}
<Card className="w-80 bg-blue-50 border-blue-200">
  <CardHeader>
    <Badge variant="secondary" className="bg-blue-200 text-blue-900">
      EuroSkills 2025 Training HU
    </Badge>
    <CardTitle className="text-2xl font-bold leading-tight text-blue-900">
      ES2025 TRAINING HU S17 - Module B
    </CardTitle>
    <CardDescription className="text-base font-semibold text-blue-700">
      SkillShare Academy - Dynamic Website
    </CardDescription>
  </CardHeader>
  <CardContent>
    <p className="text-sm text-blue-700 leading-relaxed line-clamp-3 mb-4">
      Create a server-side rendered administrative interface for SkillShare
      Academy platform management with role-based access control and OWASP
      security compliance. This comprehensive system allows restaurant owners to
      manage all aspects of their business efficiently.
    </p>
    <div className="flex flex-wrap gap-2">
      <Badge
        variant="outline"
        className="bg-blue-100 text-blue-800 border-blue-300"
      >
        backend
      </Badge>
      <Badge
        variant="outline"
        className="bg-cyan-100 text-cyan-800 border-cyan-300"
      >
        server-side
      </Badge>
      <Badge
        variant="outline"
        className="bg-sky-100 text-sky-800 border-sky-300"
      >
        MySQL
      </Badge>
      <Badge
        variant="outline"
        className="bg-purple-100 text-purple-800 border-purple-300"
      >
        authentication
      </Badge>
    </div>
  </CardContent>
</Card>;
```

---

## Task 6: Commit Your Work

Save your progress:

```bash
git add .
git commit -m "feat: add badges for competition and technology tags"

# Merge to main and push
git checkout main
git merge feat/module-5-badges-tags
git push
```

---

## 🎉 Congratulations!

You've completed Module 5! You now understand:

1. ✅ How to install and use ShadCN Badge component
2. ✅ Different Badge variants (default, secondary, destructive, outline)
3. ✅ How to customize badges with className overrides
4. ✅ Flexbox layouts with flex-wrap for multiple badges
5. ✅ Creating cohesive color schemes for badges
6. ✅ Adapting badge colors for light/dark/colored themes

## Key Takeaways

### Badge Variants vs Custom Colors

**Use Variants When:**

- You want semantic meaning (secondary, destructive)
- You need consistency across your app
- The default colors work for you

**Use className Overrides When:**

- You need specific brand colors
- You're creating a color-coded system
- You want full control over appearance

### Color Patterns You Learned

**Light Backgrounds:**

```tsx
className = "bg-blue-50 text-blue-700 border-blue-200";
```

**Dark Backgrounds:**

```tsx
className = "bg-blue-900/30 text-blue-300 border-blue-700";
```

**Medium Backgrounds:**

```tsx
className = "bg-blue-100 text-blue-800 border-blue-300";
```

## Component Composition

You learned how to combine components:

- Card + CardHeader + Badge (competition badge)
- CardContent + description + flex container + multiple Badges (tags)

This is the essence of component-based architecture!

## What Changed in Your Codebase

```
New files:
✔ src/components/ui/badge.tsx   # Badge component with variants

Modified files:
✔ src/App.tsx                   # Added badges to all three cards
```

## Challenge Exercises

1. **Add more tags** - Include 5-6 technology tags and see flex-wrap in action
2. **Create a custom variant** - Modify `badge.tsx` to add a "success" variant
3. **Icon badges** - Use Lucide icons inside badges (research needed!)
4. **Badge sizes** - Experiment with different text sizes (text-xs, text-sm)
5. **Hover effects** - Add hover:scale-105 transition to badges

## What's Next?

In **Module 6**, we'll make cards interactive:

- Hover effects and transitions
- Click handlers
- Focus states
- Cursor pointer
- Transform animations

Your cards are starting to look professional! 🚀

---

## Quick Reference: ShadCN Badge

```tsx
// Import
import { Badge } from "@/components/ui/badge";

// Variants
<Badge variant="default">Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="destructive">Destructive</Badge>
<Badge variant="outline">Outline</Badge>

// Custom colors (override with className)
<Badge
  variant="outline"
  className="bg-blue-50 text-blue-700 border-blue-200"
>
  Custom
</Badge>

// Multiple badges with flex-wrap
<div className="flex flex-wrap gap-2">
  <Badge variant="outline">Tag 1</Badge>
  <Badge variant="outline">Tag 2</Badge>
  <Badge variant="outline">Tag 3</Badge>
</div>
```

## Resources

- [ShadCN Badge Documentation](https://ui.shadcn.com/docs/components/badge)
- [Tailwind Color Palette](https://tailwindcss.com/docs/customizing-colors)
- [Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
