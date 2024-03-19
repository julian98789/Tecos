'use client'

const CpMenu = () =>{

        return <div>
            <div class="inline-flex rounded-md shadow-sm px-16 py-5 " role="group">
                <button type="button" className="w-28 h-9 text-sm font-medium text-neutral-100 bg-neutral-900 rounded-s-lg hover:bg-red-700">
                    Bebidas
                </button>
                <button type="button" className="w-28 h-9 text-sm font-medium text-neutral-100 bg-neutral-900 hover:bg-red-700">
                    Tacos
                </button>
                <button type="button" className="w-28 h-9 text-sm font-medium text-neutral-100 bg-neutral-900  rounded-e-lg hover:bg-red-700 ">
                    Entradas
                </button>
            </div>
            
        </div>
}

export default CpMenu