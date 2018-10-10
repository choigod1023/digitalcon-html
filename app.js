var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mysql = require('mysql');

var conn = mysql.createConnection({
    host: 'hyunwoo.org',
    user: 'sunrinlife',
    port: 3307,
    password: 'this1ssunr1nlif3',
    database: 'sunrinlife'
});

conn.connect();


app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(express.static('public'));
app.set('view engine','jade');
app.set('views','./views');

app.get('/', function (req, res) {
    res.sendfile('./public/form.html');
})

var id;

app.post('/', function (req, res) {
    var i = 2;
    name = req.body.name;
    description = req.body.description;
    question = (req.body.addText).join();
    var sp = question.split(',');
    id = 'choigod1023'
    var forminfo = {
        'ID':id,
        'name': name,
        'description': description,
        'question': question
    };
    conn.query('insert into form set ?', forminfo, function (err, data, field) {
        if (err) throw err;
    })
    res.redirect('/showform');
})

app.get('/showform',function(req,res){
    id = 'choigod1023'
    console.log(id);
    if(id === undefined){
        res.redirect('/login')
    }
    conn.query('SELECT * from form WHERE ID = ?',id,function(err,data,field){
        console.log(data);
        var d = data[0]
        var name = d.name;
        var description = d.description;
        var question = d.question.split(',');
        res.render('showform',{title:name,description:description,question:question})
    })
})

app.listen(3000, function () {
    console.log('asdf');
})