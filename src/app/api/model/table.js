import pool from "@/db/MysqlConection";

export const insertTable = () =>{
    let response = {
        "preocess": 'insert table',
        "status": true
    }
    return response
}

export const selectTable = () =>{
    let response = {
        "preocess": 'select table',
        "status": true
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