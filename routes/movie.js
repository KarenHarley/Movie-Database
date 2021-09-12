const router = require("express").Router();
const mysql = require("mysql2");

const db = mysql.createConnection(
    {
      host: "localhost",
      // MySQL username,
      user: "root",
      // MySQL password
      password: "harleyHorse",//add pass
      database: "movies_db", //database name that you want to connect too
    },
    console.log(`Connected to the moives_db database.`)
  );
//DELETE route for api/notes/:id
router.delete("/:id", (req, res) => {
    console.log("delete route works")
 // const requestedId = req.params.id.toLowerCase();
  
});

module.exports = router;

//It's done when the /api/movie/:id route deletes a
// route when tested using Insomnia.