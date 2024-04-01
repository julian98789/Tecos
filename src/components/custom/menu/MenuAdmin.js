'use client'
import useSession from "@/hook/useSession";
import { useState } from "react";
import { FaCashRegister } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { MdTableRestaurant } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { MdAdminPanelSettings } from "react-icons/md";
import Link from 'next/link'


const MenuAdmin = () =>{
    const {logout} = useSession()

    const [cerrarSession, setCerrarSession] = useState(false);
    
    const session = () => {
        setCerrarSession(true);
    };

    if (cerrarSession) {
        logout()
        window.location.href = "/login"
        }
    return( 
        <div className="w-full mt-5 text-neutral-800">
            <div>
            <div className="flex flex-row justify-start items-end p-2 cursor-pointer hover:bg-neutral-300  duration-75 rounded-lg "> 
                    <div  >
                    <MdAdminPanelSettings className="text-3xl "/>
                    </div>
                    <div className="px-5">
                        <a href="/admin">Administrador</a>
                    </div>
                </div>
                
                <div className="flex flex-row justify-start items-end p-2 cursor-pointer hover:bg-neutral-300  duration-75 rounded-lg "> 
                    <div  >
                    <FaCashRegister className="text-3xl "/>
                    </div>
                    <div className="px-5">
                        <a href="/cashier">Caja</a>
                    </div>
                </div>

                <div className="flex flex-row justify-start items-end p-2 cursor-pointer hover:bg-neutral-300  duration-75 rounded-lg ">
                    <div>
                    <FaCartShopping className="text-3xl" />
                    </div>
                    <div className="px-5"> 
                    <a href="/product">Producto</a>
                    </div>
                </div>

                <div className="flex flex-row justify-start items-end p-2 cursor-pointer hover:bg-neutral-300  duration-75 rounded-lg ">
                    <div>
                        <MdOutlineRestaurantMenu className="text-3xl"/>
                    </div>
                    <div className="px-5"> 
                    <a href="/menu">Menú</a> 
                    </div>
                </div>

                <div className="flex flex-row justify-start items-end p-2 cursor-pointer hover:bg-neutral-300  duration-75 rounded-lg ">
                    <div>
                        <MdTableRestaurant className="text-3xl"/>
                    </div>
                    <div className="px-5">
                    <Link href="/">Mesas</Link>
                    </div>
                </div>

                <div className="flex flex-row justify-start items-end p-2 cursor-pointer hover:bg-neutral-300  duration-75 rounded-lg ">
                    <div >
                        <FaUser className="text-3xl"/>
                    </div>
                    <div className="px-5">
                        <a href="/employe">Empleado</a> 
                    </div>
                </div>

                <div className="flex flex-row justify-start items-end mt-56 p-2 cursor-pointer hover:bg-red-700 hover:text-white  duration-75 rounded-lg ">
                    <div >
                        <AiOutlineCloseCircle className="text-3xl"/>
                    </div>
                    <div className="px-5">
                       <a onClick={session} >Cerrar sesion</a> 
                    </div>
                    {cerrarSession}
                </div>

                

                

            </div>

        </div>
    )
   }
   export default MenuAdmin