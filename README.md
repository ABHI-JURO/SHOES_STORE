# 👟 AIKICKS — Premium Footwear Website

> *"Step into the Future of Footwear"*

A handcrafted, multi-page e-commerce web application for **AIKICKS** — a fictional footwear brand. Built using **HTML5**, modular **CSS3**, and **Vanilla JavaScript (ES Modules)** with client-side state management via `localStorage`.

---

## 🌐 Pages Overview

| Page | HTML Location | Key Functionality |
|------|---------------|-------------------|
| **Home** | `HTML/HOME.html` | Hero header, category explorer cards, featured collection, About Us section, newsletter, & footer |
| **Sneakers** | `HTML/SNEAKERS.html` | Sneakers category product gallery |
| **Sports** | `HTML/SPORTS.html` | Performance sports footwear collection |
| **Trekking** | `HTML/TREKKING.html` | Rugged trekking & outdoor shoes collection |
| **New Collection** | `HTML/NEW_COLLECTION.html` | Showcase of latest product releases |
| **Cart** | `HTML/CART.html` | Dynamic item list, quantity adjusters, subtotal/tax/shipping calculator, & checkout trigger |
| **Orders** | `HTML/ORDERS.html` | Orders dashboard displaying active placed orders with real-time order cancellation |

---

## 📁 Exact File & Directory Structure

```
WEBSITE/
│
├── HTML/                           # Page Markup Files
│   ├── CART.html                   # Shopping cart & checkout interface
│   ├── HOME.html                   # Main landing page
│   ├── NEW_COLLECTION.html         # New collection page
│   ├── ORDERS.html                 # Placed orders & status dashboard
│   ├── SNEAKERS.html               # Sneakers product category page
│   ├── SPORTS.html                 # Sports product category page
│   └── TREKKING.html               # Trekking product category page
│
├── CSS/                            # Stylesheets & CSS Modules
│   ├── FOOTER.css                  # Global footer styles
│   ├── GLOBAL.css                  # Core CSS reset, root variables, & component imports
│   ├── HEADER.css                  # Frosted-glass navbar layout & active state highlights
│   ├── NEWSLETTER.css              # Newsletter banner styles
│   ├── PRODUCTS.css                # Standardized product card components
│   │
│   ├── CART-CSS/                   # Cart-specific modular stylesheets
│   │   ├── BILLING.css             # Order summary & pricing layout
│   │   ├── CART.css                # Base cart page stylesheet & imports
│   │   └── ITEM.css                # Cart item card styling & quantity controls
│   │
│   ├── HOME-CSS/                   # Home page modular stylesheets
│   │   ├── ABOUT-US.css            # Brand story & specialities grid
│   │   ├── EXPLORE.css             # Interactive category cards layout
│   │   └── HOME.css                # Hero section banner & header layout
│   │
│   ├── NEW_COLLECTION-CSS/
│   │   └── NEW_COLLECTION.css      # New collection layout
│   │
│   ├── ORDERS-CSS/
│   │   └── ORDER.css               # Orders history list & cancel button styles
│   │
│   ├── SNEAKERS-CSS/
│   │   └── SNEAKERS.css            # Sneakers gallery layout
│   │
│   ├── SPORTS-CSS/
│   │   └── SPORTS.css              # Sports gallery layout
│   │
│   └── TREKKING-CSS/
│       └── TREKKING.css            # Trekking gallery layout
│
├── JS/                             # Vanilla JS Logic & ES Modules
│   ├── CART-JS/
│   │   └── CART.js                 # Cart state, item removal, quantity updates, subtotal math, & checkout flow
│   │
│   ├── GLOBAL-JS/
│   │   └── GLOBAL.js               # Shared dynamic navigation bar, active link highlighter, newsletter, & footer injection
│   │
│   ├── HOME-JS/
│   │   ├── HOME-P.js               # Home page product data source
│   │   └── HOME.js                 # Home interaction handlers & category navigation routing
│   │
│   ├── NEW_COLLECTION-JS/
│   │   ├── NEW_COLLECTION-P.js     # New collection product dataset
│   │   └── NEW_COLLECTION.js       # New collection page DOM renderer
│   │
│   ├── SNEAKERS-JS/
│   │   ├── SNEAKERS-P.js           # Sneakers product dataset
│   │   └── SNEAKERS.js             # Sneakers page DOM renderer
│   │
│   ├── SPORTS-JS/
│   │   ├── SPORTS-P.js             # Sports product dataset
│   │   └── SPORTS.js               # Sports page DOM renderer
│   │
│   ├── TREKKING-JS/
│   │   ├── TREKKING-P.js           # Trekking product dataset
│   │   └── TREKKING.js             # Trekking page DOM renderer
│   │
│   └── orders-js/
│       └── order.js                # LocalStorage orders list renderer & order cancellation handler
│
├── IMAGES/                         # Static Image Resources
│   ├── ABOUT US/                   # Brand feature images
│   ├── CART_PRODUCTS/              # Cart preview thumbnails
│   ├── EXPLORE/                    # Category section card cover photos
│   ├── HEADER/                     # Hero section background banner images
│   ├── HOME_PRODUCTS/              # Home product grid imagery
│   ├── SNEAKERS_PRODUCTS/          # Sneakers collection imagery
│   ├── SPORTS_PRODUCTS/            # Sports collection imagery
│   └── TREKKING_PRODUCTS/          # Trekking collection imagery
│
└── ICONS/                          # Icon Assets
    └── feather/                    # Feather icon set
```

---

## ✨ System Features

- 🧭 **Centralized Navigation Module** (`JS/GLOBAL-JS/GLOBAL.js`) — Dynamically renders the global header, active nav link state, newsletter subscription box, and footer across all 7 HTML pages.
- 🛒 **Shopping Cart Engine** (`JS/CART-JS/CART.js`) — Renders cart items dynamically with item increment/decrement, item removal, 5% tax calculation, flat shipping fees, and checkout order placement.
- 📦 **Orders Management Dashboard** (`JS/orders-js/order.js`) — Persists purchases into `localStorage` under `orders` key and allows users to view active order details and cancel orders.
- 🎨 **Modular Stylesheet Architecture** (`CSS/`) — `GLOBAL.css` imports root structural styles (`HEADER.css`, `FOOTER.css`, `NEWSLETTER.css`, `PRODUCTS.css`), while individual pages utilize dedicated CSS subfolders (such as `CART-CSS/BILLING.css`, `CART-CSS/ITEM.css`, and `HOME-CSS/EXPLORE.css`).
- ⚡ **Product Data Separation** — Products are maintained as JavaScript objects (`*-P.js` files) separated cleanly from DOM rendering logic (`*.js` files).

---

## 🛠️ Tech Stack

| Technology | Implementation |
|------------|----------------|
| **HTML5** | Multi-page semantic architecture |
| **CSS3** | Flexbox, modular `@import` rules, root variables, glassmorphism UI |
| **JavaScript (ES6+)** | Dynamic DOM rendering, ES Modules (`import`/`export`), Event Listeners |
| **LocalStorage API** | Persistent client-side cart & order management |

---

## 🚀 How to Run Locally

Because the project relies on **native ES Modules** (`type="module"`), pages must be served via a local web server (to satisfy browser CORS rules for module loading).

1. **Clone the project repository**
   ```bash
   git clone https://github.com/ABHI-JURO/SHOES_STORE.git
   cd WEBSITE
   ```

2. **Serve using a local HTTP server**:
   * **VS Code**: Right-click `HTML/HOME.html` → **Open with Live Server**.
   * **Python**:
     ```bash
     python -m http.server 5500
     ```
     Open `http://localhost:5500/HTML/HOME.html` in your browser.
   * **Node.js**:
     ```bash
     npx serve .
     ```

---

## 👤 Author

**Abhishek**  
Front-end website built with modular CSS architecture, ES Modules, and native DOM manipulation.
