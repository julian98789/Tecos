import pool from "@/db/MysqlConection";

export const insertOrder = async  (data) =>{
    let result =true;
    let error = false
    try {
        const {unidad_producto, valor_unitario, valor_total, estado } = data; 
        let sql = `INSERT INTO  pedido (unidad_producto, valor_unitario, valor_total, estado) VALUE ('${unidad_producto}', '${valor_unitario}', '${valor_total}', '${estado}' )`;   
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

export const selectOrder = () =>{
    let response = {
        "preocess": 'select order',
        "status": true
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