# Kaksju Cars — Website Project README

Welcome! This is the codebase for **Kaksju Cars**, a fictional luxury car brand "Made in Africa." The project includes four different implementations of the same website, so you (or your dev team) can pick whichever stack fits your setup.

---

## 📁 What's in This Project

| File | What it is |
|---|---|
| `style.css` | The shared luxury design system (black + gold theme) used by every version of the site |
| `index.html` | Static HTML version of the site |
| `script.js` | JavaScript that powers the HTML version (navbar scroll, mobile menu, form, testimonials) |
| `App.jsx` | React single-component version of the site |
| `index.php` | PHP (server-rendered) version of the site |
| `contact-handler.php` | PHP backend that processes the contact form on the PHP version |

All four site versions use the **same CSS classes**, so `style.css` is shared across all of them — you only need to style it once.

---

## 🎨 Design System (`style.css`)

The visual identity is built around a **luxury black-and-gold palette**, meant to feel premium, minimal, and high-end:

- **Colors:** near-black background (`#0a0a0a`), warm gold accent (`#c9a24b`), cream text (`#f5f1e8`)
- **Fonts:** Playfair Display (elegant serif headings) + Jost (clean sans-serif body text), both pulled from Google Fonts
- **Motion:** slow, deliberate transitions (0.5s) — luxury brands don't rush
- **Layout tokens:** all colors, fonts, and spacing live in CSS variables at the top of the file (`:root`), so the whole look can be re-themed from one place

---

## 🧱 Site Sections (present in every version)

1. **Navbar** — fixed at the top, transparent over the hero, turns solid on scroll
2. **Hero** — full-screen intro with headline, tagline, and two call-to-action buttons
3. **About** — brand story, two-column layout with image
4. **Models** — three vehicle cards (Kaksju Aurea, Simba, Zuri) with image, description, and price
5. **Gallery** — editorial-style image grid with hover overlays
6. **Testimonials** — rotates automatically between three customer quotes
7. **Contact** — form to request a test drive or ask a question
8. **Footer** — site links, contact info, and social links

---

## ⚠️ About the Images

The images currently used in every version (`picsum.photos` links) are **random placeholder stock photos** — not actual car photos. They're there purely to hold the layout together.

Before this goes live, replace every `img` URL (hero background, model cards, gallery) with:
- Real photography of your actual vehicles, or
- AI-generated concept renders, or
- Professional product shots from your design/marketing team

Real photos of *other* car brands should **not** be used here, since that would misrepresent someone else's vehicle as a Kaksju product.

---

## 🧩 How to Use Each Version

### 1. Static HTML (`index.html` + `script.js`)
Simplest option — no build tools or server required.
```
your-project/
├── index.html
├── script.js
└── style.css
```
Just open `index.html` in a browser, or upload the folder to any static host (Netlify, Vercel, GitHub Pages, etc.).

### 2. React (`App.jsx`)
Drop this into any React project (Create React App, Vite, Next.js, etc.) as your main component:
```jsx
import App from './App';
```
Make sure `style.css` is imported (already handled inside `App.jsx`) and sits in the same folder.

### 3. PHP (`index.php` + `contact-handler.php`)
Requires a PHP-enabled server (Apache/Nginx with PHP, XAMPP/MAMP for local testing, or any PHP hosting).
```
your-project/
├── index.php
├── contact-handler.php
├── script.js
└── style.css
```
- Vehicle models, gallery items, and testimonials are stored as PHP arrays in `index.php` — easy to edit directly or later connect to a database.
- The contact form posts to `contact-handler.php`, which validates the input and either emails the inquiry (via PHP's `mail()`) or logs it to `inquiries.log` if email isn't configured on the server.
- **Before going live:** update the `$to_email` variable in `contact-handler.php` to your real inbox.

---

## ✅ Before Launch Checklist

- [ ] Replace all placeholder images with real photography/renders
- [ ] Update contact email and phone number in the footer and `contact-handler.php`
- [ ] Update social media links in the footer
- [ ] Add real showroom locations
- [ ] Test the contact form on your actual hosting environment (PHP `mail()` behaves differently across hosts)
- [ ] Swap the hero background image for a real brand photo

---

That's the full picture! Let me know if you'd like this expanded with deployment instructions for a specific host, or a design brief for the vehicle models to hand off to a designer or image-generation tool.
