const express = require("express");
const app = express();

let port = 8080;
app.listen(port, ()=>{
    console.log(`app is lisning ${port}`);
});

app.use((req,res) => {
    console.log("Request Recived");
});