import pool from "@/db/MysqlConection";

export const insertOrder = async  (data) =>{
    let result =true;
    let error = false
    let sql = null
    try {
        const {unidad_producto, valor_unitario, valor_total, fecha, hora, estado, producto_id, mesa_id } = data; 
        sql = `INSERT INTO  pedido (unidad_producto, valor_unitario, valor_total, fecha, hora, estado, producto_id, mesa_id ) 
        VALUE ('${unidad_producto}', '${valor_unitario}', '${valor_total}', '${fecha}','${hora}','${estado}', '${producto_id}','${mesa_id}' )`;   
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

export const selectOrderId = async (id) =>{
    let result =false;
    let error = false
    try{
        let sql = `SELECT * FROM pedido WHERE  id  = '${id}'`
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