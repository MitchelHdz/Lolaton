var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');
var Twitter = require('twitter');
var client = new Twitter({
  consumer_key: 'gWtJmQMgye24s9nWtHpLBfumg',
  consumer_secret: 'xdza276yr3d52UPmlMo8q5FBV5hUFgIIKQXp6upZN0VaERzRaF',
  access_token_key: '101252908-JG00AMzAbAt8WiZ0Y3tDgo171k0djd73RMwsld15',
  access_token_secret: '13vPG9nyepu9QwnOW7aosmK2sTGi8OkLBvvnf89jITNWv'
});
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});
function getHashtags (p1, p2, p3, p4) {
  var count1 = 0;
  var count2 = 0;
  var count3 = 0;
  var count4 = 0;
  var tweets = [];

  client.stream('statuses/filter', {track: p1}, function(stream) {
    stream.on('data', function(tweet) {
      console.log(tweet.text, count1);
      count1 ++;
    });
   
    stream.on('error', function(error) {
      throw error;
      cosole.log(error);
    });
  });
  client.stream('statuses/filter', {track: p2}, function(stream) {
    stream.on('data', function(tweet) {
      console.log(tweet.text, count2);
      count2 ++;
    });
   
    stream.on('error', function(error) {
      throw error;
    });
  });
}
var p1= '#Tweet1';
var p2= '#tweet2';
var p3= '#ConejoPedo';
var p4= '#Khe';
init = getHashtags(p1, p2, p3, p4);
module.exports = app;
