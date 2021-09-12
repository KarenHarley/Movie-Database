const router = require("express").Router();
const mysql = require("mysql2");

const db = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "",
        database: "movies_db"
    },
    console.log("Succesfully connected to movies_db")
);

router.post("/", (req, res) => {
    const query = "INSERT INTO movies (movies_name) VALUES (?)";
    const movie = req.body.movie_name;
    console.log(movie);
    db.query(query, movie, (err, results) =>{
        if(err){
            console.log(err);
            res.status(400).json("Error ocurred");
        }
        else{
            res.json("Succesfully added movie");
        }
    });
});

module.exports = router;