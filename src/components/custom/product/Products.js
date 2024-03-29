'use client'
import { useState } from "react"
import FormNewProduct from "../form/products/FormNewProduct";


const Products = () =>{

    const [mostrarFormulario, setMostrarFormulario] = useState(false);
    
    const abrirFormulario = () => {
        setMostrarFormulario(!mostrarFormulario);
    };

    useState
    //useState cual es el usuario?
    return ( 
        <div className="w-full rounded-md shadow-sm px-16  ">
            <button type="button" onClick={abrirFormulario} className="w-32 h-11 text-sm font-medium text-neutral-100 bg-neutral-900 rounded-lg hover:bg-red-700">
                    Nuevo Producto 
            </button>

            <div className="flex flex-raw justify-center ">
            {mostrarFormulario ? (
             <div className="flex flex-raw justify-center ">
                <FormNewProduct onClose={() => setMostrarFormulario(false)} />
             </div>
            
            ): (<FormNewProduct />)}
            </div>     
               
        </div>
    )
}

export default Products