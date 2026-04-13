const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const uri = process.env.MONGO_URI;

        if (!uri) {
            throw new Error("MONGO_URI not found in .env");
        }

        await mongoose.connect(uri);
        console.log("MongoDB connected");
    } catch (err) {
        console.log("DB Error:", err.message);
    }
};

module.exports = connectDB;