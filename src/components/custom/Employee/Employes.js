'use client'
import { useState, useEffect } from "react"
import FormNewEmployed from "../form/employes/FormNewEmployed";
import TableEmployes from "../dataTable/user/TableEmployes";
import CamposTable from "../dataTable/user/camposTable";


const Employes = () =>{

        const [user, setUser] = useState([])
        const [url, setUrl]= useState('/api/user')
        const recibirDatos = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setUser(data.result)
    }

    useEffect(()=>{
        recibirDatos();
    },[url])

    const [mostrarFormulario, setMostrarFormulario] = useState(false);
    
    const abrirFormulario = () => {
        setMostrarFormulario(!mostrarFormulario);
    };

    return ( <div className="pl-16" >
                <div className=" rounded-md shadow-sm pl-16">
                    <button type="button" onClick={abrirFormulario} className="w-28 h-11 text-sm font-medium text-neutral-100 bg-neutral-900 rounded-lg hover:bg-red-700">
                        Nuevo empleado 
                    </button>
                </div>
                {mostrarFormulario ? (
                    <div className="flex flex-row justify-center">
                        <FormNewEmployed onClose={() => setMostrarFormulario(false)} />
                    </div>
                ) : (
                    <div>
                        <div className="mt-11 ">
                            <CamposTable />
                        </div>
                        <div className="flex flex-col">
                            {user.map((users) => (
                                <TableEmployes users={users} />
                            ))}
                        </div>
                    </div>
                )}
            </div>
    
)
    
}

export default Employes