# Module 2 Solution: Playing with Colors - Light & Dark Cards

This is the complete solution for Module 2 of the MITS Dashboard Tutorial.

## What's Included

- ✅ Three card variations with different color themes
- ✅ Light theme card (white background, dark text)
- ✅ Dark theme card (slate background, light text)
- ✅ Colored accent card (blue tinted theme)
- ✅ Responsive layout (stacks on mobile, horizontal on desktop)

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

Three cards displayed side-by-side on desktop (stacked on mobile), each demonstrating a different color theme:

1. **Light Card** - Classic light theme with maximum readability
2. **Dark Card** - Modern dark theme with blue-tinted grays
3. **Blue Accent Card** - Colored theme with blue tones

## Key Learning Points

### Color Scale System

Tailwind uses numeric scales (50-950):

- **50-200**: Light tones (backgrounds in light themes, borders)
- **300-700**: Medium tones (text, borders)
- **800-950**: Dark tones (backgrounds in dark themes, headings)

### Color Families Used

| Card Type | Background     | Border             | Title           | Description      |
| --------- | -------------- | ------------------ | --------------- | ---------------- |
| Light     | `bg-white`     | `border-gray-200`  | `text-gray-900` | `text-gray-600`  |
| Dark      | `bg-slate-900` | `border-slate-700` | `text-white`    | `text-slate-300` |
| Colored   | `bg-blue-50`   | `border-blue-200`  | `text-blue-900` | `text-blue-700`  |

### Responsive Design

```tsx
flex flex-col md:flex-row
```

- `flex-col` - Stack vertically (mobile default)
- `md:flex-row` - Horizontal layout at medium screens (≥768px)

## Files Changed from Module 1

### `src/App.tsx`

- Changed from single card to three cards
- Added responsive flex layout
- Implemented three different color themes
- Updated card content to describe each theme

## Color Contrast Tips

- **Light themes**: Use 700-900 text on 50-200 backgrounds
- **Dark themes**: Use 100-300 text on 800-950 backgrounds
- **Colored themes**: Stay within the same color family
- **Accessibility**: Aim for 4.5:1 contrast ratio minimum (WCAG AA)

## Experiment Ideas

Try these variations:

1. Change `slate` to `gray` or `zinc` in the dark card
2. Replace the blue accent with `indigo`, `purple`, or `green`
3. Add hover effects: `hover:shadow-xl hover:scale-105 transition-all`
4. Try gradient backgrounds: `bg-gradient-to-br from-blue-50 to-indigo-50`

## Next Module

Continue to **Module 3: Typography & Text Styling** to refine text hierarchy and spacing!
