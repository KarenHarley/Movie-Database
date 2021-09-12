const router = require("express").Router();
const mysql = require("mysql2");

const db = mysql.createConnection(
    {
      host: "localhost",
      // MySQL username,
      user: "root",
      // MySQL password
      password: "",//add pass
      database: "movies_db", //database name that you want to connect too
    },
    console.log(`Connected to the moives_db database.`)
  );


router.get("/", (req, res) => {
    db.query('SELECT movies_name FROM movies', function (err, results) {
        console.log(results);//this is the response
        res.json(results)
      });
  });

  
  module.exports = router;