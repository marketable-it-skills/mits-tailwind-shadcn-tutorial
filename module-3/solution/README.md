# Module 3 Solution: Typography & Text Styling

This is the complete solution for Module 3 of the MITS Dashboard Tutorial.

## What's Included

- ✅ Enhanced typography with proper hierarchy
- ✅ Larger, more prominent titles (`text-2xl`)
- ✅ Subtitles for additional context
- ✅ Improved description readability (`leading-relaxed`)
- ✅ Text truncation with line clamp (`line-clamp-3`)
- ✅ Optimized spacing throughout

## How to Run

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Start the development server:**

   ```bash
   npm run dev
   ```

3. **Open in browser:**

   Navigate to `http://localhost:5173`

## What You See

Three cards with refined typography showing clear visual hierarchy:

1. **Title** - Large, bold, tight line height (`text-2xl font-bold leading-tight`)
2. **Subtitle** - Medium, semi-bold (`text-base font-semibold`)
3. **Description** - Small, relaxed, truncated (`text-sm leading-relaxed line-clamp-3`)

## Typography Specifications

### Title
- **Size**: `text-2xl` (24px / 1.5rem)
- **Weight**: `font-bold` (700)
- **Line Height**: `leading-tight` (1.25)
- **Purpose**: Grab attention, identify the module

### Subtitle
- **Size**: `text-base` (16px / 1rem)
- **Weight**: `font-semibold` (600)
- **Spacing**: `mt-2` (8px top margin - close to title)
- **Purpose**: Provide context, secondary identification

### Description
- **Size**: `text-sm` (14px / 0.875rem)
- **Line Height**: `leading-relaxed` (1.625)
- **Truncation**: `line-clamp-3` (max 3 lines with ellipsis)
- **Spacing**: `mt-4` (16px top margin - clear separation)
- **Purpose**: Explain the project details

## Spacing System

| Element | Spacing | Purpose |
|---------|---------|---------|
| Card Padding | `p-8` (32px) | More breathing room than p-6 |
| Title → Subtitle | `mt-2` (8px) | Keep grouped together |
| Subtitle → Description | `mt-4` (16px) | Clear visual separation |

## Key Learning Points

### Visual Hierarchy

Three levels of importance:
1. **Primary** (Title): Largest, boldest, tight spacing
2. **Secondary** (Subtitle): Medium size, semi-bold
3. **Tertiary** (Description): Smallest, relaxed, muted

### Line Heights

- **Headings**: Use `leading-tight` - large text doesn't need extra space
- **Body text**: Use `leading-relaxed` - smaller text needs breathing room
- **Default**: `leading-normal` is fine for most cases

### Text Truncation

`line-clamp-3` provides:
- Consistent card heights
- No overflow issues
- Automatic ellipsis (...)
- Works with any line height

## Files Changed from Module 2

### `src/App.tsx`

Changes applied to all three cards:
- Increased padding: `p-6` → `p-8`
- Larger titles: `text-xl` → `text-2xl`
- Added `leading-tight` to titles
- Added subtitle with `text-base font-semibold`
- Added `leading-relaxed` to descriptions
- Added `line-clamp-3` to descriptions
- Increased description margin: `mt-3` → `mt-4`
- Updated content to show module details

## Typography Best Practices Used

✅ **Hierarchy** - Three distinct text levels
✅ **Contrast** - Size and weight differences
✅ **Spacing** - Close grouping (title+subtitle), clear separation (description)
✅ **Readability** - Proper line heights for text sizes
✅ **Consistency** - Same pattern across all cards
✅ **Truncation** - Handles variable content gracefully

## Experiment Ideas

Try these variations:

1. **Change line clamp**: Try `line-clamp-2` or `line-clamp-4`
2. **Adjust subtitle weight**: Try `font-medium` instead of `font-semibold`
3. **Different spacing**: Change `mt-4` to `mt-6` for more separation
4. **Add letter spacing**: Try `tracking-tight` on the title
5. **Try different line heights**: Compare `leading-normal` vs `leading-relaxed`

## Next Module

Continue to **Module 4: Introducing ShadCN UI** where we'll:
- Install a component library
- See how libraries abstract these patterns
- Replace hand-built cards with ShadCN components
- Appreciate what you've learned!
