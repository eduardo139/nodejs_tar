const express = require('express')
const path = require('path')
var mysql = require('mysql')
var ejs = require('ejs')
const app = express()
const port = 3000

app.set('view engine', 'ejs')

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'eshop'
});

connection.connect();

var data;
 
connection.query('SELECT id_category, name FROM category', function (error, results, fields) {
  if (error) throw error;
  data = results;
  console.log(data);
});
 
connection.end();


////////////////////////////////////////////////////


app.get('/', (req, res) => {
  res.render('index', {data})
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})