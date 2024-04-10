'use client'

import { GiConsoleController } from "react-icons/gi";

const MenuOption = ({setUrl}) =>{


const changeUrl= (value) =>{
    setUrl(value);
    console.log(value)
}
        return <div>
            <div className="inline-flex rounded-md shadow-sm px-16 py-5 " role="group">
                <button onClick={()=>{
                    changeUrl('/api/products/category/bebidas')
                }} type="button" className="w-28 h-9 text-sm font-medium text-neutral-100 bg-neutral-900 rounded-s-lg hover:bg-red-700">
                    Bebidas
                </button>
                <button  onClick={()=>{
                    changeUrl('/api/products/category/platos fuertes')
                }}  type="button" className="w-28 h-9 text-sm font-medium text-neutral-100 bg-neutral-900 hover:bg-red-700">
                    Platos fuertes
                </button>
                <button  onClick={()=>{
                    changeUrl('/api/products/category/entradas')
                }} type="button" className="w-28 h-9 text-sm font-medium text-neutral-100 bg-neutral-900   hover:bg-red-700 ">
                    Entradas
                </button>
                <button onClick={()=>{
                    changeUrl('/api/products')
                }} type="button" className="w-28 h-9 text-sm font-medium text-neutral-100 bg-neutral-900  rounded-e-lg hover:bg-red-700 ">
                    Todo
                </button>
            </div>
            
        </div>
}

export default MenuOption