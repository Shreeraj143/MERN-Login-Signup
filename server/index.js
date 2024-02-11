const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const { default: mongoose } = require("mongoose");
const cookieParser = require("cookie-parser");

const app = express();

// Mongoose Connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Database Connected Successfully"))
  .catch((err) => console.log("Database not Connected", err));

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

const port = 8000;

app.use("/", require("./routes/authRoutes"));

app.listen(port, () => console.log(`Listening on Port ${port}`));
