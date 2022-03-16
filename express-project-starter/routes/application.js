var express = require('express');
var router = express.Router();
const { requireAuth, logoutUser } = require('../auth')
const { csrfProtection, asyncHandler } = require('./utils');
const db = require('../db/models')

/* GET application page. */
//? /application by default because of file name

router.get('/', csrfProtection, requireAuth, asyncHandler(async (req, res) => {
  const Lists = await db.List.findAll()
  res.render('application', { title: 'application', csrfToken: req.csrfToken(), Lists });
}));

router.get('/logout', (req, res) => {
  logoutUser(req, res);
  res.redirect('/splash');
})

router.post('/', asyncHandler(async (req, res) => {

  const { name } = req.body;
  console.log(name, listName)
  const task = await db.Task.build({ name });
  await task.save();
  res.redirect('/application')
}));


module.exports = router;
