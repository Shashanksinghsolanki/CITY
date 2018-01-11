var express = require("express");
var app = express();

app.set("view engine","ejs");
app.use(express.static(__dirname+'/public'));

app.get('/', (req, res) => {
  res.render('home.ejs', {
    pageTitle: 'Home Page',
    welcomeMessage: 'Welcome to my website',
    currentYear: new Date().getFullYear()
  });
});
app.get("/about", (req, res) => {
res.render("about.ejs",{Currentyear:new Date().getFullYear(),
                        title:"hi there"});
    //res.send("about page");
});
app.get("/bad",(req,res) => {
    res.send({errormessage:"unable to send the request"});
});
//app.get("/help",(req,res) => {
//    res.render("app.html");
//});
app.listen("3000",()=>{console.log("listening the port 3000")});
