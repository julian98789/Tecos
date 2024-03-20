'use client'
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const NavBarWeb = () =>{

  return (
    <div className="w-full h-full  hidden md:block">
      <div className="w-full h-full">
         <nav className="w-full h-[65px]  bg-neutral-900 "> 
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <div className="flex-shrink-0 items-center">
                              <img className="h-14 w-auto " src="/tecos-logo-circular.svg" alt="your company"/>
                            </div>
                        </div>
                    
                    <div className="hidden md:block">
                            <div className="ml-4 flex items-center space-x-4">
                                <a href="/menu" className="text-white hover:bg-red-700 hover:text-white rounded-lg p-4">
                                    Menu
                                </a>
                                <a href="#" className="text-white hover:bg-red-700 hover:text-white rounded-lg p-4">
                                    Caja
                                </a>
                                
                                <a href="/admin" className="text-white hover:bg-red-700 hover:text-white rounded-lg p-4">
                                    Adminstrador
                                </a>
                              
                                <a href="/login" className="text-white hover:bg-red-700 hover:text-white rounded-lg p-3">
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