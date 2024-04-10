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

export const selectOrder = async () => {
    let result = false;
    let error = false;
   
    try {
        let sql = `
        SELECT p.id AS pedido_id, p.valor_pagado, p.valor_total, p.fecha, p.hora, p.estado AS estado_pedido,
        m.id AS mesa_id, m.descripcion AS mesa_descripcion, m.estado AS estado_mesa,
        GROUP_CONCAT(pp.id_producto) AS id_productos,
        GROUP_CONCAT(pp.cantidad_producto) AS cantidades_productos,
        GROUP_CONCAT(pp.valor_unitario) AS valores_unitarios,
        GROUP_CONCAT(pr.nombre) AS nombres_productos,
        GROUP_CONCAT(pr.descripcion) AS descripciones_productos,
        GROUP_CONCAT(pr.categoria) AS categorias_productos,
        GROUP_CONCAT(pr.precio) AS precios_productos
 FROM pedido p
 JOIN pedido_producto pp ON p.id = pp.id_pedido
 JOIN productos pr ON pp.id_producto = pr.id
 JOIN mesa m ON p.mesa_id = m.id
 GROUP BY p.id;
        `;
        let [rows] = await pool.query(sql);
        result = rows;
    } catch (err) {
        error = {
            "sql": sql,
            "description": err
        };
        console.log(error);
    }
    
    let response = {
        "process": 'select order',
        "status": true,
        "result": result
    };
    
    return response;
};

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

