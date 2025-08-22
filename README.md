# ArenaClub Server Website

## Overview

Welcome to the **ArenaClub** website — the home base for our Minecraft PvP community.  
The site is designed to showcase what our server offers (classes, features, events) and provide a simple way for players to share suggestions or feedback.  

You can check out the live site here: [https://arenaclub.club](https://arenaclub.club)  

---

## Running Locally & Deployment

### 1. Install dependencies
First, install all project modules:
```bash
npm install
````

This pulls down all required packages (React, Vite, Wouter, Tailwind, etc.) so the site can run.

---

### 2. Development server (local)

Run:

```bash
npm run dev
```

* Starts the site locally on **[http://localhost:3000](http://localhost:3000)**
* Uses Vite’s hot reload, so any code or style changes show up in your browser instantly. 

This is the main command to use while developing.

---

### 3. Building for production

Run:

```bash
npm run build
```

* Creates an optimized production build of the site inside the `dist/public` folder.
* Bundles the backend server into `server-dist/`.
* Used before deploying, but collaborators don’t need to run this directly if using the deploy script below.

---

### 4. Deploying to arenaclub.club

Run:

```bash
npm run deploy
```

* Automatically runs the build step.
* Copies the necessary files (`index.html` → `404.html`, `CNAME` with `arenaclub.club`).
* Pushes the built site to the **gh-pages branch** of this repo.
* GitHub Pages then serves the new site at [https://arenaclub.club](https://arenaclub.club).

Only collaborators with push access to this repo can deploy changes. Cloning the repo or forking it will not affect the live site.

---

## System Architecture

### Frontend Architecture

* **Framework**: React with TypeScript running on Vite for fast development and building
* **Routing**: Wouter for lightweight client-side routing with a simple home page and 404 fallback
* **UI Framework**: Shadcn/ui components built on Radix UI primitives with Tailwind CSS for styling
* **State Management**: TanStack React Query for server state management and API interactions
* **Form Handling**: React Hook Form with Zod validation for type-safe form processing
* **Styling**: Custom gaming theme with Minecraft-inspired color palette, Orbitron font for headers, and dark theme design

### Backend Architecture

* **Framework**: Express.js server with TypeScript for type safety
* **API Design**: RESTful API with focused endpoints for suggestion submission and retrieval
* **Data Storage**: In-memory storage implementation with interface for future database integration
* **Error Handling**: Centralized error handling middleware with structured JSON responses
* **Request Logging**: Custom middleware for API request logging with response capture

### Data Storage Solution

* **Current**: In-memory storage using Map data structures for development and testing
* **Database Ready**: Drizzle ORM configured with PostgreSQL schema definitions
* **Schema**: Two main entities - users (id, username, password) and suggestions (id, name, email, type, suggestion, createdAt)
* **Migration**: Drizzle Kit configured for database migrations when transitioning to persistent storage

### Component Architecture

* **Section-based Design**: Modular components for each website section (Hero, Features, Classes, Join, Suggestions, Footer)
* **Reusable UI**: Comprehensive Shadcn/ui component library for consistent design patterns
* **Form Components**: Dedicated suggestion form with validation and success feedback
* **Navigation**: Smooth scrolling navigation with mobile-responsive hamburger menu

### Build and Development

* **Development**: Vite dev server with HMR for frontend, tsx for TypeScript execution on backend
* **Build Process**: Vite builds frontend to `dist/public`, esbuild bundles backend to `server-dist/index.js`
* **Asset Management**: Vite handles frontend assets, Express serves static files in production
* **Type Checking**: Shared TypeScript configuration across frontend, backend, and shared modules

---

## External Dependencies

### UI and Styling

* **Radix UI**: Comprehensive primitive components for accessibility and behavior
* **Tailwind CSS**: Utility-first CSS framework for responsive design
* **Lucide React**: Icon library for consistent iconography
* **Class Variance Authority**: Type-safe variant management for component styling

### Data and Forms

* **TanStack React Query**: Server state management, caching, and API interactions
* **React Hook Form**: Performant form handling with minimal re-renders
* **Zod**: Schema validation for both frontend forms and backend API endpoints
* **Drizzle ORM**: Type-safe database ORM with PostgreSQL dialect support

### Database Integration

* **Neon Database**: Serverless PostgreSQL database service (configured but not currently active)
* **Connect PG Simple**: PostgreSQL session store for future session management
* **Drizzle Kit**: Database migration and schema management tooling

### Development Tools

* **Replit Integration**: Vite plugins for Replit-specific development features and error overlays
* **TypeScript**: Full-stack type safety with path mapping and module resolution
* **ESBuild**: Fast JavaScript bundler for production backend builds
* **PostCSS**: CSS processing with Tailwind and Autoprefixer plugins
