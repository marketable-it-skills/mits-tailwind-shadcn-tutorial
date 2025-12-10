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

  return (
    <Card
      className={`hover:shadow-2xl hover:scale-[1.02] transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-${focusRingColor} dark:bg-slate-900 dark:border-slate-800`}
      tabIndex={0}
      onClick={onClick}
      onKeyDown={handleKeyDown}
    >
      <CardHeader>
        <Badge variant="secondary" className="dark:bg-slate-800 dark:text-slate-300">
          {competition}
        </Badge>
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
