const express = require('express');
const router = express.Router();
const db = require('../db/models');

const { csrfProtection, asyncHandler } = require('./utils');

router.post('/', asyncHandler(async (req, res) => {

    const { name, listId, userId } = req.body;
    console.log(req.body)
    const task = await db.Task.build({ name, listId, userId });
    await task.save();
    res.redirect('/application')
}));

module.exports = router;