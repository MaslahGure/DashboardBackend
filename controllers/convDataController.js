const pool = require("../config/db").pool;
const queries = require ("../queries/convDataQueries")



const handleConvData = async(req,res) =>{
        const {queryTime} = req.body;
        if(!queryTime) return sendStatus(400);
        console.log(`query time = ${queryTime?.startDate}`)
        pool.query(queries.getConveyorDataByTime,[queryTime?.startDate,queryTime?.endDate],(error,result) =>{
            if(error) throw error;
            res.status(200).json(result.rows);
        }) 
   
}

const handleConvStat = async(req,res) =>{
    pool.query(queries.getConvstat, (error,result) =>{
        if(error) throw error;
        res.status(200).json(result.rows);
    })
};

module.exports = {
    handleConvData,
    handleConvStat,
};