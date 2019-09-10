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
   db.query("CREATE TABLE Persons (PersonID int,LastName varchar(255),FirstName varchar(255),Address varchar(255),City varchar(255))",function(err){
   	if(err){
   		throw err;
   	}
   	res.send("Table is created");
   	console.log("The persons Table is created");
   });
});



//Create server on port no 8080;
app.listen('8080',function(err){
	if(err){
		throw err;
	}
	console.log("Server started on port no 8080");
});