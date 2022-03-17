var express = require('express');
var router = express.Router();
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const { loginUser } = require('../auth');


const db = require('../db/models');

const { csrfProtection, asyncHandler } = require('./utils');

/* GET sign up page. */
router.get('/', csrfProtection, (req, res) => {
  const user = db.User.build();
  res.render('signUp', { title: 'Sign Up', user, csrfToken: req.csrfToken() });
});

const userValidators = [
  check("username")
    .exists({ checkFalsy: true })
    .withMessage("Please enter a value for username.")
    .isLength({ max: 50 })
    .withMessage("Username must not be longer than 50 characters."),
  check("email")
    .exists({ checkFalsy: true })
    .withMessage("Please enter a value for email.")
    .isLength({ max: 255 })
    .withMessage("Email must not be longer than 255 characters.")
    .isEmail()
    .withMessage("Please provide a valid email.")
    .custom((value) => {
      return db.User.findOne({ where: { email: value } })
        .then((user) => {
          if (user) {
            return Promise.reject("The Email Address is already in use by another account.");
          }
        });
    }),
  check("password")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a value for password.")
    .isLength({ max: 50 })
    .withMessage("Password must not be longer than 50 characters."),
  check("confirmPassword")
    .exists({ checkFalsy: true })
    .withMessage("Please enter a value for Confirm Password.")
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("Passwords do not match.");
      }
      return true;
    })
];

router.post('/', csrfProtection, userValidators, asyncHandler(async (req, res) => {
  const {
    username,
    email,
    password
  } = req.body;

  const user = await db.User.build({
    username,
    email
  });

  const validatorErrors = validationResult(req);

  if (validatorErrors.isEmpty()) {
    const hashedPassword = await bcrypt.hash(password, 12);
    user.hashedPassword = hashedPassword;
    await user.save();
    //Creates The Lists for every new User
    //TODO Demo Users
    const Today = await db.List.build({
      name: 'Today',
      userId: user.id
    })
    const Tomorrow = await db.List.build({
      name: 'Tomorrow',
      userId: user.id
    })
    const thisWeek = await db.List.build({
      name: 'This Week',
      userId: user.id
    })
    const Trash = await db.List.build({
      name: 'Trash',
      userId: user.id
    })

    /// Saves the newly created Lists for every User
    await Today.save();
    await Tomorrow.save();
    await thisWeek.save();
    await Trash.save();

    // Logs in the user and redirects them to their application page
    loginUser(req, res, user);
    res.redirect('/application');
  } else {
    const errors = validatorErrors.array().map((error) => error.msg);
    res.render('signUp', {
      title: 'Sign Up',
      user,
      errors,
      csrfToken: req.csrfToken()
    });
  }
}));

module.exports = router;
