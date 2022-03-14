var express = require('express');
var router = express.Router();

/* GET sign up page. */
router.get('/', (req, res, next) => {
  res.render('signUp', { title: 'a/A Express Skeleton Home ===> signUp' });
});

module.exports = router;