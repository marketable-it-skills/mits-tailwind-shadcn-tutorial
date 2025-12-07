import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Project } from "../types/project";

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
      className={`hover:shadow-2xl hover:scale-[1.02] transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-${focusRingColor}`}
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
            <Badge
              key={tag.label}
              variant="outline"
              className={tag.colorClass}
            >
              {tag.label}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

