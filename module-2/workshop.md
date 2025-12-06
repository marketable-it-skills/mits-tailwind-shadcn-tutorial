# Module 2 Workshop: Playing with Colors - Light & Dark Cards

## Goal

Create three card variations with different color themes to understand Tailwind's color system and explore color combinations.

---

## Starting Point

Before you begin, make sure you have completed **Module 1** and your app shows a single centered card.

### Start a New Feature Branch

Let's start Module 2 with proper version control:

```bash
git checkout -b feat/module-2-color-exploration
```

> **Reminder**: We'll commit and merge at the end of the module.

---

## Task 1: Understanding Tailwind's Color System

Before we start coding, let's understand how Tailwind organizes colors.

### Color Scales

Tailwind uses a **numeric scale** from 50 (lightest) to 950 (darkest):

```
50  ← Lightest (almost white)
100
200
300
400
500 ← Middle tone
600
700
800
900
950 ← Darkest (almost black)
```

### Common Color Families

- **gray** - Neutral gray tones
- **slate** - Blue-tinted grays (modern, cool)
- **zinc** - Slightly warm grays
- **blue** - Primary blue
- **sky** - Light blue
- **indigo** - Deep blue-purple
- **cyan** - Bright cyan

### Usage Pattern

```tsx
bg - gray - 50; // Light background
bg - gray - 900; // Dark background
text - gray - 600; // Medium gray text
text - gray - 900; // Dark text (almost black)
```

> **Pro tip**: For light themes, use 50-200 for backgrounds and 700-900 for text. For dark themes, reverse it!

---

## Task 2: Create the Multi-Card Layout

Let's change our layout to display multiple cards side-by-side.

### Step 2.1: Update the Layout Container

Open `src/App.tsx` and update the main container:

```tsx
function App() {
  return (
    <div className="min-h-screen flex items-center justify-center gap-6 p-8 bg-gray-100">
      <div className="w-80 p-6 bg-white rounded-lg border border-gray-200 shadow-lg">
        <h2 className="text-xl font-bold text-gray-900">Light Theme</h2>
        <p className="mt-3 text-sm text-gray-600">
          This card uses light colors - white background with dark text for
          maximum readability.
        </p>
      </div>
    </div>
  );
}

export default App;
```

### Step 2.2: Understanding the Changes

| Class         | What it does                               |
| ------------- | ------------------------------------------ |
| `gap-6`       | 1.5rem (24px) space between cards          |
| `p-8`         | 2rem (32px) padding around the container   |
| `bg-gray-100` | Light gray background (instead of gray-50) |
| `w-80`        | Fixed width of 20rem (320px) per card      |

You should now see one card with slightly different background and updated text.

---

## Task 3: Add the Dark Theme Card

Now let's add a second card with a dark theme.

### Step 3.1: Add the Dark Card

Update your `App.tsx` to include both cards:

```tsx
function App() {
  return (
    <div className="min-h-screen flex items-center justify-center gap-6 p-8 bg-gray-100">
      {/* Light Card */}
      <div className="w-80 p-6 bg-white rounded-lg border border-gray-200 shadow-lg">
        <h2 className="text-xl font-bold text-gray-900">Light Theme</h2>
        <p className="mt-3 text-sm text-gray-600">
          This card uses light colors - white background with dark text for
          maximum readability.
        </p>
      </div>

      {/* Dark Card */}
      <div className="w-80 p-6 bg-slate-900 rounded-lg border border-slate-700 shadow-xl">
        <h2 className="text-xl font-bold text-white">Dark Theme</h2>
        <p className="mt-3 text-sm text-slate-300">
          This card uses dark colors - dark background with light text for a
          modern, elegant look.
        </p>
      </div>
    </div>
  );
}

export default App;
```

### Step 3.2: Understanding Dark Theme Colors

**Dark Card Color Choices:**

| Element     | Class              | Why this works                   |
| ----------- | ------------------ | -------------------------------- |
| Background  | `bg-slate-900`     | Very dark (but not pure black)   |
| Border      | `border-slate-700` | Slightly lighter than background |
| Title       | `text-white`       | Maximum contrast                 |
| Description | `text-slate-300`   | Softer, easier on eyes           |
| Shadow      | `shadow-xl`        | Larger shadow for depth          |

> **Design Tip**: Use `slate` instead of `gray` for dark themes - it has a subtle blue tint that looks more modern!

---

## Task 4: Add the Colored Accent Card

Let's add a third card with a colored background.

### Step 4.1: Add the Blue Accent Card

Add the third card to your layout:

```tsx
function App() {
  return (
    <div className="min-h-screen flex items-center justify-center gap-6 p-8 bg-gray-100">
      {/* Light Card */}
      <div className="w-80 p-6 bg-white rounded-lg border border-gray-200 shadow-lg">
        <h2 className="text-xl font-bold text-gray-900">Light Theme</h2>
        <p className="mt-3 text-sm text-gray-600">
          This card uses light colors - white background with dark text for
          maximum readability.
        </p>
      </div>

      {/* Dark Card */}
      <div className="w-80 p-6 bg-slate-900 rounded-lg border border-slate-700 shadow-xl">
        <h2 className="text-xl font-bold text-white">Dark Theme</h2>
        <p className="mt-3 text-sm text-slate-300">
          This card uses dark colors - dark background with light text for a
          modern, elegant look.
        </p>
      </div>

      {/* Colored Accent Card */}
      <div className="w-80 p-6 bg-blue-50 rounded-lg border border-blue-200 shadow-lg">
        <h2 className="text-xl font-bold text-blue-900">Colored Theme</h2>
        <p className="mt-3 text-sm text-blue-700">
          This card uses colored accents - blue tinted background with blue text
          for visual interest.
        </p>
      </div>
    </div>
  );
}

export default App;
```

### Step 4.2: Understanding Colored Theme

**Blue Accent Card Color Choices:**

| Element     | Class             | Why this works                |
| ----------- | ----------------- | ----------------------------- |
| Background  | `bg-blue-50`      | Very light blue (subtle tint) |
| Border      | `border-blue-200` | Light blue, visible but soft  |
| Title       | `text-blue-900`   | Dark blue (high contrast)     |
| Description | `text-blue-700`   | Medium blue (readable)        |

> **Color Harmony Tip**: Use the same color family (blue-50, blue-200, blue-700, blue-900) for a harmonious look!

---

## Task 5: Make it Responsive

Right now, if you resize your browser, the cards might overlap on smaller screens. Let's fix that!

### Step 5.1: Add Responsive Layout

Update the container to stack cards vertically on mobile:

```tsx
function App() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-6 p-8 bg-gray-100">
      {/* Cards stay the same */}
    </div>
  );
}
```

### Step 5.2: Understanding Responsive Classes

| Class         | What it does                                    |
| ------------- | ----------------------------------------------- |
| `flex-col`    | Stack vertically (default for mobile)           |
| `md:flex-row` | Switch to horizontal at medium screens (768px+) |

> **Responsive Design**: Tailwind uses breakpoint prefixes (`sm:`, `md:`, `lg:`, `xl:`) to apply styles at different screen sizes.

---

## Task 6: Experiment with Colors! 🎨

Now it's time to play! Try these experiments:

### Experiment 1: Try Different Grays

Replace the light card's colors:

```tsx
// Try slate instead of gray
<div className="... bg-slate-50 border-slate-200">
  <h2 className="... text-slate-900">...</h2>
  <p className="... text-slate-600">...</p>
</div>
```

**Question**: Do you notice the blue tint in slate compared to gray?

### Experiment 2: Try Different Dark Backgrounds

Replace the dark card's background:

```tsx
// Try zinc or gray instead of slate
bg - zinc - 900; // Warmer dark
bg - gray - 900; // Neutral dark
bg - slate - 900; // Cooler dark (blue-tinted)
```

**Question**: Which feels most "modern" to you?

### Experiment 3: Try Different Colored Themes

Replace the blue accent card with other colors:

```tsx
// Try indigo theme
<div className="... bg-indigo-50 border-indigo-200">
  <h2 className="... text-indigo-900">Indigo Theme</h2>
  <p className="... text-indigo-700">...</p>
</div>

// Or try green theme
<div className="... bg-green-50 border-green-200">
  <h2 className="... text-green-900">Green Theme</h2>
  <p className="... text-green-700">...</p>
</div>

// Or try purple theme
<div className="... bg-purple-50 border-purple-200">
  <h2 className="... text-purple-900">Purple Theme</h2>
  <p className="... text-purple-700">...</p>
</div>
```

### Experiment 4: Extreme Contrasts (What NOT to Do)

Try this **bad** example to understand contrast:

```tsx
// BAD: Low contrast (hard to read!)
<div className="bg-gray-100 ...">
  <h2 className="text-gray-300">Can you read this?</h2>
</div>
```

**Question**: Why is this hard to read? (Hint: Not enough contrast!)

---

---

## Task 7: Commit Your Work

Now that you've completed the color exploration, let's save your work:

```bash
# Stage and commit
git add .
git commit -m "feat: add color exploration with light, dark, and colored cards"

# Merge to main and push
git checkout main
git merge feat/module-2-color-exploration
git push
```

> **Note**: Since you set up the upstream in Module 1, you can now just use `git push`!

---

## 🎉 Congratulations!

You've completed Module 2! You now understand:

1. ✅ Tailwind's color scale system (50-950)
2. ✅ How to create light, dark, and colored themes
3. ✅ Color contrast and readability principles
4. ✅ Responsive layout with flexbox
5. ✅ How to experiment with different color combinations
6. ✅ Continuing professional Git workflow

## Color Contrast Rules (Accessibility)

Remember these guidelines:

- **Text on backgrounds**: Need 4.5:1 contrast ratio minimum (WCAG AA)
- **Light themes**: Dark text (700-900) on light backgrounds (50-200)
- **Dark themes**: Light text (100-300) on dark backgrounds (700-950)
- **Colored themes**: Use same color family for harmony

## Challenge Exercises

1. **Create a red-themed card** - Use red-50, red-200, red-700, red-900
2. **Create an amber/yellow card** - Try amber or yellow color scales
3. **Create a gradient effect** - Use `from-` and `to-` with `bg-gradient-to-r`
4. **Add hover effects** - Make cards brighten on hover

## What's Next?

In **Module 3**, we'll refine typography and spacing:

- Different font sizes and weights
- Better text hierarchy
- Line clamping for long text
- Spacing utilities

---

## Quick Reference: Color System

```
Color Scales:
  50  → Lightest (backgrounds in light theme)
  100 → Very light
  200 → Light (borders in light theme)
  300 → Light-medium (muted text in dark theme)
  400 → Medium-light
  500 → Middle
  600 → Medium-dark (body text in light theme)
  700 → Dark (borders in dark theme, text in colored themes)
  800 → Very dark
  900 → Darkest (headings, backgrounds in dark theme)
  950 → Almost black

Common Pairings:
  Light theme:  bg-white + text-gray-900 + border-gray-200
  Dark theme:   bg-slate-900 + text-white + border-slate-700
  Colored theme: bg-blue-50 + text-blue-900 + border-blue-200

Responsive:
  flex-col         → Stack vertically (mobile)
  md:flex-row      → Horizontal at ≥768px
```
