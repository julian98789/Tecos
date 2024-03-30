'use client'
import { useState } from "react"

import FormNewEmployed from "../form/employes/FormNewEmployed";


const Employes = () =>{

    const [mostrarFormulario, setMostrarFormulario] = useState(false);
    
    const abrirFormulario = () => {
        setMostrarFormulario(!mostrarFormulario);
    };

    useState
    //useState cual es el usuario?
    return ( 
        <div className="w-full rounded-md shadow-sm px-16  ">
            <button type="button" onClick={abrirFormulario} className="w-28 h-11 text-sm font-medium text-neutral-100 bg-neutral-900 rounded-lg hover:bg-red-700">
                    Nuevo empleado 
            </button>

            <div className="flex flex-raw justify-center ">
            {mostrarFormulario ? (
             <div className="flex flex-raw justify-center ">
                <FormNewEmployed onClose={() => setMostrarFormulario(false)} />
             </div>
            
            ): (<FormNewEmployed />)}
            </div>     
               
        </div>
    )
}

export default Employes