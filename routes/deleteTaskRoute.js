const express = require('express');
const router = express.Router();
const db = require('../db/models');

const { csrfProtection, asyncHandler } = require('./utils');
//! csrfProtection only when we need to re-render a page don't dlt for bhavik :(

router.post('/', asyncHandler(async(req, res) => {
  const { taskId } = req.body;

  const deleteTask = await db.Task.findByPk(taskId);

  //Save is for updating
  await deleteTask.destroy();

  res.redirect('/application')
}))

module.exports = router;
