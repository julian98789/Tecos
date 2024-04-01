'use client'
import React, { useState } from 'react';
import EmployedFrom from '../form/EmployedFrom';



const OpAdmin = () =>{

    const [mostrarFormulario, setMostrarFormulario] = useState(false);
    
        const abrirFormulario = () => {
            setMostrarFormulario(true);
        };
    

        return <div>
       
            <div className="inline-flex rounded-md shadow-sm px-16 py-5 " role="group">
                <button type="button" onClick={abrirFormulario} className="w-28 h-11 text-sm font-medium text-neutral-100 bg-neutral-900 rounded-s-lg hover:bg-red-700">
                    Nuevo empleado 
                </button>
                <button type="button" className="w-28 h-11 text-sm font-medium text-neutral-100 bg-neutral-900 hover:bg-red-700">
                    Actualizar empleado
                </button>
                <button type="button" className="w-28 h-11 text-sm font-medium text-neutral-100 bg-neutral-900   hover:bg-red-700 ">
                    Nuevo producto
                </button>
                <button type="button" className="w-28 h-11 text-sm font-medium text-neutral-100 bg-neutral-900  rounded-e-lg hover:bg-red-700 ">
                    Actualizar producto
                </button>
            </div >
            
            {mostrarFormulario && <EmployedFrom />}
        </div>
}

export default OpAdmin