'use client'
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import EmployedFrom from "../custom/form/EmployedFrom";


const NavbarMenu = () => {
        const [isOpenProduct, setIsOpenProduct] = useState(false);
        const [showEmployedFrom, setShowEmployedFrom] = useState(false);
        const [isOpen, setIsOpen] = useState(false);
      
        const openEmployedFrom = ()=>{
            setShowEmployedFrom(!showEmployedFrom);
            closeDropdown();
        }

        const toggleDropdownProduct = () => {
          setIsOpenProduct(!isOpenProduct);
        };
        
        const closeDropdownProduct = () => {
            setIsOpenProduct(false);
        };
      {/* fuction Dropdown employed*/}
        const toggleDropdown = () => {
          setIsOpen(!isOpen);
        };
      
        const closeDropdown = () => {
          setIsOpen(false);
        };
    

    return (
        
            <nav className="w-full h-[65px]  bg-[rgba(17,17,16,0.92)] rounded-sm"> 
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <div className="flex-shrink-0 items-center">
                              <img className="h-14 w-auto " src="/tecos-logo-circular.svg" alt="your company"/>
                            </div>
                        </div>
                    
                    <div className="hidden md:block">
                            <div className="ml-4 flex items-center space-x-4">
                                <a href="/menu" className="text-white hover:bg-red-700 hover:text-white rounded-lg p-2">
                                    Menu
                                </a>
        
                                <div className="relative inline-block text-left">
                                  <div>
                                  <button type="button" onClick={toggleDropdown} className="inline-flex justify-center items-center p-2 text-slate-100 hover:bg-red-700 rounded-lg">
                                    <IoIosArrowDown className="w-4 h-4 text-slate-100" />
                                    <span className="ml-2">Administrar Empleados</span>
                                 </button>
                                </div>

                             {isOpen && (
                         <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-[rgba(17,17,16,0.99)] ring-1 ring-black ring-opacity-5"
                                 onClick={closeDropdown}>
                             {/* Contenido del dropdown */}
                            <div className="py-1">
                                <a href="#" onClick={openEmployedFrom} className="block px-4 py-2 text-sm text-slate-100 hover:bg-red-700" >
                                  Agregar Empleados</a>
                                <a href="#" className="block px-4 py-2 text-sm text-slate-100 hover:bg-red-700">
                                  Actualizar o Eliminar </a>
                            </div>
                         </div>
                             )}
                             
                         </div>
                               {/* dropdown productos*/}
                         <div className="relative inline-block text-left">
                                  <div>
                                  <button type="button" onClick={toggleDropdownProduct} className="inline-flex justify-center items-center p-2 text-slate-100 hover:bg-red-700 rounded-lg">
                                    <IoIosArrowDown className="w-4 h-4 text-slate-100" />
                                    <span className="ml-2">Administrar Productos</span>
                                 </button>
                                </div>

                             {isOpenProduct && (
                         <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-[rgba(17,17,16,0.99)] ring-1 ring-black ring-opacity-5"
                                 onClick={closeDropdownProduct}>
                             {/* Contenido del dropdown */}
                            <div className="py-1">
                                <a href="#" className="block px-4 py-2 text-sm text-slate-100 hover:bg-red-700" >
                                  Agregar Productos</a>
                                <a href="#" className="block px-4 py-2 text-sm text-slate-100 hover:bg-red-700">
                                  Actualizar o Eliminar </a>
                            </div>
                         </div>
                             )}
                         </div>  
                                <a href="/login" className="text-white hover:bg-red-700 hover:text-white rounded-lg p-2">
                                    Cerrar Sesión
                                </a>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="flex justify-center items-center pt-10 ">
                    {showEmployedFrom && <EmployedFrom/>}
                </div>
            </nav>
       
    );
    
}

export default NavbarMenu;