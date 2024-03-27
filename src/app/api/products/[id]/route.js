import { NextResponse } from "next/server";
import { selectProductsId, deleteProducts } from "../../model/products";

export async function  GET(req, {params}) {
    try {
        let result  = await selectProductsId(params.id); 
        return NextResponse.json(result) 
    } catch (error) {
        console.log(error) 
    } 
}

export async function  DELETE(req, {params}) {
    try {
        const result  = await deleteProducts(params.id); 
        return NextResponse.json(result) 
    } catch (error) {
        console.log(error) 
    } 
}