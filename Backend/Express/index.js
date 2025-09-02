const express = require("express");
const app = express();

let port = 8080;
app.listen(port, ()=>{
    console.log(`app is lisning ${port}`);
});


// use of app.use 
// app.use((req,res) => {
//     // res.send("This is my first responce");
//     // res.send({
//     //     name: "apple",
//     //     color : "red",
//     // });
//     // console.log("Request Recived");

//     let code = "<h1>Fruits</h1> <ul>apple</ul> <ul>mango</ul>";
//     res.send(code);
// });


// use of app.get
app.get("/",(req,res)=>{
    res.send("hello, i am root");
});

// app.get("/apple",(req,res)=>{
//     res.send("You are at apple path");
// });

// app.get("/orange",(req,res)=>{
//     res.send("You are at orange path");
// });

// app.get("/*" , (req,res)=>{
//     res.send("Invalid path");
// });

// path parameter
app.get("/:username/:id",(req,res)=>{
    let {username,id} = req.params;
    res.send(`Welcome, to my page <h1>${username} </h1> your id is <h1>${id} </h1>`);
});


app.get("/search",(req,res)=>{
    let {q} = req.query;
    if(!q){
       res.send("Nothing Search") ;
    }
    res.send(`Search result for query: ${q}`);
    
});

