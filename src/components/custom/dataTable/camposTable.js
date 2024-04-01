'use client'


const CamposTable = () => {
    return ( 
      
   <table className="table-fixed w-75 bg-neutral-800">
            <thead>
                <tr className="">
                    <th className="px-4 pr-20 py-2 text-left text-xs font-medium text-neutral-100 uppercase">Nombre</th>
                    <th className="px-4 pr-28 py-2 text-left text-xs font-medium text-neutral-100  uppercase">Apellido</th>
                    <th className="px-4 pr-48 py-2 text-left text-xs font-medium text-neutral-100  uppercase">Cédula</th>
                    <th className="px-4 pr-48 py-2 text-left text-xs font-medium text-neutral-100  uppercase">Correo</th>
                    <th className="px-4 pr-16 py-2 text-left text-xs font-medium text-neutral-100  uppercase">Password</th>
                    <th className="px-4 pr-20 py-2 text-left text-xs font-medium text-neutral-100  uppercase">Rol</th>
                    <th className="px-4 pr-11 py-2 text-left text-xs font-medium text-neutral-100  uppercase">Acciones</th>
                </tr>
            </thead>
  </table>
     );
}
 
export default CamposTable;
