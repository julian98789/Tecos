import { NextResponse } from "next/server";
import { insertTable, selectTable, updateTable, deleteTable } from "../model/table";

export async function  POST(req, res) {
    try {
        //let  datos = await req.formData()
        const datos = await req.json()
        const result  =  await insertTable(datos) 
        return NextResponse.json(result) 
    } catch (error) {
        return NextResponse.json(error) 
    }
}

export async function  GET(req, res) {
    try {
        const result  =  await selectTable() 
        return NextResponse.json(result) 
    } catch (error) {
        console.log(error) 
    }
}

export async function  PUT(req, res) {
    try {
        const result  =  updateTable() 
        return NextResponse.json(result) 
    } catch (error) {
        console.log(error) 
    }
}

export async function  DELETE(req, res) {
    try {
        const result  =  deleteTable() 
        return NextResponse.json(result) 
    } catch (error) {
        console.log(error) 
    }
}