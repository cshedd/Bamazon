var mysql = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "cshedd",
	password: "gayle92",
	database: "bamazon_db"
})

console.log("this is connected");

connection.connect(function(err) {
	if (err) throw err;
	runSearch();
})

