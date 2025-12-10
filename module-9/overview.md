# Module 9: Theme Toggle - Dark Mode

## Overview

In this module, you'll implement a complete dark/light theme system for your dashboard. Users will be able to toggle between themes with their preference saved automatically. You'll also learn to respect system preferences and create smooth theme transitions.

## What You'll Build

Starting from your Module 8 dashboard with multiple project cards, you'll add:

- 🌓 **Theme Toggle Button** in the header
- 🎨 **Dark Mode Variants** for all components
- 💾 **localStorage Persistence** to remember user preference
- 🖥️ **System Preference Detection** for automatic theme selection
- ✨ **Smooth Transitions** between themes
- 🔧 **React Context API** for global theme state

## Learning Objectives

By the end of this module, you will be able to:

1. **Configure Tailwind CSS** for dark mode using the class strategy
2. **Create a ThemeProvider** using React Context API
3. **Build a theme toggle component** with icon transitions
4. **Apply dark mode variants** to all UI components systematically
5. **Persist user preferences** to localStorage
6. **Detect system color scheme** preference
7. **Implement smooth transitions** between theme changes
8. **Manage global state** without prop drilling

## Why Dark Mode Matters

### User Experience Benefits

- **Reduced Eye Strain**: Dark themes reduce eye fatigue, especially in low-light environments
- **Battery Savings**: OLED screens consume less power with dark themes
- **User Preference**: Modern users expect theme options as standard
- **Accessibility**: Some users find dark mode easier to read
- **Professional Polish**: Theme switching is now a UX standard

### Technical Benefits

- **Learn Global State Management**: React Context is essential for app-wide state
- **CSS Custom Properties**: Understand how CSS variables enable dynamic theming
- **Tailwind Dark Mode**: Master one of Tailwind's most powerful features
- **localStorage API**: Practice client-side data persistence

## Dark Mode in Tailwind CSS

Tailwind CSS provides built-in dark mode support using the `dark:` variant.

### Class Strategy vs Media Strategy

Tailwind supports two dark mode strategies:

1. **`media`** - Automatically uses system preference
2. **`class`** - Manually controlled via a class on the root element

We'll use the **`class`** strategy because it gives users control and allows persistence.

### How It Works

```tsx
// Light mode (default)
<div className="bg-white text-gray-900">Hello</div>

// Dark mode (when 'dark' class is on <html>)
<div className="bg-white dark:bg-slate-900 text-gray-900 dark:text-white">
  Hello
</div>
```

When the `dark` class is present on a parent element (usually `<html>`), all `dark:` variants activate.

## React Context API

### What is Context?

Context provides a way to share state across the entire component tree without passing props manually at every level.

**Without Context (Prop Drilling)**:

```tsx
App → Header → Nav → ThemeToggle
  ↓
  props → props → props → props
```

**With Context**:

```tsx
<ThemeProvider>
  <App>
    <Header>
      <ThemeToggle /> {/* Can access theme directly! */}
    </Header>
  </App>
</ThemeProvider>
```

### Context Pattern

1. **Create Context**: Define the shape of shared data
2. **Create Provider**: Component that holds and manages the state
3. **Create Hook**: Custom hook for consuming the context
4. **Wrap App**: Wrap your app with the provider
5. **Use Anywhere**: Access theme state from any component

## Color Palette Overview

### Light Theme (Current)

- Background: `bg-gray-100`
- Cards: `bg-white` with `border-gray-200`
- Text: `text-gray-900`, `text-gray-600`
- Badges: Light color variants

### Dark Theme (New)

- Background: `bg-slate-950`
- Cards: `bg-slate-900` with `border-slate-800`
- Text: `text-white`, `text-slate-400`
- Badges: Dark color variants with opacity

### Design Principles

1. **Contrast**: Maintain WCAG AA compliance (4.5:1 ratio)
2. **Consistency**: Use slate scale for dark mode (not gray)
3. **Subtlety**: Reduce saturation in dark mode to avoid eye strain
4. **Transitions**: Smooth color changes for polish

## localStorage API

localStorage allows you to persist data in the browser:

```typescript
// Save theme preference
localStorage.setItem("theme", "dark");

// Read theme preference
const theme = localStorage.getItem("theme");

// Remove theme preference
localStorage.removeItem("theme");
```

**Important**: localStorage is:

- Synchronous (blocking)
- String-based (must stringify objects)
- Persistent across sessions
- Scoped to the origin (domain)

## System Preference Detection

Modern browsers support the `prefers-color-scheme` media query:

```typescript
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
```

**Best Practice**:

1. Check localStorage first (user explicitly chose)
2. If no saved preference, check system preference
3. Fall back to light mode as default

## Module Structure

This module follows this progression:

```
1. Configure Tailwind for dark mode
   ↓
2. Create ThemeProvider with Context
   ↓
3. Add dark mode variants to components
   ↓
4. Build theme toggle button
   ↓
5. Add localStorage persistence
   ↓
6. Implement system preference detection
   ↓
7. Add smooth transitions
   ↓
8. Test thoroughly in both themes
```

## Key Concepts

### 1. Dark Mode Variants

Every color class can have a dark mode variant:

```tsx
<div className="bg-white dark:bg-slate-900">
  <h1 className="text-gray-900 dark:text-white">Title</h1>
  <p className="text-gray-600 dark:text-slate-400">Description</p>
</div>
```

### 2. Theme Context

Share theme state across all components:

```typescript
type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}
```

### 3. Effect Hook for Persistence

Use `useEffect` to sync theme with DOM and localStorage:

```typescript
useEffect(() => {
  // Update <html> class
  document.documentElement.classList.toggle("dark", theme === "dark");

  // Save to localStorage
  localStorage.setItem("theme", theme);
}, [theme]);
```

## Starting Point

You should have completed **Module 8** with:

- ✅ 6 project cards in a responsive grid
- ✅ ProjectCard component with props
- ✅ JSON data loaded and mapped
- ✅ All cards displaying correctly

## What You'll Have After This Module

- 🌓 Fully functional dark/light mode toggle
- 💾 Theme preference persisted across sessions
- 🖥️ Automatic theme detection from system
- ✨ Smooth transitions between themes
- 🎨 Professional dark mode design
- 📱 Dark mode working on all breakpoints

## Time Estimate

- **Workshop**: 2-3 hours
- **Challenges**: 30-60 minutes
- **Total**: 2.5-4 hours

## Prerequisites

- Completed Module 8
- Understanding of React hooks (useState, useEffect)
- Basic understanding of CSS classes
- Familiarity with browser DevTools

## Resources

- [Tailwind CSS Dark Mode Docs](https://tailwindcss.com/docs/dark-mode)
- [React Context API](https://react.dev/reference/react/useContext)
- [MDN: prefers-color-scheme](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme)
- [MDN: localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

---

Let's build a beautiful dark mode! 🌙✨
