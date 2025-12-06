# Module 1 Workshop: Project Setup & Your First Card

## Goal

Create a new React project with Tailwind CSS and display a simple, centered card with a title and description.

---

## Task 1: Create a New Vite Project

### Step 1.1: Initialize the Project

Open your terminal and run:

```bash
npm create vite@latest mits-dashboard -- --template react-ts
```

This creates a new project called `mits-dashboard` with React and TypeScript.

### Step 1.2: Navigate to the Project

```bash
cd mits-dashboard
```

### Step 1.3: Install Dependencies

```bash
npm install
```

### Step 1.4: Verify it Works

Start the development server:

```bash
npm run dev
```

Open your browser to `http://localhost:5173`. You should see the default Vite + React page.

**Press `Ctrl+C` in the terminal to stop the server for now.**

---

## Task 2: Install and Configure Tailwind CSS

Tailwind CSS v4 uses a modern Vite plugin approach for optimal performance.

### Step 2.1: Install Tailwind CSS and Vite Plugin

```bash
npm install tailwindcss @tailwindcss/vite
```

> **Note:** Tailwind CSS v4 uses a dedicated Vite plugin instead of the older PostCSS approach. This is simpler and faster!

### Step 2.2: Configure Vite to Use Tailwind

Open `vite.config.ts` and add the Tailwind plugin:

```ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss(), react()],
});
```

> **Important:** Add the `tailwindcss()` plugin **before** the `react()` plugin in the plugins array.

### Step 2.3: Add Tailwind to Your CSS

Open `src/index.css`. You'll see Vite's default styles (root variables, body styles, etc.).

**Delete everything** and replace with just this single line:

```css
@import "tailwindcss";
```

> **Important:** Make sure to remove ALL the default Vite CSS. The file should contain only the `@import "tailwindcss";` line - nothing else!

This single import brings in all of Tailwind's base styles, components, and utilities.

> **Tailwind v4 Simplicity:** In v4, you just use `@import "tailwindcss"` instead of the three separate `@tailwind` directives used in v3.

### Step 2.4: Verify Tailwind is Working

Start the dev server again:

```bash
npm run dev
```

Open `src/App.tsx` and temporarily add a Tailwind class to test:

```tsx
function App() {
  return <h1 className="text-3xl font-bold text-blue-600">Hello Tailwind!</h1>;
}

export default App;
```

If you see large blue bold text, Tailwind is working! ✅

---

## Task 3: Clean Up Default Files

Let's remove the default Vite content to start fresh.

### Step 3.1: Clean Up App.tsx

Replace the contents of `src/App.tsx` with:

```tsx
function App() {
  return (
    <div>
      <h1>MITS Dashboard</h1>
    </div>
  );
}

export default App;
```

### Step 3.2: Delete Unnecessary Files

Delete these files (they came with the Vite template):

- `src/App.css`
- `src/assets/react.svg`

### Step 3.3: Clean Up main.tsx

Open `src/main.tsx` and make sure it looks like this (remove any App.css import if present):

```tsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
```

Your browser should now show just "MITS Dashboard" in plain text.

---

## Task 4: Create the Centered Card Layout

Now let's create the main layout with a card centered on the screen.

### Step 4.1: Understanding the Layout

We want:

- Full-screen height background
- Card centered both horizontally and vertically
- Gray background to make the white card stand out

### Step 4.2: Create the Centered Layout

Update `src/App.tsx`:

```tsx
function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div>Card will go here</div>
    </div>
  );
}

export default App;
```

**Let's break down these classes:**

| Class            | What it does                                   |
| ---------------- | ---------------------------------------------- |
| `min-h-screen`   | Minimum height of 100vh (full viewport height) |
| `flex`           | Enables flexbox                                |
| `items-center`   | Centers children vertically (cross-axis)       |
| `justify-center` | Centers children horizontally (main-axis)      |
| `bg-gray-50`     | Light gray background color                    |

You should now see "Card will go here" centered on a light gray background.

---

## Task 5: Style the Card Component

### Step 5.1: Add Card Structure

Update `src/App.tsx` with the card structure:

```tsx
function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md p-6 bg-white rounded-lg border border-gray-200 shadow-lg">
        <h2 className="text-xl font-bold text-gray-900">
          ES2025 TRAINING HU S17 - Module B
        </h2>
        <p className="mt-3 text-sm text-gray-600">
          Create a server-side rendered administrative interface for SkillShare
          Academy platform management with role-based access control and OWASP
          security compliance.
        </p>
      </div>
    </div>
  );
}

export default App;
```

### Step 5.2: Understanding the Card Classes

**Container classes:**

| Class             | What it does                          |
| ----------------- | ------------------------------------- |
| `max-w-md`        | Maximum width of 28rem (448px)        |
| `p-6`             | Padding of 1.5rem (24px) on all sides |
| `bg-white`        | White background                      |
| `rounded-lg`      | Large border radius (8px)             |
| `border`          | 1px solid border                      |
| `border-gray-200` | Light gray border color               |
| `shadow-lg`       | Large box shadow for depth            |

**Title classes:**

| Class           | What it does                       |
| --------------- | ---------------------------------- |
| `text-xl`       | Font size of 1.25rem (20px)        |
| `font-bold`     | Font weight 700                    |
| `text-gray-900` | Very dark gray text (almost black) |

**Description classes:**

| Class           | What it does                 |
| --------------- | ---------------------------- |
| `mt-3`          | Margin-top of 0.75rem (12px) |
| `text-sm`       | Font size of 0.875rem (14px) |
| `text-gray-600` | Medium gray text             |

### Step 5.3: Verify the Result

Your browser should now display a beautiful card with:

- ✅ White background
- ✅ Rounded corners
- ✅ Subtle gray border
- ✅ Shadow for depth
- ✅ Bold title
- ✅ Muted description text
- ✅ Centered on a gray background

---

## 🎉 Congratulations!

You've completed Module 1! You now have:

1. ✅ A working Vite + React + TypeScript project
2. ✅ Tailwind CSS installed and configured
3. ✅ A beautifully styled card component
4. ✅ Understanding of basic Tailwind utility classes

## Challenge Exercises (Optional)

Try these modifications to solidify your understanding:

1. **Change the background color** - Try `bg-blue-50` or `bg-slate-100` instead of `bg-gray-50`

2. **Make the card wider** - Change `max-w-md` to `max-w-lg` or `max-w-xl`

3. **Adjust the shadow** - Try `shadow-sm`, `shadow`, `shadow-xl`, or `shadow-2xl`

4. **Change text colors** - Try different gray shades for the title and description

5. **Add more padding** - Try `p-8` instead of `p-6`

## What's Next?

In **Module 2**, we'll explore Tailwind's color palette by creating multiple card variations:

- Light theme card
- Dark theme card
- Colored accent card

You'll learn how Tailwind's color system works and experiment with different color combinations!

---

## Quick Reference: Key Tailwind Classes Used

```
Layout:
  min-h-screen    → full viewport height
  flex            → enable flexbox
  items-center    → center vertically
  justify-center  → center horizontally

Card Container:
  max-w-md        → max width 448px
  p-6             → padding 24px
  bg-white        → white background
  rounded-lg      → 8px border radius
  border          → 1px border
  border-gray-200 → light gray border
  shadow-lg       → large shadow

Typography:
  text-xl         → 20px font
  text-sm         → 14px font
  font-bold       → bold text
  text-gray-900   → dark text
  text-gray-600   → muted text
  mt-3            → 12px top margin
```
