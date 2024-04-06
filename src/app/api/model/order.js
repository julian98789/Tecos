import pool from "@/db/MysqlConection";

export const insertOrder = async  (data) =>{
    let result =true;
    let error = false
    let sql = null
    let sql2 = null
    try {
        const {unidad_producto, valor_unitario, valor_total, estado,id_producto, mesa_id,cantida_producto } = data; 
        sql = `INSERT INTO pedido (unidad_producto, valor_total, fecha, hora, estado, mesa_id)
        VALUES
            (${unidad_producto},${valor_total}, CURDATE(), CURTIME(), ${estado}, ${mesa_id})`;
        
        sql2=`INSERT INTO pedido_producto (id_pedido, id_producto,cantidad_producto,valor_unitario)
        VALUES
            (1, ${id_producto},1,${valor_unitario}),  -- Producto con ID 1
            (1, ${id_producto},1,${valor_unitario}),  -- Producto con ID 2
            (1, ${id_producto},2,${valor_unitario});  -- Producto con ID 3`

        await pool.query(sql,sql2);
        
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


export const updateOrder =  async (id,data) =>{
    let status = false;
    let error = false;
    let updates = [];
    for(const campo in data){
        updates.push(`${campo} = '${data[campo]}'`)
    }
    let sql = `UPDATE pedido  SET ${updates.join(', ')} WHERE id = ${id}  `; 
    try {  
        await pool.query(sql);
        status = true
    } catch (err) {
        result= false;
        error = {
            "sql" : sql,
            "description": err
        }
    }
    let response = {
        "preocess": 'update order',
        "status": status,
        "error": error
    }
    return response
}

export const deleteOrder = async (id) =>{
    console.log(id)
    
    let status = false;
    let error = false
    let sql = `DELETE FROM pedido WHERE  id  = '${id}'`
    try{
        
        await pool.query(sql);
        status = true
    }catch (err){
        error = {
            "sql" : sql,
            "description": err
        }
    }
    
    let response = {
        "preocess": 'delete order',
        "status": status,
        "error": error
    }
    
    return response;
}

