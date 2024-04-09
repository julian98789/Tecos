import pool from "@/db/MysqlConection";

export const insertOrder = async (data) => {
    let result = true;
    let error = false;
    let sql1 = null;
    let sql2 = null;
    let pedidoId = null;
    let resultPedidoId = null;
  
    try {
        const {productos, valor_total, estado, mesa_id ,valor_pagado} = data;

        // Primero, insertamos en la tabla pedido
        sql1 = `INSERT INTO pedido ( valor_total, fecha, hora, estado, mesa_id,valor_pagado)
                VALUES
                ( ${valor_total}, CURDATE(), CURTIME(), '${estado}', ${mesa_id},${valor_pagado})`;
               
         await pool.query(sql1);
        
         resultPedidoId = 'SELECT LAST_INSERT_ID() as pedido_id';
         pedidoId = await pool.query(resultPedidoId);
         pedidoId = pedidoId[0][0].pedido_id;
         
        productos.forEach(async (producto) => {
            const { id_producto, cantidad_producto, valor_unitario } = producto;
        sql2 = `INSERT INTO pedido_producto (id_pedido, id_producto, cantidad_producto, valor_unitario)
                VALUES
                (${pedidoId}, ${id_producto}, ${cantidad_producto}, ${valor_unitario})`;

        await pool.query(sql2);
        
    });
    } catch (err) {
        result = false;
        error = {
            "sql1": sql1,
            "sql2": sql2,
            "description": err
        };
        console.log(error)
        console.log(data);
    }

    let response = {
        "process": 'insert order',
        "status": true,
        "result": result,
        "error": error,
        pedidoId
    };

    return response;
};


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

