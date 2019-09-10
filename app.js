const express = require("express");
const mysql = require("mysql");


const app = express();

var db = mysql.createConnection({
  host    : 'localhost',
  user     : 'root',
  password : '',
  database : 'nodemysql'
});
 
db.connect(function(err){
	if(err){
		throw err;
	}
	console.log("Database is connected");
});
 

app.get("/",function(req,res){
   db.query("DROP TABLE persons",function(err){
   	if(err){
   		res.send("Problem in Database");
   	}
   	console.log("The persons Table is droped");
   });
}); 



//Create server on port no 8080;
app.listen('8080',function(err){
	if(err){
		throw err;
	}
	console.log("Server started on port no 8080");
});