import { NextResponse } from "next/server";
import { selectSalesId, updateSales } from "../../model/sales";

export async function  GET(req, {params}) {
    try {
        let result  = await selectSalesId(params.id); 
        return NextResponse.json(result) 
    } catch (error) {
        console.log(error) 
    } 
}

export async function  DELETE(req, {params}) {
    try {
        const result  = await updateSales(params.id) 
        return NextResponse.json(result) 
    } catch (error) {
        console.log(error) 
    }
}