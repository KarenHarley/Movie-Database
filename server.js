const express = require("express");
const path = require("path");
const api = require("./routes/index.js");
//const mysql = require("mysql2");
const PORT = process.env.PORT || 3001;

const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", api);

//GET route for
app.get("/", (req, res) => console.log(res));

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);

//module.exports = db;
