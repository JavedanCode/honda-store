<div align="center">

# 🏍️ Honda Store

### A modern full-stack motorcycle store inspired by Honda's official website.

Built with **React**, **Express**, **PostgreSQL**, and **Prisma**.

<br/>

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-22-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-5-000000?logo=express)](https://expressjs.com/)
[![Prisma](https://img.shields.io/badge/Prisma-2D3748?logo=prisma)](https://www.prisma.io/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-4169E1?logo=postgresql)](https://www.postgresql.org/)

<br/>

**🌐 Live Demo:** https://javedancode.github.io/honda-store/

**⚡ REST API:** https://honda-store.onrender.com/

</div>

---

# Preview

> Replace these with screenshots or a GIF once deployed.

| Landing Page                 | Details Page                 |
| ---------------------------- | ---------------------------- |
| ![](screenshots/landing.png) | ![](screenshots/details.png) |

| Cart                      | About                      |
| ------------------------- | -------------------------- |
| ![](screenshots/cart.png) | ![](screenshots/about.png) |

---

# Overview

Honda Store is a full-stack e-commerce application inspired by Honda's official website.

The goal of the project was to practice building a complete application from scratch using modern web technologies while focusing on clean architecture, reusable React components, RESTful API design, and relational databases.

The application allows users to browse motorcycles, search and filter products, view detailed specifications, manage a shopping cart, and complete a mock checkout experience.

Although checkout is intentionally non-functional, the overall shopping experience closely resembles a real online storefront.

---

# Features

### Store

- Browse all motorcycles
- Search motorcycles by name
- Filter by category
- Sort by name or price
- Modern card-based product layout

### Product Details

- Dynamic routing with React Router
- Complete motorcycle specifications
- Quantity selector
- Add to Cart
- Buy Now

### Shopping Cart

- Global cart state using Context API
- Increase / decrease quantity
- Remove individual products
- Cart summary
- Checkout form

### User Experience

- Toast notifications
- Smooth navigation
- Honda-inspired UI
- CSS Modules
- Responsive-friendly component architecture

---

# Tech Stack

## Frontend

- React
- React Router
- Context API
- CSS Modules
- Fetch API
- React Toastify

## Backend

- Node.js
- Express
- Prisma ORM

## Database

- PostgreSQL
- Neon

## Deployment

- GitHub Pages (Frontend)
- Render (Backend)
- Neon (Database)

---

# Architecture

```text
             React Client
                  │
                  │ Fetch API
                  ▼
          Express REST API
                  │
             Prisma ORM
                  │
                  ▼
      PostgreSQL Database
               (Neon)
```

---

# API

## Get all motorcycles

```http
GET /api/motorcycles
```

Supports query parameters

```
?search=
?category=
?sort=
```

Example

```http
GET /api/motorcycles?category=Sport&sort=price
```

---

## Get motorcycle by slug

```http
GET /api/motorcycles/:slug
```

Example

```http
GET /api/motorcycles/cb650r
```

---

## Get categories

```http
GET /api/motorcycles/categories
```

---

# Project Structure

```text
honda-store
│
├── client
│   ├── src
│   │   ├── api
│   │   ├── assets
│   │   ├── components
│   │   ├── context
│   │   ├── layouts
│   │   ├── pages
│   │   ├── router
│   │   └── styles
│
├── server
│   ├── prisma
│   ├── routes
│   ├── controllers
│   ├── services
│   └── src
│
└── README.md
```

---

# Installation

Clone the repository

```bash
git clone https://github.com/JavedanCode/honda-store.git
```

## Backend

```bash
cd server

npm install
```

Create

```env
DATABASE_URL=YOUR_DATABASE_URL
```

Generate Prisma Client

```bash
npx prisma generate
```

Apply migrations

```bash
npx prisma migrate deploy
```

Seed the database

```bash
npm run seed
```

Run the server

```bash
npm start
```

---

## Frontend

```bash
cd client

npm install
```

Create

```env
VITE_API_URL=http://localhost:3000/api
```

Run

```bash
npm run dev
```

---

# What I Learned

This project was my first complete full-stack application built from scratch.

Throughout development I gained practical experience with:

- Designing REST APIs using Express
- Modeling relational databases with Prisma
- Working with PostgreSQL
- Managing global application state using React Context
- Creating reusable React component architecture
- Dynamic routing with React Router
- Deploying a production database on Neon
- Deploying an Express backend to Render
- Connecting a production frontend with a live REST API

More importantly, this project reinforced how frontend and backend applications communicate and how application state should be structured in larger React projects.

---

# Future Improvements

- User authentication
- User accounts
- Product reviews
- Wishlist
- Admin dashboard
- Inventory management
- Payment integration (Stripe)
- Order history
- Responsive mobile redesign
- Unit & integration tests

---

# Acknowledgements

This project was created as part of my journey through **The Odin Project** while expanding it into a complete full-stack application beyond the original curriculum.

Honda® logos, images, and branding belong to **Honda Motor Co., Ltd.** and are used here strictly for educational and portfolio purposes.

---

# License

This project is licensed under the MIT License.

---

<div align="center">

### Thanks for visiting!

If you enjoyed the project, feel free to ⭐ the repository.

</div>
