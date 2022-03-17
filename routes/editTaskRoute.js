const express = require('express');
const router = express.Router();
const db = require('../db/models');

const { csrfProtection, asyncHandler } = require('./utils');
//! csrfProtection only when we need to re-render a page don't dlt for bhavik :(

router.post('/', asyncHandler(async (req, res) => {
  const { name, taskId } = req.body;

  const editTask = await db.Task.findByPk(taskId);

  console.log('🍊🍊🍊🍊🍊🍊🍊🍊🍊🍊');
  console.log(editTask)

  //Save is for updating
  await editTask.update({ name })

  res.redirect('/application')
}))

module.exports = router;


// router.put("/:id(\\d+)", validateTask, handleValidationErrors, asyncHandler(async (req, res, next) => {
//     const taskId = parseInt(req.params.id, 10);
//     const task = await Task.findByPk(taskId);

//     if (task) {
//       await task.update({ name: req.body.name });
//       res.json({ task });
//     } else {
//       next(taskNotFoundError(taskId));
//     }
//   })
// );
