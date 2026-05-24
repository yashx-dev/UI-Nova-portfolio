// Shared interfaces used by ALL data files

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
  videoUrl?: string; // Optional - for video support
  thumbnailUrl?: string; // Optional - fallback image
  tools: string[];
  featured?: boolean;
  duration?: string;
  year?: number;
  aspectRatio?: "16:9" | "9:16" | "1:1" | "4:3" | "21:9";
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
