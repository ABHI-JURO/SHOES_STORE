# 👟 AIKICKS — Premium Footwear Website

> *"Step into the Future of Footwear"*

A fully handcrafted, multi-page e-commerce style website for **AIKICKS** — a fictional premium footwear brand. Built using pure **HTML**, **CSS**, and **JavaScript** with a focus on clean structure, dynamic content rendering, and a modular file organization.

---

## 🌐 Pages

| Page | File | Description |
|------|------|-------------|
| Home | `HTML/HOME.html` | Hero section, product highlights, About Us, Newsletter & Footer |
| Sneakers | `HTML/SNEAKERS.html` | Dedicated Sneakers category page |
| Sports | `HTML/SPORTS.html` | Dedicated Sports category page |
| Trekking | `HTML/TREKKING.html` | Dedicated Trekking category page |
| New Collection | `HTML/NEW_COLLECTION.html` | Latest arrivals showcase |
| Cart | `HTML/CART.html` | Shopping cart page |

---

## 📁 Project Structure

```
WEBSITE/
│
├── HTML/                       # All page HTML files
│   ├── HOME.html
│   ├── SNEAKERS.html
│   ├── SPORTS.html
│   ├── TREKKING.html
│   ├── NEW_COLLECTION.html
│   └── CART.html
│
├── CSS/                        # Stylesheets organized per page
│   ├── GLOBAL-CSS/             # Shared styles across all pages
│   │   ├── GLOBAL.css          # Base reset & root variables
│   │   ├── HEADER.css          # Frosted glass nav bar
│   │   ├── FOOTER.css          # Footer layout & social links
│   │   ├── NEWSLETTER.css      # Newsletter subscription section
│   │   └── PRODUCTS.css        # Product card components
│   ├── HOME-CSS/
│   │   ├── HOME.css            # Hero section layout
│   │   ├── EXPLORE.css         # Explore section (Sports/Sneakers/Trekking cards)
│   │   └── ABOUT-US.css        # Specialities / About Us rows
│   ├── SNEAKERS-CSS/
│   ├── SPORTS-CSS/
│   ├── TREKKING-CSS/
│   ├── NEW_COLLECTION-CSS/
│   └── CART-CSS/
│
├── JS/                         # JavaScript organized per page
│   ├── GLOBAL-JS/
│   │   └── GLOBAL.js           # Shared logic: nav bar, footer, newsletter
│   ├── HOME-JS/
│   │   ├── HOME.js             # Home-specific logic
│   │   └── HOME-P.js           # Home product rendering
│   ├── SNEAKERS-JS/
│   ├── SPORTS-JS/
│   ├── TREKKING-JS/
│   ├── NEW_COLLECTION-JS/
│   └── CART-JS/
│
├── IMAGES/                     # All static image assets
│   ├── HEADER/                 # Hero / banner images
│   ├── ABOUT US/               # Specialities section images
│   ├── EXPLORE/                # Explore section category images
│   ├── HOME_PRODUCTS/          # Product images shown on Home
│   ├── SNEAKERS_PRODUCTS/
│   ├── SPORTS_PRODUCTS/
│   ├── TREKKING_PRODUCTS/
│   └── CART_PRODUCTS/
│
└── ICONS/                      # SVG/PNG icons used across the site
```

---

## ✨ Features

- **Dynamic Navigation Bar** — Injected via `GLOBAL.js` as a module so the same nav is reused across all pages without copy-pasting HTML.
- **Dynamic Footer & Newsletter** — Same approach: rendered once in JS, applied everywhere.
- **Dynamic Product Lists** — Products are rendered programmatically from JS data, keeping HTML lean.
- **Explore Section** — Clickable category cards (Sports, Sneakers, Trekking) that route to their respective pages.
- **About Us / Specialities** — Three alternating image-text rows highlighting the brand's core values.
- **Cart Page** — Dedicated cart view for selected products.
- **Modular CSS** — Each section has its own stylesheet; global styles are inherited site-wide.
- **ES Modules** (`type="module"`) — Used throughout JS files to keep scope clean and allow imports/exports.

---

## 🛠️ Tech Stack

| Technology | Usage |
|------------|-------|
| **HTML5** | Semantic page structure |
| **CSS3** | Layouts, animations, glassmorphism nav |
| **Vanilla JavaScript** | Dynamic rendering, routing, DOM manipulation |
| **Google Fonts** | `Bebas Neue` for brand typography |
| **ES Modules** | Clean JS module system (`import`/`export`) |

---

## 🚀 Getting Started

No build tools or package manager required. This is a plain static website.

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd WEBSITE
   ```

2. **Open in browser**
   Simply open `HTML/HOME.html` in your browser.

   > ⚠️ Because the JS files use `type="module"`, you **must** serve the files through a local server (not `file://`) to avoid CORS issues with ES Modules.

3. **Use a local server** (recommended)
   ```bash
   # Using VS Code Live Server extension — right-click HOME.html → Open with Live Server
   # OR using Python
   python -m http.server 5500
   # then navigate to http://localhost:5500/HTML/HOME.html
   ```

---

## 📌 Design Highlights

- **Frosted-glass navigation bar** with blur and transparency effect
- **Hero section** with full-screen background image and brand tagline
- **Product cards** with hover effects and category filtering
- **Responsive layouts** with CSS Flexbox
- **Consistent typography** using `Bebas Neue` for headings

---

## 👤 Author

**Abhishek**
Designed and developed as a front-end development project to practise building a real-world multi-page website using only HTML, CSS, and JavaScript — no frameworks.

---

## 📄 License

This project is for **educational/personal use** only. All brand names, product names, and images are fictional and used for demonstration purposes.
