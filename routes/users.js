var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/about', (req, res, next) => {
  res.render('about', { title: 'About us user' });
});

module.exports = router;
