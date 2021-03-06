var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const crown_69_Router = require('./routes/crown_69');
const crown2_69_Router = require('./routes/crown2_69');
const api_69_Router = require('./routes/api_69');
const midproj_69_Router = require('./routes/midproj_69');
const midterm_69_Router = require('./routes/midterm_69');
const booksRouter = require('./routes/books_69.js');
const fender = require('./routes/fender')
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(
  cors({
    origin: ['https://crown1101.herokuapp.com'],
  })
);

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use('/api_69', cors(), api_69_Router);

/* crown_69 */
app.use('/crown_69', crown_69_Router);
app.use('/crown2_69', crown2_69_Router);

/* midproj_69 */
app.use('/midproj_69', midproj_69_Router);

/* midterm_69 */
app.use('/midterm_69', midterm_69_Router);

/* Books CRUD demo */
app.use('/books_69',booksRouter);
/* finalproj_69 */
app.use('/fender',fender);
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
