import NavbarMenu from "@/components/navbar/NavbarMenu.js"
import RouteProtected from "@/middleware/RouteProtected";

const page = () => {
 
    
    return(
        <RouteProtected>
            <div className="w-screen h-screen bg-slate-100 ">
                hola soy el admin
            </div>
        </RouteProtected>
    )
}
export default page;