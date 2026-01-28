# Module 9 Workshop: Theme Toggle - Dark Mode

Welcome to Module 9! In this workshop, you'll transform your dashboard by adding a complete dark/light theme system with user preference persistence and smooth transitions.

## What You'll Build

Starting from your Module 8 dashboard, you'll add:

- Theme toggle button with sun/moon icons
- Dark mode styling for all components
- Persistent theme preference
- System preference detection
- Smooth color transitions

---

## Starting Point

Make sure you've completed Module 8. Your project should have:

- Multiple ProjectCard components in a grid
- JSON data loaded and displayed
- Responsive layout working
- All components using ShadCN Card and Badge

If you need the starting code, copy the Module 8 solution to your working directory.

---

## Git: Create Feature Branch

Before starting, create a feature branch for this module:

```bash
git checkout -b feat/module-9-dark-mode
```

---

## Task 1: Configure Tailwind and Enable Dark Mode

Let's enable Tailwind's dark mode feature and test it manually before building the automatic toggle.

### Step 1.1: Update Tailwind Configuration

We need to configure Tailwind to use the `class` strategy for dark mode.

**Open** `tailwind.config.ts`:

Find the configuration object and add the `darkMode` option:

```typescript
import type { Config } from "tailwindcss";

export default {
  darkMode: "class", // Add this line
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;
```

#### Understanding the TypeScript Format

This configuration uses modern TypeScript features:

- **`import type { Config }`** - Type-only import that gets removed during compilation
- **`satisfies Config`** - TypeScript 4.9+ keyword that validates the object matches the `Config` type while preserving specific literal types (like `"class"`) for better autocomplete and type safety
- This gives you IDE validation without sacrificing type precision

#### What This Does

- **`darkMode: "class"`** - Tells Tailwind to activate dark mode when the `dark` class is present on any parent element
- Any component inside an element with the `dark` class can use `dark:` variants
- We'll test this manually first, then automate it with a toggle button

### Step 1.2: Manually Enable Dark Mode

Let's test dark mode by manually adding the `dark` class to see it in action.

**Open** `src/App.tsx`:

We need to add a wrapper div with the `dark` class. This is important: **the `dark` class must be on a parent element** for Tailwind's dark mode to work.

**Wrap your content with a `dark` div:**

```typescript
function App() {
  return (
    <div className="dark">
    {/* Outer wrapper with dark class */}
      <div className="min-h-screen bg-gray-100 p-6 md:p-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {projectsData.map((project) => (
              <ProjectCard
                key={project.id}
                {...project}
                onClick={() => console.log(`${project.title} clicked!`)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
```

#### How Dark Mode Works in Tailwind

**Parent/Child Relationship:**

- The **outer div** has `className="dark"` - this activates dark mode
- The **inner divs** can use `dark:` variants like `dark:bg-slate-950`
- Tailwind looks for a parent with the `dark` class when applying `dark:` utilities

**Why this structure?**

- You can't put `dark` class and `dark:` variants on the same element
- The `dark` class must be on a **parent** element
- All children can then use `dark:` variants

#### What You Should See

**Save the file and check your browser:**

- **Cards switch to dark theme!** - ShadCN components use CSS variables (like `bg-card`, `text-muted-foreground`) that already have dark mode values defined in your `index.css`
- **Background stays light gray** - We haven't added the `dark:` variant yet
- **Some text might look off** - We'll add proper dark mode styling in the next task

**How it works:**

- The outer `dark` class activates Tailwind's dark mode
- Child components can now use `dark:` utility classes
- ShadCN's CSS variables automatically switch to dark values

#### Test It

Try removing and re-adding the `dark` class from the **outer wrapper div**:

```typescript
// Without dark class - light mode
<div> {/* Remove dark class */}
  <div className="min-h-screen bg-gray-100 p-6 md:p-8">

// With dark class - dark mode
<div className="dark"> {/* Add dark class back */}
  <div className="min-h-screen bg-gray-100 p-6 md:p-8">
```

See the cards switch between light and dark? That's Tailwind's dark mode in action!

**For now, keep the `dark` class** on the outer div so you can see your styling changes in the next task.

---

## Task 2: Style Custom Colors for Dark Mode

Now that dark mode is active, let's understand what needs styling and what doesn't!

### Understanding ShadCN's Token-Based System

Before we add any `dark:` variants, let's understand an important concept:

**ShadCN components already support dark mode automatically!**

**How?** ShadCN uses CSS variables (design tokens) that automatically change based on the `dark` class:

```css
/* In your index.css */
:root {
  --card: white; /* Light mode */
  --muted-foreground: gray;
}

.dark {
  --card: dark-slate; /* Dark mode */
  --muted-foreground: light-gray;
}
```

Classes like `bg-card`, `text-card-foreground`, and `text-muted-foreground` automatically resolve to the correct colors. No `dark:` variants needed!

**What DO we need to style?**

- **Custom colors** not using ShadCN tokens (like `bg-gray-100`)
- **Custom colored elements** (like your colored tag badges)
- **ShadCN components** (already token-based)

Let's only add dark mode to what actually needs it!

### Step 2.1: Update App Background

The app background uses `bg-gray-100` which is NOT a ShadCN token, so we need to add a dark mode variant.

**Open** `src/App.tsx`:

Update the **inner div** (the one with `min-h-screen`, NOT the outer wrapper) with dark mode background and transition:

```typescript
<div className="dark">
  {/* Keep the outer wrapper */}
  <div className="min-h-screen bg-gray-100 dark:bg-slate-950 p-6 md:p-8 transition-colors duration-200">
    {/* rest of content */}
  </div>
</div>
```

#### Changes

- Added `dark:bg-slate-950` - Very dark background for dark mode
- Added `transition-colors duration-200` - Smooth color transition when toggling

**Why this needs a dark: variant:**

- `bg-gray-100` is a custom Tailwind color, not a ShadCN token
- The `dark:` variant works because the outer parent has the `dark` class

**Save and check** - The background should now be dark!

#### What Already Works

Toggle dark mode and notice what's already working without any changes:

- **Cards** - Using `bg-card` (token-based)
- **Card text** - Using `text-card-foreground` (token-based)
- **Descriptions** - Using `text-muted-foreground` (token-based)
- **Badges** - Using `bg-secondary` (token-based)

**This is the power of ShadCN's design token system!**

### Step 2.2: Update Custom Tag Colors

The only other custom colors in our app are the colored tag badges. These use custom color classes, so they need dark mode adjustments.

**Open** `src/components/ProjectCard.tsx`:

Find the tags section (where you map over `tags`) and update it:

```typescript
<div className="flex flex-wrap gap-2">
  {tags.map((tag) => (
    <Badge
      key={tag.label}
      variant="outline"
      className={`${tag.colorClass} dark:bg-opacity-20 dark:border-slate-700`}
    >
      {tag.label}
    </Badge>
  ))}
</div>
```

#### Why This Needs dark: Variants

- These tags use custom color classes (like `bg-blue-100`, `text-blue-800`)
- They're NOT using ShadCN design tokens
- In dark mode, full-opacity colors are too bright
- `dark:bg-opacity-20` - Reduces the background opacity for better dark mode appearance
- `dark:border-slate-700` - Consistent border color across all tags in dark mode
- The original colors still show through with reduced intensity

**Save your changes!**

### Step 2.3: Test Your Dark Mode

**Toggle the `dark` class** on the outer wrapper to see your changes:

```typescript
// Light mode - remove dark class from outer wrapper
<div> {/* No dark class */}
  <div className="min-h-screen bg-gray-100 dark:bg-slate-950 ...">
    {/* content */}
  </div>
</div>

// Dark mode - add dark class to outer wrapper
<div className="dark"> {/* dark class on parent */}
  <div className="min-h-screen bg-gray-100 dark:bg-slate-950 ...">
    {/* content */}
  </div>
</div>
```

#### What to Notice

**Background:**

- Light mode: `bg-gray-100` (light gray)
- Dark mode: `dark:bg-slate-950` (very dark)
- Smooth transition between them

**Cards (automatic via tokens):**

- Light mode: White cards with dark text
- Dark mode: Dark slate cards with light text
- No manual `dark:` variants needed!

**Badges (automatic via tokens):**

- Competition badges change colors automatically
- Using `variant="secondary"` which is token-based

**Tags (custom colors we styled):**

- Light mode: Full-color badges
- Dark mode: Subtle, reduced opacity
- Still color-coded but not overpowering

**Text (all automatic via tokens):**

- Titles, descriptions, subtitles all adapt
- Using `text-card-foreground` and `text-muted-foreground`
- Perfect contrast in both themes

### Key Takeaway

**We only added `dark:` variants to 2 things:**

1. App background (`bg-gray-100` → `dark:bg-slate-950`)
2. Custom colored tags (`dark:bg-opacity-20 dark:border-slate-700`)

**Everything else works automatically thanks to ShadCN's design token system!** This is why using a design system like ShadCN is so powerful - consistent theming with minimal code.

---

## Task 3: Build Automatic Theme Switching

You've been manually toggling the `dark` class on and off - now let's automate it! We'll create a theme system with:

- React Context to manage theme state globally
- localStorage to persist user preference
- System preference detection
- A beautiful toggle button with icons

### Step 3.1: Remove Manual Dark Class

First, let's remove the outer wrapper div with the manual `dark` class since we'll automate it.

**Open** `src/App.tsx`:

**Remove the outer wrapper div** with the `dark` class:

**Before:**

```typescript
function App() {
  return (
    <div className="dark">
      {" "}
      {/* Remove this outer wrapper */}
      <div className="min-h-screen bg-gray-100 dark:bg-slate-950 p-6 md:p-8 transition-colors duration-200">
        <div className="max-w-7xl mx-auto">{/* content */}</div>
      </div>
    </div>
  );
}
```

**After:**

```typescript
function App() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-slate-950 p-6 md:p-8 transition-colors duration-200">
      <div className="max-w-7xl mx-auto">{/* content */}</div>
    </div>
  );
}
```

**What changed:**

- Removed the outer `<div className="dark">` wrapper
- The main content div is now the outermost element again

**Important:** ThemeProvider will add the `dark` class to the `<html>` element instead, which is better because:

- It's a true document-level parent
- It persists across all components
- It's the standard approach for theme systems

Don't worry - your app will switch back to light mode temporarily, but we'll restore dark mode functionality with the ThemeProvider!

### Step 3.2: Create ThemeProvider Component

Now we'll create a React Context to manage theme state across the entire app.

Create a new folder and file:

```bash
mkdir src/contexts
mkdir src/hooks
# Windows: type nul > src\contexts\ThemeContext.tsx
# Windows: type nul > src\contexts\ThemeProvider.tsx
# Windows: type nul > src\hooks\useTheme.tsx
# Mac/Linux: touch src/contexts/ThemeContext.tsx
# Mac/Linux: touch src/contexts/ThemeProvider.tsx
# Mac/Linux: touch src/hooks/useTheme.tsx
```

**Create** `src/contexts/ThemeContext.tsx`:

```typescript
import { createContext } from "react";

export type Theme = "light" | "dark";

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined,
);
```

**Create** `src/contexts/ThemeProvider.tsx`:

```typescript
import { useEffect, useState } from "react";
import { Theme, ThemeContext } from "./ThemeContext";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Initialize theme state with lazy initialization
  // This function runs once during initial render
  const [theme, setTheme] = useState<Theme>(() => {
    // Check localStorage first
    const savedTheme = localStorage.getItem("theme") as Theme | null;

    if (savedTheme) {
      // User has a saved preference
      return savedTheme;
    } else {
      // Check system preference
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      return prefersDark ? "dark" : "light";
    }
  });

  // Update DOM and localStorage when theme changes
  useEffect(() => {
    const root = document.documentElement;

    // This automates what you've been doing manually!
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
```

**Create** `src/hooks/useTheme.tsx`:

```typescript
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
```

#### 🔍 Code Breakdown

**Type Definitions and Context** (`src/contexts/ThemeContext.tsx`):

```typescript
export type Theme = "light" | "dark"; // Only these two values allowed
export interface ThemeContextType {
  theme: Theme; // Current theme
  toggleTheme: () => void; // Function to switch themes
}
export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined,
);
```

> **Why Separate Context File?** Separating the context definition from the provider follows React best practices:
>
> - Keeps type definitions and context creation separate from provider logic
> - Makes types reusable across multiple files
> - Improves code organization and maintainability

**State Management with Lazy Initialization:**

```typescript
const [theme, setTheme] = useState<Theme>(() => {
  // This function runs once during initial render
  const savedTheme = localStorage.getItem("theme") as Theme | null;
  if (savedTheme) {
    return savedTheme; // Use saved preference
  } else {
    // Check system preference
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    return prefersDark ? "dark" : "light";
  }
});
```

> **Why Lazy Initialization?** React recommends computing initial state values during initialization rather than in `useEffect`. The function passed to `useState` runs only once during the initial render, avoiding unnecessary re-renders and ensuring the correct theme is set immediately.

**Synchronization Effect** (runs when theme changes):

1. Add/remove `dark` class from `<html>` - **just like you did manually!**
2. Save preference to localStorage

**Toggle Function:**

```typescript
const toggleTheme = () => {
  setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
};
```

**Custom Hook** (`src/hooks/useTheme.tsx`):

```typescript
export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
```

> **Why Separate Hook File?** Separating the hook into its own file follows React best practices:
>
> - Keeps concerns separated (context definition vs. hook usage)
> - Makes the hook easier to import and reuse
> - Follows common project structure conventions

### Step 3.3: Wrap App with ThemeProvider

Now we need to wrap our entire app with the ThemeProvider so all components can access the theme.

**Open** `src/main.tsx`:

**Update the imports:**

```typescript
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ThemeProvider } from "./contexts/ThemeProvider"; // Add this
```

**Wrap App with ThemeProvider:**

```typescript
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>
);
```

#### Why Wrap in main.tsx?

- ThemeProvider needs to wrap the **entire app**
- This ensures all components can access the theme context
- It's at the highest level, above App

### Step 3.4: Install Lucide Icons

We'll use Lucide React for beautiful sun and moon icons in the toggle button.

```bash
npm install lucide-react
```

### Step 3.5: Create ThemeToggle Component

Now let's create a beautiful theme toggle button!

Create a new file:

```bash
# Windows: type nul > src\components\ThemeToggle.tsx
# Mac/Linux: touch src/components/ThemeToggle.tsx
```

**Create** `src/components/ThemeToggle.tsx`:

```typescript
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="
        relative p-2 rounded-lg
        bg-gray-200 dark:bg-slate-800
        hover:bg-gray-300 dark:hover:bg-slate-700
        transition-colors duration-200
        focus:outline-none focus:ring-2 focus:ring-blue-500
      "
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <Moon className="w-5 h-5 text-gray-800 dark:text-slate-200" />
      ) : (
        <Sun className="w-5 h-5 text-slate-200" />
      )}
    </button>
  );
}
```

#### Component Breakdown

**Icons:**

- `<Moon />` - Shows in light mode (suggests switching to dark)
- `<Sun />` - Shows in dark mode (suggests switching to light)

**Styling:**

- Background adapts to theme
- Hover states for both themes
- Focus ring for accessibility
- Smooth transitions

**Accessibility:**

- `aria-label` for screen readers
- Focus ring for keyboard navigation

### Step 3.6: Add Header with Theme Toggle

Now let's add a header to our dashboard with the theme toggle button.

**Open** `src/App.tsx`:

**Import ThemeToggle:**

```typescript
import { ProjectCard } from "./components/ProjectCard";
import { ThemeToggle } from "./components/ThemeToggle"; // Add this
import projectsData from "./data/projects.json";
```

**Update the App component** to include a header:

```typescript
function App() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-slate-950 p-6 md:p-8 transition-colors duration-200">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              MITS Project Dashboard
            </h1>
            <p className="text-gray-600 dark:text-slate-400 mt-1">
              Explore our collection of skills training projects
            </p>
          </div>
          <ThemeToggle />
        </header>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              {...project}
              onClick={() => console.log(`${project.title} clicked!`)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
```

#### Test It

**Save and run your app** - you should now have a working theme toggle!

- Click the toggle button - theme switches automatically
- Refresh the page - your preference persists
- All transitions should be smooth
- The icon changes based on the current theme

**What's happening behind the scenes:**

- ThemeProvider adds/removes the `dark` class on the `<html>` element
- Open DevTools → Elements and watch the `<html>` tag as you toggle
- You'll see `<html class="dark">` appear and disappear
- This is the same mechanism you tested manually, but now automated!

---

## Task 4: Test Your Dark Mode

Let's thoroughly test the theme system!

### Test Checklist

**Functionality Tests:**

- [ ] Click theme toggle - theme switches immediately
- [ ] Refresh page - theme preference persists
- [ ] Clear localStorage - falls back to system preference
- [ ] All cards display correctly in both themes
- [ ] Header text is readable in both themes
- [ ] Badges are readable in both themes
- [ ] Tag colors look good in both themes

**Visual Tests:**

- [ ] Smooth transition when switching themes
- [ ] No flashing or jarring color changes
- [ ] Good contrast in both themes
- [ ] Hover states work in both themes
- [ ] Focus rings visible in both themes

**Responsive Tests:**

- [ ] Dark mode works on mobile viewport
- [ ] Dark mode works on tablet viewport
- [ ] Dark mode works on desktop viewport
- [ ] Theme toggle button accessible on all sizes

**Browser Tests:**

- [ ] Open DevTools → Application → Local Storage
- [ ] Verify "theme" key is saved
- [ ] Value should be "light" or "dark"

**Advanced Tests:**

To test system preference detection:

1. Open DevTools → Clear localStorage
2. Refresh the page
3. The theme should match your system preference

---

## Task 5: Git Commit

Commit your theme system implementation:

```bash
# Stage all changes
git add .

# Commit with descriptive message
git commit -m "feat(module-9): implement dark mode theme system

- Configure Tailwind for class-based dark mode
- Add dark mode variants to all components
- Create ThemeProvider with React Context
- Build theme toggle button with icons
- Implement localStorage persistence
- Add system preference detection
- Add smooth transitions between themes"

# Create tag
git tag module-9-complete
```

---

## Challenges

### Challenge 1: Animated Theme Toggle Icon

Add a rotation animation when toggling the theme.

**Hint**: Use Tailwind's `rotate` and `transition-transform` utilities.

```typescript
<Moon className="w-5 h-5 text-gray-800 transition-transform hover:rotate-12" />
```

### Challenge 2: Theme Toggle Keyboard Shortcut

Add a keyboard shortcut (e.g., `Ctrl+Shift+T`) to toggle theme.

**Hint**: Use `useEffect` with an event listener for `keydown`.

```typescript
useEffect(() => {
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.ctrlKey && e.shiftKey && e.key === "T") {
      toggleTheme();
    }
  };

  window.addEventListener("keydown", handleKeyDown);
  return () => window.removeEventListener("keydown", handleKeyDown);
}, [toggleTheme]);
```

### Challenge 3: System Preference Change Listener

Make the app respond to system theme changes in real-time.

**Hint**: Use `window.matchMedia` with an event listener.

```typescript
useEffect(() => {
  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

  const handleChange = (e: MediaQueryListEvent) => {
    if (!localStorage.getItem("theme")) {
      setTheme(e.matches ? "dark" : "light");
    }
  };

  mediaQuery.addEventListener("change", handleChange);
  return () => mediaQuery.removeEventListener("change", handleChange);
}, []);
```

### Challenge 4: Theme Transition Animation

Add a subtle fade animation to the entire page when switching themes.

**Hint**: Use CSS transitions on opacity or add a fade overlay.

### Challenge 5: More Theme Options

Add a third theme option: "system" (auto).

**Hint**: Expand the Theme type to `'light' | 'dark' | 'system'` and handle system preference dynamically.

---

## Common Issues and Solutions

### Issue: Theme Flashes on Page Load

**Problem**: Brief flash of wrong theme before correct theme loads

**Solution**: Add theme detection script in `index.html` before React loads:

```html
<script>
  // Add this in <head> before other scripts
  const theme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (theme === "dark" || (!theme && prefersDark)) {
    document.documentElement.classList.add("dark");
  }
</script>
```

### Issue: Some Components Not Changing

**Problem**: Some elements don't update when theme changes

**Solution**: Make sure you've added `dark:` variants to all color classes

### Issue: localStorage Not Persisting

**Problem**: Theme resets after page refresh

**Solution**: Check browser privacy settings and ensure localStorage is enabled

### Issue: Transitions Too Slow/Fast

**Problem**: Theme switching feels off

**Solution**: Adjust the duration in `transition-colors duration-200`

---

## Summary

Congratulations! You've successfully implemented a complete dark mode theme system!

### What You Built

Configured Tailwind CSS for class-based dark mode  
Added dark mode styling to all components  
Created theme toggle with sun/moon icons  
Implemented React Context for global theme state  
Added localStorage persistence  
Implemented system preference detection  
Added smooth transitions between themes

### What You Learned

- **Configuring Tailwind CSS dark mode** - Using the `class` strategy
- **Testing incrementally** - Manual testing before automation
- **Styling with dark: variants** - Systematic approach to theming
- **React Context API** - Managing global state
- **localStorage** - Client-side persistence
- **System preference detection** - Respecting user's OS settings
- **Smooth transitions** - Professional polish
- **Accessibility** - Screen readers and keyboard navigation

### Key Takeaway

You learned dark mode implementation by:

1. **Seeing it work** - Manual dark class testing
2. **Styling it** - Adding dark: variants systematically
3. **Automating it** - Building the theme switching system

This incremental approach helps you understand the mechanism before automating it!

### Next Module

In **Module 10**, you'll load real MITS project data from `collection.json` and implement advanced data transformation with language badges, merged technology tags, and dynamic color assignment!

---

**Great work on Module 9!**
