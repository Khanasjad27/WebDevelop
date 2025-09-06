const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
// for encoded data

app.use(express.urlencoded({extended : true}));
// for view
app.set("view engine", "ejs");
app.set("views",path.join(__dirname, "/views"));
// for public
app.use(express.static(path.join(__dirname, "/public")));

// Database nhi hai isliya array bana rahe hai 
// this will act as DATA base for us
let posts = [
    {
        username : "Asjad Khan",
        content : "I love Coding "
    },
    {
        username : "Aqsa Khan",
        content : "I love Using mobile"
    },
    {
        username : "Ramu ",
        content : "I love Creating"
    }
];

// for main
app.get("/posts", (req, res) =>{
    res.render("index.ejs" , {posts});
});

//To add new Content / Div
// form banaya hai n usko render karre hai
app.get("/posts/new", (req,res) =>{
    res.render("new.ejs");
});
// now after creation of form we will send this form post req
app.post("/posts", (req,res) => {
    let {username , content} = req.body;
    posts.push({username,content});
    res.redirect("/posts")
});













































app.listen(port, () =>{
    console.log(`${port} is listining`);
});