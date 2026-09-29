const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const connectDB = require("./config/db");
const authRoutes = require("./routes/auth");
const jobRoutes = require("./routes/jobs");
const atsRoutes = require("./routes/ats");
const paymentRoutes = require("./routes/payment");
const adminRoutes = require("./routes/admin");
const profileRoutes = require("./routes/profile");

const app = express();

// =========================
// CORS
// =========================

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:3000",
      "https://bharat-freelance-eight.vercel.app",
      process.env.FRONTEND_URL,
    ].filter(Boolean),
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// =========================
// CONNECT TO MONGODB
// =========================

connectDB();

// =========================
// API ROUTES
// =========================

app.use("/api/auth", authRoutes);
app.use("/api/jobs", jobRoutes);
app.use("/api/ats", atsRoutes);
app.use("/api/pay", paymentRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/profile", profileRoutes);

// =========================
// HEALTH CHECK
// =========================

app.get("/api/health", (req, res) => {
  res.json({
    status: "✅ Bharat Freelance API running",
    timestamp: new Date(),
  });
});

// =========================
// SERVE FRONTEND
// =========================

const frontendPath = path.join(__dirname, "../frontend/dist");

app.use(express.static(frontendPath));

// React/Vite fallback
app.use((req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});

// =========================
// RENDER KEEP-ALIVE
// =========================

const SELF_URL =
  process.env.RENDER_EXTERNAL_URL ||
  `http://localhost:${process.env.PORT || 5000}`;

function startKeepAlive() {
  setInterval(async () => {
    try {
      const response = await fetch(`${SELF_URL}/api/health`);
      const data = await response.json();

      console.log(
        `🏓 Keep-alive ping OK [${new Date().toLocaleTimeString(
          "en-IN"
        )}] →`,
        data.status
      );
    } catch (err) {
      console.warn("⚠️ Keep-alive ping failed:", err.message);
    }
  }, 14 * 60 * 1000);
}

// =========================
// START SERVER
// =========================

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🔥 Bharat Freelance running on port ${PORT}`);
  startKeepAlive();
});