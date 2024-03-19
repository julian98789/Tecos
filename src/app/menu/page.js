'use client'
import CpMenu from "@/components/custom/MenuCp/CpMenu"
import NavBarCliente from "@/components/custom/navbar/NavBarCliente"
const PgMenu = () =>{
    return <div className="w-full h-screen flex justify-center items-center bg-repeat bg-[url('/Fondo.jpg')] bg-top" >
                <div className="w-full h-full bg-[rgba(38,38,38,.4)] flex flex-col ">
                    <div className="w-full flex flex-col">
                        <NavBarCliente/>
                    </div>
                    <div className="flex flex-col items-end">
                        <CpMenu />
                    </div>
                    
                    
                </div>
        </div>
}
export default PgMenu