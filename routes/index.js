
const router = require("express").Router();
// Import our modular routers for /api/review
const updateReviewRouter = require('./update-review');
// GET Route for update review
const movieRouter = require("./movies");
const addMoive = require("./add-movies");

router.use("/movies", movieRouter);

// POST request to create movie
const addRouter = require("./add-movies");
router.use("/add_movie", addRouter);

router.use("/review", updateReviewRouter);
// router.use("/", addMoive);

module.exports = router;

