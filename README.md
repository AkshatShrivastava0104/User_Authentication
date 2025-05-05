
# 🔐 Full-Stack Authentication App

A secure full-stack user authentication system using **React (TypeScript)** on the frontend, **Express.js** on the backend, and **MongoDB Atlas** as the database. This project supports user signup, login, protected routes, token-based authentication with JWT, and persistent login using Context API.

---

## 🚀 Features

- ✅ User Registration (Signup)
- ✅ User Login
- ✅ JWT Authentication
- ✅ Protected Routes
- ✅ Auth Context API
- ✅ Zod + React Hook Form Validation
- ✅ MongoDB Atlas integration
- ✅ Environment variable support
- ✅ Password hashing with bcrypt
- ✅ CORS and JSON middleware support
- ✅ Error Handling and Alerts

---

## 🛠️ Tech Stack

### 🔹 Frontend (React)
- React + TypeScript
- React Router DOM
- React Hook Form
- Zod
- Tailwind CSS / Custom CSS
- Context API

### 🔹 Backend (Node.js)
- Express.js
- MongoDB + Mongoose
- bcryptjs
- jsonwebtoken
- dotenv
- cors
- helmet (optional for added security)

---

## 📁 Folder Structure

```
root/
│
├── backend/
│   ├── controllers/
│   │   └── authController.js
│   ├── models/
│   │   └── userModel.js
│   ├── routes/
│   │   └── authRoutes.js
│   ├── .env
│   └── server.js
│
└── frontend/
    ├── components/
    │   ├── login_form.tsx
    │   ├── signup-form.tsx
    │   └── home.tsx
    ├── route/
    │   └── ProtectedRoute.tsx
    ├── Contexts/
    │   └── auth_context.tsx
    ├── App.tsx
    └── main.tsx
```

---

## 🧪 API Endpoints

### 🔸 POST `/signup`

Registers a new user.
```json
{
  "username": "john_doe",
  "email": "john@example.com",
  "password": "securePassword"
}
```

### 🔸 POST `/login`

Logs in an existing user.
```json
{
  "email": "john@example.com",
  "password": "securePassword"
}
```

Response contains:
```json
{
  "token": "JWT_TOKEN",
  "message": "Login successful"
}
```

---

## 🌐 Environment Variables (`backend/.env`)

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_super_secret_jwt_key
```

---

## 🧰 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/AkshatShrivastava0104/User_Authentication.git
cd fullstack-auth-app
```

---

### 2. Setup Backend

```bash
cd backend
npm install
```

Create a `.env` file and add:

```env
PORT=3000
MONGO_URI=<your_mongo_uri>
JWT_SECRET=<your_jwt_secret>
```

Start the backend:

```bash
npm start
```

---

### 3. Setup Frontend

```bash
cd ../frontend
npm install
npm run dev
```

Frontend should run on: [http://localhost:5173](http://localhost:5173)

---

## 🔐 Auth Flow

1. **Signup**: Form validated (Zod) → data sent to backend → password hashed → user stored → JWT token returned → stored in localStorage.
2. **Login**: Credentials verified → if valid, JWT returned → user logged in and redirected to `/home`.
3. **Protected Routes**: Wrapped in `ProtectedRoute` component → checks for token → redirects to `/login` if not authenticated.
4. **Logout**: Clears localStorage → resets AuthContext → redirects to login.

---

## 🧠 Understanding Key Files

### `auth_context.tsx`
- Stores user info and token
- Provides login and logout methods
- Persists token across sessions

### `ProtectedRoute.tsx`
- Checks if user is authenticated
- Redirects unauthenticated users to `/login`

### `authController.js`
- Handles signup and login logic
- Passwords are hashed using `bcryptjs`
- Tokens are signed using `jsonwebtoken`

---

## 🛡️ Security Measures

- Passwords are never stored in plain text
- JWT tokens signed and verified securely
- Environment variables used for secrets
- CORS configured to allow frontend communication

---

## 🌍 Deployment

### Frontend:
- Vercel / Netlify

### Backend:
- Render / Railway / Heroku

### Database:
- MongoDB Atlas

Update the `.env` files and CORS origins before deploying.

---

## 🧹 Future Improvements (Optional)

- 🔄 Password Reset (via email OTP/token)
- ✅ Email verification
- 🧾 User profile editing
- ⚙️ Admin/user roles
- 🔐 Refresh tokens for session longevity

---

## 📄 License

This project is licensed under the MIT License.

---

