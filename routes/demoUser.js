var express = require('express');
var router = express.Router();
const { loginUser } = require('../auth');
const bcrypt = require('bcryptjs');
const db = require('../db/models');

const { csrfProtection, asyncHandler } = require('./utils');



router.get('/', csrfProtection, asyncHandler(async (req, res) => {
  const email = 'demoUser@gmail.com';
  const password = 'password'

  const user = await db.User.findOne({ where: { email } });

  if (user) {
    const match = await bcrypt.compare(password, user.hashedPassword.toString());
    if (match) {
      loginUser(req, res, user);
      return res.redirect('/application');
    }
  }
}));

module.exports = router