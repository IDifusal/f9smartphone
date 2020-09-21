const express = require("express");
const router = express.Router();

router.get("/",(req,res)  =>{
    res.render("index.html",{marca:"Xiomi RedMi9"});
});
router.get("/catalogo",(req,res)  =>{
    res.render("catalogo.html",{tienda:"F9 SmartMobile"});
});

module.exports = router;