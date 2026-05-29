// This file contains: personalInfo, stats, tools
import type { PersonalInfo, Stat, Tool } from './types';

// ===== PERSONAL INFO =====
export const personalInfo: PersonalInfo = {
  name: "Aman Rawat",
  role: "Video Editor & Motion Designer",
  description: "I am a Video Editor and Motion Designer with 2–3 years of experience creating engaging and visually appealing content. My expertise includes Apple UI-style edits, SaaS animations, and documentary-style videos, with a strong focus on clean motion design and high-retention storytelling.\n\nI am proficient in Adobe After Effects and Adobe Premiere Pro, and I also have working knowledge of Figma and Adobe Photoshop. My goal is to transform ideas into professional, high-quality visuals that capture attention and deliver clear messages.",
  experience: "2-3 Years",
  location: "India — Remote Worldwide",
  email: "amanrawat.work@gmail.com",
  avatarInitials: "AR"
};

// ===== ABOUT TAGS =====
export const aboutTags: string[] = [
  "Cinematic Editing",
  "Motion Graphics",
  "Brand Films",
  "SaaS Demos",
  "Color Grading",
  "Sound Design",
  "Visual Storytelling",
  "Apple UI Style"
];

// ===== STATISTICS =====
export const stats: Stat[] = [
  { value: "3+", label: "Years Exp." },
  { value: "50+", label: "Videos Created" },
  { value: "30+", label: "Clients" },
  { value: "4.9★", label: "Avg. Rating" }
];

// ===== TOOLS / SOFTWARE =====
export const tools: Tool[] = [
  {
    id: 1,
    name: "Adobe After Effects",
    logo: "Ae",
    category: "Motion & VFX"
  },
  {
    id: 2,
    name: "Adobe Premiere Pro",
    logo: "Pr",
    category: "Video Editing"
  },
  {
    id: 3,
    name: "Figma",
    logo: "F",
    category: "UI / Motion"
  },
  {
    id: 4,
    name: "Adobe Photoshop",
    logo: "Ps",
    category: "Image Design"
  }
];