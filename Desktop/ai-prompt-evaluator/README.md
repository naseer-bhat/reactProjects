# 📄 AI Prompt Evaluator

A full-stack web app that evaluates the quality of user-submitted prompts using **Gemini AI**, scores them, and provides intelligent feedback. Built with **MERN stack** (MongoDB, Express, React, Node.js) and includes **JWT authentication**.

---

## 🚀 Features

- 🔐 **User Authentication** (Register/Login using JWT)
- 🧠 **Prompt Evaluation** using Gemini 1.5 Flash API
- 📊 **Score, Analysis & Suggestion** for each prompt
- 🗂 **Prompt History** per logged-in user
- 🔒 **Role-based Access Control** (Admin, User)
- 📎 Token-secured API calls
- 💾 Stores prompt, analysis, score in MongoDB
- 🧭 Simple Navbar for navigation
- ✅ Built with clean React & Express structure

---


## 🧱 Tech Stack

| Layer        | Technology            |
|--------------|------------------------|
| Frontend     | React, Axios, CSS      |
| Backend      | Node.js, Express       |
| Database     | MongoDB + Mongoose     |
| Auth         | JWT, bcrypt            |
| AI API       | Google Generative AI (Gemini) |

---

## 📦 Folder Structure

```
/client              # React frontend
  /components        # Reusable UI components
  App.jsx
  api.js             # Axios instance

/server              # Express backend
  /controllers       # Route logic
  /routes            # Express routes
  /models            # Mongoose schemas
  /middleware        # Auth middleware
  server.js
```

---

## 🛠 Setup Instructions

### 📁 1. Clone the repo

```bash
git clone https://github.com/your-username/ai-prompt-evaluator.git
cd ai-prompt-evaluator
```

### ⚙️ 2. Backend Setup

```bash
cd server
npm install
```

Create a `.env` file inside `/server`:

```env
PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
GEMINI_API_KEY=your_google_generative_ai_key
```

Start the backend:

```bash
npm run dev
```

### 🌐 3. Frontend Setup

```bash
cd client
npm install
npm run dev
```

---

## 🔐 API Routes

| Method | Endpoint                 | Description              |
|--------|--------------------------|--------------------------|
| POST   | `/api/register`          | Register user            |
| POST   | `/api/login`             | Login user               |
| POST   | `/api/evaluate/prompt`   | Evaluate prompt (JWT required) |
| GET    | `/api/evaluate/history`  | Get user prompt history  |

---

## ✅ To Do / Ideas

- [ ] Add dark mode toggle 🌙
- [ ] Pagination for history
- [ ] Admin panel (view all users/prompts)
- [ ] Prompt category/tagging
- [ ] Export prompts (CSV/PDF)

---

## 📄 License

This project is licensed under the MIT License.