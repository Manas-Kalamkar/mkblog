# 📝 CA Monk Blog Application

This repository contains my solution for the **CA Monk Frontend Internship – Blog Application Assignment**. The goal of this project is to build a modern, responsive blog application using **React + TypeScript**, with proper server-state management, clean UI, and well-structured components.

The application allows users to view blogs, read a blog in detail, and create new blogs using a mock backend powered by **JSON Server**.

---

## 🚀 Tech Stack

* **React (with TypeScript)** – Frontend framework
* **TanStack Query** – Server-state management & data fetching
* **Tailwind CSS** – Utility-first styling
* **shadcn/ui** – Reusable and accessible UI components
* **JSON Server** – Mock backend API
* **Vite** – Fast development build tool

---

## ✨ Features Implemented

* 📄 Fetch and display all blogs
* 🔍 View a single blog by ID
* ➕ Create a new blog using a form
* 🔄 Automatic query invalidation after blog creation
* ⏳ Loading states with skeletons
* ❌ Error handling for API failures
* 📱 Responsive and clean UI

---

## 📂 Project Structure

```
src/
│── components/        # Reusable UI components
│── pages/             # Page-level components
│── hooks/             # Custom hooks (React Query)
│── services/          # API functions
│── App.tsx            # App entry
│── main.tsx           # QueryClientProvider setup
```

---

## 🛠️ Installation & Setup

### Prerequisites

* Node.js (v18 or higher)
* Git

### Steps to Run Locally

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd camonk-interview
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start JSON Server (Backend API)**

   ```bash
   npm run server
   ```

   Backend runs on:

   ```
   http://localhost:3001
   ```

4. **Start the development server** (in a new terminal)

   ```bash
   npm run dev
   ```

   Application runs on:

   ```
   http://localhost:5173
   ```

---

## 🔗 API Endpoints Used

| Method | Endpoint     | Description       |
| ------ | ------------ | ----------------- |
| GET    | `/blogs`     | Fetch all blogs   |
| GET    | `/blogs/:id` | Fetch blog by ID  |
| POST   | `/blogs`     | Create a new blog |

---

## 🧠 Key Concepts Demonstrated

* Proper use of **TanStack Query hooks** (`useQuery`, `useMutation`)
* Query invalidation after mutations
* Component-based architecture
* Separation of concerns (API, hooks, UI)
* Responsive UI using Tailwind CSS
* Usage of **shadcn/ui** components like `Card`, `Button`, `Input`

---

## 🧪 Sample Blog Object

```json
{
  "id": 1,
  "title": "Future of Fintech",
  "category": ["FINANCE", "TECH"],
  "description": "Exploring how AI and blockchain are reshaping financial services",
  "date": "2026-01-11T09:12:45.120Z",
  "coverImage": "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg",
  "content": "Full blog content..."
}
```

---

## 🎯 Outcome

This project demonstrates my ability to:

* Build scalable React applications with TypeScript
* Manage server state effectively using TanStack Query
* Create clean, reusable UI components
* Follow best practices for code structure and UX

---

## 📌 Notes

* This project is built strictly according to CA Monk’s assignment requirements
* JSON Server is used as the backend as instructed
* No deployment is done, as per assignment guidelines

---

## 📬 Contact

If you have any questions regarding this submission, feel free to reach out.

Thank you for reviewing my assignment! 🚀
