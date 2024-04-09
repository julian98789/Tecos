import { useEffect, useState } from "react";

const CampoOrder = ({ orders, updateCampoOrder }) => {
    const [entregado, setEntregado] = useState(false);

    useEffect(() => {
        setEntregado(orders.estado === 'entregado');
    }, [orders.estado]);

    const handleClick = async () => {
        await updateCampoOrder(orders.id);
        setEntregado(true);
    };

    if (entregado) {
        return null;
    }

    return (
        <div className="max-w-10xl mx-auto grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col">
                <p className="text-xl font-semibold mb-2">ID: {orders.id}</p>
                <p className="text-gray-600">{orders.unidad_producto}</p>
                <p className="text-gray-600">{orders.valor_total}</p>
                <p className="text-gray-600">{orders.fecha}</p>
                <p className="text-gray-600">{orders.hora}</p>
                <p className="text-gray-600">{orders.estado}</p>
                <div className="flex justify-between gap-3 mt-4">
                    <button className="bg-green-600 rounded-xl w-36 outline-none h-9  hover:bg-green-700 text-white" onClick={handleClick}>Entregado</button>
                    <button className="bg-blue-600 rounded-xl w-36 outline-none h-9  hover:bg-blue-700 text-white">Facturar</button>
                </div>
            </div>
        </div>
    );
}

export default CampoOrder;