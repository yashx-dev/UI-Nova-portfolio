import type { Project } from './types';

export const projects: Project[] = [
  {
    id: 1,
    title: "SaaS Product Launch",
    category: "Apple UI Style",
    description: "A full product launch video...",
    videoUrl: "/videos/saas-launch.mp4",
    tools: ["After Effects", "Premiere Pro"],
    featured: true,
    aspectRatio: "16:9",  // Standard landscape
    duration: "1:32"
  },
  {
    id: 2,
    title: "Vertical Reel — Instagram",
    category: "Social Media",
    description: "High-retention vertical reel for Instagram...",
    videoUrl: "https://www.youtube.com/shorts/LgrKQpkkybk",
    tools: ["Premiere Pro", "After Effects"],
    aspectRatio: "9:16",  // Vertical for TikTok/Instagram/YouTube Shorts
    duration: "0:28"
  },
  {
    id: 3,
    title: "Square Logo Animation",
    category: "Motion Graphics",
    description: "Clean square format for social posts...",
    videoUrl: "/videos/logo-animation.mp4",
    tools: ["After Effects"],
    aspectRatio: "1:1",  // Square for Instagram feed
    duration: "0:15"
  },
  {
    id: 4,
    title: "Cinematic Trailer",
    category: "Documentary Style",
    description: "Wide cinematic trailer...",
    videoUrl: "/videos/trailer.mp4",
    tools: ["Premiere Pro", "Photoshop"],
    aspectRatio: "21:9",  // Ultra-wide cinematic
    featured: true,
    duration: "2:15"
  },
  {
    id: 5,
    title: "Tutorial Video",
    category: "Educational",
    description: "Step-by-step tutorial...",
    videoUrl: "/videos/tutorial.mp4",
    tools: ["After Effects", "Premiere Pro"],
    aspectRatio: "4:3",  // Classic aspect ratio
    duration: "5:00"
  }
];