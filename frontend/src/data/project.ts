import type { Project } from "./types";

export const projects: Project[] = [
  {
    id: 1,
    title: "SaaS Product Launch — Cinematic Reveal",
    category: "APPLE UI STYLE",
    description:
      "A full product launch video crafted in Apple's iconic style — clean transitions, precise typography animations, and an atmospheric score that builds anticipation to the reveal.",
    thumbnail: "/thumbnails/",
    modalVideoUrl: "https://youtu.be/3044x8Z_Z3g",
    externalUrl: "https://youtube.com/watch?v=example1",
    tools: ["After Effects", "Premiere Pro", "Figma"],
    featured: true,
    duration: "1:32",
  },
  {
    id: 2,
    title: "Vertical Reel — Instagram Campaign",
    category: "SOCIAL MEDIA",
    description:
      "High-retention vertical reel for Instagram with punchy transitions and trending audio.",
    thumbnail: "/thumbnails/",
    modalVideoUrl: "https://youtube.com/shorts/mWAuEZylmvY",
    externalUrl: "https://instagram.com/p/example2",
    tools: ["Premiere Pro", "After Effects"],
    duration: "0:28",
  },
  {
    id: 3,
    title: "Square Logo Animation",
    category: "MOTION GRAPHICS",
    description:
      "Clean square format animation for social posts and brand identity.",
    thumbnail: "/thumbnails/",
    modalVideoUrl: "https://youtube.com/shorts/gurEjqaKdYg",
    externalUrl: "https://behance.net/gallery/example3",
    tools: ["After Effects"],
    duration: "0:15",
  },
  {
    id: 4,
    title: "Cinematic Trailer",
    category: "DOCUMENTARY STYLE",
    description:
      "Wide cinematic trailer with emotional pacing and immersive sound design.",
    thumbnail: "/thumbnails/",
    modalVideoUrl: "/videos/trailer.mp4",
    externalUrl: "https://youtube.com/watch?v=example4",
    tools: ["Premiere Pro", "Photoshop", "After Effects"],
    featured: true,
    duration: "2:15",
  },
  {
    id: 5,
    title: "Tutorial Video",
    category: "EDUCATIONAL",
    description:
      "Step-by-step tutorial with screen recording overlays and animated callouts.",
    thumbnail: "/thumbnails/",
    modalVideoUrl: "/videos/tutorial.mp4",
    externalUrl: "https://youtube.com/watch?v=example5",
    tools: ["After Effects", "Premiere Pro", "Figma"],
    duration: "5:00",
  },
];
