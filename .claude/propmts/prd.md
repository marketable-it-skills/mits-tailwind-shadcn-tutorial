# MITS Project Dashboard - Product Requirements Document

## Product Overview

A modern, responsive dashboard application that displays MITS (Marketable IT Skills) project task cards in an elegant and user-friendly interface. The dashboard loads project data from `/.claude/context/collection.json` and presents it in an interactive card-based layout with theme support and filtering capabilities.

### Goals

- Provide an intuitive way to browse MITS project tasks
- Support both dark and light themes for user preference
- Ensure responsive design for all device sizes
- Maintain accessibility standards (WCAG AA)
- Enable easy filtering and searching of projects

### Tech Stack

- **Framework**: React with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Component Library**: ShadCN UI
- **Data Source**: Static JSON file (`/.claude/context/collection.json`)

## Core Features

### Project Cards

Each card displays a MITS project task with the following components:

#### Visual Components (Top to Bottom)

1. **Title** - Large, bold heading displaying the module name

   - **Data Source**: `name` field from JSON
   - **Typography**: Text-lg or text-xl, font-bold
   - **Behavior**: Truncate if exceeds 2 lines

2. **Subtitle** - Secondary heading showing the project display name

   - **Data Source**: `displayName` field from JSON
   - **Typography**: Text-base or text-md
   - **Behavior**: Truncate if exceeds 1 line

3. **Competition Badge** - Pill-style badge showing the competition/context

   - **Data Source**: `competition` field from JSON
   - **Style**: Rounded-full, small padding, subtle background

4. **Language Indicator** - Flag icon with language code (e.g., 🇬🇧 EN)

   - **Data Source**: `languages` array from JSON
   - **Visibility**: Only display if `languages` field exists
   - **Format**: Flag emoji + language code
   - **Behavior**: If multiple languages, show first or all with separator

5. **Tag Collection** - Multiple colored tags/badges

   - **Data Sources**:
     - `tags` array (e.g., "backend", "server-side rendering", "authentication")
     - `technologies` array (e.g., "Server-Side Rendering", "MySQL", "Laravel", "Next.js")
   - **Style**: Small rounded badges with varied colors
   - **Behavior**: Display first 6-8 tags, show "+N more" if exceeds limit

6. **Description** - Truncated text preview
   - **Data Source**: `description` field from JSON
   - **Behavior**: Truncate to 2-3 lines with ellipsis ("...")
   - **Typography**: Text-sm, reduced opacity

#### Card Interactions

- **Hover State**: Subtle elevation/shadow increase, slight scale transform
- **Click Action**: Navigate to the project URL (`url` field in JSON)
- **Focus State**: Visible outline for keyboard navigation
- **Cursor**: Pointer to indicate clickability

### Dashboard Layout

- **Grid**: 3-column layout on desktop (≥1024px), 2-column on tablet (768-1023px), 1-column on mobile (<768px)
- **Gap**: Consistent spacing between cards (e.g., gap-6 or gap-8)
- **Container**: Centered with max-width constraint (e.g., max-w-7xl)
- **Padding**: Appropriate padding around the grid (e.g., p-6 or p-8)

## Theme System

### Theme Toggle

- **Location**: Top-right corner of the dashboard header
- **Component**: Theme toggle button/switch (use ShadCN theme toggle)
- **Persistence**: Save user preference to localStorage
- **Default**: Use system preference if no saved preference exists
- **Transition**: Smooth transition between themes

### Color Palette

#### Dark Theme

- **Background**: Deep slate (`bg-slate-950` or `bg-gray-950`)
- **Card Background**: Dark navy/slate (`bg-slate-900` / `#0F172A`)
- **Card Border**: Subtle border (`border border-slate-800`)
- **Title Text**: White (`text-white`)
- **Subtitle Text**: Light blue-gray (`text-slate-400` / `text-blue-200`)
- **Competition Badge**:
  - Background: `bg-slate-800`
  - Text: `text-slate-300`
  - Border: Optional `border-slate-700`
- **Language Badge**:
  - Background: `bg-slate-800`
  - Text: `text-white`
- **Tags/Technology Badges**:
  - Blue: `bg-blue-900/50 text-blue-200`
  - Cyan: `bg-cyan-900/50 text-cyan-200`
  - Sky: `bg-sky-900/50 text-sky-200`
  - Indigo: `bg-indigo-900/50 text-indigo-200`
- **Description Text**: `text-slate-400`
- **Hover State**: `hover:bg-slate-800/50 hover:shadow-xl`

#### Light Theme

- **Background**: Light gray (`bg-gray-50` or `bg-slate-50`)
- **Card Background**: White (`bg-white`)
- **Card Border**: Subtle border (`border border-gray-200`)
- **Title Text**: Dark (`text-gray-900`)
- **Subtitle Text**: Medium gray (`text-gray-600`)
- **Competition Badge**:
  - Background: `bg-gray-100`
  - Text: `text-gray-700`
  - Border: Optional `border-gray-200`
- **Language Badge**:
  - Background: `bg-gray-100`
  - Text: `text-gray-700`
- **Tags/Technology Badges**:
  - Blue: `bg-blue-100 text-blue-700`
  - Cyan: `bg-cyan-100 text-cyan-700`
  - Sky: `bg-sky-100 text-sky-700`
  - Indigo: `bg-indigo-100 text-indigo-700`
- **Description Text**: `text-gray-600`
- **Hover State**: `hover:shadow-lg hover:scale-[1.02]`

#### Color Guidelines

- Use Tailwind CSS color utilities for consistency
- Maintain contrast ratio ≥4.5:1 for text (WCAG AA compliance)
- Apply opacity variants (e.g., `/50`, `/70`) for layered effects
- Tags should use complementary colors for visual distinction
- Transitions should be smooth (e.g., `transition-all duration-200`)

## Technical Specifications

### Data Handling

- **Data Source**: Load from `/.claude/context/collection.json`
- **Data Structure**: Array of project objects (see JSON schema)
- **Loading State**: Display skeleton cards while loading
- **Error Handling**: Show error message if data fails to load
- **Data Validation**: Validate required fields before rendering

### Responsive Breakpoints

```
- Mobile: < 768px (1 column)
- Tablet: 768px - 1023px (2 columns)
- Desktop: ≥ 1024px (3 columns)
- Large Desktop: ≥ 1280px (3 columns, larger container)
```

### Performance Requirements

- **Initial Load**: < 2 seconds for first contentful paint
- **Interaction**: < 100ms response time for user interactions
- **Optimization**: Lazy load images if project images are added
- **Bundle Size**: Keep JavaScript bundle < 200KB (gzipped)

### Accessibility Requirements

- **Keyboard Navigation**: Full keyboard support (Tab, Enter, Escape)
- **Screen Readers**: Proper ARIA labels and semantic HTML
- **Focus Management**: Visible focus indicators on all interactive elements
- **Color Contrast**: WCAG AA compliance (4.5:1 minimum)
- **Alternative Text**: Descriptive text for any visual-only information

### Browser Support

- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Success Metrics

- All cards display correctly with proper data mapping
- Theme toggle works and persists user preference
- Responsive layout works on all breakpoints
- Passes accessibility audit (Lighthouse score ≥ 90)
- No console errors or warnings
- Smooth animations and transitions (60fps)
