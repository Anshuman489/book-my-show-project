// server.js
require('dotenv').config(); 
const express = require('express');
const cors = require('cors');
const connectDB = require('./dbConnection');
const routes = require('./routes');

const app = express();


const allowedOrigins = [
    process.env.CLIENT_URL,       // e.g. https://bookmyshow-frontend.onrender.com
    'http://localhost:3000'       // React dev server
];

app.use(
  cors({
    origin: (origin, cb) => {
      // allow Postman/no-origin requests and whitelisted sites
      if (!origin || allowedOrigins.includes(origin)) {
        return cb(null, true);
      }
      return cb(new Error('CORS not allowed'));
    },
    credentials: true
  })
);

app.use(express.json());

connectDB();

app.use("/api", routes)

app.get("/", (req, res) => {
    res.send("Welcome to the Booking System API");
});



/* ---------- start server ---------- */
const PORT = process.env.PORT || 8080;   // ② use env var in prod
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
