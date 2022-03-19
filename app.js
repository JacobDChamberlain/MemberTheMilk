const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const { sequelize } = require('./db/models');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const { sessionSecret } = require('./config/index');
const { restoreUser } = require('./auth');

//* Require Routers Start Here
const usersRouter = require('./routes/users');
const applicationRouter = require('./routes/application');
const loginRouter = require('./routes/login');
const signUpRouter = require('./routes/signUp');
const splashRouter = require('./routes/splash');
const demoUserRouter = require('./routes/demoUser');
const addTaskRouter = require('./routes/addTaskRoute');
const addListRouter = require('./routes/addListRoute');
const editTaskRouter = require('./routes/editTaskRoute');
const deleteTaskRouter = require('./routes/deleteTaskRoute');
const editListRouter = require('./routes/editListRoute');
const deleteListRouter = require('./routes/deleteListRoute');
const viewTaskRouter = require('./routes/viewTaskRoute');
//* Require Routers End Here

const app = express();

// view engine setup
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(sessionSecret));
app.use(express.static(path.join(__dirname, 'public')));


// set up session middleware
const store = new SequelizeStore({ db: sequelize });

app.use(
  session({
    secret: sessionSecret,
    store,
    saveUninitialized: false,
    resave: false,
  })
);

app.use(restoreUser);

// create Session table if it doesn't already exist
store.sync();

//* User Routers Start Here
app.use('/', splashRouter);
app.use('/users', usersRouter);
app.use('/application', applicationRouter);
app.use('/login', loginRouter);
app.use('/signUp', signUpRouter);
app.use('/demo', demoUserRouter);
app.use('/addTask', addTaskRouter);
app.use('/addList', addListRouter);
app.use('/editTask', editTaskRouter);
app.use('/deleteTask', deleteTaskRouter);
app.use('/editList', editListRouter);
app.use('/deleteList', deleteListRouter);
//* Use Routers End Here

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
