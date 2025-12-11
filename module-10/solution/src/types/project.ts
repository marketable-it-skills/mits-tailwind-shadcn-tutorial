// Raw data structure from collection.json
export interface RawProject {
  name: string;
  displayName: string;
  description: string;
  url: string;
  skillDomainIds: number[];
  competition: string;
  estTime: number;
  authors: Array<{
    name: string;
    url: string;
  }>;
  technologies: string[];
  tags: string[];
  languages?: string[]; // Optional - not all projects have this
  status: string;
  isPrivate: boolean;
}

// UI data structure
export interface Project {
  id: string;
  competition: string;
  title: string;
  subtitle: string;
  description: string;
  languages?: string[]; // Optional language codes
  tags: Array<{
    label: string;
    colorClass: string;
  }>;
  focusRingColor: string;
}

