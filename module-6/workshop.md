# Module 6 Workshop: Card Interactions & Hover Effects

## Prerequisites

- Completed Module 5
- Three cards with badges and tags
- Understanding of Tailwind className usage
- Familiarity with React event handlers

## Starting Point

Before starting this module, ensure you're on the `main` branch with Module 5 completed:

```bash
# Make sure you're on main with Module 5 completed
git checkout main

# Create a new feature branch for Module 6
git checkout -b feat/module-6-workshop
```

## Task 1: Add Hover Shadow Effect

Let's start by making the card's shadow increase on hover.

### Step 1.1: Add Hover Shadow to Light Card

Find your first card (light card) in `src/App.tsx` and update the `Card` component:

**Before:**

```tsx
<Card className="w-80">
```

**After:**

```tsx
<Card className="w-80 hover:shadow-2xl cursor-pointer">
```

**Save the file** and test in your browser:

- Hover over the light card
- The shadow should increase (but it might feel abrupt)

**What we added:**

- `hover:shadow-2xl` - Increases shadow on hover (from default `shadow-sm` to `shadow-2xl`)
- `cursor-pointer` - Changes cursor to pointer (hand icon)

### Step 1.2: Understanding the Change

The `hover:` prefix in Tailwind applies styles only when you hover over the element. It's like writing:

```css
.card:hover {
  box-shadow: /* shadow-2xl value */ ;
}
```

But with Tailwind, you just write `hover:shadow-2xl` right in the className.

---

## Task 2: Add Scale Transform on Hover

Now let's make the card grow slightly on hover.

### Step 2.1: Add Scale Effect

Update the same light card:

**Before:**

```tsx
<Card className="w-80 hover:shadow-2xl cursor-pointer">
```

**After:**

```tsx
<Card className="w-80 hover:shadow-2xl hover:scale-[1.02] cursor-pointer">
```

**Save and test:**

- The card should now grow slightly on hover
- But it still feels abrupt

**What we added:**

- `hover:scale-[1.02]` - Scales card to 102% (slightly larger)

### Step 2.2: Understanding Transforms

`scale-[1.02]` uses arbitrary values in Tailwind:

- `scale-100` = 100% (normal size)
- `scale-[1.02]` = 102% (slightly larger)
- `scale-105` = 105% (too large for subtle effect)

The bracket syntax `[]` lets you use custom values not in Tailwind's default scale.

---

## Task 3: Add Smooth Transitions

The hover effects work, but they're jarring. Let's add smooth transitions.

### Step 3.1: Add Transition Utilities

Update the light card:

**Before:**

```tsx
<Card className="w-80 hover:shadow-2xl hover:scale-[1.02] cursor-pointer">
```

**After:**

```tsx
<Card className="w-80 hover:shadow-2xl hover:scale-[1.02] transition-all duration-200 cursor-pointer">
```

**Save and test:**

- Now the hover effects should be smooth!
- The card animates between states

**What we added:**

- `transition-all` - Transitions all properties (shadow, transform, etc.)
- `duration-200` - Animation lasts 200ms

### Step 3.2: Understanding Transitions

CSS transitions make state changes smooth:

```tsx
transition - all; // Transition all properties
duration - 200; // 200 milliseconds
```

**Duration options:**

- `duration-100` - Very fast (100ms)
- `duration-200` - Fast (200ms) ← We're using this
- `duration-300` - Medium (300ms)
- `duration-500` - Slow (500ms)

**Try experimenting:**

- Change `duration-200` to `duration-300` - notice the slower animation
- Change `duration-200` to `duration-100` - notice the faster animation
- Try `duration-500` - too slow for a card hover!

**Best practice**: For hover effects, 150-300ms feels natural.

---

## Task 4: Make Cards Clickable

Let's add a click handler to log when a card is clicked.

### Step 4.1: Add onClick Handler

Update the light card in `src/App.tsx`:

**Before:**

```tsx
<Card className="w-80 hover:shadow-2xl hover:scale-[1.02] transition-all duration-200 cursor-pointer">
  <CardHeader>
```

**After:**

```tsx
<Card
  className="w-80 hover:shadow-2xl hover:scale-[1.02] transition-all duration-200 cursor-pointer"
  onClick={() => console.log('Light card clicked!')}
>
  <CardHeader>
```

**Save and test:**

- Click the light card
- Open browser DevTools (F12 → Console tab)
- You should see "Light card clicked!" in the console

### Step 4.2: Understanding Event Handlers

In React, you can add event handlers to any element:

```tsx
onClick={() => console.log('Clicked!')}    // Click handler
onMouseEnter={() => console.log('Hover')}  // Mouse enter
onFocus={() => console.log('Focused')}     // Focus handler
```

We're using an arrow function to execute code when the card is clicked:

```tsx
onClick={() => console.log('Light card clicked!')}
```

Later (in Module 8), we'll navigate to a project detail page instead of just logging.

---

## Task 5: Apply to All Cards

Now let's add the same interactive effects to all three cards.

### Step 5.1: Update Dark Card

Find your dark card and update it:

**Before:**

```tsx
<Card className="w-80 bg-slate-900 rounded-lg border border-slate-700">
```

**After:**

```tsx
<Card
  className="w-80 bg-slate-900 rounded-lg border border-slate-700 hover:shadow-2xl hover:scale-[1.02] transition-all duration-200 cursor-pointer"
  onClick={() => console.log('Dark card clicked!')}
>
```

### Step 5.2: Update Colored Card

Find your blue colored card and update it:

**Before:**

```tsx
<Card className="w-80  bg-blue-50 rounded-lg border border-blue-200">
```

**After:**

```tsx
<Card
  className="w-80 bg-blue-50 rounded-lg border border-blue-200 hover:shadow-2xl hover:scale-[1.02] transition-all duration-200 cursor-pointer"
  onClick={() => console.log('Colored card clicked!')}
>
```

### Step 5.3: Test All Cards

**Save and test in browser:**

1. **Hover over each card**:

   - Shadow should increase smoothly
   - Card should scale up slightly
   - Cursor should change to pointer

2. **Click each card**:
   - Open DevTools Console (F12)
   - Click light card → see "Light card clicked!"
   - Click dark card → see "Dark card clicked!"
   - Click colored card → see "Colored card clicked!"

**All three cards should now have:**

- ✅ Smooth hover animations
- ✅ Increased shadow on hover
- ✅ Subtle scale effect
- ✅ Pointer cursor
- ✅ Click logging

---

## Task 6: Refine and Experiment (Optional)

Try these variations to see what works best:

### Experiment 1: Try Different Scales

```tsx
hover: scale - [1.01]; // More subtle
hover: scale - [1.03]; // More dramatic
hover: scale - 105; // Too much!
```

### Experiment 2: Try Different Durations

```tsx
duration - 150; // Snappier
duration - 300; // Smoother
duration - 500; // Too slow
```

### Experiment 3: Add Vertical Movement

```tsx
hover:translate-y-[-4px]   // Lift up on hover
```

**Try adding this to one card:**

```tsx
<Card
  className="w-80 hover:shadow-2xl hover:scale-[1.02] hover:translate-y-[-4px] transition-all duration-200 cursor-pointer"
>
```

### Experiment 4: Add Focus State (Accessibility)

For keyboard navigation:

```tsx
<Card
  className="w-80 hover:shadow-2xl hover:scale-[1.02] transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
  tabIndex={0}
  onClick={() => console.log('Card clicked!')}
>
```

This adds:

- `focus:outline-none` - Removes default browser outline
- `focus:ring-2 focus:ring-blue-500` - Adds custom blue ring
- `tabIndex={0}` - Makes card keyboard focusable

---

## Understanding Layered Interactions

When you combine multiple hover effects, they work together:

```tsx
className="
  hover:shadow-2xl        ← Shadow increases
  hover:scale-[1.02]      ← Card grows
  transition-all          ← Both animate smoothly
  duration-200            ← Over 200ms
  cursor-pointer          ← Cursor changes
"
```

The `transition-all` applies to **all** the properties that change on hover, creating a cohesive animation.

---

## Your Final Code

Here's what one complete card should look like:

```tsx
<Card
  className="w-80 hover:shadow-2xl hover:scale-[1.02] transition-all duration-200 cursor-pointer"
  onClick={() => console.log("Light card clicked!")}
>
  <CardHeader>
    <Badge variant="secondary">EuroSkills 2025 Training HU</Badge>
    <CardTitle className="text-2xl font-bold leading-tight">
      ES2025 TRAINING HU S17 - Module B
    </CardTitle>
    <CardDescription className="text-base font-semibold">
      SkillsShare Academy - Dynamic Website
    </CardDescription>
  </CardHeader>
  <CardContent>
    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-4">
      Create a server-side rendered administrative interface for SkillShare
      Academy platform management with role-based access control and OWASP
      security compliance.
    </p>
    <div className="flex flex-wrap gap-2">
      <Badge
        variant="outline"
        className="bg-blue-50 text-blue-700 border-blue-200"
      >
        backend
      </Badge>
      <Badge
        variant="outline"
        className="bg-cyan-50 text-cyan-700 border-cyan-200"
      >
        server-side
      </Badge>
      <Badge
        variant="outline"
        className="bg-sky-50 text-sky-700 border-sky-200"
      >
        MySQL
      </Badge>
      <Badge
        variant="outline"
        className="bg-purple-50 text-purple-700 border-purple-200"
      >
        authentication
      </Badge>
    </div>
  </CardContent>
</Card>
```

---

## Task 7: Version Control

Let's commit your work!

### Step 7.1: Check Your Changes

```bash
git status
```

You should see:

- Modified: `src/App.tsx`

### Step 7.2: Commit Your Work

```bash
# Stage your changes
git add src/App.tsx

# Commit with a descriptive message
git commit -m "feat: add card hover effects and interactions"
```

### Step 7.3: Merge to Main and Push

```bash
# Switch to main branch
git checkout main

# Merge your feature branch
git merge feat/module-6-workshop

# Push to GitHub
git push
```

---

## What You've Learned

✅ **Hover State Modifiers**

- Using `hover:` prefix for hover-specific styles
- Applying multiple hover effects

✅ **CSS Transitions**

- Making state changes smooth with `transition-all`
- Controlling animation duration

✅ **Transform Utilities**

- Scaling elements with `scale-[1.02]`
- Using arbitrary values with brackets

✅ **Interactive States**

- Changing cursor with `cursor-pointer`
- Adding click handlers with `onClick`

✅ **Layered Effects**

- Combining shadow, scale, and transitions
- Creating cohesive animations

✅ **Best Practices**

- 150-300ms for hover effects
- Subtle scale (1.01-1.03)
- Cursor feedback for clickable elements

---

## Common Issues & Solutions

### Issue 1: Hover Effect Feels Abrupt

**Problem**: Card jumps between states
**Solution**: Add `transition-all duration-200`

### Issue 2: Animation Too Slow

**Problem**: Card takes too long to animate
**Solution**: Use `duration-150` or `duration-200` instead of `duration-500`

### Issue 3: Scale Too Dramatic

**Problem**: Card grows too much
**Solution**: Use `scale-[1.01]` or `scale-[1.02]` instead of larger values

### Issue 4: Can't Click Card

**Problem**: onClick not working
**Solution**: Make sure you're passing a function:

```tsx
onClick={() => console.log('Clicked!')}
```

Not:

```tsx
onClick={console.log('Clicked!')}  // ❌ This runs immediately!
```

---

## Next Steps

In **Module 7**, we'll:

- Create a responsive grid layout
- Display 6 cards instead of 3
- Adapt grid to different screen sizes
- Add proper spacing and alignment

Your cards are now interactive! 🎯✨

---

## Quick Reference

### Hover Effects

```tsx
hover:shadow-xl       // Increase shadow
hover:shadow-2xl      // Increase shadow more
hover:scale-[1.02]    // Scale to 102%
hover:translate-y-[-4px]  // Move up 4px
```

### Transitions

```tsx
transition - all; // Transition all properties
transition - shadow; // Only shadow
transition - transform; // Only transforms
duration - 200; // 200ms duration
```

### Cursor States

```tsx
cursor - pointer; // Hand cursor
cursor - not - allowed; // Blocked cursor
cursor - wait; // Loading cursor
```

### Click Handlers

```tsx
onClick={() => console.log('Clicked!')}
onClick={handleClick}
```
