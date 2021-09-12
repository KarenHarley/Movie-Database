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

router.post('/add-movie', ({ body }, res) => {
    const params = [body.movie_name];
     
     db.query(`INSERT INTO movies (movie_name)
       VALUES (?)`, params, (err, result) => {
       if (err) {
         res.status(400).json({ error: err.message });
         return;
       }
       res.json({
         message: 'success',
         data: body
       });
     });
   });