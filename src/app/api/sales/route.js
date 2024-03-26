import { NextResponse } from "next/server";
import { insertSales, selectSales, updateSales, deleteSales } from "../model/sales";

export async function  POST(req, res) {
    try {
        //let  datos = await req.formData()
        const datos = await req.json()
        const result  =  await insertSales(datos) 
        return NextResponse.json(result) 
    } catch (error) {
        return NextResponse.json(error) 
    }
}

export async function  GET(req, res) {
    try {
        const result  = await  selectSales() 
        
        return NextResponse.json(result) 
    } catch (error) {
        console.log(error) 
    }
}

export async function  PUT(req, res) {
    try {
        const result  =  updateSales() 
        return NextResponse.json(result) 
    } catch (error) {
        console.log(error) 
    }
}

export async function  DELETE(req, res) {
    try {
        const result  =  deleteSales() 
        return NextResponse.json(result) 
    } catch (error) {
        console.log(error) 
    }
}