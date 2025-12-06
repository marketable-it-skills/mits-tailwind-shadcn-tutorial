# Module 4 Workshop: Introducing ShadCN UI & Card Component

## Goal

Install ShadCN UI and replace your hand-built cards with ShadCN's Card component, understanding how component libraries abstract Tailwind patterns.

---

## Starting Point

Before you begin, make sure you have completed **Module 3** and your app shows three cards with refined typography.

### Start a New Feature Branch

```bash
git checkout -b feat/module-4-shadcn-ui
```

---

## Task 1: Understanding Component Libraries

Before we install anything, let's understand what we're about to use.

### What is a Component Library?

A **component library** is a collection of pre-built, reusable UI components that speed up development.

**Examples:**

- **Material-UI** - Google's Material Design in React
- **Ant Design** - Enterprise-grade UI components
- **Chakra UI** - Accessible component library
- **ShadCN UI** - Tailwind-based components (what we'll use!)

### How is ShadCN UI Different?

| Traditional Libraries       | ShadCN UI                       |
| --------------------------- | ------------------------------- |
| Install via npm             | Copy components to your project |
| Code in `node_modules`      | Code in your `src/` folder      |
| Update with package manager | You control updates             |
| Harder to customize         | Just edit the file!             |
| Increases bundle size       | Only includes what you use      |

**ShadCN's Philosophy**: "Not a component library. It's a collection of re-usable components that you can copy and paste into your apps."

### Why This Matters

After three modules of hand-building with Tailwind, you now understand:

- How cards are structured
- How colors create themes
- How typography creates hierarchy

ShadCN will organize these same patterns into reusable components. You'll recognize the Tailwind classes inside ShadCN's code!

---

## Task 2: Prepare for ShadCN UI Installation

Before installing ShadCN UI, we need to configure path aliases in our project.

### Step 2.1: Install Node.js Types

ShadCN UI requires `@types/node` for path resolution in the configuration:

```bash
npm install -D @types/node
```

### Step 2.2: Configure Path Alias in tsconfig Files

Vite creates two TypeScript config files. We need to update both:

**Edit `tsconfig.json`** (root file):

```json
{
  "files": [],
  "references": [
    {
      "path": "./tsconfig.app.json"
    },
    {
      "path": "./tsconfig.node.json"
    }
  ],
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

**Edit `tsconfig.app.json`**:

```json
{
  "compilerOptions": {
    // ... your existing options ...

    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

> **💡 Why?** The `@/` alias lets you import components like `@/components/ui/card` instead of `../../components/ui/card`.

### Step 2.3: Configure Path Resolution in vite.config.ts

Update your `vite.config.ts` to resolve the path alias:

```typescript
import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
```

---

## Task 3: Install ShadCN UI

Now we're ready to install ShadCN UI!

### Step 3.1: Run ShadCN Init

In your project folder, run:

```bash
npx shadcn@latest init
```

You'll be asked to select a base color:

```
✔ Preflight checks.
✔ Verifying framework. Found Vite.
✔ Validating Tailwind CSS config. Found v4.
✔ Validating import alias.

? Which color would you like to use as the base color? ›
> Neutral
  Gray
  Zinc
  Stone
  Slate

→ Select: Slate (use arrow keys, then Enter)

✔ Writing components.json.
✔ Checking registry.
✔ Updating CSS variables in src\index.css
✔ Installing dependencies.
✔ Created 1 file:
  - src\lib\utils.ts

Success! Project initialization completed.
You may now add components.
```

### Step 3.2: Understanding What Happened

ShadCN automatically configured your project! Here's what it did:

**Created `components.json`** - Configuration for ShadCN CLI

Open this file to see the configuration! Key sections:

- **`aliases`** - Defines import paths (`"ui": "@/components/ui"`, `"utils": "@/lib/utils"`)
- **`tailwind.baseColor`** - Set to `"slate"` (the color you chose)
- **`tailwind.css`** - Points to `"src/index.css"`
- **`tailwind.cssVariables`** - Set to `true` for theming

**Created `src/lib/utils.ts`** - Utility functions

- Contains `cn()` function for merging class names
- Uses `clsx` and `tailwind-merge` packages (auto-installed)
- Helpful for conditional styling

**Updated `src/index.css`** - Added CSS variables

- Added `:root` with light theme color variables
- Added `.dark` class with dark theme colors
- Defines semantic colors like `--background`, `--foreground`, `--card`, `--muted-foreground`, etc.
- Added base layer styles for consistent theming

> **💡 Note**: With Tailwind v4, ShadCN automatically uses CSS variables and detects your `src/index.css` file. No additional questions needed!

---

## Task 4: Install the Card Component

Now let's add the Card component to our project.

### Step 4.1: Add Card Component

Run:

```bash
npx shadcn@latest add card
```

You should see:

```
✔ Checking registry.
✔ Created 1 file:
  - src\components\ui\card.tsx
```

### Step 4.2: Inspect the Generated File

Open `src/components/ui/card.tsx` and take a look!

**Notice:**

- It's just React function components
- It's using Tailwind classes you already know!
- `bg-card`, `text-card-foreground` are CSS variables from the config
- Uses `flex flex-col gap-6` for modern flexbox layout
- Has `data-slot` attributes for advanced styling
- You can modify this file - you own it!

**Key Components:**

- `<Card>` - Container with flexbox and gap spacing
- `<CardHeader>` - Top section (uses grid layout with `gap-2`)
- `<CardTitle>` - Main heading
- `<CardDescription>` - Subtitle
- `<CardContent>` - Body content (just horizontal padding)
- `<CardFooter>` - Bottom section (we won't use this yet)
- `<CardAction>` - Optional action button area

---

## Task 5: Replace the Light Card with ShadCN

Let's replace our hand-built light card with the ShadCN version.

### Step 5.1: Import ShadCN Card Components

At the top of `src/App.tsx`, add:

```tsx
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
```

> **Note**: `@/` is a path alias that points to your `src/` folder. It's configured in `tsconfig.json`.

### Step 5.2: Replace the Light Card

Replace your light card with this:

```tsx
function App() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-6 p-8 bg-gray-100">
      {/* Light Card - ShadCN Version */}
      <Card className="w-80">
        <CardHeader>
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
          security compliance. This comprehensive system allows restaurant owners
          to manage all aspects of their business efficiently.
        </CardContent>
      </Card>

      {/* Dark Card - Keep as-is for now */}


      {/* Colored Card - Keep as-is for now */}
  );
}

export default App;
```

### Step 5.3: Understanding the ShadCN Card Structure

**Before (Hand-built):**

```tsx
<div className="w-80 p-8 bg-white rounded-lg border border-gray-200 shadow-lg">
  <h2 className="text-2xl font-bold text-gray-900 leading-tight">Title</h2>
  <p className="mt-2 text-base font-semibold text-gray-600">Subtitle</p>
  <p className="mt-4 text-sm text-gray-600 leading-relaxed line-clamp-3">
    Description
  </p>
</div>
```

**After (ShadCN):**

```tsx
<Card className="w-80">
  <CardHeader>
    <CardTitle className="text-2xl font-bold leading-tight">Title</CardTitle>
    <CardDescription className="text-base font-semibold">
      Subtitle
    </CardDescription>
  </CardHeader>
  <CardContent className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
    Description
  </CardContent>
</Card>
```

**What's Better?**

- ✅ Semantic component names (easier to read)
- ✅ Structure is explicit (Header vs Content)
- ✅ Default styling included (padding, borders, shadows)
- ✅ Semantic color tokens (`text-muted-foreground` instead of `text-gray-600`)
- ✅ Automatic spacing with flexbox `gap` (no manual `mt-` classes needed)

**What You Still Control?**

- ✅ You can add className to any component
- ✅ You own the code in `card.tsx`
- ✅ The structure is the same - just organized

**About Semantic Colors:**

Notice we changed `text-gray-600` to `text-muted-foreground`:

- **`text-gray-600`** (Module 3): Hardcoded gray color, same in light/dark mode
- **`text-muted-foreground`** (Module 4): Semantic token that adapts to themes

`text-muted-foreground` is a CSS variable defined in `src/index.css`:

- Light mode: `hsl(215.4 16.3% 46.9%)` (similar to gray-600)
- Dark mode: `hsl(215 20.2% 65.1%)` (lighter for readability)

This means if you add dark mode support later, your text will automatically adjust! This is the power of design tokens.

---

## Task 6: Replace All Cards with ShadCN

Now let's convert the other two cards.

### Step 6.1: Convert the Dark Card

```tsx
{
  /* Dark Card - ShadCN Version */
}
<Card className="w-80 bg-slate-900 border-slate-700">
  <CardHeader>
    <CardTitle className="text-2xl font-bold leading-tight text-white">
      ES2025 TRAINING HU S17 - Module B
    </CardTitle>
    <CardDescription className="text-base font-semibold text-slate-400">
      SkillShare Academy - Dynamic Website
    </CardDescription>
  </CardHeader>
  <CardContent className="text-sm text-slate-300 leading-relaxed line-clamp-3">
    Create a server-side rendered administrative interface for SkillShare
    Academy platform management with role-based access control and OWASP
    security compliance. This comprehensive system allows restaurant owners to
    manage all aspects of their business efficiently.
  </CardContent>
</Card>;
```

**Note**: We override colors with className to maintain the dark theme.

### Step 6.2: Convert the Colored Card

```tsx
{
  /* Colored Card - ShadCN Version */
}
<Card className="w-80 bg-blue-50 border-blue-200">
  <CardHeader>
    <CardTitle className="text-2xl font-bold leading-tight text-blue-900">
      ES2025 TRAINING HU S17 - Module B
    </CardTitle>
    <CardDescription className="text-base font-semibold text-blue-700">
      SkillShare Academy - Dynamic Website
    </CardDescription>
  </CardHeader>
  <CardContent className="text-sm text-blue-700 leading-relaxed line-clamp-3">
    Create a server-side rendered administrative interface for SkillShare
    Academy platform management with role-based access control and OWASP
    security compliance. This comprehensive system allows restaurant owners to
    manage all aspects of their business efficiently.
  </CardContent>
</Card>;
```

---

## Task 7: Compare and Reflect

Let's take a moment to compare what you built vs what ShadCN provides.

### Code Comparison

**Hand-built (Module 3):**

- 230+ characters for card structure
- Manual padding, borders, shadows
- Manual spacing between elements

**ShadCN (Module 4):**

- 180+ characters for same structure
- Default styling included
- Semantic component names

### What ShadCN Abstracts

Open `src/components/ui/card.tsx` and you'll see:

```tsx
function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card"
      className={cn(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
        className
      )}
      {...props}
    />
  );
}
```

It's just a div with Tailwind classes! ShadCN gives you:

- Flexbox layout with `gap-6` for consistent spacing
- Theme-aware colors via CSS variables (`bg-card`, `text-card-foreground`)
- Consistent border radius and shadow
- `data-slot` attributes for advanced styling hooks
- Ability to override with className

### Spacing Differences

You might notice the gap between sections is slightly larger with ShadCN:

**Module 3 (Hand-built):**

- Used `mt-2` (8px) between title and subtitle
- Used `mt-4` (16px) between subtitle and description

**Module 4 (ShadCN):**

- `Card` component has `gap-6` (24px) between CardHeader and CardContent
- `CardHeader` has `gap-2` (8px) between title and subtitle
- **Result: Header to content gap is 24px** (8px more breathing room than Module 3)

**Why the difference?**

- Component libraries have their own design systems
- ShadCN uses `gap-6` on the Card container for consistent spacing
- The newer ShadCN design uses flexbox `gap` instead of padding/margins
- You can customize it: Add `className="gap-4"` to `Card` to match Module 3 spacing

> **💡 Lesson**: When using component libraries, you inherit their design decisions. ShadCN's newer implementation uses modern flexbox layout with `gap` properties. You can override them, but sometimes accepting the library's spacing creates a more cohesive design system.

### Reflection Questions

1. **Simpler?** Is the ShadCN version easier to read?
2. **Customizable?** Can you still customize it?
3. **Learning value?** Would you have understood ShadCN without building cards first?
4. **Trade-offs?** What do you gain? What do you lose?
5. **Design systems?** Should you match Module 3 exactly, or trust ShadCN's spacing?

---

## Task 8: Commit Your Work

Save your progress:

```bash
git add .
git commit -m "feat: introduce ShadCN UI and replace cards with Card component"

# Merge to main and push
git checkout main
git merge feat/module-4-shadcn-ui
git push
```

---

## 🎉 Congratulations!

You've completed Module 4! You now understand:

1. ✅ What component libraries are and why they exist
2. ✅ How to install and configure ShadCN UI
3. ✅ ShadCN's unique "copy-paste" philosophy
4. ✅ How to use Card, CardHeader, CardTitle, CardDescription, CardContent
5. ✅ That ShadCN is just organized Tailwind + React
6. ✅ How to customize library components

## The "Aha!" Moment

**Key Insight**: ShadCN components are not magic black boxes. Open `src/components/ui/card.tsx` and you'll see:

- Familiar Tailwind classes (`rounded-xl`, `border`, `shadow`)
- React components you could have written
- The `cn()` utility for merging classes

You **understand** this code because you built similar components in Modules 1-3!

## What Changed in Your Codebase

```
New files:
✔ components.json          # ShadCN configuration
✔ src/lib/utils.ts         # cn() utility function
✔ src/components/ui/card.tsx   # Card components

Modified files:
✔ tailwind.config.ts       # Theme colors via CSS variables
✔ src/App.tsx              # Using ShadCN Card components
```

## ShadCN Best Practices

- **Do customize**: Edit components in `/components/ui/` freely
- **Do understand**: Read the generated code to learn
- **Do maintain consistency**: Use ShadCN's structure patterns
- **Don't treat it as magic**: It's just Tailwind + React

## Challenge Exercises

1. **Inspect card.tsx** - Read the entire file and identify all Tailwind classes
2. **Modify card.tsx** - Change the default border radius to `rounded-2xl`
3. **Add a new variant** - Create a colored Card variant in card.tsx
4. **Use CardFooter** - Add a footer section to one card

## What's Next?

In **Module 5**, we'll add badges and tags using ShadCN's Badge component:

- Install the Badge component
- Learn about variants (default, secondary, outline, destructive)
- Create custom badge colors
- Display competition and technology tags

---

## Quick Reference: ShadCN Card Components

```tsx
// Import
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Basic Usage
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Subtitle</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Content here</p>
  </CardContent>
</Card>

// With Custom Classes
<Card className="w-80 bg-blue-50">
  {/* Overrides default background */}
</Card>

// Utility Function
cn("class1", "class2")  // Merges classes intelligently
```

## Resources

- [ShadCN UI Documentation](https://ui.shadcn.com)
- [Card Component Docs](https://ui.shadcn.com/docs/components/card)
- [Installation Guide](https://ui.shadcn.com/docs/installation/vite)
