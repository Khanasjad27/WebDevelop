// Connection building
// Get the client
import mysql from 'mysql2/promise';

// Create the connection to database
const connection = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password: 'Khanasjad_27',
});
// Randon Data Generate
const { faker } = require('@faker-js/faker');

let   getRandomUser = () => {
  return {
    id: faker.string.uuid(),
    username: faker.internet.username(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
};


try{
    connection.query("SHOW TABLE", (err,result)=>{
        if(err) throw err;
        console.log(result);
    });
}catch(err){
    console.log(err);
};

console.log(getRandomUser());