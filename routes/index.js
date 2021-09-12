const router = require("express").Router();

const movieRouter = require("./moives");

router.use("/movies", movieRouter);



module.exports = router;