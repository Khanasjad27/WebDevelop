const express = require("express");
const app = express();

let port = 8080;
// for encode post ka responce
app.use(express.urlencoded({extended : true}));
app.use(express.json());


app.listen(port,() =>{
    console.log(`Server is started at port ${port}`);
});
// get request
app.get("/register", (req, res)=>{
    let {user , password} = req.query;  /// coz html hamesha query selector me reponce bheje ga
    res.send(`Standart get Responce <br> Welcome to world of Server ${user}`);
});

// post request
app.post("/register", (req, res)=>{
    let {user , password} = req.body;
    console.log(req.body);
    res.send(`Standart Post Responce <br> Welcome to world of Server ${user}`);
});