'use client'
import { useState } from "react";

 const NavbarMenu = () => {
    const [navbar, setNavbar] = useState(false);

    const handleNavbar = () => {
        setNavbar(!navbar);
        console.log(navbar);
    }

    return (
        
            <nav className="w-full h-[60px] bg-red-600 "> 
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <a href="/" className="text-white font-bold">Admin</a>
                            </div>
                        </div>
    
                        <div className="hidden md:block">
                            <div className="ml-4 flex items-center space-x-4">
                                <a href="/" className="text-white hover:bg-red-700 hover:text-white rounded-lg p-2">
                                    Menu
                                </a>
                                <a href="/" className="text-white hover:bg-red-700 hover:text-white rounded-lg p-2">
                                    Administrar Empleados
                                </a>
                                <a href="/" className="text-white hover:bg-red-700 hover:text-white rounded-lg p-2">
                                    Administrar Productos
                                </a>
                                <a href="/" className="text-white hover:bg-red-700 hover:text-white rounded-lg p-2">
                                    Cerrar Sesión
                                </a>
                            </div>
                        </div>
                        
                        <div className="md:hidden flex items-center">
                            <button className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-white" onClick={handleNavbar}>
                                {navbar ? (
                                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                ) : (
                                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                                    </svg>
                                )}
                            </button>
                        </div>
                        
                    </div>
                </div>
                
                {navbar && (
                    <div className="md:hidden absolute top-[60px] left-0 w-full bg-red-600"> 
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-4">
                            <a href="/" className="text-white block hover:bg-red-700 hover:text-white rounded-lg p-2">
                                Menu
                            </a>
                            <a href="/" className="text-white block hover:bg-red-700 hover:text-white rounded-lg p-2">
                                Administrar Empleados
                            </a>
                            <a href="/" className="text-white block hover:bg-red-700 hover:text-white rounded-lg p-2">
                                Administrar Productos
                            </a>
                            <a href="/" className="text-white block hover:bg-red-700 hover:text-white rounded-lg p-2">
                                Cerrar Sesión
                            </a>
                        </div>
                    </div>
                )}
            </nav>
       
    );
    
}

export default NavbarMenu 