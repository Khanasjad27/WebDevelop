// requireing express n ejs
const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));


// Connection building
// Get the client
const mysql = require("mysql2");

// Create the connection to database
const connection =  mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password: 'Khanasjad_27',
});
// Randon Data Generate
const { faker } = require('@faker-js/faker');

let   getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password(),
  ];
};


// humne jo upar connection banaya hai usme ek query naaam ka fu hai usko use karre hai
// try{
//     connection.query("SHOW TABLEs", (err,result)=>{
//         if(err) throw err;
//         console.log(result);
//     });
// }catch(err){
//     console.log(err);
// };

//INSERT USER
// let q = "INSERT INTO user (id, name, email, password) VALUES ?";
// let data = [];
// for(let i=1;i<=100;i++){
//   data.push(getRandomUser());
// }

// try{
//     connection.query(q,[data], (err,result)=>{
//         if(err) throw err;
//         console.log(result);
//     });
// }catch(err){
//     console.log(err);
// };
// connection.end();

// root 
app.get("/" ,(req,res) =>{
  q = "SELECT count(*) FROM user";
  try{
    connection.query(q, (err,result)=>{
        if(err) throw err;
        let count = result[0]["count(*)"];
        res.render("home.ejs" , {count});
    });
  }catch(err){
    console.log(err);
    res.send("Random error happen");
  };
});

// FOR ALL DATAS
app.get("/user", (req,res) =>{
  q = "SELECT * FROM user";
  try{
    connection.query(q, (err,users)=>{
        if(err) throw err;
        res.render("user.ejs", { users });
    });
  }catch(err){
    console.log(err);
    res.send("Random error happen");
  };
});

app.listen("8080" , () =>{
  console.log("Server is Started");
});