const { readdirSync } = require("fs");
const path = require("path");
const express = require("express");
const app = express();
const helmet = require("helmet");
const mongoose = require("mongoose");
require("dotenv").config();
const morgan = require("morgan");
const cors = require("cors");

// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(helmet());

// Routes Middleware
readdirSync("./src/routes").map((r) => app.use("/api/v1", require(`./src/routes/${r}`)));

// server
const port = process.env.PORT || 8000;

// Connect to DB and start server
mongoose
  .connect(process.env.DATABASE)
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => console.log(err));
