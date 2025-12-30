# Sugandh Sanduka - Premium Car Fresheners Catalogue

## Overview
Sugandh Sanduka is a premium car freshener catalogue website inspired by ridefrsh.com. The application features a modern, responsive design with a warm amber/gold color scheme and elegant typography. This is a static catalogue website (no shopping cart functionality).

## Tech Stack
- **Frontend**: React 18 with TypeScript, Vite, TailwindCSS, Shadcn/UI
- **Backend**: Express.js with TypeScript
- **State Management**: TanStack React Query for server state
- **Routing**: Wouter
- **Styling**: TailwindCSS with custom design tokens
- **Currency**: INR (Indian Rupees)

## Project Structure
```
client/
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── ui/            # Shadcn UI components
│   │   ├── navigation.tsx  # Main navigation header
│   │   ├── hero-section.tsx
│   │   ├── product-card.tsx
│   │   ├── featured-products.tsx
│   │   ├── collections-section.tsx
│   │   ├── features-section.tsx
│   │   ├── about-section.tsx
│   │   ├── newsletter-section.tsx
│   │   ├── footer.tsx
│   │   └── theme-toggle.tsx
│   ├── pages/             # Page components
│   │   ├── home.tsx
│   │   ├── shop.tsx
│   │   ├── collections.tsx
│   │   ├── about.tsx
│   │   └── not-found.tsx
│   ├── lib/               # Utilities and context
│   │   ├── format-price.ts  # INR currency formatter
│   │   ├── theme-context.tsx
│   │   ├── queryClient.ts
│   │   └── utils.ts
│   └── hooks/             # Custom React hooks
server/
├── routes.ts              # API endpoints
├── storage.ts             # In-memory data storage
└── index.ts               # Express server entry
shared/
└── schema.ts              # Shared TypeScript types and Zod schemas
```

## Features
- **Home Page**: Hero section, featured products, collections, features, about, newsletter
- **Shop Page**: Product grid with search, filtering, and sorting
- **Collections Page**: Browse products by scent category
- **About Page**: Brand story and values
- **Theme**: Light/Dark mode toggle with localStorage persistence
- **Responsive**: Mobile-first design with hamburger menu
- **Pricing**: All prices displayed in INR (₹)

## API Endpoints
- `GET /api/products` - Get all products (optional `?featured=true`)
- `GET /api/products/:id` - Get single product
- `GET /api/collections` - Get all collections
- `GET /api/collections/:id` - Get single collection
- `POST /api/newsletter` - Subscribe to newsletter
- `GET /api/images/:id` - Serve product images

## Design System
- **Colors**: Warm amber/gold primary (#DA8A17), neutral backgrounds
- **Typography**: Inter for body, Playfair Display for headings
- **Spacing**: Consistent 4px base unit
- **Border Radius**: Small rounded corners (6px default)

## Running the Application
The application runs on port 5000 with `npm run dev`. Vite handles both frontend HMR and proxies API requests to Express.

## GitHub Repository
**Repository URL**: https://github.com/santoshsan3685/sugandh-sanduka

### User Preference
**IMPORTANT**: Always push code changes to the GitHub repository after making any modifications. Use the upload script at `scripts/upload-to-github.ts` to sync changes.

## Recent Changes
- December 2025: SEO Implementation
  - Added react-helmet-async for dynamic meta tags
  - Created reusable SEO component with structured data (JSON-LD)
  - Added unique meta tags to all pages (Home, Shop, Collections, About)
  - Implemented Organization, Product, and Breadcrumb structured data
  - Created sitemap.xml and robots.txt for search engines
  - Added Open Graph and Twitter Card meta tags
- December 2025: Converted to static catalogue website
  - Removed cart functionality (no add to cart, no cart drawer)
  - Changed pricing to INR (Indian Rupees) with ₹ symbol
  - Updated navigation to remove cart button
  - Product cards now display prices only (no purchase buttons)
  - Added WhatsApp integration for purchases (919890991136)
- December 2024: Initial MVP build with all core features
  - Complete responsive frontend with 4 pages
  - In-memory backend with sample product data
  - Newsletter subscription
  - Theme toggle (light/dark mode)
