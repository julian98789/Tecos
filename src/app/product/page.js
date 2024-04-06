'use client'
import RouteProtected from "@/middleware/RouteProtected";
import NavBarAdmin from "@/components/custom/navbar/navbarAdmin/NavBarAdmin";
import Products from "@/components/custom/product/Products";
import useStore from "@/hook/useSession.js";
import { useRouter } from "next/navigation";

const Product = () => {

  const {getUserData} = useStore();
  const role = getUserData();
  const router = useRouter()

  
  if (role === 'cajero'){

    router.push('/cashier')

  }
    return (
      <RouteProtected>
      <>
        <NavBarAdmin/>
        <div className="w-full h-full bg-[rgba(23,23,23,.5)] overflow-y-auto py-[70px]"> 
          <Products/>
        </div>
      </>
      </RouteProtected>
      )
}
export default Product;