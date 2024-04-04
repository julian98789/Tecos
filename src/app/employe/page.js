import RouteProtected from "@/middleware/RouteProtected";
import NavBarAdmin from "@/components/custom/navbar/navbarAdmin/NavBarAdmin";
import Employes from "@/components/custom/Employee/Employes";
import TableEmployes from "@/components/custom/dataTable/user/TableEmployes";

const Employe = () => {

    return (
      <RouteProtected>
      <>
        <NavBarAdmin/>
        <div className="w-full h-full bg-[rgba(23,23,23,.5)] overflow-y-auto py-[70px]"> 
          <Employes/>
        </div>
      </>
      </RouteProtected>
      )
}
export default Employe;