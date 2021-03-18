const express = require('express');
const bodyParser = require('body-parser')
const logger = require('morgan');
const session = require('express-session');

var routes = require('./routes/index');
var board = require('./routes/board');
var app = express();


//View Engin
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');
// app.engine('html',require('ejs').renderFile);

//set static folder
// app.use(express.static(path.join(__dirname,'client')));

app.set('view engine','ejs');
app.set('views','./views');


app.use(logger('short'));
app.use(express.static('./public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


app.use('/board',board);

app.use('/', routes);

app.post('/profile', function(req, res){
  console.log(req.params("id"));
  res.render('test');
})

app.post('/form_receiver', function(req, res){
  var title = req.body.title;
  var decription = req.body.decription;
  res.send(title + ',' + decription);
  res.send('Hello, Post Method')
})

app.get('/form_receiver', function(req, res){
  var title = req.body.title;
  var decription = req.body.decription;
  res.send(title + ',' + decription);
  res.send('Hello, Post Method')
})
app.get('/a',function(req,res){
  res.send('hi');
  console.log("ddddddddddddddd");
});
app.post('/send_email', function(req,res){
  console.log("email :", req.body.email);
  res.send("<h1>WELCOME<h1>");
});


app.get('/write', function(req, res) {
    res.sendFile(__dirname + "/write.html");
  });
app.post('/write',function(req, res){
    res.send(req.body);
})

app.listen(3000, function() {
  console.log("Go!");
});