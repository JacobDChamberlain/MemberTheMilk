const express = require('express');
const router = express.Router();
const db = require('../db/models');

const { csrfProtection, asyncHandler } = require('./utils');

//* Where we build the list
router.post('/', asyncHandler(async (req, res) => {
    const { name, userId } = req.body;
    console.log(req.body)
    const list = await db.List.build({ name, userId });
    await list.save();
    res.redirect('/application')
}));


module.exports = router;
