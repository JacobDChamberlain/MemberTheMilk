var express = require('express');
var router = express.Router();
const { requireAuth } = require('../auth')

/* GET application page. */
//? /application by default because of file name
router.get('/', requireAuth, (req, res) => {
  res.render('application', { title: 'application' });
});

module.exports = router;