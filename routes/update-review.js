const updateReview = require('express').Router();


// PUT Route for updating a review name
updateReview.put('/api/review/:id', (req, res) => {
    const sql = `UPDATE reviews SET review = ? WHERE id = ?`;
    const params = [req.body.review, req.params.id];
  
    db.query(sql, params, (err, result) => {
      if (err) {
        res.status(400).json({ error: err.message });
      } else if (!result.affectedRows) {
        res.json({
          message: 'Movie not found'
        });
      } else {
        res.json({
          message: 'success',
          data: req.body,
          changes: result.affectedRows
        });
      }
    });
  });

module.exports = updateReview;