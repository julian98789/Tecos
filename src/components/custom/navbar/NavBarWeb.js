'use client'
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const NavBarWeb = () =>{

  const [isOpenProduct, setIsOpenProduct] = useState(false);
        
        const [isOpen, setIsOpen] = useState(false);
      
        

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
    <div className="w-full h-full  hidden md:block">
      <div className="w-full h-full">
         <nav className="w-full h-[65px]  bg-neutral-950 "> 
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <div className="flex-shrink-0 items-center">
                              <img className="h-14 w-auto " src="/tecos-logo-circular.svg" alt="your company"/>
                            </div>
                        </div>
                    
                    <div className="hidden md:block">
                            <div className="ml-4 flex items-center space-x-4">
                                <a href="/app/page" className="text-white hover:bg-red-700 hover:text-white rounded-lg p-2">
                                    Menu
                                </a>
                                <a href="#" className="text-white hover:bg-red-700 hover:text-white rounded-lg p-2">
                                    Caja
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
                                <a href="#"  className="block px-4 py-2 text-sm text-slate-100 hover:bg-red-700" >
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

            </nav>
      </div>
    </div>
  )

}

export default NavBarWeb