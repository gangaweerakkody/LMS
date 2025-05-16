const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const dotenv = require("dotenv");

// Middlewares
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());





// Connect to DB and start server
connectDB().then(() => {
  app.listen(process.env.PORT, () =>
    console.log(`🚀 Server running on port ${process.env.PORT}`)
  );
});