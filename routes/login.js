var express = require('express');
var router = express.Router();
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const { loginUser } = require('../auth');

const db = require('../db/models');

const { csrfProtection, asyncHandler } = require('./utils');

/* GET login page. */
router.get('/', csrfProtection, (req, res) => {
  res.render('login', { title: 'Login Page', csrfToken: req.csrfToken() });
});

const loginValidators = [
  check('email')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Email Address'),
  check('password')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Password'),

];

router.post('/', csrfProtection, loginValidators, asyncHandler(async (req, res) => {
  const {
    email,
    password,
  } = req.body;

  let errors = [];

  const validatorErrors = validationResult(req);

  if (validatorErrors.isEmpty()) {
    const user = await db.User.findOne({ where: { email } });

    if (user) {
      const match = await bcrypt.compare(password, user.hashedPassword.toString());
      if (match) {
        loginUser(req, res, user);
        return res.redirect('/application');
        // return;
      }
    }
    errors.push("Login failed for the provided email address and password.");
  } else {
    errors = validatorErrors.array().map((error) => error.msg);
  }

  res.render('login', {
    Title: 'Login Page',
    email,
    errors,
    csrfToken: req.csrfToken(),
  });
}));



module.exports = router;