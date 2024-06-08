import mysql2 from "mysql2/promise";

const pool = mysql2.createPool({
    host:"localhost",
    user: "root",
    database: "restaurante",
    password: "Concha2005.",
    port: "3306"
})

export default pool;


