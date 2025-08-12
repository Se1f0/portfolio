// Define interfaces for our components
export interface NavLink {
  id: string;
  title: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
  color: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  images: string[];
  liveUrl: string;
  githubUrl: string;
}

export interface ModalProps {
  isOpen: boolean;
  image: string | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}
