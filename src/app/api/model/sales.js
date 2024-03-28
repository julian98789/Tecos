import pool from "@/db/MysqlConection";

export const insertSales = async  (data) =>{
    let result =true;
    let error = false
    let sql = null;
    try {
        const {fecha, valor_total, pedido_id, cliente } = data; 
        sql = `INSERT INTO  ventas (fecha, valor_total, pedido_id, cliente) VALUE ('${fecha}', '${valor_total}', '${pedido_id}', '${cliente}' )`; 
          
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
        "preocess": 'insert sales',
        "status": true,
        "result": result,
        "error": error
    }
    return response
}

export const selectSales = async () =>{
    let result =false;
    let error = false
   
    try{
        let sql = 'SELECT  * FROM  ventas'
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
        "preocess": 'select sales',
        "status": true,
        "result": result

    }
    return response
}

export const selectSalesId = async (id) =>{
    let result =false;
    let error = false
    try{
        let sql = `SELECT * FROM ventas WHERE  id  = '${id}'`
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
        "preocess": 'select sales',
        "status": true,
        "result": result

    }
    return response
}


export const updateSales =  async (id,data) =>{
    let status = false;
    let error = false;
    const {valor_total } = data;
    let updates = [];
    for(const campo in data){
        updates.push(`${campo} = '${data[campo]}'`)
    }
    let sql = `UPDATE ventas  SET ${updates.join(', ')} WHERE id = ${id}  `; 
   
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
        "preocess": 'update sales',
        "status": status,
        "error": error,
       
    }
    return response
}

export const deleteSales = async (id) =>{
    console.log(id)
    
    let status = false;
    let error = false
    let sql = `DELETE FROM ventas WHERE  id  = '${id}'`
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
        "preocess": 'delete sales',
        "status": status,
        "error": error
    }
    
    return response;
}
