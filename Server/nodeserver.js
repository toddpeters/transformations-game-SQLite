// import Express from 'express';
const  Express = require('express');

//  var App = require('../the_cabin_tapes/src/App.js')
// import Path from'path'
var http = require('http');
var https = require('https');

var sqlite3 = require('sqlite3').verbose()
var db = new sqlite3.Database('game.db')

const nodeServer = Express();
const hostname = '127.0.0.1';
const port = 5000;

nodeServer.get('/', (req,res)=>{
    console.log(req.route)
    //
    
    db.serialize(function () {
        db.run(' CREATE TABLE IF NOT EXISTS lorem (info TEXT, date_time TEXT)')
        var stmt = db.prepare('INSERT INTO lorem VALUES (?,datetime("now"))')
      
        for (var i = 0; i < 10; i++) {
          stmt.run(('Ipsum ' + i))
          
        }
      
        stmt.finalize()
        // db.run('INSERT INTO lorem  VALUES (datetime("now"),datetime("now", "localtime"))')

      
        db.each('SELECT rowid AS id, info FROM lorem', function (err, row) {
          console.log(row.id + ': ' + row.info)
        })
      })
      
    //   db.close()
    
    // 
    res.send("You are now seeing your BACKEND!!")
})
nodeServer.get('/score', (req,res)=>{
    console.log(req.route)
    res.send("Select state.score from DB")
})
nodeServer.listen(port,hostname, 
    ()=>{console.log('Node Server Listening on port'+port)})