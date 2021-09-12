//const express = require("express");
//const express = require('express');
const router = require("express").Router();
// Import our modular routers for /api/review
const updateReviewRouter = require('./update-review');

//change the app to the router for best practice
//const app = express();

// GET Route for update review
router.use('/review/:id', updateReviewRouter);

//module.exports = app;


const movieRouter = require("./moives");

router.use("/movies", movieRouter);

// POST request to create movie
const addRouter = require("./add-movies");
router.use("/add_movie", addRouter);


module.exports = router;

