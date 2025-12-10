export interface Project {
  id: string;
  competition: string;
  title: string;
  subtitle: string;
  description: string;
  tags: Array<{
    label: string;
    colorClass: string;
  }>;
  focusRingColor: string;
}

