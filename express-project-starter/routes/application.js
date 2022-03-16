var express = require('express');
var router = express.Router();
const { requireAuth, logoutUser } = require('../auth')
const { csrfProtection, asyncHandler } = require('./utils');
const db = require('../db/models')

/* GET application page. */
//? /application by default because of file name

router.get('/', csrfProtection, requireAuth, asyncHandler(async (req, res) => {
  console.log("HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH")
  console.log(req.sessionID)
  console.log("hhhhhhhhhhhhhhhhhhhhhhhhhhhhh")
  const userId = req.session.auth.userId
  const Lists = await db.List.findAll({
    where: { userId }
  })
  res.render('application', { title: 'application', csrfToken: req.csrfToken(), Lists });
}));

router.get('/logout', (req, res) => {
  logoutUser(req, res);
  res.redirect('/splash');
})




module.exports = router;
