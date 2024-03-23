import pool from "@/db/MysqlConection";

export const insertProducts =  (data) =>{
    console.log(data)
    let response = {
        "preocess": 'insert products',
        "status": true
    }
    return response
}

export const selectProducts = () =>{
    let response = {
        "preocess": 'select products',
        "status": true
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

export const deleteProducts = () =>{
    let response = { 
        "preocess": 'delete products',
        "status": true
    }
    return response
}




/*
insert 
select 
Id
all

update 
all
parcial

delete

*/