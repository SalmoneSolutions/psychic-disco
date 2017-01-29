var express = require('express');
var bodyParser = require('body-parser')
var app = express();


app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



app.get('/',function(req,res){

  res.sendFile('index.html')

})


app.listen(8080)
