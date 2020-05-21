const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const indexRouter = require('./routes/index');
const createRouter = require('./routes/create');
var bodyParser = require('body-parser');
const multer  = require('multer');
const upload = multer({ dest: 'public/upload/'})
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use('/public',express.static(path.join(__dirname, 'public')));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:3000');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type');
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
  res.header('Content-Type', 'application/json;charset=utf-8');
  res.header('Access-Control-Allow-Credentials', true);
  if (req.method == 'OPTIONS') {
    res.send(200);
  } else {
    next();
  }
});

app.use(upload.any())

app.use('/', indexRouter);

app.use('/create', createRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
