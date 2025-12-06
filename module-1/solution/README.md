# Module 1 Solution: Project Setup & Your First Card

This is the complete solution for Module 1 of the MITS Dashboard Tutorial.

## What's Included

- ✅ Vite + React + TypeScript project setup
- ✅ Tailwind CSS v4 configured with Vite plugin
- ✅ Simple centered card with title and description
- ✅ Clean project structure

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

## Project Structure

```
solution/
├── src/
│   ├── App.tsx          # Main card component
│   ├── main.tsx         # React entry point
│   ├── index.css        # Tailwind CSS import
│   └── vite-env.d.ts    # Vite type definitions
├── index.html           # HTML entry point
├── package.json         # Dependencies
├── tsconfig.json        # TypeScript configuration
└── vite.config.ts       # Vite + Tailwind configuration
```

## Key Files Explained

### `vite.config.ts`

Configures Vite with the Tailwind CSS v4 plugin:

```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
  ],
})
```

### `src/index.css`

Uses the simple Tailwind v4 import:

```css
@import "tailwindcss";
```

### `src/App.tsx`

The main component displaying a centered card:

```tsx
function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md p-6 bg-white rounded-lg border border-gray-200 shadow-lg">
        <h2 className="text-xl font-bold text-gray-900">
          ES2025 TRAINING HU S17 - Module B
        </h2>
        <p className="mt-3 text-sm text-gray-600">
          Create a server-side rendered administrative interface...
        </p>
      </div>
    </div>
  )
}
```

## Tailwind CSS v4 Notes

This project uses **Tailwind CSS v4** which has a simpler setup:

- Uses the `@tailwindcss/vite` plugin instead of PostCSS
- Single `@import "tailwindcss"` instead of three directives
- No `tailwind.config.js` needed for basic usage
- Faster compilation and better Vite integration

## Next Module

Continue to **Module 2: Playing with Colors** to explore Tailwind's color palette and create light/dark card variations!

