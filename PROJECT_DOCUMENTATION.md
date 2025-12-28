# Royal Signs & Awnings - Houston Signs Website

## Project Documentation for GitHub Import

This documentation covers everything created in this Lovable project for importing into another Lovable account via GitHub.

---

## Technology Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom design system
- **Routing**: React Router DOM v6
- **UI Components**: shadcn/ui (Radix UI primitives)
- **State Management**: TanStack React Query
- **Icons**: Lucide React
- **Fonts**: Roboto (Google Fonts)

---

## Complete Folder Structure

```
/
├── public/
│   ├── content/                    # JSON content files for pages
│   │   ├── industries/             # Industry-specific page content (22 files)
│   │   ├── locations/              # Location-specific page content (120+ files)
│   │   ├── main-menu/              # Main menu page content (11 files)
│   │   └── signtypes/              # Sign type page content (67 files)
│   ├── images/                     # All static images
│   │   ├── _defaults/              # Default/fallback images
│   │   ├── industries/             # Industry page images
│   │   ├── locations/              # Location page images
│   │   ├── main-menu/              # Main menu page images
│   │   ├── services/               # Service images
│   │   ├── signtypes/              # Sign type page images
│   │   └── royal-signs-logo-white.png
│   ├── favicon.ico
│   └── placeholder.svg
│
├── src/
│   ├── assets/
│   │   └── images/                 # Imported assets (ES6 modules)
│   │
│   ├── components/
│   │   ├── forms/                  # Form components
│   │   │   ├── QuoteForm.tsx       # Main quote request form
│   │   │   └── StickyQuoteCard.tsx # Sticky sidebar quote card
│   │   │
│   │   ├── home/                   # Homepage components
│   │   │   ├── AboutSection.tsx
│   │   │   ├── HeroSection.tsx
│   │   │   └── ServiceCards.tsx
│   │   │
│   │   ├── layout/                 # Layout components
│   │   │   ├── Footer.tsx          # Site footer
│   │   │   ├── Header.tsx          # Site header with navigation
│   │   │   ├── Layout.tsx          # Main layout wrapper
│   │   │   ├── PageSidebarWithMobileForm.tsx
│   │   │   └── Sidebar.tsx         # Navigation sidebar
│   │   │
│   │   ├── sections/               # Reusable page sections
│   │   │   ├── CommitmentSection.tsx
│   │   │   ├── ContentSection.tsx
│   │   │   ├── FreeQuoteBanner.tsx
│   │   │   ├── HeroWithForm.tsx
│   │   │   ├── HeroWithQuoteForm.tsx
│   │   │   ├── HeroWithSidebar.tsx
│   │   │   ├── ImageGrid.tsx
│   │   │   ├── ProcessIcons.tsx
│   │   │   ├── ServiceCards.tsx
│   │   │   └── index.ts
│   │   │
│   │   ├── templates/              # Page templates
│   │   │   ├── CategoryPageTemplate.tsx
│   │   │   ├── ServicePageTemplate.tsx
│   │   │   ├── UnifiedPageTemplate.tsx
│   │   │   └── UniversalPageTemplate.tsx
│   │   │
│   │   ├── ui/                     # shadcn/ui components (50+ files)
│   │   │   ├── ScrollableList.tsx  # Custom scrollable list with fade
│   │   │   ├── accordion.tsx
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── dialog.tsx
│   │   │   ├── form.tsx
│   │   │   ├── input.tsx
│   │   │   ├── select.tsx
│   │   │   ├── sheet.tsx
│   │   │   ├── sidebar.tsx
│   │   │   ├── toast.tsx
│   │   │   └── ... (40+ more)
│   │   │
│   │   └── NavLink.tsx             # Navigation link component
│   │
│   ├── hooks/                      # Custom React hooks
│   │   ├── use-mobile.tsx          # Mobile detection hook
│   │   ├── use-toast.ts            # Toast notifications hook
│   │   └── useLocationContent.ts   # Location content fetching hook
│   │
│   ├── lib/
│   │   └── utils.ts                # Utility functions (cn helper)
│   │
│   ├── pages/
│   │   ├── industries/             # Industry page components (33 files)
│   │   │   ├── AutomotiveSigns.tsx
│   │   │   ├── BankSigns.tsx
│   │   │   ├── ChurchSigns.tsx
│   │   │   ├── RestaurantSigns.tsx
│   │   │   └── ... (29 more + index.ts)
│   │   │
│   │   ├── locations/              # Location page components
│   │   │   ├── LocationPage.tsx    # Dynamic location page
│   │   │   └── index.ts
│   │   │
│   │   ├── main-menu/              # Main menu page components (11 files)
│   │   │   ├── Index.tsx           # Homepage
│   │   │   ├── IndoorSigns.tsx
│   │   │   ├── OutdoorSigns.tsx
│   │   │   ├── AwningSigns.tsx
│   │   │   ├── VehicleWraps.tsx
│   │   │   ├── CustomSigns.tsx
│   │   │   ├── BusinessSigns.tsx
│   │   │   ├── Reviews.tsx
│   │   │   ├── ContactUs.tsx
│   │   │   ├── NotFound.tsx
│   │   │   └── index.ts
│   │   │
│   │   └── signtypes/              # Sign type page components (55 files)
│   │       ├── ADASigns.tsx
│   │       ├── ChannelLetters.tsx
│   │       ├── MonumentSigns.tsx
│   │       ├── PoleSigns.tsx
│   │       └── ... (51 more + index.ts)
│   │
│   ├── App.css                     # App-specific styles
│   ├── App.tsx                     # Main app with all routes
│   ├── index.css                   # Design system & Tailwind
│   ├── main.tsx                    # App entry point
│   ├── tailwind.config.lov.json    # Lovable Tailwind config
│   └── vite-env.d.ts               # Vite type declarations
│
├── pages/                          # Legacy JSON content (older format)
│   ├── main-menu/
│   ├── signtypes/
│   └── locations/
│
├── index.html                      # HTML entry point
├── tailwind.config.ts              # Tailwind configuration
├── vite.config.ts                  # Vite configuration
├── tsconfig.json                   # TypeScript config
├── tsconfig.app.json               # App TypeScript config
├── tsconfig.node.json              # Node TypeScript config
├── components.json                 # shadcn/ui configuration
├── postcss.config.js               # PostCSS configuration
└── package.json                    # Dependencies & scripts
```

---

## Design System

### Brand Colors (defined in src/index.css)

| Color | HSL Value | Usage |
|-------|-----------|-------|
| Primary (Dark Teal) | 181 100% 10% | Main brand color, headers, buttons |
| Accent (Orange) | 37 100% 50% | CTAs, highlights, hover states |
| Brand Gold | 45 100% 50% | Accents |
| Heading Color | 0 0% 0% | All headings |
| Paragraph Color | 0 0% 33% | Body text |

### Typography
- **Font Family**: Roboto (Google Fonts)
- **H1/H2**: 36px, bold
- **H3**: 28px, bold
- **Body**: 16px, line-height 1.43

---

## Page Structure

### Main Menu Pages (8 pages)
| Route | Component | Description |
|-------|-----------|-------------|
| / | Index.tsx | Homepage |
| /indoor-signs | IndoorSigns.tsx | Indoor signs service |
| /outdoor-signs | OutdoorSigns.tsx | Outdoor signs service |
| /awning-signs | AwningSigns.tsx | Awning signs service |
| /vehicle-wraps | VehicleWraps.tsx | Vehicle wraps service |
| /custom-signs | CustomSigns.tsx | Custom signs service |
| /business-signs | BusinessSigns.tsx | Business signs service |
| /reviews | Reviews.tsx | Customer reviews |
| /contact-us | ContactUs.tsx | Contact page |

### Industry Pages (32 pages)
Examples: /automotive-signs, /bank-signs, /church-signs, /restaurant-signs, /retail-signs, etc.

### Sign Type Pages (55 pages)
Examples: /ada-signs, /channel-letters, /monument-signs, /pole-signs, /led-signs, etc.

### Location Pages (Dynamic - 121+ combinations)
- **City Pages**: /alief-tx, /houston-tx, /katy-tx, /spring-tx, etc.
- **Service + City**: /awning-signs-alief-tx, /monument-signs-houston-tx, etc.

**Supported Locations (11):**
Alief, Baytown, Cy-Fair, Houston, Katy, Missouri City, Richmond, Rosenberg, Spring, Sugar Land, Thompsons

**Location Services (11):**
sign-company, indoor-signs, outdoor-signs, awning-signs, custom-signs, business-signs, metal-signs, pole-signs, canopy-tents, monument-signs, sign-repairs

---

## Key Components

### Layout Components
- **Header.tsx**: Top navigation with logo, phone, main menu links
- **Footer.tsx**: Site footer with white text, contact info, links
- **Sidebar.tsx**: Left sidebar with Sign Types & Industries menus (scrollable with fade gradient)
- **Layout.tsx**: Main layout wrapper with header, sidebar, content, footer

### Templates
- **UniversalPageTemplate.tsx**: Main template for all service/industry pages
- **CategoryPageTemplate.tsx**: Template for category listing pages
- **ServicePageTemplate.tsx**: Template for individual service pages

### Custom Components
- **ScrollableList.tsx**: Scrollable container with fade gradient and "More" button
- **QuoteForm.tsx**: Lead capture form for quote requests
- **StickyQuoteCard.tsx**: Sticky sidebar quote request card

---

## JSON Content Structure

Content files in public/content/ follow this structure:

```json
{
  "url": "https://www.houstonsignsandawnings.com/monument-signs",
  "path": "/monument-signs",
  "category": "pages",
  "content": [
    { "tag": "H1", "text": "Monument Signs" },
    { "tag": "P", "text": "Description paragraph..." },
    { "tag": "H2", "text": "Section heading" },
    { "tag": "P", "text": "More content..." }
  ],
  "images": {
    "basePath": "/images/signtypes/monument-signs/",
    "hero": "01-sign-company-01.jpg",
    "gallery": ["02-image.jpg", "03-image.jpg"]
  }
}
```

---

## Images

### Image Organization
- /public/images/signtypes/ - Sign type page images
- /public/images/industries/ - Industry page images
- /public/images/locations/ - Location-specific images
- /public/images/main-menu/ - Main menu page images
- /public/images/_defaults/ - Fallback images

### Image Naming Convention
Images in each folder are typically numbered: 01-*.jpg, 02-*.jpg, etc.

---

## Dependencies

### Core Dependencies
- react: ^18.3.1
- react-dom: ^18.3.1
- react-router-dom: ^6.30.1
- @tanstack/react-query: ^5.83.0
- lucide-react: ^0.462.0

### UI Components (shadcn/ui)
- @radix-ui/react-accordion: ^1.2.11
- @radix-ui/react-dialog: ^1.1.14
- @radix-ui/react-navigation-menu: ^1.2.13
- @radix-ui/react-tabs: ^1.1.12
- @radix-ui/react-tooltip: ^2.1.7
- ... and 20+ more Radix UI packages

### Styling
- tailwindcss: latest
- tailwindcss-animate: ^1.0.7
- tailwind-scrollbar: ^4.0.2
- class-variance-authority: ^0.7.1
- clsx: ^2.1.1
- tailwind-merge: ^2.6.0

### Forms
- react-hook-form: ^7.61.1
- @hookform/resolvers: ^3.10.0
- zod: ^3.25.76

---

## Import Instructions for New Lovable Account

### Step 1: Connect GitHub
1. In the new Lovable account, go to Project Settings > GitHub
2. Click Connect to GitHub
3. Authorize Lovable GitHub App
4. Select the repository containing this project

### Step 2: After Import
1. The project should load automatically
2. All routes, components, and content should work immediately
3. Check that images load from /public/images/

### Step 3: Verify
- Navigate to homepage /
- Test main menu navigation
- Test Sign Types sidebar (scrollable with fade gradient)
- Test Industries sidebar
- Test location pages (e.g., /houston-tx, /monument-signs-alief-tx)

---

## Features Implemented

### Navigation
- Responsive header with logo and phone number
- Main navigation menu (8 items)
- Collapsible sidebar with Sign Types & Industries
- Scrollable menus with fade gradient and "More" button
- Mobile-responsive hamburger menu

### Pages
- 8 Main menu pages
- 32 Industry-specific pages
- 55 Sign type pages
- 121+ Location combination pages (dynamic)
- 404 Not Found page

### Content Management
- JSON-based content system
- Dynamic page templates
- SEO-friendly page structure
- Image galleries with hero images

### UI/UX
- White footer text styling
- Custom scrollbar styling
- Fade gradients for scrollable areas
- Quote request forms
- Responsive design throughout

---

## Configuration Files

| File | Purpose |
|------|---------|
| tailwind.config.ts | Tailwind CSS configuration with custom colors |
| src/index.css | CSS design system with HSL color variables |
| vite.config.ts | Vite build configuration |
| tsconfig.json | TypeScript configuration |
| components.json | shadcn/ui component configuration |

---

## Contact Information (Site Content)

- **Company**: Royal Signs & Awnings
- **Phone**: (281) 645-9935
- **Website**: houstonsignsandawnings.com
- **Service Area**: Houston, TX and surrounding areas

---

Generated: December 2024
This documentation is for importing the project into a new Lovable account via GitHub.
