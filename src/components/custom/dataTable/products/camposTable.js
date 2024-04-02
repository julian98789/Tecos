'use client'
const CamposTable = () => {
    return ( 
      
   <table className="table-fixed w-75 bg-neutral-800">
            <thead>
                <tr className="">
                    <th className="px-4 pr-20 py-2 text-left text-xs font-medium text-neutral-100 uppercase">id</th>
                    <th className="px-4 pr-28 py-2 text-left text-xs font-medium text-neutral-100  uppercase">nombre</th>
                    <th className="px-4 pr-48 py-2 text-left text-xs font-medium text-neutral-100  uppercase">descripcion</th>
                    <th className="px-4 pr-48 py-2 text-left text-xs font-medium text-neutral-100  uppercase">categoria</th>
                    <th className="px-4 pr-16 py-2 text-left text-xs font-medium text-neutral-100  uppercase">imagen</th>
                    <th className="px-4 pr-20 py-2 text-left text-xs font-medium text-neutral-100  uppercase">precio</th>
                    <th className="px-4 pr-11 py-2 text-left text-xs font-medium text-neutral-100  uppercase">Eliminar</th>
                </tr>
            </thead>
  </table>
     );
}
 
export default CamposTable;