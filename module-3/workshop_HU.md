# Module 3 Workshop: Typography & Text Styling

## Goal

Refine the typography and text hierarchy of your cards to create a more professional and readable design.

---

## Starting Point

Before you begin, make sure you have completed **Module 2** and your app shows three color-themed cards.

### Start a New Feature Branch

```bash
git checkout -b feat/module-3-typography
```

---

## Task 1: Understanding Tailwind's Typography System

Let's explore how Tailwind organizes typography utilities.

### Font Sizes

Tailwind provides a scale of font sizes:

| Class       | Font Size       | When to Use                |
| ----------- | --------------- | -------------------------- |
| `text-xs`   | 0.75rem (12px)  | Tiny labels, captions      |
| `text-sm`   | 0.875rem (14px) | Body text, descriptions    |
| `text-base` | 1rem (16px)     | Default body text          |
| `text-lg`   | 1.125rem (18px) | Emphasized text, subtitles |
| `text-xl`   | 1.25rem (20px)  | Small headings             |
| `text-2xl`  | 1.5rem (24px)   | Section headings           |
| `text-3xl`  | 1.875rem (30px) | Page titles                |

### Font Weights

| Class            | Font Weight | When to Use         |
| ---------------- | ----------- | ------------------- |
| `font-normal`    | 400         | Body text           |
| `font-medium`    | 500         | Slightly emphasized |
| `font-semibold`  | 600         | Subtitles, labels   |
| `font-bold`      | 700         | Headings            |
| `font-extrabold` | 800         | Hero titles         |

### Line Heights

| Class             | Line Height | When to Use            |
| ----------------- | ----------- | ---------------------- |
| `leading-none`    | 1           | Tight (large headings) |
| `leading-tight`   | 1.25        | Headlines              |
| `leading-snug`    | 1.375       | Compact text           |
| `leading-normal`  | 1.5         | Body text (default)    |
| `leading-relaxed` | 1.625       | Comfortable reading    |

> **Pro Tip**: Larger text usually needs tighter line height, smaller text needs more breathing room!

---

## Task 2: Enhance the Title Typography

Let's make our card titles larger and more prominent.

### Step 2.1: Update the Light Card Title

Open `src/App.tsx` and update the light card's title:

```tsx
{
  /* Light Card */
}
<div className="w-80 p-6 bg-white rounded-lg border border-gray-200 shadow-lg">
  <h2 className="text-2xl font-bold text-gray-900 leading-tight">
    ES2025 TRAINING HU S17 - Module B
  </h2>
  <p className="mt-3 text-sm text-gray-600">
    This card uses light colors - white background with dark text for maximum
    readability.
  </p>
</div>;
```

### Step 2.2: Understanding the Changes

| Changed     | From      | To              | Why                                    |
| ----------- | --------- | --------------- | -------------------------------------- |
| Font Size   | `text-xl` | `text-2xl`      | More prominent, better hierarchy       |
| Line Height | (default) | `leading-tight` | Tighter lines for headings look better |

You should see the title is now larger and has tighter spacing between lines.

### Step 2.3: Apply to All Cards

Update the dark and colored cards with the same changes:

```tsx
{
  /* Dark Card */
}
<div className="w-80 p-6 bg-slate-900 rounded-lg border border-slate-700 shadow-xl">
  <h2 className="text-2xl font-bold text-white leading-tight">
    ES2025 TRAINING HU S17 - Module B
  </h2>
  <p className="mt-3 text-sm text-slate-300">
    This card uses dark colors - dark background with light text for a modern,
    elegant look.
  </p>
</div>;

{
  /* Colored Card */
}
<div className="w-80 p-6 bg-blue-50 rounded-lg border border-blue-200 shadow-lg">
  <h2 className="text-2xl font-bold text-blue-900 leading-tight">
    ES2025 TRAINING HU S17 - Module B
  </h2>
  <p className="mt-3 text-sm text-blue-700">
    This card uses colored accents - blue tinted background with blue text for
    visual interest.
  </p>
</div>;
```

---

## Task 3: Add a Subtitle

Let's add a subtitle between the title and description for better hierarchy.

### Step 3.1: Add Subtitle to Light Card

```tsx
{
  /* Light Card */
}
<div className="w-80 p-6 bg-white rounded-lg border border-gray-200 shadow-lg">
  <h2 className="text-2xl font-bold text-gray-900 leading-tight">
    ES2025 TRAINING HU S17 - Module B
  </h2>
  <p className="mt-2 text-base font-semibold text-gray-600">
    SkillShare Academy - Dynamic Website
  </p>
  <p className="mt-3 text-sm text-gray-600">
    Create a server-side rendered administrative interface for SkillShare
    Academy platform management with role-based access control.
  </p>
</div>;
```

### Step 3.2: Understanding the Subtitle Styling

| Class           | Purpose                                    |
| --------------- | ------------------------------------------ |
| `mt-2`          | Small top margin (8px) - close to title    |
| `text-base`     | Medium font size (16px)                    |
| `font-semibold` | Semi-bold weight (between normal and bold) |
| `text-gray-600` | Medium gray (matches description)          |

> **Hierarchy Tip**: The subtitle uses smaller margin (`mt-2`) to stay visually connected to the title, while the description uses larger margin (`mt-3`) to create separation.

### Step 3.3: Add Subtitles to All Cards

```tsx
{
  /* Dark Card */
}
<div className="w-80 p-6 bg-slate-900 rounded-lg border border-slate-700 shadow-xl">
  <h2 className="text-2xl font-bold text-white leading-tight">
    ES2025 TRAINING HU S17 - Module B
  </h2>
  <p className="mt-2 text-base font-semibold text-slate-400">
    SkillShare Academy - Dynamic Website
  </p>
  <p className="mt-3 text-sm text-slate-300">
    Create a server-side rendered administrative interface for SkillShare
    Academy platform management with role-based access control.
  </p>
</div>;

{
  /* Colored Card */
}
<div className="w-80 p-6 bg-blue-50 rounded-lg border border-blue-200 shadow-lg">
  <h2 className="text-2xl font-bold text-blue-900 leading-tight">
    ES2025 TRAINING HU S17 - Module B
  </h2>
  <p className="mt-2 text-base font-semibold text-blue-700">
    SkillShare Academy - Dynamic Website
  </p>
  <p className="mt-3 text-sm text-blue-700">
    Create a server-side rendered administrative interface for SkillShare
    Academy platform management with role-based access control.
  </p>
</div>;
```

---

## Task 4: Improve Description Typography

Let's make the description text more comfortable to read.

### Step 4.1: Add Line Height to Descriptions

Update all three cards' descriptions to add `leading-relaxed`:

```tsx
{
  /* Light Card - Description */
}
<p className="mt-3 text-sm text-gray-600 leading-relaxed">
  Create a server-side rendered administrative interface for SkillShare Academy
  platform management with role-based access control.
</p>;

{
  /* Dark Card - Description */
}
<p className="mt-3 text-sm text-slate-300 leading-relaxed">
  Create a server-side rendered administrative interface for SkillShare Academy
  platform management with role-based access control.
</p>;

{
  /* Colored Card - Description */
}
<p className="mt-3 text-sm text-blue-700 leading-relaxed">
  Create a server-side rendered administrative interface for SkillShare Academy
  platform management with role-based access control.
</p>;
```

### Step 4.2: Why Leading-Relaxed?

`leading-relaxed` (line-height: 1.625) gives text more breathing room, making multi-line text easier to read. Compare:

- **Without**: Lines feel cramped
- **With `leading-relaxed`**: Text is more comfortable to scan

---

## Task 5: Add Text Truncation

Let's add line clamping to limit descriptions to 3 lines with an ellipsis.

### Step 5.1: Add Line Clamp to Light Card

```tsx
{
  /* Light Card - Description */
}
<p className="mt-3 text-sm text-gray-600 leading-relaxed line-clamp-3">
  Create a server-side rendered administrative interface for SkillShare Academy
  platform management with role-based access control and OWASP security
  compliance. This comprehensive system allows restaurant owners to manage all
  aspects of their business efficiently.
</p>;
```

### Step 5.2: Understanding Line Clamp

| Class             | Effect            |
| ----------------- | ----------------- |
| `line-clamp-1`    | Limit to 1 line   |
| `line-clamp-2`    | Limit to 2 lines  |
| `line-clamp-3`    | Limit to 3 lines  |
| `line-clamp-4`    | Limit to 4 lines  |
| `line-clamp-none` | Remove line clamp |

When text exceeds the limit, it's cut off with `...` (ellipsis).

### Step 5.3: Add Line Clamp to All Cards

```tsx
{
  /* Dark Card - Description */
}
<p className="mt-3 text-sm text-slate-300 leading-relaxed line-clamp-3">
  Create a server-side rendered administrative interface for SkillShare Academy
  platform management with role-based access control and OWASP security
  compliance. This comprehensive system allows restaurant owners to manage all
  aspects of their business efficiently.
</p>;

{
  /* Colored Card - Description */
}
<p className="mt-3 text-sm text-blue-700 leading-relaxed line-clamp-3">
  Create a server-side rendered administrative interface for SkillShare Academy
  platform management with role-based access control and OWASP security
  compliance. This comprehensive system allows restaurant owners to manage all
  aspects of their business efficiently.
</p>;
```

---

## Task 6: Fine-Tune Spacing

Let's optimize the spacing within our cards for perfect visual rhythm.

### Step 6.1: Increase Card Padding

Change card padding from `p-6` to `p-8` for more breathing room:

```tsx
{/* Apply to all three cards */}
<div className="w-80 p-8 bg-white rounded-lg border border-gray-200 shadow-lg">
```

### Step 6.2: Adjust Description Margin

Change description margin from `mt-3` to `mt-4` for more separation:

```tsx
<p className="mt-4 text-sm text-gray-600 leading-relaxed line-clamp-3">
```

### Step 6.3: The Final Light Card

Here's how the complete light card should look:

```tsx
{
  /* Light Card */
}
<div className="w-80 p-8 bg-white rounded-lg border border-gray-200 shadow-lg">
  <h2 className="text-2xl font-bold text-gray-900 leading-tight">
    ES2025 TRAINING HU S17 - Module B
  </h2>
  <p className="mt-2 text-base font-semibold text-gray-600">
    SkillShare Academy - Dynamic Website
  </p>
  <p className="mt-4 text-sm text-gray-600 leading-relaxed line-clamp-3">
    Create a server-side rendered administrative interface for SkillShare
    Academy platform management with role-based access control and OWASP
    security compliance. This comprehensive system allows restaurant owners to
    manage all aspects of their business efficiently.
  </p>
</div>;
```

---

---

## Task 7: Commit Your Work

Save your typography enhancements:

```bash
git add .
git commit -m "feat: enhance typography with hierarchy and spacing"

# Merge to main and push
git checkout main
git merge feat/module-3-typography
git push
```

---

## Congratulations!

You've completed Module 3! Your cards now have:

1. Professional typography hierarchy
2. Larger, more prominent titles
3. Clear subtitles for context
4. Readable descriptions with proper line height
5. Text truncation for long content
6. Perfect spacing throughout
7. Changes saved with Git

## Typography Best Practices

Remember these guidelines:

- **Hierarchy**: Use size, weight, and color to create clear levels
- **Readability**: Smaller text needs more line height
- **Spacing**: Group related content close, separate sections with more space
- **Truncation**: Use line clamp to handle variable-length content
- **Consistency**: Apply the same patterns across all variations

## Before vs After

**Before** (Module 2):

- Single font size
- No clear hierarchy
- Inconsistent spacing

**After** (Module 3):

- Three-level hierarchy (title, subtitle, description)
- Professional spacing
- Controlled text overflow

## Challenge Exercises

1. **Add a fourth level** - Add a small label above the title (e.g., "Module B")
2. **Try different weights** - Experiment with `font-medium` for subtle emphasis
3. **Adjust line clamp** - Try `line-clamp-2` or `line-clamp-4`
4. **Add letter spacing** - Use `tracking-tight` or `tracking-wide`

## What's Next?

In **Module 4**, we'll introduce **ShadCN UI**:

- Install a component library
- Replace hand-built cards with ShadCN Card component
- Learn how libraries abstract Tailwind patterns
- See the "before and after" comparison

This is a pivotal module where you'll appreciate what you've learned by seeing how component libraries work!

---

## Quick Reference: Typography Classes

```
Font Sizes:
  text-sm    → 14px (descriptions)
  text-base  → 16px (subtitles)
  text-lg    → 18px (small headings)
  text-xl    → 20px (headings)
  text-2xl   → 24px (large headings)

Font Weights:
  font-normal    → 400 (body)
  font-semibold  → 600 (subtitles)
  font-bold      → 700 (headings)

Line Heights:
  leading-tight    → 1.25 (headings)
  leading-normal   → 1.5 (default)
  leading-relaxed  → 1.625 (body text)

Text Truncation:
  line-clamp-1   → Single line
  line-clamp-2   → Two lines
  line-clamp-3   → Three lines

Spacing:
  mt-2   → 8px (close grouping)
  mt-3   → 12px (default separation)
  mt-4   → 16px (clear separation)
  p-8    → 32px padding
```
