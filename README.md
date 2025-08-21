# ArenaClub Minecraft Server Website

## Overview

ArenaClub is a full-stack web application that serves as the marketing website and suggestion collection system for a Minecraft PvP server. The application features a modern gaming-themed design showcasing server classes, features, and providing a way for users to submit feedback and suggestions. Built as a single-page application with a REST API backend, it focuses on user engagement and community interaction for the Minecraft gaming audience.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript running on Vite for fast development and building
- **Routing**: Wouter for lightweight client-side routing with a simple home page and 404 fallback
- **UI Framework**: Shadcn/ui components built on Radix UI primitives with Tailwind CSS for styling
- **State Management**: TanStack React Query for server state management and API interactions
- **Form Handling**: React Hook Form with Zod validation for type-safe form processing
- **Styling**: Custom gaming theme with Minecraft-inspired color palette, Orbitron font for headers, and dark theme design

### Backend Architecture
- **Framework**: Express.js server with TypeScript for type safety
- **API Design**: RESTful API with focused endpoints for suggestion submission and retrieval
- **Data Storage**: In-memory storage implementation with interface for future database integration
- **Error Handling**: Centralized error handling middleware with structured JSON responses
- **Request Logging**: Custom middleware for API request logging with response capture

### Data Storage Solution
- **Current**: In-memory storage using Map data structures for development and testing
- **Database Ready**: Drizzle ORM configured with PostgreSQL schema definitions
- **Schema**: Two main entities - users (id, username, password) and suggestions (id, name, email, type, suggestion, createdAt)
- **Migration**: Drizzle Kit configured for database migrations when transitioning to persistent storage

### Component Architecture
- **Section-based Design**: Modular components for each website section (Hero, Features, Classes, Join, Suggestions, Footer)
- **Reusable UI**: Comprehensive Shadcn/ui component library for consistent design patterns
- **Form Components**: Dedicated suggestion form with validation and success feedback
- **Navigation**: Smooth scrolling navigation with mobile-responsive hamburger menu

### Build and Development
- **Development**: Vite dev server with HMR for frontend, tsx for TypeScript execution on backend
- **Build Process**: Vite builds frontend to dist/public, esbuild bundles backend to dist/index.js
- **Asset Management**: Vite handles frontend assets, Express serves static files in production
- **Type Checking**: Shared TypeScript configuration across frontend, backend, and shared modules

## External Dependencies

### UI and Styling
- **Radix UI**: Comprehensive primitive components for accessibility and behavior
- **Tailwind CSS**: Utility-first CSS framework for responsive design
- **Lucide React**: Icon library for consistent iconography
- **Class Variance Authority**: Type-safe variant management for component styling

### Data and Forms
- **TanStack React Query**: Server state management, caching, and API interactions
- **React Hook Form**: Performant form handling with minimal re-renders
- **Zod**: Schema validation for both frontend forms and backend API endpoints
- **Drizzle ORM**: Type-safe database ORM with PostgreSQL dialect support

### Database Integration
- **Neon Database**: Serverless PostgreSQL database service (configured but not currently active)
- **Connect PG Simple**: PostgreSQL session store for future session management
- **Drizzle Kit**: Database migration and schema management tooling

### Development Tools
- **Replit Integration**: Vite plugins for Replit-specific development features and error overlays
- **TypeScript**: Full-stack type safety with path mapping and module resolution
- **ESBuild**: Fast JavaScript bundler for production backend builds
- **PostCSS**: CSS processing with Tailwind and Autoprefixer plugins

## Running Locally

```bash
npm install
npx tsx server/index.ts
```

The server uses the Vite dev server in middleware mode for the React client and Express for the API. Navigate to <http://localhost:3000/> to view the app.

## Deploying to GitHub Pages

1. Commit your changes and push to GitHub.
2. Run `npm run deploy`. This builds the client and publishes `dist/public` to the `gh-pages` branch using the `gh-pages` package.
3. Ensure GitHub Pages is configured to serve from the `gh-pages` branch.
4. Visit <https://zaredos.github.io/arenaclub-site/> after the deployment completes.

Deployments can also be automated using the provided GitHub Actions workflow.
