import { NextResponse } from "next/server";
import { insertProducts, selectProducts, updateProducts, deleteProducts } from "../model/products";

export async function  POST(req, res) {
    try {
        //let  datos = await req.formData()
        const datos = await req.json()
        const result  =  await insertProducts(datos) 
        return NextResponse.json(result) 
    } catch (error) {
        return NextResponse.json(error) 
    }
}

export async function  GET(req, res) {
    try {
        const result  =  selectProducts() 
        return NextResponse.json(result) 
    } catch (error) {
        console.log(error) 
    }
}

export async function  PUT(req, res) {
    try {
        const result  =  updateProducts() 
        return NextResponse.json(result) 
    } catch (error) {
        console.log(error) 
    }
}

export async function  DELETE(req, res) {
    try {
        const result  =  deleteProducts() 
        return NextResponse.json(result) 
    } catch (error) {
        console.log(error) 
    }
}