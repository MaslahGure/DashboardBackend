const jwt = require("jsonwebtoken");
require("dotenv").config();


const verifyJWT =(req,res, next) =>{
    const authHeader =req.headers.authorization || req.header.Authorization;

    if (!authHeader?.startsWith("Bearer ")) return res.sendStatus(401);
    const token = authHeader.split(' ')[1];
    jwt.verify (
        token,
        process.env.ACCESS_TOKEN_SECRET,
        (err, decodedToken) =>{
            if(err) return res.status(403).json({"message":err.message})//res.sendStatus(403);// invalid token received
            req.username = decodedToken.UserInfo.username;
            req.role = decodedToken.UserInfo.role;
            next();

        }

    );


}

module.exports = verifyJWT;
