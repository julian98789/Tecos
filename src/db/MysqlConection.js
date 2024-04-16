import mysql2 from "mysql2/promise";

const pool = mysql2.createPool({
    host:"monorail.proxy.rlwy.net",
    user: "root",
    database: "railway",
    password: "njTJuzlIXYsmDbmQyNksNpoGvQuHcmsm",
    port: "19848"
})

export default pool;


