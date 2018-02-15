var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get("/", function(req, res){
   res.render("home");
});

app.get("/friends", function(req, res){
   res.render("friends", {friends: ["Will", "Maxine", "El", "Dustin", "Lucas", "Mike", "Jonathan", "Nancy"]});
});

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Server is online!"); 
});