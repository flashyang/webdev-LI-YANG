// Get the dependencies

const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const app = express();
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');

app.use(cookieParser());
app.use(session({ secret: 'process.env.SESSION_SECRET '}));
app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Point static path to dist -- For building -- REMOVE
app.use(express.static(path.join(__dirname, 'dist/webdev')));
app.use(express.static(path.join(__dirname, 'src/assets')));



// CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

const port = process.env.PORT || '3200';
app.set('port', port);

// Create HTTP server
const server = http.createServer(app);
server.listen( port , () => console.log('Running on port 3200'));


var connectionString = 'mongodb://cooler:2010cooler@ds113815.mlab.com:13815/heroku_xlvc3rq2';
var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const client = mongoose.connect( connectionString, { useNewUrlParser: true });

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


require("./assignment/app")(app);

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist/webdev/index.html'));
});
