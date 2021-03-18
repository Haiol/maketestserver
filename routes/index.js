var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var myErr;



var connection = mysql.createConnection({
    host: 'localhost', //db ip address 
    port: 3306, //db port number
    user: 'root', //db id 
    password: 'tkdwns12', //db password 
    database: 'test' //db schema name
});


router.get('/logging', function(req, res){
    console.log('access logging');
    res.writeHead(404, {'Content-type' :'text/html'});
    res.end('error!!');
})
connection.connect(function(err){
    myErr = err;
    if(err){
        console.error('mysql connection error');
        console.error(err);
        throw err;
    }else{
        console.log("연결에 성공하였습니다.");
    }
});


router.get('/', function (req, res) {
    if(myErr)
    res.render('mysql', {connect:'연결 실패',err:myErr})
    else
    res.render('mysql', {connect:'연결 성공',err:'없음'})
  
})

router.get('/about',function(req,res){
    res.render('about')
})



module.exports = router;