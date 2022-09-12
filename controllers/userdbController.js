const pool = require("../config/db").pool;
const queries = require ("../queries/usersQueries");


const handleUpdateUserDatabase = async(req,res) =>{
    const {userDatabase,userTableName, email}=req.body;
    if(!userDatabase ||!userTableName ||!email) return res.status(400).json({"message":"email missing"});
    //check if email is exists
    pool.query(queries.checkEmailExists,[email],(error,result) =>{
        if(error) throw error;
        // if Email does not exist
        if(!result.rows.length){
            return res.sendStatus(401);//http forbidden
        }
        // If Email exists  
        try {
        //update database
        pool.query(queries.updateUserDatabase,[userDatabase,userTableName,email],(error,result)=>{
        if(error) throw error;
                res.status(201).json({"success":`database updated`});
            })
        } catch (err) {
            res.status(500).json({"message":err.message})
        }
  
         });
}; 

module.exports = {
   handleUpdateUserDatabase
}


