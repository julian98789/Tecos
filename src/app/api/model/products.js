import pool from "@/db/MysqlConection";

import fs from 'fs';
import path from 'path';

export const insertProducts = async (data) => {
    let result = true;
    let error = null;
    let sql = null;

    try {
        const { nombre, descripcion, categoria, imagen, precio } = data;

        // Guardar la imagen en el directorio 'uploads'
        const timestamp = Date.now();
        const nombreImagen = `${timestamp}_${nombre}.jpeg`; // Cambia el nombre de la imagen según tus necesidades
        const rutaImagen = path.join(__dirname, `../../../../../public/img/menu/${nombreImagen}`);
        const imagenBuffer = Buffer.from(imagen.split(',')[1], 'base64'); // Decodificar la imagen desde base64
        

        // Generar la URL de la imagen
        const urlImagen = `/img/menu/${nombreImagen}`;

        // Insertar los datos en la base de datos
        sql = `INSERT INTO productos (nombre, descripcion, categoria, imagen, precio) VALUES ('${nombre}', '${descripcion}', '${categoria}', '${urlImagen}', '${precio}')`;
        await pool.query(sql);
        fs.writeFileSync(rutaImagen, imagenBuffer);
    } catch (err) {
        result = false;
        error = {
            sql: sql,
            description: err.message, // Usar 'err.message' en lugar de 'err'
        };
        console.log(error);
    }

    let response = {
        process: 'insert products',
        status: true,
        result: result,
        error: error
    };
    return response;
};



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

export const selectProductsCategory = async (categoria) =>{
    let result =false;
    let error = false
    try{
        let sql = `SELECT * FROM productos WHERE  categoria  = '${categoria}'`
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


export const updateProducts =  async (id,data) =>{
    let status = false;
    let error = false;
    let updates = [];
    for(const campo in data){
        updates.push(`${campo} = '${data[campo]}'`)
    }
    let sql = `UPDATE productos SET ${updates.join(', ')} WHERE id = ${id}  `; 
 
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
        "preocess": 'update products',
        "status": status,
        "error": error,
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




