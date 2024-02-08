var express = require('express')

var etudiant = {id:1, nom:'toto', prenom:'tintin'}
app.get("/etudiant", function(req,res){
    res.send(etudiant);
})

app.listen(80, function(){
    console.log("started at port 3000")
})