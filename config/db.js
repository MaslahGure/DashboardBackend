const Pool = require('pg').Pool;
require("dotenv").config();


const pool = new Pool ({
    user: process.env.PGUSER || "yrqlyhshynzkpq",
    host:  process.env.PGHOST || "ec2-3-208-79-113.compute-1.amazonaws.com:5432",
    database: process.env.PGDATABASE || "d6l9audmocvpvk",
    password:  process.env.PASSWORD || "f3aef7a0ac40795904abd36b8c9cbeb6792525f3e1f812718160acf045aa209f",
    port:  process.env.PGPORT || "5432"
});

module.exports = pool;


//postgres://yrqlyhshynzkpq:f3aef7a0ac40795904abd36b8c9cbeb6792525f3e1f812718160acf045aa209f@ec2-3-208-79-113.compute-1.amazonaws.com:5432///d6l9audmocvpvk