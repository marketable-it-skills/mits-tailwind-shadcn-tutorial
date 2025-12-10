# Module 9 Solution: Theme Toggle - Dark Mode

This is the complete solution for Module 9, implementing a full dark/light theme system with user preference persistence.

## Features Implemented

- ✅ **Theme Toggle Button** - Sun/moon icons with smooth transitions
- ✅ **React Context API** - Global theme state management
- ✅ **Dark Mode Variants** - All components styled for dark theme
- ✅ **localStorage Persistence** - Theme preference saved across sessions
- ✅ **System Preference Detection** - Automatic theme based on OS setting
- ✅ **Smooth Transitions** - Color changes animate smoothly
- ✅ **Accessibility** - Keyboard navigation and ARIA labels

## Project Structure

```
src/
├── contexts/
│   └── ThemeProvider.tsx        # Theme context and provider
├── components/
│   ├── ThemeToggle.tsx          # Theme toggle button component
│   ├── ProjectCard.tsx          # Updated with dark mode variants
│   └── ui/
│       ├── card.tsx             # Card component (uses semantic colors)
│       └── badge.tsx            # Badge component (uses semantic colors)
├── App.tsx                      # Updated with header and dark mode
├── main.tsx                     # Wrapped with ThemeProvider
└── index.css                    # Dark mode color variables
```

## Key Files

### ThemeProvider Context (`src/contexts/ThemeProvider.tsx`)

Manages theme state using React Context API:
- Initializes theme from localStorage or system preference
- Syncs theme to DOM (adds/removes `dark` class on `<html>`)
- Persists theme changes to localStorage
- Provides `useTheme` hook for consuming theme state

### ThemeToggle Component (`src/components/ThemeToggle.tsx`)

Interactive button for switching themes:
- Displays Sun icon in dark mode, Moon icon in light mode
- Smooth hover and transition effects
- Keyboard accessible with ARIA labels
- Responds to click events to toggle theme

### Dark Mode Colors

Tailwind v4 with CSS custom properties defined in `index.css`:

**Light Theme:**
- Background: `oklch(1 0 0)` (white)
- Card: `oklch(1 0 0)` (white)
- Foreground: `oklch(0.129 0.042 264.695)` (dark blue-gray)

**Dark Theme:**
- Background: `oklch(0.129 0.042 264.695)` (dark blue-gray)
- Card: `oklch(0.208 0.042 265.755)` (slate)
- Foreground: `oklch(0.984 0.003 247.858)` (near white)

## How It Works

### 1. Theme Initialization

```typescript
// Check localStorage first
const savedTheme = localStorage.getItem('theme');

if (savedTheme) {
  setTheme(savedTheme); // Use saved preference
} else {
  // Check system preference
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  setTheme(prefersDark ? 'dark' : 'light');
}
```

### 2. Theme Synchronization

```typescript
useEffect(() => {
  const root = document.documentElement;
  
  if (theme === 'dark') {
    root.classList.add('dark');
  } else {
    root.classList.remove('dark');
  }
  
  localStorage.setItem('theme', theme);
}, [theme]);
```

### 3. Dark Mode Variants

Components use Tailwind's `dark:` variant:

```tsx
<div className="bg-gray-100 dark:bg-slate-950">
  <h1 className="text-gray-900 dark:text-white">Title</h1>
  <p className="text-gray-600 dark:text-slate-400">Description</p>
</div>
```

## Running the Solution

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Test Dark Mode

1. Click the sun/moon button in the header
2. Theme should switch immediately
3. Refresh the page - theme preference persists
4. Check DevTools → Application → Local Storage → `theme` key

### Clear Saved Preference

```javascript
// In browser console:
localStorage.removeItem('theme');
// Refresh page - will use system preference
```

## Technical Details

### Tailwind v4 Dark Mode

Tailwind v4 uses a custom variant for dark mode:

```css
@custom-variant dark (&:is(.dark *));
```

This means any element with the `dark:` prefix will activate when a parent has the `.dark` class.

### React Context Pattern

**Provider** wraps the app:
```tsx
<ThemeProvider>
  <App />
</ThemeProvider>
```

**Consumers** use the hook:
```tsx
const { theme, toggleTheme } = useTheme();
```

### localStorage API

```typescript
// Save
localStorage.setItem('theme', 'dark');

// Read
const theme = localStorage.getItem('theme');

// Remove
localStorage.removeItem('theme');
```

## Color Palette

### Light Mode
- Background: `bg-gray-100`
- Cards: `bg-white` with `border-gray-200`
- Title: `text-gray-900`
- Subtitle: `text-gray-600`
- Description: `text-muted-foreground`

### Dark Mode
- Background: `dark:bg-slate-950`
- Cards: `dark:bg-slate-900` with `dark:border-slate-800`
- Title: `dark:text-white`
- Subtitle: `dark:text-slate-300`
- Description: `dark:text-slate-400`
- Competition Badge: `dark:bg-slate-800 dark:text-slate-300`
- Tags: Reduced opacity with `dark:bg-opacity-20`

## Accessibility Features

- **Keyboard Navigation**: Toggle button is keyboard accessible
- **ARIA Labels**: `aria-label="Toggle theme"` for screen readers
- **Focus Indicators**: Visible focus ring on theme toggle
- **Smooth Transitions**: Color changes animate smoothly (200ms)
- **Color Contrast**: All text meets WCAG AA standards in both themes

## Browser Compatibility

- Chrome/Edge (last 2 versions) ✅
- Firefox (last 2 versions) ✅
- Safari (last 2 versions) ✅
- Mobile browsers ✅

## Troubleshooting

### Theme Flashes on Load

If you see a brief flash of the wrong theme, add this script to `index.html` `<head>`:

```html
<script>
  const theme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (theme === 'dark' || (!theme && prefersDark)) {
    document.documentElement.classList.add('dark');
  }
</script>
```

### localStorage Not Working

Check browser privacy settings - ensure localStorage is enabled.

### Some Components Not Updating

Verify all color classes have `dark:` variants added.

## Next Steps

In Module 10, you'll learn how to transform and load real MITS project data from `collection.json` with language badges, merged technology tags, and dynamic color assignment!

---

**Module 9 Complete!** 🌙✨
