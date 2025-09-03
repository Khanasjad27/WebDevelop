const express = require("express");
const app = express();
const path = require("path");
let port = 8080;

// to connect public folder
// app.use(express.static("public"));

// define path if trying to run from parent folder for views
app.use(express.static(path.join(__dirname, "/public/js")));
app.use(express.static(path.join(__dirname, "/public/css")));
// define path if trying to run from parent folder for views
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
// app.get("/ig/:username" , (req, res)=>{
//     let follower = ["alex" , "streave", "job"];
//     let { username } = req.params;
//     res.render("Insta.ejs",{ username , follower });
// });


// insta Landing page if we get data from data base
// we had copy code this is given in cource n created a file called as data.json

app.get("/ig/:username", (req,res) =>{
    let { username } = req.params;
    const instaData = require("./data.json");
    const data = instaData[username]; 
    
    if(data){
        res.render("insta.ejs", { data });
    }else{
        res.render("error.ejs");
    } 
});



