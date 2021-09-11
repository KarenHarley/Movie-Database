const express = require('express');

// Import our modular routers for /api/review
const updateReviewRouter = require('./update-review');

const app = express();

// GET Route for update review
app.use('/review/:id', updateReviewRouter);

module.exports = app;