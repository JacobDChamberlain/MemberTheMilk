var express = require('express');
var router = express.Router();
const { requireAuth, logoutUser } = require('../auth')
const { csrfProtection, asyncHandler } = require('./utils');
const db = require('../db/models')
// const { Task, List } = require('../db/models')

/* GET application page. */
//? /application by default because of file name

//* Query sends the list on the select field.
router.get('/', csrfProtection, requireAuth, asyncHandler(async (req, res) => {
  // console.log("🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎");
  // console.log(req.sessionID); // Grabs the sid from Session in DB
  const userId = req.session.auth.userId;
  // const listId = req.session.auth.listId; //Didn't work UNDEFINED
  // const user = await db.User.findByPk(userId, {
  //   include: [db.List]
  // })
  const lists = await db.List.findAll({
    where: { userId }
  })

  //? Ignore Me
  // console.log("🍊🍊🍊🍊🍊🍊🍊🍊🍊🍊🍊🍊🍊🍊")
  // const theThing = Object.keys(lists);
  // console.log(theThing);
  // const listId = lists[0].id;

  // for (keys in lists) {
  //   console.log("🍎🍎🍎🍎🍎")
  //   console.log(keys);
  // }
// console.log(listId);
//? Ignore Me End

  // console.log(...lists);
  //TODO Raymond look at this
  const tasks = await db.Task.findAll({
    where: { userId }
  })
  //! Comment me Out
  res.render('application', { title: 'application', csrfToken: req.csrfToken(), lists, tasks }); //lists, tasks
}));

router.get('/logout', (req, res) => {
  logoutUser(req, res);
  res.redirect('/splash');
})


module.exports = router;