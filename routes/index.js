
const express = require('express');

// Import our modular routers for /api/review
const updateReviewRouter = require('./update-review');

//change the app to the router for best practice
const app = express();

// GET Route for update review
app.use('/review/:id', updateReviewRouter);

module.exports = app;

const router = require("express").Router();

const movieRouter = require("./moives");

router.use("/movies", movieRouter);



module.exports = router;

