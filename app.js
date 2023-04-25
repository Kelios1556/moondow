var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

var mysql = require('mysql');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

// connect mysql database
var db = mysql.createConnection({
  host: "localhost",
  user: "nodekiiio",
  password: "123123",
  database: "users"
});
db.connect(function(err) {
  if (err) throw err;
  console.log(">>>>>>>>>>>>>database connect");
});

// make our db accessible to routers
app.use(function(req, res, next) {
  req.db = db;
  next();
});

// routers
app.use('/', indexRouter);
app.use('/users', usersRouter);

// for requests not matching the above routes, create 404 error and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development environment
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

app.listen(3001);

