import pool from "@/db/MysqlConection";

export const insertSales = () =>{
    let response = {
        "preocess": 'insert sales',
        "status": true
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