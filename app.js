var express = require('express');
var app = express();
var http = require('http').Server(app);
var path = require('path');
var io = require('socket.io')(http);

var mongoose = require('mongoose');
var bodyParser = require('body-parser');

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/snack');

var posts = require('./post/controller');

app.get('/api/posts', posts.listPosts);
app.post('/api/posts', posts.createPost(io));

// This serves all files placed in the /public
// directory (where gulp will build all React code)
app.use(express.static('public'));

// Also serve everything from our assets directory (static
// assets that you want to manually include)
app.use(express.static('assets'));

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});

const layout = require('./layout');

app.get('/', (req, res, next) => {
  const Components = require('./components');
  res.send(layout({
    body: Components.snack({})
  }));
});

// This route serves your index.html file (which
// initializes React)
app.get('*', function(req, res, next) {
  res.sendFile(path.join(__dirname,'index.html'));
});

// Start your server, and listen on port 8080.
http.listen(8080, function() {
  console.log("App is now listening on port 8080!");
})
