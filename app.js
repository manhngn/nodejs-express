var express = require('express');
var chalk = require('chalk');
var debug = require('debug')('app');
var morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const routes = require('./routes');

var app = express();

app.set('view engine', 'pug');

app.use(morgan('combined'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(routes);

app.listen(3000, function(){
  console.log(`Listening on port ${chalk.green('3000')}`);
});
