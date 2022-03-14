var express = require('express');
var router = express.Router();

/* GET application page. */
//? /application by default because of file name
router.get('/', (req, res) => {
  res.render('application', { title: 'a/A Express Skeleton Home ==> Application' });
});

module.exports = router;