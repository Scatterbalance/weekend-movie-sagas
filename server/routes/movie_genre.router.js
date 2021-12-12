const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
 router.get('/', (req, res) => {
   console.log(req.query.id);

  const query = 
  `SELECT * FROM movies_genres
  Join movies ON movie_id = movies.id
  Join genres ON genre_id = genres.id
  WHERE movie_id = ${req.query.id};`;
  pool.query(query)
    .then( result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get all movies', err);
      res.sendStatus(500)
    })

});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
