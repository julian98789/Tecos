import NavbarMenu from "@/components/navbar/NavbarMenu";
import RouteProtected from "@/middleware/RouteProtected";

const page = () => {
 
    
    return(
        <RouteProtected>
            <div className="relative">
              <div
                className="fixed top-0 left-0 w-full h-full bg-neutral-800 bg-cover bg-center bg-no-repeat bg-[url('/Fondo.jpg')] z-0"
              ></div>
              <div className="relative z-10">
                <NavbarMenu />
                
              </div>
            </div>
        </RouteProtected>
    )
}
export default page;