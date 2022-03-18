const express = require('express');
const router = express.Router();
const db = require('../db/models');

const { csrfProtection, asyncHandler } = require('./utils');

//* Where we build the list
router.post('/', asyncHandler(async (req, res) => {

    const listTasks = await db.Task.findAll({
      where: { userId, listId },
      order: [['createdAt', 'DESC']]
    })





    res.redirect('/application')
}));


module.exports = router;














const listTasks = await db.Task.findAll({
  where: { userId, listId },
  order: [['createdAt', 'DESC']]
})