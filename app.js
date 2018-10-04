var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/',function(req,res){
    res.sendfile('./public/form.html');
})

app.post('/',function(req,res){
    console.log(req.body);
})


app.listen(3000,function(){
    console.log('asdf');
})