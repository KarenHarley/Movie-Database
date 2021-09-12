
const router = require("express").Router();
// Import our modular routers for /api/review
const updateReviewRouter = require('./update-review');
// GET Route for update review
const movieRouter = require("./movies");
const addMoive = require("./add-movies");

router.use("/movies", movieRouter);
router.use("/review", updateReviewRouter);
router.use("/", addMoive);

module.exports = router;

