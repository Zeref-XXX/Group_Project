// backend/index.js

const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors"); // 1. IMPORT THE CORS PACKAGE

dotenv.config();

const UserRoute = require("./routes/user");

mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", (err) => {
  console.log(err);
});
db.once("open", () => {
  console.log("Database Connection Established!");
});

const app = express();

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// 2. USE THE CORS MIDDLEWARE to allow cross-origin requests
// This must come BEFORE your routes are defined.
app.use(cors());

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use("/api/user", UserRoute);