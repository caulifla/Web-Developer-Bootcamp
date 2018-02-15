var express = require("express");
var app = express();

app.get("/", function(req, res) {
    res.send("Hi there! Welcome to my assignment!");
});

app.get("/speak/:animalName", function(req, res) {
    switch (req.params.animalName.toLowerCase()) {
        case 'pig':
            res.send("The pig says 'Oink'");
            break;
        case 'cow':
            res.send("The cow says 'Moo'");
            break;
        case 'dog':
            res.send("The dog says 'Woof Woof!'");
            break;
        case 'cat':
            res.send("The cat says 'Meow!'");
            break;
        case 'sheep':
            res.send("The sheep says 'Baa!'");
            break;
        default:
            res.send("I can't speak. Sorry!")
    }
});

app.get("/repeat/:string/:times", function(req, res) {
    res.send(req.params.string.concat(' ').repeat(req.params.times).trim());
});

app.get("*", function(req, res) {
   res.send("Sorry, page not found...What are you doing with your life?");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server is online!");
});