import RouteProtected from "@/middleware/RouteProtected";
import Navbar from "@/components/custom/navbar/navbarAdmin/NavBarAdmin";
import AddEmployee from "@/components/custom/Employee/AddEmployee";

const Employee = () => {

    return (
      <RouteProtected>

      
      <div className="w-full h-full bg-[rgba(23,23,23,.5)] overflow-y-auto relative py-[70px]">
        <Navbar/>
            <div className="flex flex-raw items-center justify-center">
                <AddEmployee />
            </div>
      </div>
      
      </RouteProtected>
      
      )
}
export default Employee;