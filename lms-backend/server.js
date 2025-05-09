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

// MongoDB Connection
connectDB();


app.get("/", (req, res) => {
    res.send("LMS backend is running...");

});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});