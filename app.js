var app = require('express')();

app.get('/',function(req,res){
    res.sendfile('./public/form.html');
})

app.listen(3000,function(){
    console.log('asdf');
})