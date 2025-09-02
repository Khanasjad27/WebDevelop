const express = require("express");
const app = express();
const path = require("path");

let port = 3000;
// define path if trying to run from parent folder
app.set("views",path.join(__dirname, "/views"));

app.set("view engine","ejs");


// created a server
app.listen(port,()=>{
    console.log(`listning on port ${port}`);
});


// for home page
app.get("/",(req,res)=>{
    res.render("home.ejs");
});
// for dice
app.get("/dice",(req,res)=>{
    let random = Math.floor(Math.random() * 6) + 1
    res.render("rolldice.ejs",{random});
});

// for insta landing page jo maine banaya hai
app.get("/ig/:username" , (req, res)=>{
    let follower = ["alex" , "streave", "job"];
    let { username } = req.params;
    res.render("Insta.ejs",{ username , follower });
});



