import type { RawProject, Project } from "../types/project";
import { getTagColor, getFocusRingColor } from "./colors";

/**
 * Generates a unique ID from the project name
 * Example: "ES2023 S17 - Module A" -> "es2023-s17-module-a"
 */
function generateId(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-") // Replace non-alphanumeric with hyphens
    .replace(/^-|-$/g, ""); // Remove leading/trailing hyphens
}

/**
 * Transforms a raw project from collection.json to the UI format
 */
export function transformProject(
  rawProject: RawProject,
  projectIndex: number
): Project {
  // Merge technologies and tags into a single array
  const allTags = [...rawProject.technologies, ...rawProject.tags];

  // Remove duplicates (case-insensitive)
  const uniqueTags = Array.from(
    new Set(allTags.map((tag) => tag.toLowerCase()))
  ).map((tag) => {
    // Find the original casing
    return allTags.find((t) => t.toLowerCase() === tag) || tag;
  });

  // Limit to first 8 tags to avoid overcrowding
  const limitedTags = uniqueTags.slice(0, 8);

  // Assign colors to tags
  const coloredTags = limitedTags.map((tag, index) => ({
    label: tag,
    colorClass: getTagColor(index),
  }));

  // Transform to UI format
  return {
    id: generateId(rawProject.name),
    title: rawProject.name,
    subtitle: rawProject.displayName,
    description: rawProject.description,
    competition: rawProject.competition,
    languages: rawProject.languages, // May be undefined (optional)
    tags: coloredTags,
    focusRingColor: getFocusRingColor(projectIndex),
  };
}

/**
 * Transforms an array of raw projects
 */
export function transformProjects(rawProjects: RawProject[]): Project[] {
  return rawProjects.map((project, index) => transformProject(project, index));
}



