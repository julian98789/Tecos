import pool from "@/db/MysqlConection";

export const insertTable = async  (data) =>{
    let result =true;
    let error = false
    try {
        const { descripcion } = data; 
        let sql = `INSERT INTO  mesa (descripcion) VALUE ('${descripcion}' )`;   
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
        "preocess": 'insert table',
        "status": true,
        "result": result,
        "error": error
    }
    return response
}

export const selectTable = async () =>{
    let result =true;
    let error = false
    let sql = 'SELECT  * FROM  mesa'
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
        "preocess": 'select table',
        "status": true,
        "result": result,
        "result": rows
    }
    return response
}


export const updateTable = () =>{
    let response = {
        "preocess": 'update table',
        "status": true
    }
    return response
}

export const deleteTable = () =>{
    let response = { 
        "preocess": 'delete table',
        "status": true
    }
    return response
}