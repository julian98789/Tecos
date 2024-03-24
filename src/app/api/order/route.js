import { NextResponse } from "next/server";
import { insertOrder, selectOrder, updateOrder, deleteOrder } from "../model/order";

export async function  POST(req, res) {
    try {
        //let  datos = await req.formData()
        const datos = await req.json()
        const result  =  await insertOrder(datos) 
        return NextResponse.json(result) 
    } catch (error) {
        return NextResponse.json(error) 
    }
}

export async function  GET(req, res) {
    try {
        const result  =  selectOrder() 
        return NextResponse.json(result) 
    } catch (error) {
        console.log(error) 
    }
}

export async function  PUT(req, res) {
    try {
        const result  =  updateOrder() 
        return NextResponse.json(result) 
    } catch (error) {
        console.log(error) 
    }
}

export async function  DELETE(req, res) {
    try {
        const result  =  deleteOrder() 
        return NextResponse.json(result) 
    } catch (error) {
        console.log(error) 
    }
}