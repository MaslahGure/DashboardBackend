const Pool = require('pg').Pool;
require("dotenv").config();


const pool = new Pool ({
    user: "yrqlyhshynzkpq",
    host: "ec2-3-208-79-113.compute-1.amazonaws.com",
    database: "d6l9audmocvpvk",
    password: "f3aef7a0ac40795904abd36b8c9cbeb6792525f3e1f812718160acf045aa209f",
    port: "5432"
});

module.exports = pool;


//postgres://yrqlyhshynzkpq:f3aef7a0ac40795904abd36b8c9cbeb6792525f3e1f812718160acf045aa209f@ec2-3-208-79-113.compute-1.amazonaws.com:5432///d6l9audmocvpvk
//process.env.PGUSER ||
// process.env.PGHOST || 
//process.env.PGDATABASE ||
//process.env.PASSWORD ||
//process.env.PGPORT ||