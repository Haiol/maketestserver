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


app.listen(3000, function() {
  console.log("Go!");
});