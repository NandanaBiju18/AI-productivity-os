# 🚀 AI Productivity OS

A full-stack AI-powered productivity platform that helps users manage tasks, generate smart schedules, track productivity, and stay focused.

## ✨ Features

### 🔐 Authentication

* User Registration
* User Login
* JWT Authentication
* Protected Routes

### ✅ Task Management

* Add Tasks
* Delete Tasks
* Mark Tasks as Completed
* User-specific Tasks
* Task Categories

  * Study
  * Work
  * Personal
  * Health
* Priority Levels

  * High
  * Medium
  * Low

### 🤖 AI Schedule Generator

* Generates a daily plan using AI
* Organizes tasks by priority and deadline
* Personalized productivity suggestions

### 📅 Schedule History

* Stores previously generated schedules
* View past AI-generated plans
* MongoDB persistence

### 📊 Productivity Dashboard

* Total Tasks
* Completed Tasks
* Pending Tasks
* Success Rate Analytics

### 🌙 Dark Mode

* Light/Dark Theme Toggle
* Theme Persistence using Local Storage

### ⏱️ Pomodoro Timer

* 25-minute focus sessions
* Start / Pause / Reset controls
* Productivity-focused workflow

### 📱 Responsive Design

* Mobile-friendly layout
* Tablet and Desktop support

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Vite
* Axios

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas
* Mongoose

### Authentication

* JWT
* bcryptjs

### AI Integration

* Groq API

### Deployment

* Vercel (Frontend)
* Render (Backend)

---

## 📂 Project Structure

```bash
AI-Productivity-OS
│
├── backend
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── utils
│   └── server.js
│
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── services
│   │   └── App.jsx
│   └── public
│
└── README.md
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/NandanaBiju18/AI-productivity-os.git
cd AI-productivity-os
```

### Backend Setup

```bash
cd backend
npm install
```

Create `.env`

```env
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
GROQ_API_KEY=your_groq_api_key
```

Run Backend

```bash
npm run dev
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## 🎯 Future Enhancements

* Task Editing
* Calendar Integration
* Email Reminders
* AI Productivity Insights
* Team Collaboration
* Habit Tracking
* Notifications
* Voice Commands

---

## 👩‍💻 Author

**Nandana Biju**

GitHub:
https://github.com/NandanaBiju18

---

⭐ If you like this project, consider giving it a star on GitHub!
