
const router = require("express").Router();
// Import our modular routers for /api/review
const updateReviewRouter = require('./update-review');
// GET Route for update review
const movieRouter = require("./movies");
const addMovie = require("./add-movies");
const deleteMovie = require("./movie");

router.use("/movies", movieRouter);

// POST request to create movie
const addRouter = require("./add-movies");
router.use("/add_movie", addRouter);

router.use("/review", updateReviewRouter);
router.use("/", addMovie);
router.use("/movie", deleteMovie);
// router.use("/", addMoive);

module.exports = router;

