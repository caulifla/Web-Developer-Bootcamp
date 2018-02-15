var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/camp_base');

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

var schema = new mongoose.Schema({
   name: String,
   image: String,
   info: String
});

var Campground = mongoose.model("Campground", schema);

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
    Campground.find({}, function(err, campgrounds){
        if(err) console.log(err);
        else res.render("index", {campgrounds: campgrounds});
    })
});

app.post("/campgrounds", function(req, res){
    if (!(req.body.name === '' || req.body.image === '')) {
        Campground.create({name: req.body.name, image: req.body.image, info: req.body.info}, function(err, campground) {
            if(err) console.log(err);
            else res.redirect("campgrounds");
        });
    }
    else res.redirect("campgrounds");
})

app.get("/campgrounds/new", function(req, res){
    res.render("new");
});

app.get("/campgrounds/:id", function(req, res){
    Campground.FindById(req.params.id, function(err, foundCampground){
        if(err) console.log(err);
        else res.render("show", {campground: foundCampground});
    });
});

app.listen(3000, 'localhost', function(){
   console.log("YelpCamp is online!") 
});