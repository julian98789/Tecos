import { NextResponse } from "next/server";
import { selectOrderId, deleteOrder, updateOrder } from "../../model/order";

export async function  GET(req, {params}) {
    try {
        let result  = await selectOrderId(params.id); 
        return NextResponse.json(result) 
    } catch (error) {
        console.log(error) 
    } 
}
export async function  PUT(req,  {params}) {
    try {
        const json = req.body;
        const result  = await updateOrder(params.id,json) 
        return NextResponse.json(result) 
    } catch (error) {
        console.log(error) 
    }
}

export async function  DELETE(req, {params}) {
    try {
        const result  = await deleteOrder(params.id) 
        return NextResponse.json(result) 
    } catch (error) {
        console.log(error) 
    }
}