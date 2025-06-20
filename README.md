# 🥢 ASIAN - Restaurant Management System

**ASIAN** is a full-stack restaurant management web application that lets users browse menus, place orders, and manage food items. Contributors and staff can add, edit, or delete food items — all delivered through a sleek, responsive, and animated UI.

🌐 **Live Site:** [https://asian-web-app.web.app/](https://asian-web-app.web.app/)

---

## 🖼️ Hero Preview

![Hero Preview](./public/Screenshot%202025-06-18%20020247.png)

---

## ✨ Key Features

### 🔐 User Authentication

- Secure sign-up & login via **Firebase**
- Google OAuth 2.0 sign-in
- Protected routes with JWT & Firebase Token Verification

### 🍱 Food Management

- Add new dishes with images and descriptions
- Update or delete existing items
- Contributors can view all food items they’ve added

### 🛒 Food Ordering System

- Users can place orders directly from the UI
- Order details with itemized breakdown
- Cancel orders if needed
- Orders linked to the user who placed them

### 💬 UI & UX Enhancements

- **Framer Motion** for smooth animations (Hero, modals, page transitions)
- **Lottie Animations** for loaders and empty states
- **SweetAlert2** for user-friendly confirmations
- **Tooltips** for interactive hints
- **Scroll animations**, loaders, and lightbox image previews

---

## 🛠️ Tech Stack

### 🧑‍💻 Frontend

- **React**
- **React Router DOM**
- **Tailwind CSS**
- **DaisyUI**
- **Framer Motion**
- **Lottie React**
- **React Icons**
- **React Tooltip**
- **React Helmet**
- **React Image Lightbox**
- **React Moment**

### 🔐 Authentication & Authorization

- **Firebase Authentication**
  - Email/Password
  - Google Sign-in
- **JWT Auth** using Firebase Admin SDK
- **Protected API routes** with token validation

### 🌐 Backend (REST API)

- **Node.js**
- **Express.js**
- **MongoDB** (NoSQL database)
- **Firebase Admin SDK**
- **JWT for secure API access**
- **CORS**
- **Cookie Parser**

---

## 📦 NPM Packages Used

| Package                 | Purpose                                      |
|-------------------------|----------------------------------------------|
| `react`                 | Core UI library                              |
| `react-dom`             | DOM rendering                                |
| `react-router-dom`      | Routing and navigation                       |
| `tailwindcss`           | Utility-first CSS framework                  |
| `daisyui`               | Tailwind component library                   |
| `framer-motion`         | Page and component animations                |
| `lottie-react`          | Display Lottie JSON animations               |
| `firebase`              | Authentication and Admin SDK                 |
| `cookie-parser`         | Parse cookies for server-side use            |
| `jsonwebtoken`          | Token generation and verification (JWT)      |
| `axios`                 | HTTP client for API requests                 |
| `react-icons`           | SVG icon library                             |
| `react-tooltip`         | Hover-based tooltips                         |
| `sweetalert2`           | Confirmation and alert modals                |
| `react-helmet`          | Dynamic document titles and meta tags        |
| `react-image-lightbox`  | Fullscreen image preview with navigation     |
| `react-moment`          | Date formatting for React using Moment.js    |

---

## 📁 Project Folder Structure

src/
├── assets/ # Static files like images
├── components/ # Reusable UI components (Navbar, Cards, Modals, etc.)
├── pages/ # Main pages (Home, Menu, Orders, etc.)
├── authProvider/ # Firebase Authentication Context Provider
├── hooks/ # Custom React hooks (e.g., usePageTitle)
├── MainLayout.jsx # Main layout with Navbar, Outlet, Footer
└── main.jsx # Entry point for ReactDOM