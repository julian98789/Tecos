import pool from "@/db/MysqlConection";

export const insertOrder = async  (data) =>{
    let result =true;
    let error = false
    let sql = null
    try {
        const {unidad_producto, valor_unitario, valor_total, fecha, hora, estado, producto_id, mesa_id } = data; 
        sql = `INSERT INTO  pedido (unidad_producto, valor_unitario, valor_total, fecha, hora, estado, producto_id, mesa_id ) VALUE ('${unidad_producto}', '${valor_unitario}', '${valor_total}', '${fecha}','${hora}','${estado}', '${producto_id}','${mesa_id}' )`;   
        await pool.query(sql);
        
    } catch (err) {
        result= false;
        error = {
            "sql" : sql,
            "description": err
        }
        console.log(error)  
    }
    let response = {
        "preocess": 'insert order',
        "status": true,
        "result": result,
        "error": error
    }
    return response
}

export const selectOrder = async () =>{
    let result =true;
    let error = false
    let sql = 'SELECT  * FROM  pedido'
    let [rows] = await pool.query(sql);
    try{
        
        console.log(rows)
    }catch (err){
        result= false;
        error = {
            "sql" : sql,
            "description": err
        }
        console.log(error)  
    }
    let response = {
        "preocess": 'select order',
        "status": true,
        "result": result,
        "result": rows
    }
    return response
}


export const updateOrder = () =>{
    let response = {
        "preocess": 'update order',
        "status": true
    }
    return response
}

export const deleteOrder = () =>{
    let response = { 
        "preocess": 'delete order',
        "status": true
    }
    return response
}