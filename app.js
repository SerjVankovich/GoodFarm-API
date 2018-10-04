const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const passport = require('passport');
const bodyParser = require('body-parser');

require('./api/db/db');
require('./api/config/passport');

const indexRouter = require('./api/routes/index');
const usersRouter = require('./api/routes/users');
const setsRouter = require('./api/routes/sets');
const milkRouter = require('./api/routes/milk');
const breadRouter = require('./api/routes/bread');
const meatRouter = require('./api/routes/meatFish');
const vegFruitsRouter = require('./api/routes/vegFruits');

const app = express();
const cors = require('cors');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.set('Access-Control-Allow-Origin', '*');

app.use(logger('dev'));
app.use(bodyParser.json({ type: 'application/json', limit: '5mb' }));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());

app.use(passport.initialize());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/sets', setsRouter);
app.use('/milk', milkRouter);
app.use('/bread', breadRouter);
app.use('/meat', meatRouter);
app.use('/vegFruits', vegFruitsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next();
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
