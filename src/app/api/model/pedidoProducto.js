import pool from "@/db/MysqlConection";

export const selecPedidoProducto = async () =>{
    let result =false;
    let error = false
   
    try{
        let sql = 'SELECT  * FROM  pedido'
        let [rows] = await pool.query(sql);
        result =rows
    }catch (err){
        error = {
            "sql" : sql,
            "description": err
        }
        console.log(error)  
    }
    let response = {
        "preocess": 'select order',
        "status": true,
        "result": result

    }
    return response
}