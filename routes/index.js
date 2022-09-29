var express = require('express');
var router = express.Router();
var fetch = require('node-fetch')

const apiKey2 = 'ea78c1a861e2ad3c6cb51b8fa9d945a3'
const apiKey = process.env.OWM_API_KEY;

router.get('/movies', (req, res) => {
    console.log(apiKey);
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey2}`)
      .then(response => response.json())
      .then(data => {
        res.json({ movies: data.results });
      });
   });

module.exports = router;
