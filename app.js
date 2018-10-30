var express = require('express');
var chalk = require('chalk');
var debug = require('debug')('app');
var morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

var app = express();

app.set('view engine', 'pug');

app.use(morgan('combined'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.get('/', function(req, res){
  const name = req.cookies.username
  res.render('index', { name });
});

app.get('/hello', function (req, res) {
  res.render('hello', { name: req.cookies.username });
});

app.post('/hello', function (req, res) {
  res.cookie('username', req.body.username);
  res.redirect('/');
});

app.get('/cards', function(req, res){
  res.render('card', { prompt: "Who is buried in Grant's tomb?" })
});

app.listen(3000, function(){
  console.log(`Listening on port ${chalk.green('3000')}`);
});
