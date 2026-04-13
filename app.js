require("dotenv").config({ path: ".env.local" });

const express = require("express");
const connectDB = require("./config/db");

const app = express();

// connect DB
connectDB();

// test route
app.get("/", (req, res) => {
    res.send("User Service Running");
});

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});