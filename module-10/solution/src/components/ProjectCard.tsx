import type { Project } from "@/types/project";
import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { formatLanguage } from "../utils/flags";

interface ProjectCardProps extends Project {
  onClick?: () => void;
}

// Mapping object for focus ring colors
// This is necessary because Tailwind's JIT compiler needs to see complete class names
// Template literals like `focus:ring-${color}` won't work as Tailwind can't detect them at build time
const focusRingClasses: Record<string, string> = {
  "blue-500": "focus:ring-blue-500",
  "green-500": "focus:ring-green-500",
  "purple-500": "focus:ring-purple-500",
  "orange-500": "focus:ring-orange-500",
  "indigo-500": "focus:ring-indigo-500",
  "red-500": "focus:ring-red-500",
  "cyan-500": "focus:ring-cyan-500",
  "pink-500": "focus:ring-pink-500",
  "yellow-500": "focus:ring-yellow-500",
  "teal-500": "focus:ring-teal-500",
};

export function ProjectCard({
  competition,
  title,
  subtitle,
  description,
  languages,
  tags,
  focusRingColor,
  onClick,
}: ProjectCardProps) {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onClick?.();
    }
  };

  // Get the complete focus ring class from the mapping, fallback to blue-500
  const focusRingClass =
    focusRingClasses[focusRingColor] || focusRingClasses["blue-500"];

  return (
    <Card
      className={`hover:shadow-2xl hover:scale-[1.02] transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 ${focusRingClass} dark:bg-slate-900 dark:border-slate-800`}
      tabIndex={0}
      onClick={onClick}
      onKeyDown={handleKeyDown}
    >
      <CardHeader>
        <div className="flex flex-wrap items-center gap-2 mb-2">
          {/* Competition Badge */}
          <Badge
            variant="secondary"
            className="dark:bg-slate-800 dark:text-slate-300"
          >
            {competition}
          </Badge>

          {/* Language Badges (if present) */}
          {languages && languages.length > 0 && (
            <>
              {languages.map((lang) => (
                <Badge
                  key={lang}
                  variant="outline"
                  className="bg-slate-100 text-slate-700 border-slate-300 dark:bg-slate-800 dark:text-slate-200 dark:border-slate-700"
                >
                  {formatLanguage(lang)}
                </Badge>
              ))}
            </>
          )}
        </div>

        <CardTitle className="text-2xl font-bold leading-tight dark:text-white">
          {title}
        </CardTitle>
        <CardDescription className="text-base font-semibold dark:text-slate-300">
          {subtitle}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground dark:text-slate-400 leading-relaxed line-clamp-3 mb-4">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge
              key={tag.label}
              variant="outline"
              className={`${tag.colorClass} dark:bg-opacity-20 dark:border-slate-700`}
            >
              {tag.label}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
