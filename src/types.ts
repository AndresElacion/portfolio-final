export interface GitHubIconProps {
  className?: string;
  size?: number;
}

export interface BlurCircleProps {
  color?: string;
  position?: string;
  size?: string;
  opacity?: string;
}

export interface Skill {
  name: string;
  icon: string;
}

export interface SkillCategory {
  skills: Skill[];
}

export interface Project {
  name: string;
  slug: string;
  description: string;
  image: string;
  stack: string;
  url: string;
}

export interface ProjectCategory {
  projects: Project[];
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  message: string;
  created_at: string;
}

export interface FormData {
  name: string;
  email: string;
  message: string;
}