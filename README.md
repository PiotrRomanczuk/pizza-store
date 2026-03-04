# Pizza Store

A full-stack e-commerce web application for ordering pizzas online, built with Next.js 14 (App Router), React 18, TypeScript, and Stripe payment integration.

## Table of Contents

- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Features](#features)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Available Scripts](#available-scripts)
- [Architecture](#architecture)
- [Pages & Routes](#pages--routes)
- [API Endpoints](#api-endpoints)

## Project Overview

Pizza Store is a responsive, single-page e-commerce application that allows customers to browse a pizza menu, add items to a shopping cart, and complete purchases through Stripe checkout. The project uses the Next.js App Router pattern, React Context for state management, Tailwind CSS for styling, and integrates several animation libraries for an engaging user experience.

## Tech Stack

| Category           | Technology                                     |
| ------------------ | ---------------------------------------------- |
| **Framework**      | Next.js 14.0.4 (App Router)                   |
| **Language**       | TypeScript 5                                   |
| **UI Library**     | React 18                                       |
| **Styling**        | Tailwind CSS 3.3, PostCSS, Autoprefixer        |
| **Payments**       | Stripe 17.6.0                                  |
| **Animations**     | Framer Motion 10, Vara 1.4 (handwritten text)  |
| **UI Components**  | Headless UI 2.2, Heroicons 2.2                 |
| **Carousel**       | Swiper 11                                      |
| **Notifications**  | React Toastify 9                               |
| **Scroll Effects** | React Intersection Observer 9.5                |
| **Linting**        | ESLint 8 (next config)                         |
| **Formatting**     | Prettier 3.1 with Tailwind CSS plugin          |

## Project Structure

```
pizza-store/
├── app/                          # Next.js App Router directory
│   ├── api/
│   │   └── create-checkout-session/
│   │       └── route.ts          # Stripe checkout API endpoint
│   ├── components/
│   │   └── cart/                  # OrderSummary, FormInput components
│   ├── constants/                # Application constants
│   ├── types/                    # Type definitions
│   ├── menu/                     # Menu page
│   │   ├── page.tsx              # Product listing with pagination
│   │   ├── ProductCard.tsx       # Individual pizza card component
│   │   ├── Pagination.tsx        # Pagination controls
│   │   ├── DummyProducts.ts      # Hardcoded product catalog (18 items)
│   │   └── CartActions.tsx       # Cart action buttons
│   ├── cartOrder/
│   │   └── page.tsx              # Checkout/shipping form page
│   ├── contact/
│   │   └── page.tsx              # Contact information page
│   ├── blog/
│   │   └── page.tsx              # Blog placeholder (coming soon)
│   ├── order/
│   │   └── page.tsx              # Order page placeholder
│   ├── products/
│   │   └── page.tsx              # Products page
│   ├── globals.css               # Global styles & Tailwind directives
│   ├── layout.tsx                # Root layout (Navbar, Footer, Providers)
│   └── page.tsx                  # Homepage
├── components/
│   ├── UI/
│   │   ├── HomePage/             # Homepage sections
│   │   │   ├── HeroSection.tsx   # Full-height hero with background image
│   │   │   ├── About.tsx         # About section
│   │   │   ├── Places.tsx        # Locations section
│   │   │   ├── Gallery.tsx       # Masonry photo gallery with hover effects
│   │   │   ├── FadingComponent.tsx  # Fade-in on scroll wrapper
│   │   │   └── VaraHandwriting.tsx  # Animated handwritten text
│   │   ├── Layout/
│   │   │   ├── Navbar.tsx        # Sticky responsive navigation bar
│   │   │   └── Footer.tsx        # Site footer
│   │   └── Menu/
│   │       └── ProductDisplay.tsx # Product display component
│   └── cart/
│       ├── CartModal.tsx         # Slide-out cart sidebar
│       ├── CartButton.tsx        # Cart icon with item count badge
│       └── CartNotifications.tsx # Toast notifications for cart actions
├── context/
│   ├── CartProvider.tsx          # Cart context provider (global state)
│   └── CartActions.tsx           # Cart action handlers
├── interfaces/
│   ├── IProduct.ts               # Product type definition
│   ├── ICartItem.tsx             # Cart item type definition
│   └── ICartActions.ts           # Cart actions type definition
├── libs/
│   └── Fetcher.ts                # Fetch utility wrapper
├── public/
│   ├── dominos/                  # Pizza product images
│   ├── img/                      # Icons and assets
│   └── unSplash/                 # Background/hero images
├── package.json
├── tsconfig.json                 # TypeScript config (path alias: @/*)
├── tailwind.config.ts            # Tailwind config (Inter + Kalam fonts)
├── next.config.js                # Next.js config
├── postcss.config.js
├── prettier.config.js
├── .eslintrc.json
├── .env                          # Environment variables (Stripe keys)
└── .gitignore
```

## Features

### Customer-Facing

- **Homepage** -- Hero section, about section, photo gallery with hover animations, and handwritten-style animated text
- **Pizza Menu** -- Browse 18 pizza products with images, descriptions, ingredients, and prices ($11.99 - $19.99), paginated at 12 items per page
- **Shopping Cart** -- Slide-out modal sidebar with add/remove/quantity controls and real-time total calculation
- **Checkout** -- Shipping information form that redirects to Stripe-hosted checkout for secure payment
- **Contact Page** -- Restaurant contact details, hours, and location information
- **Responsive Design** -- Mobile-first layout with hamburger navigation menu on smaller screens

### Technical

- **State Management** -- React Context API (`CartProvider`) for global cart state
- **Cart Persistence** -- Cart items saved to `localStorage` and restored on page load
- **Stripe Integration** -- Server-side checkout session creation via Next.js API route
- **Scroll Animations** -- Intersection Observer-based fade-in effects on homepage sections
- **Optimized Images** -- Next.js `Image` component for automatic optimization
- **Type Safety** -- Full TypeScript interfaces for products, cart items, and form data

## Getting Started

### Prerequisites

- **Node.js** >= 18.x
- **npm**, **yarn**, **pnpm**, or **bun**
- A **Stripe** account (for payment processing)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/PiotrRomanczuk/pizza-store.git
   cd pizza-store
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables (see [Environment Variables](#environment-variables)).

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment Variables

Create a `.env` file in the project root with the following variables:

```
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key
STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable_key
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

- `STRIPE_SECRET_KEY` -- Used server-side to create checkout sessions
- `STRIPE_PUBLISHABLE_KEY` -- Used client-side for Stripe integration
- `NEXT_PUBLIC_BASE_URL` -- Base URL for success/cancel redirect URLs during checkout

## Available Scripts

| Command         | Description                                 |
| --------------- | ------------------------------------------- |
| `npm run dev`   | Start development server with hot reload    |
| `npm run build` | Create optimized production build           |
| `npm run start` | Start production server                     |
| `npm run lint`  | Run ESLint to check for code quality issues |

## Architecture

### State Management

The app uses React Context API for cart state management:

```
CartProvider (context/CartProvider.tsx)
  ├── cartItems: ICartItem[]       # Current cart contents
  ├── addToCart(item)               # Add item or increment quantity
  ├── removeFromCart(item)          # Decrement quantity or remove item
  ├── clearCart()                   # Empty the cart
  └── getCartTotal()               # Calculate total price
```

Cart state is automatically synced with `localStorage` for persistence across browser sessions.

### Checkout Flow

1. Customer adds pizzas to cart from the menu page
2. Reviews items in the slide-out cart modal
3. Clicks "Proceed to Checkout" to navigate to `/cartOrder`
4. Fills in shipping information (name, email, address, city, zip, country)
5. Submits the form, which calls `POST /api/create-checkout-session`
6. Server creates a Stripe checkout session and returns the URL
7. Customer is redirected to Stripe's hosted checkout page
8. On successful payment, customer is redirected to the order confirmation page
9. Cart is cleared automatically after checkout

### Styling

- **Tailwind CSS** is the primary styling system, configured with two Google Fonts: **Inter** (primary) and **Kalam** (handwritten accent)
- **Color scheme**: Red-600 branding (navbar, footer, buttons), gray neutrals, white backgrounds
- Custom CSS in `Gallery-styles.css` handles hover animation utilities for the image gallery

## Pages & Routes

| Route                | Description                               |
| -------------------- | ----------------------------------------- |
| `/`                  | Homepage with hero, about, gallery        |
| `/menu`              | Pizza catalog with pagination             |
| `/cartOrder`         | Checkout form with shipping details       |
| `/contact`           | Restaurant contact info and hours         |
| `/blog`              | Blog section (coming soon placeholder)    |
| `/order`             | Order page                                |
| `/order-confirmation`| Post-checkout confirmation (Stripe redirect) |

## API Endpoints

### `POST /api/create-checkout-session`

Creates a Stripe checkout session for processing pizza orders.

**Request body:**
```json
{
  "cartItems": [
    {
      "name": "Margherita",
      "price": 12.99,
      "quantity": 2,
      "image": "/dominos/margherita.avif"
    }
  ],
  "shippingAddress": {
    "name": "John Doe",
    "email": "john@example.com",
    "address": "123 Main St",
    "city": "New York",
    "zipCode": "10001",
    "country": "US"
  }
}
```

**Response:**
```json
{
  "url": "https://checkout.stripe.com/..."
}
```

**Supported shipping countries:** US, CA, GB

**Shipping:** Free shipping, estimated 5-7 business days
