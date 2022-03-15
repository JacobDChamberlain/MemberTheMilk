var express = require('express');
var router = express.Router();
const { requireAuth, logoutUser } = require('../auth')


/* GET application page. */
//? /application by default because of file name
router.get('/', requireAuth, (req, res) => {
  res.render('application', { title: 'application' });
});

router.get('/logout', (req, res) => {
  logoutUser(req, res);
  res.redirect('/splash');
})

module.exports = router;
