var express = require("express");
var app = express();
var port =process.env.PORT  ||3000;
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
app.listen(port,()=>{console.log(`listening the port ${port}`)});
