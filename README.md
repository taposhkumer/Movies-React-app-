# React Movie Explorer

A beginner-friendly movie app built with React to help you learn core React concepts in a real project.

This project demonstrates how to build a small but practical application with:

- React components and props
- State management with hooks
- Side effects with `useEffect`
- Context API for global favorites
- React Router for multiple pages
- API fetching with `fetch()`
- Local storage persistence

It is designed for learning and experimentation, not just as a finished product.

---

## 🎯 Learning goals

By building and exploring this app, you will practice:

- Creating reusable UI components
- Passing data via props
- Managing local component state
- Handling async data loading
- Using custom hooks and context
- Navigating between pages in a SPA
- Persisting user data in the browser

---

## ✨ Features

- Browse popular movies from TMDB
- Search for movies by title
- View movie cards with poster, title, and release date
- Add/remove movies from favorites
- Persist favorites using browser localStorage
- Navigate between Home and Favorites pages
- Clean single-page app experience using React Router

---

## 🧠 React concepts used

This project is a great example of how React is used in real apps:

### 1. Components
Each section of the app is split into reusable components such as:

- [frontend/src/components/MovieCard.jsx](frontend/src/components/MovieCard.jsx)
- [frontend/src/components/NavBar.jsx](frontend/src/components/NavBar.jsx)

### 2. State and props
The app stores data like:

- current search text
- list of loaded movies
- loading status
- favorite movies

This is managed using React state and passed between components as props.

### 3. Effects
Data fetching and localStorage synchronization are handled using `useEffect` in:

- [frontend/src/pages/Home.jsx](frontend/src/pages/Home.jsx)
- [frontend/src/contexts/MovieContext.jsx](frontend/src/contexts/MovieContext.jsx)

### 4. Context API
Favorites are shared across the app via a React context:

- [frontend/src/contexts/MovieContext.jsx](frontend/src/contexts/MovieContext.jsx)

This avoids passing favorites through many levels of components manually.

### 5. Routing
The app has multiple views using React Router:

- [frontend/src/App.jsx](frontend/src/App.jsx)
- [frontend/src/main.jsx](frontend/src/main.jsx)

### 6. API integration
Movie data is fetched from TMDB in:

- [frontend/src/services/api.js](frontend/src/services/api.js)

---

## 📁 Project structure

```bash
movie-react-app/
├── README.md
├── frontend/
│   ├── package.json
│   ├── index.html
│   ├── vite.config.js
│   ├── public/
│   └── src/
│       ├── App.jsx
│       ├── main.jsx
│       ├── assets/
│       ├── components/
│       │   ├── MovieCard.jsx
│       │   └── NavBar.jsx
│       ├── contexts/
│       │   └── MovieContext.jsx
│       ├── css/
│       ├── pages/
│       │   ├── Favorites.jsx
│       │   └── Home.jsx
│       └── services/
│           └── api.js
└── .gitignore
```

---

## 🚀 Getting started

### Prerequisites

Make sure you have installed:

- Node.js 18+
- npm or yarn

### Install dependencies

```bash
cd frontend
npm install
```

### Run the app locally

```bash
npm run dev
```

Then open the local Vite URL shown in the terminal, usually:

```bash
http://localhost:5173
```

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

---

## 🧪 What you can explore next

As you keep learning React, try these improvements:

- Add movie details page
- Add a dark mode toggle
- Refactor logic into custom hooks
- Add loading skeletons
- Improve search with debouncing
- Use TypeScript for safer props and state
- Replace localStorage with a backend API

---

## 🔎 Notes

This app intentionally keeps the code simple and understandable so it can be used as a learning project.

The project uses the TMDB API to fetch movie data, and the favorites list is stored in the browser for persistence.

---

## 📌 Suggested learning path

1. Read the app structure and understand how components are organized.
2. Trace how `Home.jsx` loads movie data using `useEffect`.
3. Study how `MovieCard.jsx` handles favorite toggling.
4. Understand the provider pattern in `MovieContext.jsx`.
5. Explore how React Router manages navigation in `App.jsx`.
6. Try modifying the app and adding one feature at a time.

---

## License

This project is intended for educational use and experimentation.

If you are learning React, this is a great project to study, modify, and extend.

