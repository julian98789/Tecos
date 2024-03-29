import RouteProtected from "@/middleware/RouteProtected";
import Navbar from "@/components/custom/navbar/NavBar";
import Employes from "@/components/custom/Employee/Employes";
import TableEmployes from "@/components/custom/dataTable/TableEmployes";

const Employe = () => {

    return (
      <RouteProtected>
      <>
        <Navbar/>
        <div className="w-full h-full bg-[rgba(23,23,23,.5)] overflow-y-auto py-[70px]"> 
          <Employes/>
        </div>
      </>
      </RouteProtected>
      )
}
export default Employe;