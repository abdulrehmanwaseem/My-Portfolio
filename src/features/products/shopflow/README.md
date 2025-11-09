# ShopFlow Landing Page

A professional product landing page for ShopFlow - a comprehensive shop management system built with the PERN stack.

## Overview

ShopFlow is a complete shop management solution featuring:

- **Invoice Management** - Complete invoice system with financial transaction logging
- **Inventory Tracking** - Real-time inventory management with stock alerts
- **Customer & Vendor Management** - Complete transaction history and records
- **Real-time Dashboards** - Dynamic analytics and performance metrics
- **Payment Status Tracking** - Automated payment tracking with status updates
- **Excel-like Data Entry** - Integrated Handontable for spreadsheet-style data entry
- **Sales Analytics** - Comprehensive reports, trends, and forecasting
- **Transaction History** - Complete audit trail with timestamps and logs

## Tech Stack

Built with modern PERN stack technologies:

- **React** - Modern UI library
- **Redux** - State management
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **PostgreSQL** - Relational database
- **Prisma** - Type-safe ORM
- **TypeScript** - Type safety
- **JWT** - Authentication system
- **Handontable** - Excel-like data grids

## Landing Page Structure

### Components

1. **Hero Section** (`hero.tsx`)

   - Eye-catching headline with gradient text
   - Call-to-action buttons
   - Key metrics showcase
   - Live status indicator

2. **Demo Section** (`demo.tsx`)

   - Video demonstration
   - Feature highlights
   - Quick benefits overview

3. **Features Section** (`features.tsx`)

   - 8 comprehensive features with icons
   - Hover effects and animations
   - Detailed descriptions

4. **Tech Stack Section** (`tech-stack.tsx`)

   - Technology logos with descriptions
   - Key technical features checklist
   - Modern, clean grid layout

5. **CTA Section** (`cta.tsx`)
   - Final call-to-action
   - Project statistics
   - Contact buttons
   - Gradient background with effects

## Video Setup

Place your ShopFlow demo video at:

```
public/video/shopflow-video.mp4
```

Optional poster image:

```
public/images/products/shopflow-poster.jpg
```

## Route

The landing page is accessible at:

```
/products/shopflow
```

## Navigation

Added to the main navigation in `src/config/site.ts`:

```typescript
{
  title: "Products",
  href: "/products/shopflow",
}
```

## Future Extensions

This structure supports adding more products:

```
src/
  app/
    (app)/
      products/
        shopflow/          # ShopFlow landing page
        [new-product]/     # Future products
  features/
    products/
      shopflow/            # ShopFlow components
      [new-product]/       # Future product components
```

## Customization

### Colors

The landing page uses the site's theme colors defined in Tailwind CSS. Primary color is used for:

- Gradient text
- Icons
- Hover states
- Accent elements

### Content

Update the following to customize:

- Feature descriptions in `features.tsx`
- Tech stack items in `tech-stack.tsx`
- Statistics in `cta.tsx`
- Hero copy in `hero.tsx`

### Video

Replace `/video/shopflow-video.mp4` with your demo video. Supported formats:

- MP4 (recommended)
- WebM
- OGG

## SEO & Metadata

Configured in `page.tsx`:

```typescript
export const metadata: Metadata = {
  title: "ShopFlow - Complete Shop Management System",
  description: "...",
  openGraph: { ... },
};
```

## Development Period

- **Start**: November 2023
- **End**: April 2024
- **Duration**: 5+ months
- **Status**: Self-employed project

## Links

- Contact: `/#contact`
- Experience: `/#experience`
- Demo section: `#demo`
- Features section: `#features`
