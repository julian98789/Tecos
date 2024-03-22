'use client'
import { useState } from "react"
import FormNewEmployed from "../form/employes/FormNewEmployed";
import TableEmployes from "../dataTable/TableEmployes";

const Employes = () =>{

    const [mostrarFormulario, setMostrarFormulario] = useState(false);
    
    const abrirFormulario = () => {
        setMostrarFormulario(!mostrarFormulario);
    };

    useState
    //useState cual es el usuario?
    return ( 
        <div className="w-full rounded-md shadow-sm px-16 py-5 ">
            <button type="button" onClick={abrirFormulario} className="w-28 h-11 text-sm font-medium text-neutral-100 bg-neutral-900 rounded-lg hover:bg-red-700">
                    Nuevo empleado 
            </button>
            {mostrarFormulario ? (
             <div className="flex flex-raw justify-center mt-6">
                <FormNewEmployed onClose={() => setMostrarFormulario(false)} />
             </div>
            
            ): (<TableEmployes />)}
                
      
                
               
        </div>
    )
}

export default Employes