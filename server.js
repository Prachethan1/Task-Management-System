require("dotenv").config()
const express = require("express");
const connectDb = require("./config/db");
const taskRoutes = require("./routes/taskRoutes");
const logger = require("./middlewares/logger");
const errorhandler = require("./middlewares/errorhandler");
const authRoutes = require("./routes/authRoutes");
// const protect = require("./middlewares/auth");


// const json  = require("body-parser");

const app = express();

app.use(express.json());
app.use(logger);

app.use("/api", taskRoutes);
app.use(errorhandler);

app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;

connectDb()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on port: ${PORT}`);
        });

        app.on("error", (error) => {
            console.error(`Error: ${error}`);
            throw error;
        });
    })
    .catch((err) => {
        console.error(`MongoDB connection failed: ${err}`);
    });