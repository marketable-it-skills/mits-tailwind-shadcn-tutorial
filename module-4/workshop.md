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

## Task 2: Install ShadCN UI

Let's install ShadCN UI in your project.

### Step 2.1: Run ShadCN Init

In your project folder, run:

```bash
npx shadcn@latest init
```

You'll be asked several questions. Here's what to select:

```
✔ Preflight checks.
✔ Verifying framework. Found Vite.
✔ Validating Tailwind CSS.
✔ Validating import alias.

? Which style would you like to use? ›
❯ New York
  Default

→ Select: Default (press Enter)

? Which color would you like to use as the base color? ›
❯ Zinc
  Slate
  Stone
  Gray
  Neutral
  Red
  ...

→ Select: Slate (use arrow keys, then Enter)

? Would you like to use CSS variables for theming? ›
❯ yes
  no

→ Select: yes (press Enter)
```

### Step 2.2: Understanding What Happened

ShadCN just created several files:

```
✔ Created components.json
✔ Created src/lib/utils.ts
✔ Updated tailwind.config.ts
```

Let's explore what each does:

**`components.json`** - Configuration for ShadCN CLI

- Tells ShadCN where to put components
- Defines your style and color preferences

**`src/lib/utils.ts`** - Utility functions

- Contains `cn()` function for merging class names
- Helpful for conditional styling

**`tailwind.config.ts`** - Updated Tailwind config

- Added CSS variables for theming
- Added animation utilities
- Added color scheme definitions

---

## Task 3: Install the Card Component

Now let's add the Card component to our project.

### Step 3.1: Add Card Component

Run:

```bash
npx shadcn@latest add card
```

You should see:

```
✔ Checking registry.
✔ Installing dependencies: @radix-ui/react-slot.
✔ Created src/components/ui/card.tsx
```

### Step 3.2: Inspect the Generated File

Open `src/components/ui/card.tsx` and take a look!

**Notice:**

- It's just React components
- It's using Tailwind classes you already know!
- `bg-card`, `text-card-foreground` are CSS variables from the config
- You can modify this file - you own it!

**Key Components:**

- `<Card>` - Container
- `<CardHeader>` - Top section
- `<CardTitle>` - Main heading
- `<CardDescription>` - Subtitle
- `<CardContent>` - Body content
- `<CardFooter>` - Bottom section (we won't use this yet)

---

## Task 4: Replace the Light Card with ShadCN

Let's replace our hand-built light card with the ShadCN version.

### Step 4.1: Import ShadCN Card Components

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

### Step 4.2: Replace the Light Card

Replace your light card with this:

```tsx
function App() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-6 p-8 bg-gray-100">
      {/* Light Card - ShadCN Version */}
      <Card className="w-80">
        <CardHeader>
          <CardTitle className="text-2xl leading-tight">
            ES2025 TRAINING HU S17 - Module B
          </CardTitle>
          <CardDescription className="text-base font-semibold">
            SkillShare Academy - Dynamic Website
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
            Create a server-side rendered administrative interface for
            SkillShare Academy platform management with role-based access
            control and OWASP security compliance. This comprehensive system
            allows restaurant owners to manage all aspects of their business
            efficiently.
          </p>
        </CardContent>
      </Card>

      {/* Dark Card - Keep as-is for now */}
      <div className="w-80 p-8 bg-slate-900 rounded-lg border border-slate-700 shadow-xl">
        <h2 className="text-2xl font-bold text-white leading-tight">
          ES2025 TRAINING HU S17 - Module B
        </h2>
        <p className="mt-2 text-base font-semibold text-slate-400">
          SkillShare Academy - Dynamic Website
        </p>
        <p className="mt-4 text-sm text-slate-300 leading-relaxed line-clamp-3">
          Create a server-side rendered administrative interface for SkillShare
          Academy platform management with role-based access control and OWASP
          security compliance. This comprehensive system allows restaurant
          owners to manage all aspects of their business efficiently.
        </p>
      </div>

      {/* Colored Card - Keep as-is for now */}
      <div className="w-80 p-8 bg-blue-50 rounded-lg border border-blue-200 shadow-lg">
        <h2 className="text-2xl font-bold text-blue-900 leading-tight">
          ES2025 TRAINING HU S17 - Module B
        </h2>
        <p className="mt-2 text-base font-semibold text-blue-700">
          SkillShare Academy - Dynamic Website
        </p>
        <p className="mt-4 text-sm text-blue-700 leading-relaxed line-clamp-3">
          Create a server-side rendered administrative interface for SkillShare
          Academy platform management with role-based access control and OWASP
          security compliance. This comprehensive system allows restaurant
          owners to manage all aspects of their business efficiently.
        </p>
      </div>
    </div>
  );
}

export default App;
```

### Step 4.3: Understanding the ShadCN Card Structure

**Before (Hand-built):**

```tsx
<div className="w-80 p-8 bg-white rounded-lg border border-gray-200 shadow-lg">
  <h2 className="text-2xl font-bold text-gray-900 leading-tight">Title</h2>
  <p className="mt-2 text-base font-semibold text-gray-600">Subtitle</p>
  <p className="mt-4 text-sm text-gray-600">Description</p>
</div>
```

**After (ShadCN):**

```tsx
<Card className="w-80">
  <CardHeader>
    <CardTitle className="text-2xl leading-tight">Title</CardTitle>
    <CardDescription className="text-base font-semibold">
      Subtitle
    </CardDescription>
  </CardHeader>
  <CardContent>
    <p className="text-sm text-muted-foreground">Description</p>
  </CardContent>
</Card>
```

**What's Better?**

- ✅ Semantic component names (easier to read)
- ✅ Structure is explicit (Header vs Content)
- ✅ Default styling included (padding, borders, shadows)
- ✅ CSS variables for theme colors (`text-muted-foreground`)

**What You Still Control?**

- ✅ You can add className to any component
- ✅ You own the code in `card.tsx`
- ✅ The structure is the same - just organized

---

## Task 5: Replace All Cards with ShadCN

Now let's convert the other two cards.

### Step 5.1: Convert the Dark Card

```tsx
{
  /* Dark Card - ShadCN Version */
}
<Card className="w-80 bg-slate-900 border-slate-700">
  <CardHeader>
    <CardTitle className="text-2xl leading-tight text-white">
      ES2025 TRAINING HU S17 - Module B
    </CardTitle>
    <CardDescription className="text-base font-semibold text-slate-400">
      SkillShare Academy - Dynamic Website
    </CardDescription>
  </CardHeader>
  <CardContent>
    <p className="text-sm text-slate-300 leading-relaxed line-clamp-3">
      Create a server-side rendered administrative interface for SkillShare
      Academy platform management with role-based access control and OWASP
      security compliance. This comprehensive system allows restaurant owners to
      manage all aspects of their business efficiently.
    </p>
  </CardContent>
</Card>;
```

**Note**: We override colors with className to maintain the dark theme.

### Step 5.2: Convert the Colored Card

```tsx
{
  /* Colored Card - ShadCN Version */
}
<Card className="w-80 bg-blue-50 border-blue-200">
  <CardHeader>
    <CardTitle className="text-2xl leading-tight text-blue-900">
      ES2025 TRAINING HU S17 - Module B
    </CardTitle>
    <CardDescription className="text-base font-semibold text-blue-700">
      SkillShare Academy - Dynamic Website
    </CardDescription>
  </CardHeader>
  <CardContent>
    <p className="text-sm text-blue-700 leading-relaxed line-clamp-3">
      Create a server-side rendered administrative interface for SkillShare
      Academy platform management with role-based access control and OWASP
      security compliance. This comprehensive system allows restaurant owners to
      manage all aspects of their business efficiently.
    </p>
  </CardContent>
</Card>;
```

---

## Task 6: Compare and Reflect

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
const Card = ({ className, ...props }) => (
  <div
    className={cn(
      "rounded-xl border bg-card text-card-foreground shadow",
      className
    )}
    {...props}
  />
);
```

It's just a div with Tailwind classes! ShadCN gives you:

- Consistent border radius
- Default shadow
- Theme-aware colors (CSS variables)
- Ability to override with className

### Reflection Questions

1. **Simpler?** Is the ShadCN version easier to read?
2. **Customizable?** Can you still customize it?
3. **Learning value?** Would you have understood ShadCN without building cards first?
4. **Trade-offs?** What do you gain? What do you lose?

---

## Task 7: Commit Your Work

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
