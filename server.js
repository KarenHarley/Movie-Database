const express = require("express");
const path = require("path");
const api = require("./routes/index.js");
const mysql = require("mysql2");
const PORT = process.env.PORT || 3001;

const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Middleware for handling static requests
app.use(express.static("public"));

app.use("/api", api);
// Connect to database
const db = mysql.createConnection(
  {
    host: "localhost",
    // MySQL username,
    user: "root",
    // MySQL password
    password: "harleyHorse",
    database: "classlist_db", //database name that you want to connect too
  },
  console.log(`Connected to the classlist_db database.`)
);

//GET route for 
app.get("/", (req, res) => console.log(res));

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);