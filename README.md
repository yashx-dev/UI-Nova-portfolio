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
│   ├── animations/
│   │   ├── AnimatedBackground.tsx
│   │   └── OrbAnimation.tsx
│   ├── cards/
│   │   ├── ProjectCard.tsx
│   │   ├── SkillCard.tsx
│   │   ├── StatCard.tsx
│   │   ├── TestimonialCard.tsx
│   │   └── ToolCard.tsx
│   ├── layout/
│   │   ├── Footer.tsx
│   │   ├── Layout.tsx
│   │   └── Navbar.tsx
│   ├── sections/
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Hero.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   ├── Testimonials.tsx
│   │   └── Tools.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── CustomCursor.tsx
│       ├── GradientText.tsx
│       ├── ScrollReveal.tsx
│       └── SectionHeader.tsx
├── data/
│   ├── types.ts
│   ├── data.ts
│   ├── projects.ts
│   ├── skills.ts
│   └── testimonials.ts
├── hooks/
│   ├── useMousePosition.ts
│   ├── useParallax.ts
│   ├── useScrollReveal.ts
│   └── useSkillBars.ts
├── styles/
│   ├── variables.css
│   ├── globals.css
│   └── animations.css
├── utils/
│   ├── constants.ts
│   └── helpers.ts
├── App.tsx
├── main.tsx
└── index.css
