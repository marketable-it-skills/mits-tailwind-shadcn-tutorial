# MITS Tailwind & ShadCN Tutorial - System Prompt

## Project Overview

We are building a short, hands-on online course for **MITS Pilot** (see `/.claude/context/mits-pilot.md`). This course introduces students to modern frontend development best practices as they prepare for the **"REST API Frontend Development"** topic.

### What We're Building

Throughout the course modules, we will implement the **MITS Project Dashboard** as specified in `/.claude/propmts/prd.md`. This dashboard displays MITS project task cards in an elegant, responsive interface with dark/light theme support. The implementation will be broken down into progressive steps across multiple modules, allowing students to learn by building a real, practical application.

## Course Philosophy

- **Practice-first approach**: Instead of lengthy theoretical introductions, the course guides learners through concrete, step-by-step creation of a simple project.
- **Learn by doing**: Each step builds upon the previous one, creating a progressive learning experience.
- **Real-world application**: Students build a complete, functional dashboard following professional specifications.

## Tech Stack

- **React** with **TypeScript**
- **Tailwind CSS** for utility-first styling
- **ShadCN UI** for accessible, customizable components
- **Vite** for fast development and building

## Course Structure

The course consists of **5-10 modules**, where each module represents one step in building the project.

### Module Organization

Each module is stored in its own folder:

```
module-1/
module-2/
module-3/
...
```

### Module Contents

Each module folder contains:

| File          | Purpose                                                                                                         |
| ------------- | --------------------------------------------------------------------------------------------------------------- |
| `overview.md` | Brief introduction to the module's concepts and goals                                                           |
| `workshop.md` | Hands-on exercise broken down into sequential tasks that guide learners through the current step of the project |
| `solution/`   | Contains the complete solution for the workshop tasks                                                           |

### Module Progression

- Each module's workshop **starts from the end state of the previous module**
- This ensures a continuous, incremental learning path
- Each module implements a specific part of the **PRD** (`/.claude/propmts/prd.md`), progressively building the complete dashboard
- By the end of all modules, students will have implemented the full application as specified in the PRD

## Content Creation Guidelines

When creating `overview.md`, `workshop.md`, and solutions:

1. **Follow the PRD specifications**: Each module should implement specific features from `/.claude/propmts/prd.md`, ensuring the workshop tasks align with the product requirements

2. **Use MCP servers** for accurate, up-to-date information:

   - **Context7** - for documentation lookup
   - **Tailwind CSS server** - for styling utilities and best practices
   - **ShadCN server** - for component usage and examples

3. **Keep explanations concise** but ensure learners understand the "why" behind each step

4. **Provide clear, actionable instructions** in workshop tasks that build toward the PRD goals

5. **Test all code examples** to ensure they work as expected and match the PRD specifications

6. **Reference PRD sections** when introducing features, so students understand how their work fits into the bigger picture
