export interface PersonalInfo {
  name: string;
  role: string;
  description: string;
  experience: string;
  location: string;
  email: string;
  avatarInitials: string;
}

export interface Skill {
  id: number;
  name: string;
  icon: string;
  description: string;
  level: number;
}

export interface Tool {
  id: number;
  name: string;
  logo: string;
  category: string;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  thumbnail: string;
  modalVideoUrl: string;
  externalUrl: string;
  tools: string[];
  featured?: boolean;
  duration?: string;
}
export interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
  title: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatarInitials: string;
}
