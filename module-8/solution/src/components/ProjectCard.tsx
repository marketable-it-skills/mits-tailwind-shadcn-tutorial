import type { Project } from "@/types/project";
import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

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
      className={`hover:shadow-2xl hover:scale-[1.02] transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 ${focusRingClass}`}
      tabIndex={0}
      onClick={onClick}
      onKeyDown={handleKeyDown}
    >
      <CardHeader>
        <Badge variant="secondary">{competition}</Badge>
        <CardTitle className="text-2xl font-bold leading-tight">
          {title}
        </CardTitle>
        <CardDescription className="text-base font-semibold">
          {subtitle}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-4">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag.label} variant="outline" className={tag.colorClass}>
              {tag.label}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
