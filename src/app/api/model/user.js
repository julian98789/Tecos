import pool from "@/db/MysqlConection";

export const insertUser = () =>{
    let response = {
        "preocess": 'insert user',
        "status": true
    }
    return response
}

export const selectUser = () =>{
    let response = {
        "preocess": 'select user',
        "status": true
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