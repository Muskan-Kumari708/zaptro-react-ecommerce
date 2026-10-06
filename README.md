<div align="center">

# 🛒 Zaptro

**A modern, responsive e-commerce web app built with React**

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen?style=for-the-badge)](https://zaptro-react-ecommerce.vercel.app)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

</div>

---

## 📖 About

Zaptro is a front-end e-commerce application where users can browse electronics, view detailed product pages, manage a shopping cart, and sign in securely. It focuses on clean UI, smooth client-side routing, and a scalable project structure.

🔗 **Live Demo:** https://zaptro-react-ecommerce.vercel.app

## ✨ Features

- 🏠 Multi-page navigation: Home, Products, About, and Contact
- 🔍 Dedicated single product details page
- 🛍️ Add to cart and manage cart items
- 💾 Cart persistence across page refreshes
- 🔐 Secure authentication (Sign in / Sign up) with Clerk
- 📍 Add delivery address option
- 📱 Fully responsive layout
- ⚡ Fast development and build with Vite
- 🚀 Continuous deployment on Vercel

## 🛠️ Tech Stack

| Category        | Technology        |
| --------------- | ----------------- |
| Library         | React             |
| Build Tool      | Vite              |
| Routing         | React Router      |
| Authentication  | Clerk             |
| State Management| Context API       |
| Linting         | Oxlint            |
| Deployment      | Vercel            |

## 📸 Screenshots

| Home | Product Details |
| ---- | --------------- |
| ![Home](./screenshots/home.png) | ![Product](./screenshots/product.png) |

## 📁 Project Structure

```
Zaptro
├── public
├── src
│   ├── assets        # Images and static files
│   ├── components    # Reusable UI components
│   ├── context       # Global state (Context API)
│   ├── pages         # Route-level pages
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vercel.json       # SPA rewrite rules for Vercel
├── vite.config.js
└── package.json
```

## ⚙️ Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm
- A [Clerk](https://clerk.com) account for the publishable key

### Installation

1. **Clone the repository**

```bash
   git clone https://github.com/Muskan-Kumari708/zaptro-react-ecommerce.git
   cd zaptro-react-ecommerce
```

2. **Install dependencies**

```bash
   npm install
```

3. **Set up environment variables**

   Create a `.env` file in the root directory:

```env
   VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
```

4. **Start the development server**

```bash
   npm run dev
```

   The app will run at `http://localhost:5173`.

### Build for production

```bash
npm run build
npm run preview
```

## 🌐 Deployment

The app is deployed on **Vercel** and redeploys automatically on every push to the `main` branch.

Since this is a single-page application, a `vercel.json` rewrite rule is used so that refreshing on routes like `/cart` does not return a 404:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```

## 🔮 Future Improvements

- Payment gateway integration
- Order history and wishlist
- Product search, filters, and sorting
- Backend integration for orders and inventory

## 👩‍💻 Author

**Muskan Kumari**

[![GitHub](https://img.shields.io/badge/GitHub-Muskan--Kumari708-181717?style=flat&logo=github)](https://github.com/Muskan-Kumari708)

---

<div align="center">

⭐ If you like this project, consider giving it a star!

</div>