# Nerai - AI Conversation Assistant Platform

## Overview

Nerai is a modern full-stack web application that provides AI-powered conversation assistance across multiple platforms including Slack, Microsoft Teams, WhatsApp, and Zoom. The application features a marketing website with contact forms, newsletter subscriptions, and detailed product information.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query (React Query) for server state
- **Animations**: Framer Motion for smooth transitions and interactions
- **Forms**: React Hook Form with Zod validation
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon serverless PostgreSQL
- **Session Management**: PostgreSQL-based session storage
- **API Design**: RESTful API endpoints

### Project Structure
```
├── client/          # Frontend React application
├── server/          # Backend Express server
├── shared/          # Shared types and schemas
├── migrations/      # Database migration files
└── dist/           # Production build output
```

## Key Components

### Database Schema
- **Users**: Basic user authentication system
- **Contacts**: Contact form submissions with categorization (demo, sales, support)
- **Newsletters**: Email newsletter subscriptions
- **Schema Validation**: Zod schemas for runtime validation

### API Endpoints
- `POST /api/contact` - Contact form submission
- `POST /api/newsletter` - Newsletter subscription
- Error handling with proper HTTP status codes

### UI Components
- Modern glass-morphism design system
- Responsive layout with mobile-first approach
- Interactive animations and micro-interactions
- Comprehensive component library (buttons, forms, modals, etc.)

### Features
- Landing page with hero section
- Product feature showcase
- Pricing plans
- Customer testimonials
- FAQ section
- Contact forms with validation
- Newsletter subscription

## Data Flow

1. **Frontend**: User interactions trigger form submissions or API calls
2. **Validation**: Zod schemas validate data on both client and server
3. **API Layer**: Express routes handle requests and responses
4. **Database**: Drizzle ORM manages PostgreSQL operations
5. **Storage**: In-memory storage for development, PostgreSQL for production

## External Dependencies

### Frontend Dependencies
- React ecosystem (React, React DOM, React Router alternative)
- UI libraries (Radix UI primitives, Lucide icons)
- Form handling (React Hook Form, Zod validation)
- Animations (Framer Motion)
- HTTP client (TanStack Query)

### Backend Dependencies
- Express.js for server framework
- Drizzle ORM for database operations
- Neon database for serverless PostgreSQL
- Session management with connect-pg-simple

### Development Tools
- Vite for frontend build and development
- TypeScript for type safety
- Tailwind CSS for styling
- PostCSS for CSS processing

## Deployment Strategy

### Development
- Vite dev server for frontend with HMR
- Express server with TypeScript execution via tsx
- In-memory storage for rapid development

### Production Build
- Frontend: Vite builds optimized React bundle
- Backend: esbuild bundles Express server
- Database: PostgreSQL with Drizzle migrations
- Static assets served by Express in production

### Build Scripts
- `npm run dev` - Development mode with hot reload
- `npm run build` - Production build
- `npm run start` - Production server
- `npm run db:push` - Database schema sync

## User Preferences

Preferred communication style: Simple, everyday language.

## Changelog

Changelog:
- June 30, 2025. Initial setup