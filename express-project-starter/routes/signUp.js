var express = require('express');
var router = express.Router();
const { check, validationResult } = require('express-validator');

const db = require('../db/models');

const { csrfProtection, asyncHandler } = require('./utils');

/* GET sign up page. */
router.get('/', csrfProtection, (req, res) => {
  const user = db.User.build();
  res.render('signUp', { title: 'a/A Express Skeleton Home ===> signUp', user, csrfToken: req.csrfToken() });
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
}));

module.exports = router;
