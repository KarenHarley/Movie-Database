const express = require("express");
const path = require("path");
const api = require("./routes/index.js");
const mysql = require("mysql2");
const PORT = process.env.PORT || 3001;

const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", api);
// Connect to database
<<<<<<< HEAD
const db = mysql.createConnection(
  {
    host: "localhost",
    //MySQL username,
    user: "root",
    // MySQL password

    password: "harleyHorse",
    database: "movies_db", //database name that you want to connect too
  },
  console.log(`Connected to the movies_db database.`)
);
=======
//const db = mysql.createConnection(
//{
//   host: "localhost",
// MySQL username,
//   user: "root",
// MySQL password

//    password: "",
//    database: "movies_db", //database name that you want to connect too
//  },
//  console.log(`Connected to the movies_db database.`)

//);
>>>>>>> 80742ef40bd33c71a833e717df60ab294c557390

//GET route for
app.get("/", (req, res) => console.log(res));

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);

//module.exports = db;
