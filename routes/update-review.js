const updateReview = require('express').Router();
const mysql = require("mysql2");
const db = mysql.createConnection(
  {
    host: "localhost",
    //MySQL username,
    user: "root",
    // MySQL password

    password: "harleyHorse",
    database: "movies_db", //database name that you want to connect too
  },
  console.log(`Connected to the movies_db database.this works`)
);
// PUT Route for updating a review name
updateReview.put('/:id', (req, res) => {
  console.log("hi")
    const sql = `UPDATE reviews SET review = ? WHERE id = ?`;
    const params = [req.body.review, req.params.id];
  
    db.query(sql, params, (err, result) => {
      if (err) {
        res.status(400).json({ error: err.message });
        console.log("not working")
      } else if (!result.affectedRows) {
        res.json({
          message: 'Movie not found'
        });
      } else {
        res.json({
          message: 'success',
          data: req.body,
          changes: result.affectedRows
        });
      }
    });
  });

module.exports = updateReview;