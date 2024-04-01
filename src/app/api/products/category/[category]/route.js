import { NextResponse } from "next/server";
import { selectProductsCategory } from "@/app/api/model/products";

export async function  GET(req, {params}) {

    try {
        let result  = await selectProductsCategory(params.category); 
        return NextResponse.json(result) 
    } catch (error) {
        console.log(error) 
    } 
}

