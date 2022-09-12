//const pool = require("../../config/db").databaseManagement;
//const setDataBase = require("../../config/db").setDataBase;
const Pool = require('pg').Pool;
require("dotenv").config();



const handleClientData = async(req,res) =>{
 
    const {database,tablename, email}=req.body;
    if(!tablename ||!email) return res.status(400).json({"message":"email missing"});
   
    const user = process.env.PGUSER ;
    const host=  process.env.PGHOST;
    const password= process.env.PASSWORD;
    const port= process.env.PGPORT;
    const pool = new Pool ({
        user:user,
        host:host,
        database:database,
        password: password,
        port: port
    });

    pool.query(`SELECT * FROM ${tablename} LIMIT 60`,(error,result) =>{
        if(error) return res.status(400).json({"message":`${error}`});
        res.status(200).json(result.rows);
    }) 
}; 

module.exports = {
   handleClientData
}
