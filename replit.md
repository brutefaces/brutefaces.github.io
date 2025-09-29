# EmojiHub - Emoji Faces & Emoticons App

## Overview
A modern React web application for discovering, copying, and sharing thousands of expressive emoji faces and emoticons. Built with React, TypeScript, Vite, and Tailwind CSS with shadcn/ui components.

## Project Structure
- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite 5.4.19 
- **Styling**: Tailwind CSS with shadcn/ui components
- **Routing**: React Router DOM
- **State Management**: TanStack React Query
- **Data**: Static emoji data in TypeScript

## Key Features
- Browse thousands of emoji faces by category (Meme, Happy, Love, Playful, etc.)
- Search emojis by name or category
- One-click copy functionality
- Responsive design with modern UI
- SEO optimized with meta tags and Open Graph

## Development Setup
- Port: 5000 (configured for Replit proxy)
- Host: 0.0.0.0 (allows Replit iframe access)
- HMR enabled on port 5000
- Workflow: `npm run dev` starts development server

## Architecture
- Single-page application (SPA) with client-side routing
- Component-based architecture using shadcn/ui
- TypeScript for type safety
- Modern CSS with Tailwind utility classes
- Static emoji data (no backend required)

## Deployment Configuration
- Target: autoscale (stateless frontend)
- Build: `npm run build`
- Start: `npm run preview`

## Recent Changes
- 2025-09-29: Initial Replit environment setup
  - Configured Vite for 0.0.0.0:5000 binding
  - Set up proper workflow for port 5000
  - Configured deployment settings
  - Verified all dependencies and TypeScript compilation

## User Preferences
- Prefers modern React patterns and TypeScript
- Uses shadcn/ui component library for consistent design
- Maintains responsive design principles