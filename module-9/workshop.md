# Module 9 Workshop: Theme Toggle - Dark Mode

Welcome to Module 9! In this workshop, you'll transform your dashboard by adding a complete dark/light theme system with user preference persistence and smooth transitions.

## What You'll Build

Starting from your Module 8 dashboard, you'll add:

- 🌓 Theme toggle button with sun/moon icons
- 🎨 Dark mode styling for all components
- 💾 Persistent theme preference
- 🖥️ System preference detection
- ✨ Smooth color transitions

---

## Starting Point

Make sure you've completed Module 8. Your project should have:

- ✅ Multiple ProjectCard components in a grid
- ✅ JSON data loaded and displayed
- ✅ Responsive layout working
- ✅ All components using ShadCN Card and Badge

If you need the starting code, copy the Module 8 solution to your working directory.

---

## Git: Create Feature Branch

Before starting, create a feature branch for this module:

```bash
git checkout -b feat/module-9-dark-mode
```

---

## Task 1: Configure Tailwind for Dark Mode

Let's enable Tailwind's dark mode feature using the class strategy.

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

#### 🔍 Understanding the TypeScript Format

This configuration uses modern TypeScript features:

- **`import type { Config }`** - Type-only import that gets removed during compilation
- **`satisfies Config`** - TypeScript 4.9+ keyword that validates the object matches the `Config` type while preserving specific literal types (like `"class"`) for better autocomplete and type safety
- This gives you IDE validation without sacrificing type precision

#### 💡 What This Does

- **`darkMode: 'class'`** - Tells Tailwind to activate dark mode when the `dark` class is present on any parent element
- We'll add the `dark` class to the `<html>` element to enable dark mode app-wide

### Step 1.2: Test Dark Mode Manually

Let's verify dark mode is working before building the toggle.

**Open your browser DevTools** (F12), go to the **Console**, and run:

```javascript
document.documentElement.classList.add("dark");
```

This adds `class="dark"` to the `<html>` element, activating Tailwind's dark mode.

**What you should see:**

- In DevTools **Elements** tab: `<html class="dark">`
- Visually: The cards should switch to a basic dark theme! This happens because ShadCN components use CSS variables (like `bg-card`, `text-muted-foreground`) that already have dark mode values defined in your `index.css`
- However, the background and some elements still need custom `dark:` variants, which we'll add in the next tasks

To remove the dark class:

```javascript
document.documentElement.classList.remove("dark");
```

---

## Task 2: Create Theme Context and Provider

Now we'll create a React Context to manage theme state across the entire app.

### Step 2.1: Create ThemeProvider Component

Create a new folder and file:

```bash
mkdir src/contexts
# Windows: type nul > src\contexts\ThemeProvider.tsx
# Mac/Linux: touch src/contexts/ThemeProvider.tsx
```

**Create** `src/contexts/ThemeProvider.tsx`:

```typescript
import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Initialize theme state
  const [theme, setTheme] = useState<Theme>("light");

  // Initialize theme on mount
  useEffect(() => {
    // Check localStorage first
    const savedTheme = localStorage.getItem("theme") as Theme | null;

    if (savedTheme) {
      // User has a saved preference
      setTheme(savedTheme);
    } else {
      // Check system preference
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setTheme(prefersDark ? "dark" : "light");
    }
  }, []);

  // Update DOM and localStorage when theme changes
  useEffect(() => {
    const root = document.documentElement;

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

// Custom hook to use theme
export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
```

#### 🔍 Code Breakdown

**Type Definitions**:

```typescript
type Theme = "light" | "dark"; // Only these two values allowed
interface ThemeContextType {
  theme: Theme; // Current theme
  toggleTheme: () => void; // Function to switch themes
}
```

**Context Creation**:

```typescript
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
```

**State Management**:

```typescript
const [theme, setTheme] = useState<Theme>("light");
```

**Initialization Effect** (runs once on mount):

1. Check localStorage for saved preference
2. If not found, check system preference
3. Set the theme accordingly

**Synchronization Effect** (runs when theme changes):

1. Add/remove `dark` class from `<html>`
2. Save preference to localStorage

**Toggle Function**:

```typescript
const toggleTheme = () => {
  setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
};
```

### Step 2.2: Wrap App with ThemeProvider

Now we need to wrap our entire app with the ThemeProvider.

**Open** `src/main.tsx`:

**Update the imports**:

```typescript
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ThemeProvider } from "./contexts/ThemeProvider"; // Add this
```

**Wrap App with ThemeProvider**:

```typescript
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>
);
```

#### 💡 Why Wrap in main.tsx?

- ThemeProvider needs to wrap the **entire app**
- This ensures all components can access the theme context
- It's at the highest level, above App

### Step 2.3: Test the Context

Let's verify the context is working before adding the UI.

**Temporarily add** this to `src/App.tsx` (we'll remove it later):

```typescript
import { useTheme } from "./contexts/ThemeProvider"; // Add this import

function App() {
  const { theme, toggleTheme } = useTheme(); // Add this line

  return (
    <div className="min-h-screen bg-gray-100 p-6 md:p-8">
      {/* Add this button temporarily */}
      <button
        onClick={toggleTheme}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Current Theme: {theme} (Click to toggle)
      </button>

      <div className="max-w-7xl mx-auto">{/* ...rest of your code */}</div>
    </div>
  );
}
```

**Run your app** and click the button. You should see:

- Theme text changes
- localStorage gets updated (check DevTools → Application → Local Storage)

**Remove the test button** after confirming it works.

---

## Task 3: Add Dark Mode Variants to Components

Now let's add dark mode styling to make our components look good in dark theme.

### Step 3.1: Update App Background

**Open** `src/App.tsx`:

Find the main container div and add dark mode variants:

```typescript
<div className="min-h-screen bg-gray-100 dark:bg-slate-950 p-6 md:p-8 transition-colors duration-200">
```

#### Changes:

- Added `dark:bg-slate-950` - Very dark background for dark mode
- Added `transition-colors duration-200` - Smooth color transition

**Save and test**: Toggle the dark mode button. The background should change smoothly!

### Step 3.2: Update ProjectCard Component

**Open** `src/components/ProjectCard.tsx`:

We need to add dark mode variants for:

- Card background
- Card border
- Title text
- Subtitle text
- Description text

**Update the Card component** with dark variants:

```typescript
<Card
  className={`
    hover:shadow-2xl hover:scale-[1.02]
    transition-all duration-200 cursor-pointer
    focus:outline-none focus:ring-2 focus:ring-${focusRingColor}
    dark:bg-slate-900 dark:border-slate-800
  `}
  tabIndex={0}
  onClick={onClick}
  onKeyDown={handleKeyDown}
>
```

**Update CardTitle**:

```typescript
<CardTitle className="text-2xl font-bold leading-tight dark:text-white">
  {title}
</CardTitle>
```

**Update CardDescription**:

```typescript
<CardDescription className="text-base font-semibold dark:text-slate-300">
  {subtitle}
</CardDescription>
```

**Update description paragraph**:

```typescript
<p className="text-sm text-muted-foreground dark:text-slate-400 leading-relaxed line-clamp-3 mb-4">
  {description}
</p>
```

### Step 3.3: Update ShadCN Card Component

The ShadCN Card component also needs dark mode variants.

**Open** `src/components/ui/card.tsx`:

**Find the Card component** and update its className:

```typescript
<div
  ref={ref}
  className={cn(
    "rounded-lg border bg-card text-card-foreground shadow-sm",
    "dark:bg-slate-900 dark:border-slate-800", // Add this line
    className
  )}
  {...props}
/>
```

**Find CardHeader** and update:

```typescript
<div
  ref={ref}
  className={cn("flex flex-col space-y-1.5 p-6 dark:text-white", className)}
  {...props}
/>
```

**Find CardContent**:

```typescript
<div
  ref={ref}
  className={cn("p-6 pt-0 dark:text-slate-300", className)}
  {...props}
/>
```

### Step 3.4: Update Badge Components

Now let's add dark mode variants to badges.

**Open** `src/components/ui/badge.tsx`:

**Update the `secondary` variant**:

```typescript
secondary:
  'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 dark:bg-slate-800 dark:text-slate-300',
```

**Update the `outline` variant**:

```typescript
outline:
  'text-foreground dark:border-slate-700',
```

### Step 3.5: Update Tag Colors for Dark Mode

Tags need special attention because they have custom colors.

**Open** `src/components/ProjectCard.tsx`:

We need to update how tags render to support dark mode. Each tag should have both light and dark variants.

**Update the tags mapping**:

```typescript
<div className="flex flex-wrap gap-2">
  {tags.map((tag) => (
    <Badge
      key={tag.label}
      variant="outline"
      className={`
        ${tag.colorClass}
        dark:bg-opacity-20 dark:border-slate-700
      `}
    >
      {tag.label}
    </Badge>
  ))}
</div>
```

#### 💡 Why This Works

- `dark:bg-opacity-20` - Reduces the background opacity in dark mode
- `dark:border-slate-700` - Consistent border color in dark mode
- The light mode colors still show through with reduced intensity

---

## Task 4: Create Theme Toggle Button Component

Now let's create a beautiful theme toggle button with sun and moon icons.

### Step 4.1: Install Lucide Icons

We'll use Lucide React for the sun and moon icons.

```bash
npm install lucide-react
```

### Step 4.2: Create ThemeToggle Component

Create a new file:

```bash
# Windows: type nul > src\components\ThemeToggle.tsx
# Mac/Linux: touch src/components/ThemeToggle.tsx
```

**Create** `src/components/ThemeToggle.tsx`:

```typescript
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../contexts/ThemeProvider";

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

#### 🔍 Component Breakdown

**Icons**:

- `<Moon />` - Shows in light mode (suggests switching to dark)
- `<Sun />` - Shows in dark mode (suggests switching to light)

**Styling**:

- Background adapts to theme
- Hover states for both themes
- Focus ring for accessibility
- Smooth transitions

**Accessibility**:

- `aria-label` for screen readers
- Focus ring for keyboard navigation

### Step 4.3: Add Header with Theme Toggle

Now let's add a header to our dashboard with the theme toggle button.

**Open** `src/App.tsx`:

**Import ThemeToggle**:

```typescript
import { ThemeToggle } from "./components/ThemeToggle";
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
```

---

## Task 5: Fine-Tune Dark Mode Colors

Let's make some final adjustments to ensure everything looks perfect in dark mode.

### Step 5.1: Update Competition Badge

**Open** `src/components/ProjectCard.tsx`:

Find the competition Badge and ensure it has dark mode variants:

```typescript
<Badge variant="secondary" className="dark:bg-slate-800 dark:text-slate-300">
  {competition}
</Badge>
```

### Step 5.2: Verify All Dark Mode Variants

Let's create a checklist to verify dark mode is working everywhere:

**Light Mode Colors**:

- ✅ Background: `bg-gray-100`
- ✅ Card: `bg-white` with `border-gray-200`
- ✅ Title: `text-gray-900`
- ✅ Subtitle: `text-gray-600`
- ✅ Description: `text-muted-foreground`

**Dark Mode Colors**:

- ✅ Background: `dark:bg-slate-950`
- ✅ Card: `dark:bg-slate-900` with `dark:border-slate-800`
- ✅ Title: `dark:text-white`
- ✅ Subtitle: `dark:text-slate-300`
- ✅ Description: `dark:text-slate-400`
- ✅ Competition Badge: `dark:bg-slate-800 dark:text-slate-300`
- ✅ Tags: opacity adjusted for dark mode

### Step 5.3: Add Smooth Transitions

Ensure all color-changing elements have transitions for smooth theme switching.

**Elements that should have transitions**:

- Main background: `transition-colors duration-200`
- Cards: Already have `transition-all` (includes colors)
- Badges: Can add `transition-colors` if needed
- Theme toggle button: Already has `transition-colors`

---

## Task 6: Test Your Dark Mode

Let's thoroughly test the theme system!

### Test Checklist

**Functionality Tests**:

- [ ] Click theme toggle - theme switches immediately
- [ ] Refresh page - theme preference persists
- [ ] Clear localStorage - falls back to system preference
- [ ] All cards display correctly in both themes
- [ ] Header text is readable in both themes
- [ ] Badges are readable in both themes
- [ ] Tag colors look good in both themes

**Visual Tests**:

- [ ] Smooth transition when switching themes
- [ ] No flashing or jarring color changes
- [ ] Good contrast in both themes
- [ ] Hover states work in both themes
- [ ] Focus rings visible in both themes

**Responsive Tests**:

- [ ] Dark mode works on mobile viewport
- [ ] Dark mode works on tablet viewport
- [ ] Dark mode works on desktop viewport
- [ ] Theme toggle button accessible on all sizes

**Browser Tests**:

- [ ] Open DevTools → Application → Local Storage
- [ ] Verify "theme" key is saved
- [ ] Value should be "light" or "dark"

---

## Task 7: Git Commit

Commit your theme system implementation:

```bash
# Stage all changes
git add .

# Commit with descriptive message
git commit -m "feat(module-9): implement dark mode theme system

- Configure Tailwind for class-based dark mode
- Create ThemeProvider with React Context
- Add dark mode variants to all components
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

Congratulations! 🎉 You've successfully implemented a complete dark mode theme system!

### What You Built

✅ Theme toggle with sun/moon icons  
✅ React Context for global theme state  
✅ localStorage persistence  
✅ System preference detection  
✅ Dark mode variants for all components  
✅ Smooth transitions  
✅ Accessible theme switching

### What You Learned

- Configuring Tailwind CSS dark mode
- React Context API for global state
- localStorage for client-side persistence
- System preference detection
- Dark mode color palette design
- Smooth transitions and animations
- Accessibility in theme systems

### Next Module

In **Module 10**, you'll load real MITS project data from `collection.json` and implement advanced data transformation with language badges, merged technology tags, and dynamic color assignment!

---

**Great work on Module 9!** 🌙✨
