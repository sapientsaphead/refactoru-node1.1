
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');

var fs = require('fs')

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);

// PART I

app.get('/hi', function(req, res){
	res.send('<h1>Oh hai! Nice to see you here!</h1>');
});

app.get('/bye', function(req, res){
	res.send('<h1>So sad to see you leave...</h1>');
});

app.get('/inigo', function(req, res){
	res.send('<h2>\"You keep using that word. I do not think it means what you think it means.\"</h2>');
});

// PART II

app.get('/main', function(req, res){
	fs.readFile(__dirname + '/static.html', function(err, data){
		res.setHeader('Content-Type', 'text/html')
		res.send(data)
	})
});

app.post('/formsubmit', function(req, res){
	res.redirect('/success')
});

app.get('/success', function(req, res){
	res.send('<h1>Success!</h1>')
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
