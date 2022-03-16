var express = require('express');
var router = express.Router();
const { requireAuth, logoutUser } = require('../auth')
const { csrfProtection, asyncHandler } = require('./utils');
const db = require('../db/models')

/* GET application page. */
//? /application by default because of file name

router.get('/', csrfProtection, requireAuth, (req, res) => {
  res.render('application', { title: 'application', csrfToken: req.csrfToken() });
});

router.get('/logout', (req, res) => {
  logoutUser(req, res);
  res.redirect('/splash');
})

router.post('/tasks', async (req, res) => {
  const { name } = req.body;
  const task = await db.Task.build({ name });

})


module.exports = router;
