const Pool = require('pg').Pool;
require("dotenv").config();

// user Login
const pool = new Pool ({
    user:process.env.PGUSER ,
    host:  process.env.PGHOST,
    database:process.env.PGDATABASE,
    password: process.env.PASSWORD,
    port: process.env.PGPORT
});

// user database management
/* 
const user = process.env.PGUSER ;
const host=  process.env.PGHOST; 
let database;
const password= process.env.PASSWORD;
const port= process.env.PGPORT;

function setDataBase (newDatabase){
    let database = newDatabase;
    
    return
   
}
console.log(database)
const databaseManagement = new Pool ({
    user:user,
    host:host,
    database:database,
    password: password,
    port: port
}); */

module.exports ={
     pool,
   /*  databaseManagement,
     setDataBase */
}