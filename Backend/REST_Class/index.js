const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
// for random id generation
const { v4: uuidv4 } = require('uuid');


// for form to send in another req (other then get n post)
const methodOverride = require('method-override'); 
// override with POST having ?_method=(any req u want)
app.use(methodOverride('_method'));

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
        id : uuidv4(),
        username : "Asjad Khan",
        content : "I love Coding "
    },
    {
        id : uuidv4(),
        username : "Aqsa Khan",
        content : "I love Using mobile"
    },
    {
        id : uuidv4(),
        username : "Ramu ",
        content : "I love Creating"
    }
];

// for main
app.get("/posts", (req, res) =>{
    res.render("index.ejs" , {posts});
    // res.redirect("/posts/new");
});

//To add new Content / Div
// form banaya hai n usko render karre hai
app.get("/posts/new", (req,res) =>{
    res.render("new.ejs");
});
// now after creation of form we will send this form post req
// yaha pe humne post use kiya coz hame password n username sharing waala form banaya hai
app.post("/posts", (req,res) => {
    let {username , content} = req.body;
    let id = uuidv4();
    posts.push({id,username,content});
    res.redirect("/posts");
});

// Now for specific post using id
app.get("/posts/:id",(req,res)=>{
    let {id} = req.params;
    let post = posts.find((p)=>id === p.id);
    if(post){
        res.render("show.ejs" ,{post});
    }else{
        res.send("NOT FOUND");
    }
});

// For Editing the Content
app.patch("/posts/:id", (req,res)=>{
    let {id} = req.params;
    let newContent = req.body.content;
    let post = posts.find((p)=>id === p.id);
    post.content = newContent;
    console.log(post);
    res.redirect("/posts");
});
//upar jo humne kiya wo humko hoppscotch me jaake edit karna hoga lakin anchor tag/button add karege jisse web pe edit hoga
app.get("/posts/:id/edit" , (req,res)=>{
    let {id} = req.params;
    let post = posts.find((p)=>id === p.id);
    res.render("edit.ejs",{post});

});

// for Deleting Post
app.delete("/posts/:id", (req, res)=>{
    let {id} = req.params;
    posts = posts.filter((p)=>id !== p.id);
    res.redirect("/posts")
});

app.listen(port, () =>{
    console.log(`${port} is listining`);
});