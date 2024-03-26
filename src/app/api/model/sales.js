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
    let result =true;
    let error = false
    let sql = 'SELECT  * FROM  ventas'
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
        "preocess": 'select sales',
        "status": true,
        "result": result,
        "result": rows
    }
    return response
}


export const updateSales = () =>{
    let response = {
        "preocess": 'update sales',
        "status": true
    }
    return response
}

export const deleteSales = () =>{
    let response = { 
        "preocess": 'delete sales',
        "status": true
    }
    return response
}