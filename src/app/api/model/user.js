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


export const updateUser = () =>{
    let response = {
        "preocess": 'update user',
        "status": true
    }
    return response
}

export const deleteUser = () =>{
    let response = { 
        "preocess": 'delete user',
        "status": true
    }
    return response
}