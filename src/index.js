const express = require("express");
const app = express();
const path = require("path")
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
app.listen(app.get("port"),()=>{
    console.log("Server Works",app.get("port"))
})