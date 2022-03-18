var express = require('express');
var router = express.Router();
const { requireAuth, logoutUser } = require('../auth')
const { csrfProtection, asyncHandler } = require('./utils');
const db = require('../db/models')
// const { Task, List } = require('../db/models')

/* GET application page. */
//? /application by default because of file name

//* Query sends the list on the select field.
router.get('/', requireAuth, asyncHandler(async (req, res) => {
  const userId = req.session.auth.userId;

  //Querries for lists
  const lists = await db.List.findAll({
    where: { userId },
    order: [['createdAt', 'DESC']]
  })
  const newArr = []
  console.log("🍊🍊🍊🍊🍊🍊🍊🍊🍊🍊🍊🍊🍊🍊🍊🍊🍊🍊🍊🍊🍊🍊")
  lists.forEach(list => {
    console.log(list.id, list.name, list.createdAt, list.userId)
    let newArr = [];
    newArr.push(list.id);
    newArr.push(list.name);
    console.log(newArr)
    //Query in here for Every Single List
  });

  const currId = lists.map(list => {
    console.log(list.id, list.name, list.createdAt, list.userId)
    //Query in here for Every Single List
    let newArr = [];
    newArr.push(list.id);
    newArr.push(list.name);
    console.log(newArr)
    return newArr;
  });


  // const listTasks = await db.List.findAll({
  //   where: { userId, lists: },
  // })

  // const listId = lists

  //Queurries for tasks
  const tasks = await db.Task.findAll({
    where: { userId },
    order: [['createdAt', 'DESC']]
  })
  console.log("🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎")
  tasks.forEach(task => {
    console.log(task.id, task.name, task.createdAt, task.listId, task.userId)
  });


  const listCategorys = await db.Task.findAll({
    where: { userId, },
    order: [['createdAt', 'DESC']]
  })


  res.render('application', { title: 'application', lists, tasks, listCategorys }); //lists, tasks
}));

router.get('/logout', (req, res) => {
  logoutUser(req, res);
  res.redirect('/');
})


module.exports = router;



  //! IGNORE BELOW THIS LINE
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

    // console.log("🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎");
  // console.log(req.sessionID); // Grabs the sid from Session in DB
  // const userId = req.session.auth.userId;
  // const listId = req.session.auth.listId; //Didn't work UNDEFINED
  // const user = await db.User.findByPk(userId, {
  //   include: [db.List]
  // })
