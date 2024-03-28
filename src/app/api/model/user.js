import pool from "@/db/MysqlConection";

export const insertUser = async  (data) =>{
    let result =true;
    let error = false
    let sql = null;
    try {
        const {cedula, nombre, apellido, correo, password, rol } = data; 
        let sql = `INSERT INTO  usuarios (cedula, nombre, apellido, correo, password, rol) VALUES ('${cedula}', '${nombre}', '${apellido}', '${correo}','${password}', '${rol}'  )`;   
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
        "preocess": 'insert user',
        "status": true,
        "result": result,
        "error": error
    }
    return response
}
export const selectUser = async () =>{
    let result =false;
    let error = false
   
    try{
        let sql = 'SELECT  * FROM  usuarios'
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
        "preocess": 'select user',
        "status": true,
        "result": result

    }
    return response
}

export const selectUserId = async (cedula) =>{
    let result =false;
    let error = false
    try{
        let sql = `SELECT * FROM usuarios WHERE  cedula  = '${cedula}'`
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
        "preocess": 'select user',
        "status": true,
        "result": result

    }
    return response
}

export const updateUser =  async (id,data) =>{
    let status = false;
    let error = false;
    let updates = [];
    for(const campo in data){
        updates.push(`${campo} = '${data[campo]}'`)
    }
    let sql = `UPDATE usuarios  SET   ${updates.join(', ')} WHERE cedula = ${id}  `; 
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
        "preocess": 'update user',
        "status": status,
        "error": error
    }
    return response
}

export const deleteUser = async (cedula) =>{
    console.log(cedula)
    
   let status = false;
    let error = false
    let sql = `DELETE FROM usuarios WHERE  cedula  = '${cedula}'`
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
        "preocess": 'delete user',
        "status": status,
        "error": error
    }
    
    return response;
}