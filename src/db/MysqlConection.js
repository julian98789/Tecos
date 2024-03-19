import mysql2 from "mysql2/promise";

const pool = mysql2.createPool({
    host:"roundhouse.proxy.rlwy.net",
    user: "root",
    database: "railway",
    password: "dG2Db3CCEfFbBGfCA6Ac634B2cB1hHCA",
    port: "58740"
})

export default pool;