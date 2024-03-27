import { NextResponse } from "next/server";
import { selectUserId, deleteUser } from "../../model/user";

export async function  GET(req, {params}) {
    try {
        let result  = await selectUserId(params.id); 
        return NextResponse.json(result) 
    } catch (error) {
        console.log(error) 
    } 
}

export async function  DELETE(req, {params}) {
    try {
        const result  = await deleteUser(params.id) 
        return NextResponse.json(result) 
    } catch (error) {
        console.log(error) 
    }
}