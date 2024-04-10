import { useEffect, useState } from "react";

const CampoOrder = ({ orders, updateCampoOrder }) => {
    const [entregado, setEntregado] = useState(false);

    useEffect(() => {
        setEntregado(orders.estado === 'entregado');
    }, [orders.estado]);

    const handleClick = async () => {
        await updateCampoOrder(orders.pedido_id);
        setEntregado(true);
    };

    if (entregado || orders.estado_pedido !== 'pagado') {
        return null;
    }

    return (
        <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col mt-3">
            <div className="flex justify-between" >
                <p className="text-xl font-semibold mb-2">Pedido: {orders.pedido_id}</p>
                <p className="text-xl font-semibold mb-2">{orders.mesa_descripcion}</p>
            </div>
            <p className="text-gray-800 font-medium flex justify-between">Fecha: <span >{orders.fecha}</span></p>
            <p className="text-gray-800 font-medium flex justify-between">Hora: <span >{orders.hora}</span></p>
            <p className="text-gray-800 font-medium mb-3">{orders.mesa_descripcion}</p>
            {orders.nombres_productos.split(',').map((nombre, index) => (
                <div key={index} className="text-gray-800 font-medium flex justify-between ">
                    <p> {nombre}</p>
                    <p>*{orders.cantidades_productos.split(',')[index]}</p>
                    <p>${orders.precios_productos.split(',')[index]}</p>
                </div>
            ))}
            <p className="text-gray-800 font-medium flex justify-between mt-3">Valor Pagado: <span > ${orders.valor_pagado}</span></p>
            <p className="text-gray-800 font-medium flex justify-between">Valor Total: <span > ${orders.valor_total}</span></p>
            <p className="text-gray-800 font-medium flex justify-between">Estado del Pedido: <span >{orders.estado_pedido}</span></p>
            <div className="flex justify-between gap-3 mt-4">
                <button className="bg-green-600 rounded-xl w-36 outline-none h-9 hover:bg-green-700 text-white" onClick={handleClick}>Entregado</button>
                <button className="bg-blue-600 rounded-xl w-36 outline-none h-9 hover:bg-blue-700 text-white">Facturar</button>
            </div>
        </div>
    );
}

export default CampoOrder;
