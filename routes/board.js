var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost', // DB가 위치한 IP주소
    port: 3306,          // DB와 연결할 포트번호
    user: 'root',        // 계정이름
    password: 'tkdwns12',    // 계정 비밀번호
    database: 'board01'    // 데이터베이스 이름
  });
  

  router.get('/',function (req,res,next) {
    res.redirect('/board/1');
  });
  router.get('/:page',function(req,res,next){
    res.render('list');
  })


module.exports = router;