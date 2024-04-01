'use client'
import React, { useState, useEffect } from 'react';
import NavBarCliente from "@/components/custom/navbar/NavBarCliente";
import MenuOption from '@/components/custom/MenuCliente/MenuOption/MenuOption';
import Card from '@/components/custom/MenuCliente/vista/Card';  // Importa el componente Card para mostrar cada producto


const PgMenu = () => {
  const [products, setProducts] = useState([])
  const [url, setUrl]= useState('/api/products')
  const recibirDatos = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setProducts(data.result)
  }

  useEffect(()=>{
    recibirDatos();
  },[url])




    return (
        <div className="w-full h-full flex bg-[rgba(23,23,23,.5)] justify-center items-center overflow-y-auto">
            <div className="w-full h-full flex flex-col">
                <div className="w-full flex flex-col">
                    <NavBarCliente/>
                </div>
                <div className="flex flex-col items-end">
                        <MenuOption  setUrl={setUrl}/>
                    </div>
                <div className="flex flex-wrap gap-4 justify-center">

                  {
                    products.map((product)=>{
                      return <Card  product={product} />
                    })
                  }
                   
                </div>
            </div>
        </div>
       
    );
};

export default PgMenu;