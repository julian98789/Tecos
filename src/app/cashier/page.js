'use client'
import RouteProtected from "@/middleware/RouteProtected";
import NavbarCashier from "@/components/custom/navbar/NavBarCashier";
import useStore from "@/hook/useSession.js";
import Navbar from "@/components/custom/navbar/NavBar";



const Cashier = () => {
  const {getUserData} = useStore();


  const role = getUserData();
  console.log(role)
 
 
    return (
      <RouteProtected>
      <>
         {role === 'cajero' ? <NavbarCashier/> : <Navbar/>} 
        <div className="w-full h-full bg-[rgba(23,23,23,.5)] overflow-y-auto py-[70px]"> 
         
        </div>
      </>
      </RouteProtected>
      );
}
export default Cashier;