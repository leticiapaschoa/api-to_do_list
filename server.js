//Criar um novo servidor manualmente (não utilizado)
//var http = require('http');
// http.createServer(function(req, res){
//     res.end('Hello World');
// }).listen(3000);

//Criar um servidor usando o pacote Express
const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(3000)