# 🇮🇳 Bharat Freelance

India's AI-powered freelancing platform connecting freelancers and employers through job posting, applications, ATS-based resume analysis, and secure payments.

Built with **React, Vite, Node.js, Express, MongoDB, JWT, and Razorpay**.

---

## ✨ Features

* 🔐 JWT-based Login & Signup
* 👤 Role-based access for Freelancers and Employers
* 💼 Job posting and management
* 🔎 Job browsing, search, and filtering
* 📄 ATS-based resume upload and scoring
* 📊 Employer applicant management
* 📌 Application tracking
* 💳 Razorpay payment integration
* 👨‍💼 Admin dashboard
* 👤 User profile management
* 🗄️ MongoDB database integration
* 📱 Responsive React UI

---

## 🛠️ Tech Stack

### Frontend

* React 18
* Vite
* React Router v6
* Tailwind CSS
* Framer Motion

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* Multer
* Razorpay

### Design

* Playfair Display
* DM Sans
* Dark editorial-inspired UI
* Responsive layouts

---

## 📁 Project Structure

```text
Bharat_Freelance/
│
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── middleware/
│   │   └── auth.js
│   ├── models/
│   │   ├── User.js
│   │   ├── Job.js
│   │   ├── Applicant.js
│   │   └── AtsResult.js
│   ├── routes/
│   │   ├── auth.js
│   │   ├── jobs.js
│   │   ├── ats.js
│   │   ├── payment.js
│   │   ├── admin.js
│   │   └── profile.js
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── lib/
│   │   └── pages/
│   ├── package.json
│   └── vite.config.js
│
├── .gitignore
├── README.md
└── vercel.json
```

> **Note:** `.env` contains private credentials and must never be committed to GitHub.

---

## 🚀 Local Setup

### 1. Clone the Repository

```bash
git clone https://github.com/shreyachaturvedi-dev/Bharat_Freelance.git
cd Bharat_Freelance
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
RAZORPAY_KEY=your_razorpay_key
RAZORPAY_SECRET=your_razorpay_secret
PORT=5000
FRONTEND_URL=http://localhost:5173
```

Start the backend:

```bash
npm run dev
```

Backend runs on:

```text
http://localhost:5000
```

---

### 3. Frontend Setup

Open another terminal:

```bash
cd frontend
npm install
```

Create a `.env` file:

```env
VITE_API_URL=http://localhost:5000
```

Start the frontend:

```bash
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

---

## 🔌 API Endpoints

### Authentication

| Method | Endpoint           | Description   |
| ------ | ------------------ | ------------- |
| POST   | `/api/auth/signup` | Register user |
| POST   | `/api/auth/login`  | Login user    |

### Jobs

| Method | Endpoint                         | Description       |
| ------ | -------------------------------- | ----------------- |
| GET    | `/api/jobs/`                     | Get active jobs   |
| GET    | `/api/jobs/job/:id`              | Get a single job  |
| GET    | `/api/jobs/employer/:employerId` | Get employer jobs |
| POST   | `/api/jobs/create`               | Create a job      |
| PUT    | `/api/jobs/update/:id`           | Update a job      |
| DELETE | `/api/jobs/delete/:id`           | Delete a job      |

### ATS

| Method | Endpoint                         | Description             |
| ------ | -------------------------------- | ----------------------- |
| POST   | `/api/ats/analyze`               | Analyze uploaded resume |
| GET    | `/api/ats/applicants/:jobId`     | Get job applicants      |
| PUT    | `/api/ats/applicants/:id/status` | Update applicant status |

### Payments

| Method | Endpoint                | Description           |
| ------ | ----------------------- | --------------------- |
| POST   | `/api/pay/create-order` | Create Razorpay order |
| POST   | `/api/pay/verify`       | Verify payment        |

---

## 🧪 Production Build

Build the frontend:

```bash
cd frontend
npm run build
```

This generates the production files inside:

```text
frontend/dist/
```

The Express backend is configured to serve this production build, allowing the frontend and backend to run from the same server in production.

---

## 🌐 Deployment

The application can be deployed as a **single full-stack service**.

### Production Flow

```text
User
  ↓
Express / Node.js Server
  ↓
React Production Build
  ↓
REST API
  ↓
MongoDB Atlas
```

### Required Environment Variables

Configure the following variables in the deployment platform:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
RAZORPAY_KEY=your_razorpay_key
RAZORPAY_SECRET=your_razorpay_secret
PORT=5000
FRONTEND_URL=your_production_url
```

The frontend uses:

```env
VITE_API_URL
```

for local development. In a single-server production deployment, API requests can be configured to use the production backend URL.

---

## 📌 Project Highlights

* Full-stack MERN architecture
* JWT authentication and role-based authorization
* Employer and freelancer workflows
* Resume ATS analysis
* Job application management
* MongoDB persistence
* Razorpay payment integration
* Responsive React frontend
* Production-ready frontend build served through Express

---

## 👩‍💻 Author

**Shreya Sharma**

Full Stack Developer | MERN Stack

GitHub: `shreyachaturvedi-dev`
