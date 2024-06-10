'use client'
import RouteProtected from "@/middleware/RouteProtected";
import NavbarCashier from "@/components/custom/navbar/nabvarCashier/NavBarCashier";
import useSession from "@/hook/useSession";
import NavBarAdmin from "@/components/custom/navbar/navbarAdmin/NavBarAdmin";
import Pedidos from "@/components/custom/pedido/pedido";

const Cashier = () => {
  const { getUserData } = useSession();

  const role = getUserData();
  

  return (
    <RouteProtected>
      <>
        {role === 'cajero' ? <NavbarCashier /> : <NavBarAdmin />}
        <div className="w-full h-full bg-[rgba(23,23,23,.5)] overflow-y-auto py-[70px]">
          <Pedidos />
        </div>
      </>
    </RouteProtected>
  );
};

export default Cashier;
