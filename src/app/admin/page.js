import RouteProtected from "@/middleware/RouteProtected";
import NavBarWeb from "@/components/custom/navbar/NavBarWeb";
import OpAdmin from "@/components/custom/admin/opAdmin";

const Admin = () => {
 
    
    return (
   <RouteProtected>
              <div className="w-full min-h-full flex justify-center items-center bg-cover  bg-top bg-[url('/Fondo.jpg')] " >
                <div className="w-full h-full bg-[rgba(38,38,38,.4)] flex flex-col ">
                  <div className="w-full flex flex-col">
                    <NavBarWeb />
                  </div>
                  <div className="flex flex-col items-center">
                    <OpAdmin />
                  </div>
                  
                </div>
              </div>
   </RouteProtected>
      
        
           )
}
export default Admin;