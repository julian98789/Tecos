'use client'

import { MdTableRestaurant } from "react-icons/md";

const Table = ({status,num}) =>{
    
    let colorTable;
    let colorTextTable;
    let cursor;
    let transicion;
    let route;

    switch (status) {
        case true:
            colorTable = "bg-zinc-200";
            colorTextTable = "text-zinc-700";
            cursor = "cursor-pointer";
            transicion = "transition-transform , hover:scale-105";
            route = "/menu" 
            break;
        case false:
            colorTable = "bg-zinc-500";
            colorTextTable = "text-zinc-900";
            break;
        default:
            break;
    }
    return (
        <a href={route}>
            <div className={`w-[150px] h-[150px] flex justify-center items-center  ${cursor} rounded-lg ${colorTable} hover:transition  ${transicion} duration-300 shadow-2xl`}>
                <div className="w-full h-[110px] flex flex-col justify-center items-center ">
                    <MdTableRestaurant className={`text-8xl ${colorTextTable}`}/>
                    <div className={`w-full text-2xl font-medium  flex justify-center  ${colorTextTable}`}>
                        Mesa: {num}
                    </div>
                </div>
            </div>
        </a>
    )
}
export default Table