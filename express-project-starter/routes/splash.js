var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('splash', { title: 'a/A Express Skeleton Home ===> splash' });
});

module.exports = router;