'use client'
const CamposTable = () => {
    return ( 
      
    <div className="flex justify-center ">
        <div className="w-16 px-4 py-4 bg-neutral-800 text-neutral-50 overflow-hidden break-word ">id  </div>
        <div className="w-40 px-4 py-4 bg-neutral-800 text-neutral-50 overflow-hidden break-word">nombre  </div>
        <div className="w-56 px-4 py-4 bg-neutral-800 text-neutral-50 overflow-hidden break-word">descripcion  </div>
        <div className="w-36 px-4 py-4 bg-neutral-800 text-neutral-50 overflow-hidden break-word">categoria  </div>
        <div className="w-64 px-4 py-4 bg-neutral-800 text-neutral-50 overflow-hidden break-word text-center ">imagen  </div>
        <div className="w-24 px-4 py-4 bg-neutral-800 text-neutral-50 overflow-hidden break-word">precio  </div>
        <div className="w-24 px-4 py-4 bg-neutral-800 text-neutral-50 overflow-hidden break-word">Eliminar  </div>
    </div>

     );
}
 
export default CamposTable;

