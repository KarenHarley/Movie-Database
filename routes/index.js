
const router = require("express").Router();
// Import our modular routers for /api/review
const updateReviewRouter = require('./update-review');
// GET Route for update review
const movieRouter = require("./movies");
const addMovie = require("./add-movies");
const deleteMovie = require("./movie");

router.use("/movies", movieRouter);
router.use("/review", updateReviewRouter);
router.use("/", addMovie);
router.use("/movie", deleteMovie);

module.exports = router;

