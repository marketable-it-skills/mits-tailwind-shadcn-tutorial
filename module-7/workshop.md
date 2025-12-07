# Module 7 Workshop: Responsive Grid Layout

Welcome to Module 7! In this workshop, you'll transform your single card into a professional dashboard with multiple cards arranged in a responsive grid layout.

## What You'll Build

Starting from your Module 6 interactive card, you'll create a dashboard that displays **6 project cards** in a grid that automatically adapts:

- **Mobile** 📱: 1 column (cards stack vertically)
- **Tablet** 📟: 2 columns side-by-side
- **Desktop** 🖥️: 3 columns for optimal viewing

---

## Starting Point

Make sure you've completed Module 6. Your `App.tsx` should have one interactive card with:

- ✅ ShadCN Card component
- ✅ Competition badge
- ✅ Title, subtitle, and description
- ✅ Technology tags
- ✅ Hover effects and transitions
- ✅ Click handler
- ✅ Keyboard navigation (tabIndex, focus ring, onKeyDown)

If you need the starting code, copy the Module 6 solution to your working directory.

---

## Git: Create Feature Branch

Before starting, create a feature branch for this module:

```bash
git checkout -b feat/module-7-grid-layout
```

---

## Task 1: Set Up the Grid Container

Let's start by creating the outer structure for our grid layout.

### Step 1.1: Update the Main Container

Currently, your `App.tsx` has a flex layout centered for a single card. We need to change this to accommodate multiple cards.

**Find this code** in `src/App.tsx`:

```tsx
<div className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-8 p-8 bg-gray-100">
```

**Replace with**:

```tsx
<div className="min-h-screen bg-gray-100 p-6 md:p-8">
```

#### What Changed?

- ❌ **Removed**: `flex flex-col md:flex-row items-center justify-center gap-8`
  - We no longer need flexbox centering for a single card
- ✅ **Added**: `p-6 md:p-8`
  - Responsive padding: 1.5rem on mobile, 2rem on larger screens
- ✅ **Kept**: `min-h-screen bg-gray-100`
  - Full viewport height with gray background

### Step 1.2: Add Container with Max Width

Inside the main div, wrap your card(s) with a centered container:

```tsx
<div className="min-h-screen bg-gray-100 p-6 md:p-8">
  <div className="max-w-7xl mx-auto">{/* Cards will go here */}</div>
</div>
```

#### Container Classes Explained

- **`max-w-7xl`** - Maximum width of 80rem (1280px)
  - Prevents content from becoming too wide on large screens
  - Maintains readability and visual balance
- **`mx-auto`** - Horizontal margin auto
  - Centers the container horizontally
  - Works with max-width to create elegant spacing

### Step 1.3: Add the Grid Container

Inside the centered container, add the grid wrapper:

```tsx
<div className="min-h-screen bg-gray-100 p-6 md:p-8">
  <div className="max-w-7xl mx-auto">
    <div className="grid grid-cols-1 gap-6">
      {/* Your single card goes here for now */}
      <Card className="...">{/* ... */}</Card>
    </div>
  </div>
</div>
```

#### Grid Classes Explained

- **`grid`** - Enables CSS Grid layout
- **`grid-cols-1`** - Start with 1 column (mobile-first)
- **`gap-6`** - 1.5rem spacing between grid items
  - Consistent, professional spacing
  - Applies to both rows and columns

### Step 1.4: Test the Layout

Save your changes and check the browser. You should see:

- ✅ Your card is still visible
- ✅ Card is centered with proper padding
- ✅ Layout looks clean on mobile and desktop

**Why does it look similar?** Because we're still showing only one card in a 1-column grid. That changes next!

---

## Task 2: Add Multiple Cards with Varied Content

Now let's duplicate your card to create 6 different project cards. We'll use different content for each card to simulate real data.

### Step 2.1: Understand the Card Structure

Your current card should look something like this:

```tsx
<Card
  className="w-80 hover:shadow-2xl hover:scale-[1.02] transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
  tabIndex={0}
  onClick={() => console.log("Card clicked!")}
  onKeyDown={(e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      console.log("Card clicked!");
    }
  }}
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

### Step 2.2: Remove Fixed Width from Cards

**Important**: Remove the `w-80` class from your Card components. The grid will control the card widths.

**Before**:

```tsx
<Card
  className="w-80 hover:shadow-2xl hover:scale-[1.02] ..."
```

**After**:

```tsx
<Card
  className="hover:shadow-2xl hover:scale-[1.02] ..."
```

#### Why Remove `w-80`?

- Grid items should fill their grid cell
- `w-80` (20rem/320px) conflicts with grid column sizing
- Grid handles responsive sizing automatically

### Step 2.3: Duplicate Cards with Different Content

Create 6 cards with varied content. Here's the complete set (update your grid container):

```tsx
<div className="grid grid-cols-1 gap-6">
  {/* Card 1: Backend/Server-Side (Blue theme) */}
  <Card
    className="hover:shadow-2xl hover:scale-[1.02] transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
    tabIndex={0}
    onClick={() => console.log("Backend card clicked!")}
    onKeyDown={(e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        console.log("Backend card clicked!");
      }
    }}
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

  {/* Card 2: Frontend/Mobile (Green theme) */}
  <Card
    className="hover:shadow-2xl hover:scale-[1.02] transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-green-500"
    tabIndex={0}
    onClick={() => console.log("Frontend card clicked!")}
    onKeyDown={(e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        console.log("Frontend card clicked!");
      }
    }}
  >
    <CardHeader>
      <Badge variant="secondary">EuroSkills 2025 Training HU</Badge>
      <CardTitle className="text-2xl font-bold leading-tight">
        ES2025 TRAINING HU S17 - Module A
      </CardTitle>
      <CardDescription className="text-base font-semibold">
        Restaurant Portal - Mobile App
      </CardDescription>
    </CardHeader>
    <CardContent>
      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-4">
        Develop a cross-platform mobile application for restaurant table
        reservations with real-time availability, push notifications, and
        offline-first architecture.
      </p>
      <div className="flex flex-wrap gap-2">
        <Badge
          variant="outline"
          className="bg-green-50 text-green-700 border-green-200"
        >
          frontend
        </Badge>
        <Badge
          variant="outline"
          className="bg-emerald-50 text-emerald-700 border-emerald-200"
        >
          mobile
        </Badge>
        <Badge
          variant="outline"
          className="bg-teal-50 text-teal-700 border-teal-200"
        >
          React Native
        </Badge>
        <Badge
          variant="outline"
          className="bg-lime-50 text-lime-700 border-lime-200"
        >
          offline-first
        </Badge>
      </div>
    </CardContent>
  </Card>

  {/* Card 3: DevOps/Cloud (Orange theme) */}
  <Card
    className="hover:shadow-2xl hover:scale-[1.02] transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-500"
    tabIndex={0}
    onClick={() => console.log("DevOps card clicked!")}
    onKeyDown={(e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        console.log("DevOps card clicked!");
      }
    }}
  >
    <CardHeader>
      <Badge variant="secondary">WorldSkills Lyon 2024</Badge>
      <CardTitle className="text-2xl font-bold leading-tight">
        WS2024 Cloud Computing - Day 3
      </CardTitle>
      <CardDescription className="text-base font-semibold">
        Microservices Deployment Pipeline
      </CardDescription>
    </CardHeader>
    <CardContent>
      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-4">
        Design and implement a CI/CD pipeline for microservices deployment on
        Kubernetes with automated testing, monitoring, and rollback
        capabilities.
      </p>
      <div className="flex flex-wrap gap-2">
        <Badge
          variant="outline"
          className="bg-orange-50 text-orange-700 border-orange-200"
        >
          DevOps
        </Badge>
        <Badge
          variant="outline"
          className="bg-amber-50 text-amber-700 border-amber-200"
        >
          CI/CD
        </Badge>
        <Badge
          variant="outline"
          className="bg-yellow-50 text-yellow-700 border-yellow-200"
        >
          Kubernetes
        </Badge>
        <Badge
          variant="outline"
          className="bg-red-50 text-red-700 border-red-200"
        >
          Docker
        </Badge>
      </div>
    </CardContent>
  </Card>

  {/* Card 4: Full Stack (Purple theme) */}
  <Card
    className="hover:shadow-2xl hover:scale-[1.02] transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-500"
    tabIndex={0}
    onClick={() => console.log("Full Stack card clicked!")}
    onKeyDown={(e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        console.log("Full Stack card clicked!");
      }
    }}
  >
    <CardHeader>
      <Badge variant="secondary">EuroSkills 2025 Training HU</Badge>
      <CardTitle className="text-2xl font-bold leading-tight">
        ES2025 TRAINING HU S17 - Module C
      </CardTitle>
      <CardDescription className="text-base font-semibold">
        E-Commerce Platform - Full Stack
      </CardDescription>
    </CardHeader>
    <CardContent>
      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-4">
        Build a complete e-commerce platform with product catalog, shopping
        cart, payment integration, and admin dashboard using modern full-stack
        technologies.
      </p>
      <div className="flex flex-wrap gap-2">
        <Badge
          variant="outline"
          className="bg-purple-50 text-purple-700 border-purple-200"
        >
          full-stack
        </Badge>
        <Badge
          variant="outline"
          className="bg-violet-50 text-violet-700 border-violet-200"
        >
          Next.js
        </Badge>
        <Badge
          variant="outline"
          className="bg-fuchsia-50 text-fuchsia-700 border-fuchsia-200"
        >
          PostgreSQL
        </Badge>
        <Badge
          variant="outline"
          className="bg-pink-50 text-pink-700 border-pink-200"
        >
          Stripe
        </Badge>
      </div>
    </CardContent>
  </Card>

  {/* Card 5: Security (Red theme) */}
  <Card
    className="hover:shadow-2xl hover:scale-[1.02] transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-red-500"
    tabIndex={0}
    onClick={() => console.log("Security card clicked!")}
    onKeyDown={(e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        console.log("Security card clicked!");
      }
    }}
  >
    <CardHeader>
      <Badge variant="secondary">WorldSkills Lyon 2024</Badge>
      <CardTitle className="text-2xl font-bold leading-tight">
        WS2024 Cybersecurity - Module 2
      </CardTitle>
      <CardDescription className="text-base font-semibold">
        Web Application Security Audit
      </CardDescription>
    </CardHeader>
    <CardContent>
      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-4">
        Perform comprehensive security audit of web applications, identify
        vulnerabilities using OWASP Top 10, and implement security fixes and
        best practices.
      </p>
      <div className="flex flex-wrap gap-2">
        <Badge
          variant="outline"
          className="bg-red-50 text-red-700 border-red-200"
        >
          security
        </Badge>
        <Badge
          variant="outline"
          className="bg-rose-50 text-rose-700 border-rose-200"
        >
          OWASP
        </Badge>
        <Badge
          variant="outline"
          className="bg-pink-50 text-pink-700 border-pink-200"
        >
          penetration-testing
        </Badge>
        <Badge
          variant="outline"
          className="bg-orange-50 text-orange-700 border-orange-200"
        >
          vulnerability
        </Badge>
      </div>
    </CardContent>
  </Card>

  {/* Card 6: Data/Analytics (Indigo theme) */}
  <Card
    className="hover:shadow-2xl hover:scale-[1.02] transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500"
    tabIndex={0}
    onClick={() => console.log("Data card clicked!")}
    onKeyDown={(e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        console.log("Data card clicked!");
      }
    }}
  >
    <CardHeader>
      <Badge variant="secondary">EuroSkills 2025 Training HU</Badge>
      <CardTitle className="text-2xl font-bold leading-tight">
        ES2025 TRAINING HU S17 - Module D
      </CardTitle>
      <CardDescription className="text-base font-semibold">
        Analytics Dashboard - Data Visualization
      </CardDescription>
    </CardHeader>
    <CardContent>
      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-4">
        Design and implement an interactive analytics dashboard with real-time
        data visualization, custom charts, and filtering capabilities using
        modern data libraries.
      </p>
      <div className="flex flex-wrap gap-2">
        <Badge
          variant="outline"
          className="bg-indigo-50 text-indigo-700 border-indigo-200"
        >
          data-viz
        </Badge>
        <Badge
          variant="outline"
          className="bg-blue-50 text-blue-700 border-blue-200"
        >
          React
        </Badge>
        <Badge
          variant="outline"
          className="bg-sky-50 text-sky-700 border-sky-200"
        >
          D3.js
        </Badge>
        <Badge
          variant="outline"
          className="bg-cyan-50 text-cyan-700 border-cyan-200"
        >
          real-time
        </Badge>
      </div>
    </CardContent>
  </Card>
</div>
```

### Step 2.4: Test with Multiple Cards

Save and check your browser. You should now see:

- ✅ 6 different project cards
- ✅ Cards stacked vertically (1 column on all screen sizes for now)
- ✅ Varied content and color themes
- ✅ All cards maintain hover effects and interactivity
- ✅ Console logs different messages for each card click

**Note**: The cards are still in a single column on all screen sizes. We'll fix that next!

---

## Task 3: Make the Grid Responsive

Now let's add responsive breakpoints to create the adaptive layout.

### Step 3.1: Add Responsive Grid Columns

Update your grid container to include responsive classes:

**Before**:

```tsx
<div className="grid grid-cols-1 gap-6">
```

**After**:

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
```

#### Responsive Breakpoints Explained

Let's break down this powerful class combination:

1. **`grid-cols-1`** (default, no prefix)

   - Applies to all screen sizes by default
   - **Mobile** (< 768px): 1 column
   - Cards stack vertically for easy scrolling

2. **`md:grid-cols-2`** (medium screens and up)

   - Overrides at `768px` and above
   - **Tablet** (768px - 1023px): 2 columns
   - Side-by-side cards for better tablet experience

3. **`lg:grid-cols-3`** (large screens and up)
   - Overrides at `1024px` and above
   - **Desktop** (≥ 1024px): 3 columns
   - Optimal viewing with 3 cards per row

#### Mobile-First Approach

Tailwind uses **mobile-first** responsive design:

```
grid-cols-1          →  All sizes start here (mobile)
  ↓
md:grid-cols-2       →  Medium+ overrides to 2 columns (tablet)
  ↓
lg:grid-cols-3       →  Large+ overrides to 3 columns (desktop)
```

### Step 3.2: Adjust Gap for Larger Screens

Let's make the spacing more generous on larger screens:

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
```

#### Gap Utilities

- **`gap-6`** - 1.5rem (24px) spacing on mobile and tablet
- **`lg:gap-8`** - 2rem (32px) spacing on desktop
- Applies to both rows and columns

### Step 3.3: Test Responsive Behavior

Save your changes and test the responsive layout:

#### Method 1: Resize Browser Window

1. Make browser window narrow (mobile size)
   - ✅ Should see 1 column
2. Widen to ~768px (tablet size)
   - ✅ Should switch to 2 columns
3. Widen to ~1024px (desktop size)
   - ✅ Should switch to 3 columns

#### Method 2: Use Browser DevTools

1. Open DevTools (`F12` or `Cmd/Ctrl + Shift + I`)
2. Click **Toggle Device Toolbar** (phone icon or `Cmd/Ctrl + Shift + M`)
3. Test different devices:
   - **iPhone SE** (375px) - 1 column ✅
   - **iPad** (768px) - 2 columns ✅
   - **Desktop** (1920px) - 3 columns ✅

### Step 3.4: Observe the Transitions

As you resize, notice:

- ✅ Grid automatically reflows
- ✅ Card widths adjust to fill columns
- ✅ Spacing remains consistent
- ✅ No horizontal scrollbar
- ✅ All cards maintain aspect ratio and readability

### Step 3.5: Complete Layout Structure

Your complete `App.tsx` should now have this structure:

```tsx
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* 6 cards here */}
        </div>
      </div>
    </div>
  );
}

export default App;
```

---

## Task 4: Commit Your Work

Excellent work! You've created a professional responsive grid layout. Let's save your progress.

### Step 4.1: Check Your Changes

```bash
git status
```

You should see modified: `src/App.tsx`

### Step 4.2: Review Your Changes

```bash
git diff src/App.tsx
```

Review:

- ✅ Changed from flex centering to grid layout
- ✅ Added 6 cards with varied content
- ✅ Responsive grid classes (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`)
- ✅ Removed `w-80` from individual cards

### Step 4.3: Commit Your Changes

```bash
git add src/App.tsx
git commit -m "feat(module-7): implement responsive grid layout with 6 cards"
```

### Step 4.4: Merge to Main

```bash
git checkout main
git merge feat/module-7-grid-layout
```

### Step 4.5: Push to GitHub

```bash
git push
```

---

## 🎉 Congratulations!

You've successfully created a **responsive grid dashboard**! You learned:

- ✅ **CSS Grid** with Tailwind utilities
- ✅ **Responsive breakpoints** (mobile-first design)
- ✅ **Container patterns** (max-width, centering)
- ✅ **Gap utilities** for consistent spacing
- ✅ **Grid column sizing** that adapts to screen size
- ✅ **Professional dashboard layouts**

## Key Takeaways

### 1. Mobile-First Responsive Design

```tsx
// Start with mobile (1 column)
grid - cols - 1;

// Override for tablet (2 columns at 768px+)
md: grid - cols - 2;

// Override for desktop (3 columns at 1024px+)
lg: grid - cols - 3;
```

### 2. Container Best Practices

```tsx
// Outer container: full height, background, padding
<div className="min-h-screen bg-gray-100 p-6 md:p-8">
  // Middle container: max width, centered
  <div className="max-w-7xl mx-auto">
    // Inner container: grid layout
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Cards */}
    </div>
  </div>
</div>
```

### 3. Grid vs Fixed Widths

- ❌ **Don't** use fixed widths (`w-80`) on grid items
- ✅ **Do** let the grid control item sizes
- Grid items automatically fill their column width

---

## What's Next?

In **Module 8**, you'll learn:

- 🔄 Extracting reusable components
- 📦 Component props with TypeScript
- 🎨 Mapping arrays to components
- 📁 Component file organization

This will eliminate the repetitive card code and make the app more maintainable!

---

## Experiments (Optional)

Want to explore more? Try these:

### Experiment 1: Different Column Counts

Try 4 columns on extra-large screens:

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
```

### Experiment 2: Different Gap Sizes

Try different gap values:

```tsx
// Tighter spacing
gap-4

// More generous spacing
gap-10

// Responsive gaps
gap-4 md:gap-6 lg:gap-8 xl:gap-10
```

### Experiment 3: Auto-Fit Columns

Try auto-fitting columns based on minimum size:

```tsx
// This is more advanced, but powerful!
<div className="grid auto-cols-fr grid-flow-col gap-6">
```

### Experiment 4: Add a Header

Add a dashboard header above the grid:

```tsx
<div className="max-w-7xl mx-auto">
  <header className="mb-8">
    <h1 className="text-3xl font-bold text-gray-900">MITS Project Dashboard</h1>
    <p className="mt-2 text-gray-600">
      Browse training modules and competition tasks
    </p>
  </header>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {/* Cards */}
  </div>
</div>
```

---

## Troubleshooting

### Cards Not Wrapping Correctly?

- ✅ Make sure you removed `w-80` from Card components
- ✅ Check that you're using `grid` (not `flex`)
- ✅ Verify `grid-cols-*` classes are applied

### Cards Too Wide on Mobile?

- ✅ Ensure `grid-cols-1` is the default (no prefix)
- ✅ Check that outer container has padding (`p-6`)
- ✅ Verify no `min-w-*` classes on cards

### Spacing Looks Off?

- ✅ Use `gap-6` on the grid container (not margins on cards)
- ✅ Remove any manual `m-*` classes from Card components
- ✅ Let the grid handle all spacing

### Cards Not Clickable?

- ✅ Verify `onClick` and `onKeyDown` are on each Card
- ✅ Check that `cursor-pointer` class is present
- ✅ Ensure `tabIndex={0}` is set for keyboard navigation

---

Ready to refactor this into reusable components? Continue to **Module 8**!
