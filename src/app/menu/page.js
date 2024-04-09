'use client'
import React, { useState, useEffect } from 'react';
import NavBarCliente from "@/components/custom/navbar/NavBarCliente";
import MenuOption from '@/components/custom/MenuCliente/MenuOption/MenuOption';
import Card from '@/components/custom/MenuCliente/Card/Card';  // Importa el componente Card para mostrar cada producto
import useStore from "@/hook/useSession.js";
import NavBarAdmin from '@/components/custom/navbar/navbarAdmin/NavBarAdmin';
import NavbarCashier from '@/components/custom/navbar/nabvarCashier/NavBarCashier';
import {FiShoppingCart} from 'react-icons/fi';
import useCart  from '@/hook/useCart';
import MenuShopping from '@/components/custom/MenuCliente/MenuShopping/MenuShopping';
import { Sheet, SheetTrigger,SheetContent,SheetClose,SheetFooter,SheetDescription,SheetHeader,SheetTitle } from '@/components/ui/sheet';



const PgMenu = () => {
  const {getUserData} = useStore()
  const [products, setProducts] = useState([])
  const [url, setUrl]= useState('/api/products')
  const [cartItems, setCartItems] = useState(0);
  const { getCart } = useCart();
  console.log(getCart())
  
  const recibirDatos = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setProducts(data.result)
  }

  useEffect(()=>{
    recibirDatos();
  },[url])

  const role = getUserData();

 // Función para actualizar el estado del carrito en PgMenu
 const handleUpdateCart = () => {
  setCartItems(prevCartItems => prevCartItems + 1); // Incrementa el número de elementos en el carrito
};
const cart = getCart();
const cartItemsWithoutMesa = cart.filter(item => !item.hasOwnProperty('id_mesa'));
const cartItemCount = cartItemsWithoutMesa.length;
    return (
      
      <Sheet>
        <div className="w-full h-full  bg-[rgba(23,23,23,.5)]flex justify-center items-center overflow-y-auto">
            <div className="w-full h-full flex flex-col">
                <div className="w-full flex flex-col">
                     {role === 'admin' ? <NavBarAdmin/> : <NavBarCliente/>}
                     {role === 'cajero' ? <NavbarCashier/> :  " "}
                </div>
                <div className="flex flex-col items-end " >
                {role === 'admin' ? <div className="flex flex-col items-end mt-14"><MenuOption  setUrl={setUrl}/></div>: ""}
                {role === 'cajero' ? <div className="flex flex-col items-end "><MenuOption  setUrl={setUrl}/></div>: ""}
                {role !== 'cajero' && role !== 'admin' ? <div className="flex flex-col items-end "><MenuOption  setUrl={setUrl}/></div>: ""}
                </div>
                <div className="flex flex-wrap gap-4 justify-center">

                  {
                    products.map((product)=>{
                      return <Card  
                      key={product.id}
                      product={product}
                      onAddToCart={handleUpdateCart}
                        />
                    })
                  }
                   
                </div>
                <SheetTrigger>
                <div className="absolute bottom-4 right-4">
          <div className="relative text-white">
            <FiShoppingCart size={24} className='text-white h-8 w-8 'variant="outline" />
            {cartItemCount > 0 && (
        <div className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex justify-center items-center text-xs">
          {cartItemCount}
        </div>
      )}
          </div>
        </div>
        </SheetTrigger>
        <SheetContent>
        <SheetHeader>
          <SheetTitle>Carrito de compras</SheetTitle> 
        </SheetHeader>
        <MenuShopping onItemRemoved={handleUpdateCart}/>
          <SheetClose asChild>
          </SheetClose>
      </SheetContent>
        
            </div>
        </div>
        </Sheet> 
    );
};

export default PgMenu;