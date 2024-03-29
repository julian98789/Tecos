import RouteProtected from "@/middleware/RouteProtected";
import Navbar from "@/components/custom/navbar/NavBar";
import Products from "@/components/custom/product/Products";

const Product = () => {

    return (
      <RouteProtected>
      <>
        <Navbar/>
        <div className="w-full h-full bg-[rgba(23,23,23,.5)] overflow-y-auto py-[70px]"> 
          <Products/>
        </div>
      </>
      </RouteProtected>
      )
}
export default Product;