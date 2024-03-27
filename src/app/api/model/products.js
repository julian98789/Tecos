import pool from "@/db/MysqlConection";

export const insertProducts = async  (data) =>{
    let result =true;
    let error = false
    try {
        const {nombre, descripcion, categoria, imagen, precio } = data; 
        let sql = `INSERT INTO  productos (nombre, descripcion, categoria, imagen, precio) VALUE ('${nombre}', '${descripcion}', '${categoria}', '${imagen}' , '${precio}')`;   
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
        "preocess": 'insert products',
        "status": true,
        "result": result,
        "error": error
    }
    return response
}

export const selectProducts = async () =>{
    let result =false;
    let error = false
   
    try{
        let sql = 'SELECT  * FROM  productos'
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
        "preocess": 'select products',
        "status": true,
        "result": result

    }
    return response
}

export const selectProductsId = async (id) =>{
    let result =false;
    let error = false
    try{
        let sql = `SELECT * FROM productos WHERE  id  = '${id}'`
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
        "preocess": 'select products',
        "status": true,
        "result": result

    }
    return response
}


export const updateProducts = () =>{
    let response = {
        "preocess": 'update products',
        "status": true
    }
    return response
}

export const deleteProducts = async (id) =>{
    console.log(id)
    
    let status = false;
    let error = false
    let sql = `DELETE FROM productos WHERE  id  = '${id}'`
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
        "preocess": 'delete products',
        "status": status,
        "error": error
    }
    
    return response;
}




