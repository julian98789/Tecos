import pool from "@/db/MysqlConection";

export const insertSales = async  (data) =>{
    let result =true;
    let error = false
    try {
        const {fecha, valor_total, cliente  } = data; 
        let sql = `INSERT INTO  ventas (fecha, valor_total, cliente ) VALUE ('${fecha}',  '${valor_total}', '${cliente}' )`;   
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

export const selectSales = () =>{
    let response = {
        "preocess": 'select sales',
        "status": true
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