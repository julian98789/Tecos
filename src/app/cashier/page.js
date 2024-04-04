'use client'
import RouteProtected from "@/middleware/RouteProtected";
import NavbarCashier from "@/components/custom/navbar/nabvarCashier/NavBarCashier";
import useStore from "@/hook/useSession.js";
import NavBarAdmin from "@/components/custom/navbar/navbarAdmin/NavBarAdmin";



const Cashier = () => {
  const {getUserData} = useStore();


  const role = getUserData();
  console.log(role)
 
 
    return (
      <RouteProtected>
      <>
         {role === 'cajero' ? <NavbarCashier/> : <NavBarAdmin/>} 
        <div className="w-full h-full bg-[rgba(23,23,23,.5)] overflow-y-auto py-[70px]"> 
         
        </div>
      </>
      </RouteProtected>
      );
}
export default Cashier;