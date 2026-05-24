# Aman Rawat - Video Editor & Motion Designer Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features dynamic content management, video playback with custom controls, smooth animations, and a premium Apple-style design.

## ✨ Features

- 🎬 **Dynamic Content Management** - All content (projects, skills, testimonials) stored in separate data files for easy updates
- 📹 **Custom Video Player** - Stylized video playback with custom play/pause controls, no browser default controls
- 📱 **Responsive Design** - Fully responsive across all devices (mobile, tablet, desktop)
- 🎨 **Multiple Aspect Ratios** - Support for 16:9, 9:16, 1:1, 4:3, and 21:9 videos
- 🖱️ **Custom Cursor** - Premium animated cursor with ring effect
- ✨ **Scroll Animations** - Smooth reveal animations as you scroll
- 🎯 **TypeScript** - Fully typed for better development experience
- 🚀 **Performance Optimized** - Lazy loading, optimized animations, and smooth transitions

## 🛠️ Tech Stack

- **React 18** - UI Framework
- **TypeScript** - Type Safety
- **Tailwind CSS v4** - Styling
- **Vite** - Build Tool
- **CSS Modules** - Component-scoped styles

## 📁 Project Structure
src/
├── components/
│ ├── animations/ # Animated background components
│ ├── cards/ # Reusable card components (Project, Skill, Tool, Testimonial)
│ ├── layout/ # Layout components (Navbar, Footer, Layout)
│ ├── sections/ # Page sections (Hero, About, Skills, Projects, etc.)
│ └── ui/ # UI components (Button, Cursor, ScrollReveal, etc.)
├── data/
│ ├── types.ts # TypeScript interfaces
│ ├── data.ts # Personal info, stats, tools
│ ├── projects.ts # Projects data (videos, descriptions, tools)
│ ├── skills.ts # Skills data
│ └── testimonials.ts # Testimonials data
├── hooks/
│ ├── useMousePosition.ts # Custom cursor tracking
│ ├── useParallax.ts # Parallax scroll effects
│ ├── useScrollReveal.ts # Scroll reveal animations
│ └── useSkillBars.ts # Animated skill bars
├── styles/
│ ├── variables.css # CSS variables (colors, fonts)
│ ├── globals.css # Global styles (components, layout)
│ └── animations.css # Keyframes and animations
├── utils/
│ ├── constants.ts # Site-wide constants
│ └── helpers.ts # Utility functions
├── App.tsx # Main app component
├── main.tsx # Entry point
└── index.css # CSS entry (imports all styles)
