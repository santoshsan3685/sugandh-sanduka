# Design Guidelines: Sugandh Sanduka - Car Fresheners E-Commerce

## Design Approach
**Reference-Based**: Drawing inspiration from modern e-commerce product sites (ridefrsh.com, Shopify stores, Glossier) with emphasis on clean product presentation, lifestyle photography, and streamlined purchasing flow.

## Core Design Principles
- Product-first visual hierarchy
- Clean, modern aesthetic with generous whitespace
- Mobile-optimized shopping experience
- Trust-building through professional photography

## Typography System
**Font Families** (via Google Fonts):
- Headings: Inter (700, 600 for hierarchy)
- Body: Inter (400, 500)
- Accent/Price: Inter (600)

**Scale**:
- Hero Headline: text-5xl lg:text-7xl
- Section Headings: text-3xl lg:text-5xl
- Product Titles: text-xl lg:text-2xl
- Body Text: text-base lg:text-lg
- Small Text/Labels: text-sm

## Layout System
**Spacing Units**: Tailwind 4, 6, 8, 12, 16, 20, 24 for consistent rhythm

**Container Strategy**:
- Full-width hero: w-full
- Content sections: max-w-7xl mx-auto px-4 lg:px-8
- Product grids: max-w-6xl mx-auto

**Grid Systems**:
- Product catalog: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
- Features: grid-cols-1 md:grid-cols-3
- Testimonials: grid-cols-1 md:grid-cols-2 lg:grid-cols-3

## Page Structure

### Navigation
Sticky header with transparent-to-solid transition on scroll
- Logo left
- Center: Shop, Collections, About, Contact
- Right: Search icon, Cart (with item count badge), Mobile menu

### Hero Section
Full-viewport (min-h-screen) lifestyle image of car interior with freshener
- Centered overlay content with blurred-background buttons
- Headline: "Transform Your Drive"
- Subheadline: Product benefit copy
- Dual CTA: Primary "Shop Now" + Secondary "View Collections"

### Featured Products (Below Hero)
Product grid with hover-lift cards
Each card: Product image, title, price, quick "Add to Cart" button
Subtle shadow on hover

### Collections Showcase
3-column grid with category images
- By Scent Type
- By Design/Theme  
- Limited Editions
Overlay text with category name

### Why Choose Us / Features
3-column feature grid with icons
- Premium Fragrances
- Long-Lasting Scent
- Free Shipping Over [Amount]

### Social Proof
Instagram-style grid showing customer photos/reviews
2-3 columns, masonry-style if varied image sizes

### Newsletter Signup
Clean centered section with email input + CTA
Value proposition: "Get 10% off your first order"

### Footer
Multi-column layout:
- Company info & social links
- Quick Links (Shop, FAQ, Returns)
- Contact details
- Payment icons/trust badges

## Component Library

**Product Card**:
- 1:1 aspect ratio image
- Product name below
- Price (strikethrough original if on sale)
- Star rating
- Add to Cart button on hover/tap

**Buttons**:
- Primary: Solid with rounded corners (rounded-lg), font-semibold
- Secondary: Outline style
- Blurred background for hero CTAs using backdrop-blur-md

**Forms**:
- Single-line inputs with border-b focus state
- Rounded input fields for newsletter/checkout
- Clear labels above inputs

**Cart Drawer**:
Slide-in from right
- Product thumbnails with quantity controls
- Subtotal display
- Checkout CTA sticky at bottom

**Icons**: Heroicons via CDN
- Shopping cart, search, user, menu, close
- Social media icons for footer

## Images Required

1. **Hero Image**: Lifestyle shot of car interior (dashboard/hanging rearview) with freshener product prominently displayed. Clean, bright, aspirational aesthetic. High-res, professionally lit.

2. **Product Images**: White background studio shots of individual fresheners. Multiple angles if possible. Consistent lighting and framing across all products.

3. **Collection Headers**: Themed lifestyle images representing scent categories (e.g., ocean scene for fresh scents, forest for woody scents, flowers for floral).

4. **Customer Photos**: User-generated content showing products in real car settings. Instagram-style authentic photography.

5. **About/Brand Story**: Optional founder/workshop images for credibility and story-telling.

## Interactions (Minimal)
- Smooth scroll behavior
- Product card subtle scale on hover (scale-105)
- Cart drawer slide animation
- Sticky header fade-in background
- Image lazy loading for performance

## Mobile Optimization
- Single column product grid on mobile
- Hamburger menu with full-screen overlay
- Touch-friendly tap targets (min 44px)
- Simplified hero with shorter viewport height
- Sticky "Add to Cart" bar on product pages