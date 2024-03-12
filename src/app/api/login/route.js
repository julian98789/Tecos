import { NextResponse } from "next/server";
import pool from "@/db/MysqlConection";

export async function  POST(req, res) {
    let  datos = await req.json()
    const {user , pass} = datos

    let sql = `SELECT  * FROM  usuarios WHERE  correo = '${user}' AND password = '${pass}' `;
    
    try {
        let [rows] = await pool.query(sql)
        return NextResponse.json(rows)
    } catch (error) {
        console.log(error)
    }
    
}