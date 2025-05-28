# 🌐Internal Audit Frontend

A modern, responsive frontend application for internal task management and audit tracking. Built with **React**, **Redux Toolkit**, **Material UI**, and designed to communicate with a Spring Boot–based microservice backend.

---

## 🚀 Features

- 🔐 **JWT Authentication** with login and registration
- 🧑‍💼 Role-based views
- 📋 Task creation, listing, filtering and editing
- ✅ Task assignment and completion tracking
- 📦 File/image upload references for submissions
- 💬 Submission comments with admin decision handling
- 📊 Filtered task views via query parameters
- ⚙️ Dynamic UI components using modals and MUI Autocomplete
- 🌗 Custom Material UI dark theme

---

## 📁 Project Structure

```plaintext
.
├── public/
├── src/
│   ├── api/                 # Axios config and auth header setup
│   ├── components/
│   ├── page/
│   │   ├── auth/            # Login & Registration logic
│   │   ├── home/            # Home layout with Sidebar + TaskList
│   │   ├── navbar/          # Top navigation bar
│   ├── reduxtoolkit/        # Redux slices: Auth, Task, Submission
│   ├── App.js               # Main application entry with routes
│   └── index.js
```

---

## 🛠 Tech Stack

| Tech | Description |
|------|-------------|
| **React** | Component-based UI library |
| **Redux Toolkit** | State management for auth, task and submission modules |
| **Material UI** | Component library for a professional UI |
| **Axios** | HTTP client for API communication |
| **Day.js** | Lightweight date/time picker integration |
| **React Router DOM** | Routing and query parameter handling |

---

## 🧪 Local Development Setup

> Prerequisites:
> - Node.js 18+
> - npm / yarn
> - Backend running on `http://localhost:5000`

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/kim-tech-audit-frontend.git

# Install dependencies
cd kim-tech-audit-frontend
npm install

# Run the application
npm start
```

---

## 🔐 Authentication Flow

- User logs in and receives a JWT token
- JWT is stored in localStorage
- Axios sets the `Authorization` header globally
- Protected routes/components rely on Redux state and user role

---

## 🧩 API Integration

| Endpoint                     | Method | Description                     |
|-----------------------------|--------|---------------------------------|
| `/auth/signIn`              | POST   | User login                      |
| `/auth/signUp`              | POST   | User registration               |
| `/api/users/profile`        | GET    | Fetch authenticated user data  |
| `/api/tasks/**`             | CRUD   | Full task management            |
| `/api/submission/**`        | CRUD   | Submission create & review     |
...

## 📌 Future Improvements

- ⏳ Add submission image preview modal
- 📁 Drag-and-drop file/image upload support
- ✉️ In-app notifications for task assignments and decisions
- 🌍 Multi-language support (i18n)

---

## 🤝 Contributors

- 👨‍💻 **Mert Duyar** – Fullstack Developer & Project Owner  
  GitHub: [@thejaxen](https://github.com/thejaxen)

---

## 📄 License

This project is licensed under the MIT License. See `LICENSE` for details.
