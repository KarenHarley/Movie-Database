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
 const sql = `DELETE FROM movies WHERE id = ?`;
 const params = [req.params.id];

 db.query(sql, params, (err, result) => {
   if (err) {
     res.status(400).json({ error: err.message });
   } else if (!result.affectedRows) {
     res.json({
       message: 'Movie not found'
     });
   } else {
     res.json({
       message: 'deleted Movie',
       changes: result.affectedRows
     });
   }
 });
});

module.exports = router;

//It's done when the /api/movie/:id route deletes a
// route when tested using Insomnia.