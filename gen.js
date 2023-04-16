var mysql = require('mysql');

var db = mysql.createConnection({
  host: "localhost",
  user: "nodekiiio",
  password: "123123",
  database: "users"
});

db.connect(function(err) {
  if (err) throw err;
  console.log("connect");
});

/* create database
db.query("CREATE DATABASE users", function(err, re) {
  if (err) throw err;
  console.log(re);
});
*/

/* create table
db.query("CREATE TABLE accounts (name VARCHAR(255), password VARCHAR(255))", function(err, re) {
  if (err) throw err;
  console.log(re);
});
*/

/* insert
db.query("INSERT INTO accounts (name, password) VALUES ('kiiio', '123123')", function(err, re) {
  if (err) throw err;
  console.log(re);
});
*/

var sql = 'SELECT * FROM accounts WHERE name= ? and password = ?';
db.query(sql, ['kiiio', '123123'], function(err, re) {
  console.log(JSON.parse(JSON.stringify(re)).length);
});

db.end();
