'use client'


const CamposTable = () => {
    return ( 
        <div className="flex justify-center ">
            <div className="w-40 px-4 py-4 bg-neutral-800 text-neutral-50 overflow-hidden break-word ">Nombre  </div>
            <div className="w-40 px-4 py-4 bg-neutral-800 text-neutral-50 overflow-hidden break-word">Apellido  </div>
            <div className="w-40 px-4 py-4 bg-neutral-800 text-neutral-50 overflow-hidden break-word">Cédula  </div>
            <div className="w-52 px-4 py-4 bg-neutral-800 text-neutral-50 overflow-hidden break-word">Correo  </div>
            <div className="w-32 px-4 py-4 bg-neutral-800 text-neutral-50 overflow-hidden break-word ">Password  </div>
            <div className="w-24 px-4 py-4 bg-neutral-800 text-neutral-50 overflow-hidden break-word">Rol  </div>
            <div className="w-24 px-4 py-4 bg-neutral-800 text-neutral-50 overflow-hidden break-word">Eliminar  </div>
        </div>

     );
}
 
export default CamposTable;

