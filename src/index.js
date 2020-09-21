const express = require("express");
const app = express();
const path = require("path")

const host = '0.0.0.0';
const port = process.env.PORT || 3000;
//Settings
app.set("port",4000);
app.set("views",path.join(__dirname,"views"));
app.engine("html",require("ejs").renderFile);
app.set("view engine","ejs");
//routes
app.use(require("./routes/index"));
//midlewares

//static files
app.use(express.static(path.join(__dirname,"public")))
//Server listeing
app.listen(port, host, function() {
    console.log("Server started.......");
  });