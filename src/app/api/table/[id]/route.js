import { NextResponse } from "next/server";
import { selectTableId, deleteTable, updateTable } from "../../model/table";

export async function  GET(req, {params}) {
    try {
        let result  = await selectTableId(params.id); 
        return NextResponse.json(result) 
    } catch (error) {
        console.log(error) 
    } 
}

export async function  PUT(req,  {params}) {
    const data = await req.json()
    try {
        const result  = await updateTable(params.id,data) 
        return NextResponse.json(result) 
    } catch (error) {
        console.log(error) 
    }
}

export async function  DELETE(req, {params}) {
    try {
        const result  = await deleteTable(params.id) 
        return NextResponse.json(result) 
    } catch (error) {
        console.log(error) 
    }
}