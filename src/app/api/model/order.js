import pool from "@/db/MysqlConection";

export const insertOrder = () =>{
    let response = {
        "preocess": 'insert order',
        "status": true
    }
    return response
}

export const selectOrder = () =>{
    let response = {
        "preocess": 'select order',
        "status": true
    }
    return response
}


export const updateOrder = () =>{
    let response = {
        "preocess": 'update order',
        "status": true
    }
    return response
}

export const deleteOrder = () =>{
    let response = { 
        "preocess": 'delete order',
        "status": true
    }
    return response
}