import RouteProtected from "@/middleware/RouteProtected";
import Navbar from "@/components/custom/navbar/NavBar";
import TableEmployes from "@/components/custom/dataTable/user/TableEmployes";

const Admin = () => {

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
