'use client'
import React, { useState, useEffect } from 'react';
import NavBarCliente from "@/components/custom/navbar/NavBarCliente";
import CpMenu from '@/components/custom/MenuCliente/MenuOption/MenuOption';
import Card from '@/components/custom/MenuCliente/vista/Card';  // Importa el componente Card para mostrar cada producto

const PgMenu = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        // Definir la función para obtener los productos
        const obtenerProductos = async () => {
          try {
            // Realizar una solicitud a la API para obtener los productos
            const response = await fetch('/api/product'); // Reemplaza '/api/productos' con la ruta de tu API
            if (!response.ok) {
              throw new Error('Error al obtener los productos');
            }
            // Convertir la respuesta a formato JSON
            const data = await response.json();
            // Actualizar el estado de los productos con los datos obtenidos
            setProductos(data);
          } catch (error) {
            console.error('Error al obtener los productos:', error);
          }
        };
    
        // Llamar a la función para obtener los productos cuando el componente se monte
        obtenerProductos();
      }, []);
      console.log(Card)

    return (
        <div className="w-full h-screen flex justify-center items-center bg-repeat bg-[url('/Fondo.jpg')] bg-top">
            <div className="w-full h-full bg-[rgba(38,38,38,.4)] flex flex-col">
                <div className="w-full flex flex-col">
                    <NavBarCliente/>
                </div>
                <div className="flex flex-col items-end">
                        <CpMenu />
                    </div>
                <div className="flex flex-wrap justify-center">
                    {productos.map((producto, index) => (
                    <Card key={index} producto={producto} />
                    ))}
                </div>
            </div>
        </div>
       
    );
};

export default PgMenu;