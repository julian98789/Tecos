'use client'
import { useState } from 'react';
import EmployedFrom from '../form/EmployedFrom';



const AddEmployee = () =>{

    const [mostrarFormulario, setMostrarFormulario] = useState(false);
    
        const abrirFormulario = () => {
            setMostrarFormulario(true);
        };
    

        return( <div>
       
            <div class="inline-flex rounded-md shadow-sm px-16 py-5 " role="group">
                <button type="button" onClick={abrirFormulario} className="w-28 h-11 text-sm font-medium text-neutral-100 bg-neutral-900 rounded-s-lg hover:bg-red-700">
                    Nuevo empleado 
                </button>
                <button type="button" className="w-28 h-11 text-sm font-medium text-neutral-100 rounded-r-lg bg-neutral-900 hover:bg-red-700">
                    Actualizar empleado
                </button>       
            </div >
            
            {mostrarFormulario && <EmployedFrom />}
        </div>
        )
}

export default AddEmployee