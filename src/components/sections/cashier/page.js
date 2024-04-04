'use client'
import RouteProtected from "@/middleware/RouteProtected";
import NavBarCashier from "@/components/custom/navbar/nabvarCashier/NavBarCashier";


const cashier = () => {
    
    return (
        <RouteProtected>
              <div className="w-full h-screen flex justify-center items-center bg-cover  bg-top bg-[url('/Fondo.jpg')]" >
                <div className="w-full h-full bg-[rgba(38,38,38,.4)] flex flex-col ">
                    <div className="w-full flex flex-col">
                        <NavBarCashier/>
                   
                    </div>
              </div>
            </div>
        </RouteProtected>
 
           )
}
export default cashier;