import React, { useState, useEffect } from "react";
import CampoOrder from "../dataTable/order/campoOrder";
import LiberarMesa from "./liberarMesa/LiberarMesa";

const Pedidos = () => {
    const [order, setOrder] = useState([]);

    useEffect(() => {
        const recibirDatos = async () => {
            const response = await fetch('/api/order');
            const data = await response.json();
            setOrder(data.result);
        };

        recibirDatos();
    }, []);

    const updateCampoOrder = async (orderId) => {
        const options = {   
            method: 'PUT',  
            headers: {  
                'Content-Type': 'application/json'  
            },
            body: JSON.stringify({ estado: 'entregado' })
        }
        
        await fetch(`/api/order/${orderId}`, options);  
    };  

    // Encontrar mesas únicas
    const mesasUnicas = [...new Set(order.map(item => item.mesa_id))].sort((a, b) => a - b);

    return (
        <div>
            <p className="text-2xl text-neutral-100 italic font-semibold mb-2 text-center p-5">Liberar mesas</p>
            <div className="flex justify-center">
                {mesasUnicas.map(mesaId => {
                    // Filtrar las órdenes para encontrar la primera orden asociada a esta mesa
                    const mesaOrder = order.find(item => item.mesa_id === mesaId);
                    return mesaOrder ? <LiberarMesa key={mesaOrder.id} liberar={mesaOrder} /> : null;
                })}
            </div>
            <div className="grid grid-cols-3 gap-5 mx-7 my-4">
                {order.map((orders) => (
                    <CampoOrder key={orders.id} orders={orders} updateCampoOrder={updateCampoOrder} />
                ))}
            </div>
        </div>
    );
};

export default Pedidos;
