# Visual Web Editor

A modern, fullstack web application for visually creating, editing, and managing HTML templates. Built with React (Vite), Redux, Tailwind CSS, and TinyMCE on the frontend, and Express with MongoDB on the backend.

---

## ✨ Features

- **WYSIWYG Editing:** Intuitive drag-and-drop and rich text editing with TinyMCE.
- **Template Management:** Create, edit, update, and delete templates.
- **Live Preview:** Instantly see your changes as you edit.
- **Persistent Drafts:** Your work is auto-saved locally until you save or discard.
- **Authentication Ready:** Easily extendable for user accounts.
- **Modern UI:** Responsive and clean design with Tailwind CSS.

---

## 🗂️ Project Structure

```
visual-web-editor/
  ├── client-vwe/   # Frontend (React + Vite)
  └── server-vwe/   # Backend (Express + MongoDB)
```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/visual-web-editor.git
cd visual-web-editor
```

### 2. Backend Setup

```bash
cd server-vwe
npm install
# Create a .env file with:
#   PORT=3000
#   MONGO_URI=your_mongodb_connection_string
npm run dev
```

### 3. Frontend Setup

```bash
cd ../client-vwe
npm install
# Create a .env file with:
#   VITE_API_URL=http://localhost:3000/api/template
#   VITE_API_KEY=your_tinymce_api_key
npm run dev
```

---

## 🌐 Deployment

- **Frontend:** Deploy `client-vwe` to [Vercel](https://vercel.com/) or [Netlify](https://netlify.com/).  
  Set `VITE_API_URL` to your deployed backend API URL in the environment variables.
- **Backend:** Deploy `server-vwe` to [Render](https://render.com/) or [Railway](https://railway.app/).  
  Set `MONGO_URI` and ensure CORS allows your frontend domain.

---

## 🛠️ Tech Stack

- **Frontend:** React, Vite, Redux Toolkit, Tailwind CSS, TinyMCE, Axios
- **Backend:** Node.js, Express, MongoDB, Mongoose
- **Other:** UUID, Lucide Icons

---

## 📄 License

MIT License

---

## 🙏 Credits

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [TinyMCE](https://www.tiny.cloud/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)

---

> Made with ❤️ for modern web creators.