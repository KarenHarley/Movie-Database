
const router = require("express").Router();
// Import our modular routers for /api/review
const updateReviewRouter = require('./update-review');
// GET Route for update review
const movieRouter = require("./moives");

router.use("/movies", movieRouter);
router.use("/review", updateReviewRouter);


module.exports = router;

