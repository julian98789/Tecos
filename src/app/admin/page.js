'use client'
import RouteProtected from "@/middleware/RouteProtected";
import Navbar from "@/components/custom/navbar/NavBar";
import TableEmployes from "@/components/custom/dataTable/TableEmployes";
import useStore from "@/hook/useSession.js";
import { useRouter } from "next/navigation";


const Admin = () => {
  const {getUserData} = useStore();
  const role = getUserData();
  const router = useRouter()

  if (role === 'cajero'){

    router.push('/cashier')

  }

    return (
      <RouteProtected>
      <>
        <Navbar/>
        <div className="w-full h-full bg-[rgba(23,23,23,.5)] overflow-y-auto py-[70px]"> 
         
        </div>
      </>
      </RouteProtected>
      )
}
export default Admin;
