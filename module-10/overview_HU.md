# Module 10: Real Data Transformation

## Overview

In this final module, you'll load and transform real MITS project data from `collection.json`. You'll learn how to handle complex data structures, map fields to match your UI requirements, merge multiple data sources, and implement dynamic features like language badges with flag emojis and tag color assignment.

## What You'll Build

Starting from your Module 9 dashboard with dark mode support, you'll:

- **Load Real Data** from `collection.json` (30+ actual MITS projects)
- **Transform Complex Data** to match UI requirements
- **Display Language Badges** with flag emojis (🇬🇧 EN, 🇭🇺 HU, 🇫🇮 FI)
- **Merge Tags & Technologies** into a single, colorful tag collection
- **Assign Colors Dynamically** to tags using an algorithm
- **Handle Missing Fields** gracefully with optional chaining
- **Display All Projects** from the real MITS collection

## Learning Objectives

By the end of this module, you will be able to:

1. **Load and parse** complex JSON data structures
2. **Transform data** between different schemas
3. **Map fields** from source to destination format
4. **Merge arrays** from multiple sources
5. **Implement dynamic color assignment** algorithms
6. **Handle optional fields** with TypeScript optional chaining
7. **Work with Unicode** (flag emojis)
8. **Create transformation functions** for data processing
9. **Handle edge cases** and missing data
10. **Build production-ready** data pipelines

## Why Data Transformation Matters

### Real-World Context

In professional development, **data rarely matches your UI requirements exactly**:

- APIs return data in one format
- Your UI expects data in another format
- You need to transform between them

This is one of the **most common tasks** in frontend development!

### Skills You'll Learn

- **Data Mapping** - Essential for working with APIs
- **Type Safety** - TypeScript ensures correct transformations
- **Error Handling** - Graceful handling of missing/malformed data
- **Performance** - Efficient data processing
- **Maintainability** - Clean, testable transformation logic

## The Challenge

### What We Have (collection.json)

```json
{
  "name": "ES2023 S17 - Module D",
  "displayName": "Interactive Frontend using an API",
  "description": "Create a modern frontend application...",
  "competition": "EuroSkills Gdansk 2023",
  "technologies": ["JavaScript", "TypeScript", "React", "Vue"],
  "tags": ["frontend", "spa", "javascript"],
  "languages": ["EN", "HU"]
  // ... many other fields we don't need
}
```

### What We Need (UI Requirements)

```typescript
{
  id: string;              // Generated from name
  title: string;           // From "name"
  subtitle: string;        // From "displayName"
  description: string;     // From "description"
  competition: string;     // From "competition"
  languages?: string[];    // From "languages" (optional)
  tags: Array<{
    label: string;         // Merged from technologies + tags
    colorClass: string;    // Dynamically assigned!
  }>;
  focusRingColor: string;  // Dynamically assigned!
}
```

### The Transformation Steps

1. **Field Mapping**: Rename fields to match UI
2. **Data Merging**: Combine `technologies` + `tags` arrays
3. **Color Assignment**: Assign colors to each tag
4. **Language Processing**: Handle optional `languages` array
5. **ID Generation**: Create unique IDs from names
6. **Filtering**: Remove fields we don't need

## Data Structure Comparison

### Input Schema (collection.json)

| Field            | Type     | Required | Description                                 |
| ---------------- | -------- | -------- | ------------------------------------------- |
| `name`           | string   | Yes      | Module name (e.g., "ES2023 S17 - Module D") |
| `displayName`    | string   | Yes      | Human-readable project name                 |
| `description`    | string   | Yes      | Project description                         |
| `url`            | string   | Yes      | GitHub URL (not displayed)                  |
| `competition`    | string   | Yes      | Competition name                            |
| `technologies`   | string[] | Yes      | Array of technology names                   |
| `tags`           | string[] | Yes      | Array of tags                               |
| `languages`      | string[] | **No**   | Language codes (e.g., ["EN", "HU"])         |
| `authors`        | object[] | Yes      | Author information (not displayed)          |
| `skillDomainIds` | number[] | Yes      | Skill domains (not displayed)               |
| `estTime`        | number   | Yes      | Estimated time (not displayed)              |
| `status`         | string   | Yes      | Publication status (not displayed)          |
| `isPrivate`      | boolean  | Yes      | Privacy flag (not displayed)                |

### Output Schema (UI Component)

| Field            | Type     | Required | Description                              |
| ---------------- | -------- | -------- | ---------------------------------------- |
| `id`             | string   | Yes      | Unique identifier (generated)            |
| `title`          | string   | Yes      | Card title (from `name`)                 |
| `subtitle`       | string   | Yes      | Card subtitle (from `displayName`)       |
| `description`    | string   | Yes      | Card description                         |
| `competition`    | string   | Yes      | Competition badge text                   |
| `languages`      | string[] | No       | Language codes for badges                |
| `tags`           | Tag[]    | Yes      | Combined technologies + tags with colors |
| `focusRingColor` | string   | Yes      | Focus ring color (assigned)              |

## Flag Emoji Mapping

We'll map language codes to flag emojis:

```typescript
const flagEmojis: Record<string, string> = {
  EN: "🇬🇧", // English - UK flag
  HU: "🇭🇺", // Hungarian - Hungary flag
  FI: "🇫🇮", // Finnish - Finland flag
  // Add more as needed
};
```

## Tag Color Assignment Strategy

We'll cycle through a predefined set of color classes:

```typescript
const tagColors = [
  "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/20",
  "bg-cyan-50 text-cyan-700 border-cyan-200 dark:bg-cyan-900/20",
  "bg-green-50 text-green-700 border-green-200 dark:bg-green-900/20",
  "bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-900/20",
  // ... more colors
];

// Assign color based on index
const colorClass = tagColors[index % tagColors.length];
```

## Module Structure

This module follows this progression:

```
1. Analyze collection.json structure
   ↓
2. Update TypeScript interfaces
   ↓
3. Create transformation function
   ↓
4. Implement flag emoji mapping
   ↓
5. Implement tag color assignment
   ↓
6. Update UI to display languages
   ↓
7. Test with all real projects
   ↓
8. Handle edge cases
```

## Key Concepts

### 1. Data Transformation Function

A pure function that converts source data to UI format:

```typescript
function transformProject(source: RawProject, index: number): UIProject {
  // Field mapping
  // Data merging
  // Color assignment
  // Return transformed object
}
```

### 2. Optional Chaining

Handle optional fields safely:

```typescript
// Without optional chaining (unsafe)
const langs = project.languages[0]; // Error if undefined!

// With optional chaining (safe)
const langs = project.languages?.[0]; // Returns undefined if languages is missing
```

### 3. Array Spreading and Merging

Combine multiple arrays:

```typescript
const allTags = [...project.technologies, ...project.tags];
```

### 4. Dynamic Object Creation

Build objects with computed properties:

```typescript
const tag = {
  label: tagName,
  colorClass: assignColor(index),
};
```

## Starting Point

You should have completed **Module 9** with:

- Dark/light theme toggle working
- All components styled for both themes
- Theme preference persisted
- 6 project cards displaying from simple JSON

## What You'll Have After This Module

- **30+ Real Projects** loaded from collection.json
- **Language Badges** with flag emojis for multilingual projects
- **Dynamically Colored Tags** cycling through color palette
- **Production-Ready Data Pipeline** with transformation logic
- **Robust Error Handling** for missing/optional fields
- **Professional Dashboard** with all real MITS projects
- **Data Transformation Skills** applicable to any project

## Time Estimate

- **Workshop**: 2-3 hours
- **Challenges**: 30-60 minutes
- **Total**: 2.5-4 hours

## Prerequisites

- Completed Module 9
- Understanding of TypeScript interfaces
- Familiarity with array methods (map, filter, etc.)
- Basic understanding of data transformation

## Resources

- [TypeScript Handbook - Types from Extraction](https://www.typescriptlang.org/docs/handbook/2/types-from-types.html)
- [MDN: Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [MDN: Optional chaining (?.)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining)
- [MDN: Spread syntax (...)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

## Success Criteria

After completing this module, your dashboard should:

- Load all 30+ projects from collection.json
- Display correct title, subtitle, and description for each
- Show language badges (with flags) for multilingual projects
- Display merged tags from technologies + tags arrays
- Assign colors dynamically to tags
- Handle projects without `languages` field gracefully
- Work in both light and dark themes
- Build without errors or warnings

---

Let's transform real data!
