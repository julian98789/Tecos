'use client'
import { useState, useEffect } from "react"
import CampoOrder from "../dataTable/order/campoOrder"


const Pedidos = () =>{

    const [order, setOrder] = useState([]);
    const [url, setUrl] = useState('/api/order');

    const recibirDatos = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setOrder(data.result);
    }

    useEffect(() => {
        recibirDatos();
    }, [url]);

    const updateCampoOrder = async (orderId) => {
        const options = {   
            method: 'PUT',  
            headers: {  
                'Content-Type': 'application/json'  
            },
            body: JSON.stringify({ estado: 'entregado' })
        }
        
        await fetch(`/api/order/${orderId}`, options);  
    }  

    const liberarMesa = async (mesaId) => {
        const options = {   
            method: 'PUT',  
            headers: {  
                'Content-Type': 'application/json'  
            },
            body: JSON.stringify({ estado: 'disponible' })
        }
        
        await fetch(`/api/table/${mesaId}`, options);  
    }

    return (
        <div>
            <p className="text-2xl text-neutral-100 italic  font-semibold mb-2 text-center p-5">Liberar mesas</p>
            <div className="flex justify-center">
                <button type="button" className="w-32 h-11 text-sm font-medium text-neutral-100 bg-neutral-900 rounded-lg hover:bg-red-700 mr-2" onClick={() => liberarMesa(1)}>Mesa 1</button>
                <button type="button" className="w-32 h-11 text-sm font-medium text-neutral-100 bg-neutral-900 rounded-lg hover:bg-red-700 mr-2" onClick={() => liberarMesa(2)}>Mesa 2</button>
                <button type="button" className="w-32 h-11 text-sm font-medium text-neutral-100 bg-neutral-900 rounded-lg hover:bg-red-700 mr-2" onClick={() => liberarMesa(3)}>Mesa 3</button>
                <button type="button" className="w-32 h-11 text-sm font-medium text-neutral-100 bg-neutral-900 rounded-lg hover:bg-red-700 mr-2" onClick={() => liberarMesa(4)}>Mesa 4</button>
                <button type="button" className="w-32 h-11 text-sm font-medium text-neutral-100 bg-neutral-900 rounded-lg hover:bg-red-700 mr-2" onClick={() => liberarMesa(5)}>Mesa 5</button>
                <button type="button" className="w-32 h-11 text-sm font-medium text-neutral-100 bg-neutral-900 rounded-lg hover:bg-red-700 mr-2" onClick={() => liberarMesa(6)}>Mesa 6</button>
                <button type="button" className="w-32 h-11 text-sm font-medium text-neutral-100 bg-neutral-900 rounded-lg hover:bg-red-700 mr-2" onClick={() => liberarMesa(7)}>Mesa 7</button>
                <button type="button" className="w-32 h-11 text-sm font-medium text-neutral-100 bg-neutral-900 rounded-lg hover:bg-red-700" onClick={() => liberarMesa(8)}>Mesa 8</button>
            </div>
            <div className="grid grid-cols-3 gap-5 mx-7 my-4">
                {order.map((orders) => (
                    <CampoOrder orders={orders} updateCampoOrder={updateCampoOrder} />
                ))}
            </div>
        </div>
    );
}

export default Pedidos;