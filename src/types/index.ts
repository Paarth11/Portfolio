export interface Project {
  title: string;
  description: string;
  tech: string[];
  link: string;
}

export interface Skill {
  name: string;
  icon: React.ReactNode;
}

export interface NavbarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
}

export interface ProjectCardProps {
  project: Project;
}

export interface SkillCardProps {
  skill: Skill;
}