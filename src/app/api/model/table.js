import pool from "@/db/MysqlConection";

export const insertTable = async  (data) =>{
    let result =true;
    let error = false
    try {
        const { descripcion, estado } = data; 
        let sql = `INSERT INTO  mesa (descripcion, estado) VALUES ('${descripcion}', '${estado}')`;  
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
    let result =false;
    let error = false
   
    try{
        let sql = 'SELECT  * FROM mesa'
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
        "preocess": 'select table',
        "status": true,
        "result": result

    }
    return response
}

export const selectTableId = async (id) =>{
    let result =false;
    let error = false
    try{
        let sql = `SELECT * FROM mesa WHERE  id  = '${id}'`
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
        "preocess": 'select table',
        "status": true,
        "result": result

    }
    return response
}

export const updateTable =  async (id,data) =>{
    let status = false;
    let error = false;
    let updates = [];
    for(const campo in data){
        updates.push(`${campo} = '${data[campo]}'`)
    }
    let sql = `UPDATE mesa  SET  ${updates.join(', ')} WHERE id = ${id}  `; 
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
        "preocess": 'update table',
        "status": status,
        "error": error
    }
    return response
}

export const deleteTable = async (id) =>{
    console.log(id)  
    let status = false;
    let error = false
    let sql = `DELETE FROM mesa WHERE  id  = '${id}'`

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
        "preocess": 'delete table',
        "status": status,
        "error": error
    }
    
    return response;
}

