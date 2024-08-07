'use client'
import React, { useState } from "react";
import useCart from "@/hook/useCart";
import Swal from "sweetalert2";

const Card = ({ product, onAddToCart }) => {
    const { addToCart, getCart } = useCart();
    const [cantidad, setCantidad] = useState(1); // Estado para almacenar la cantidad del producto

    const handleChange = (event) => {
        // Actualiza la cantidad cuando cambia el valor del campo de entrada
        setCantidad(parseInt(event.target.value));
    };

    const error = () => {
        Swal.fire({
            position: 'center',
            title: 'Perdon',
            text: 'El producto esta agotado',
            icon: 'error',
            showConfirmButton: false,
            timer: 1500
        })
    }

    const handleClick = () => {
        if (product.estado === 'agotado') {
           error()
            return;
        }

        // Agrega el producto al carrito con la cantidad seleccionada
        addToCart({ ...product, cantidad });
        setCantidad(1);
        onAddToCart();
    };

    return (
        <div className="relative h-[440px] bg-neutral-800 rounded-md shadow-md text-neutral-100 p-4 w-60">
            <img src={product.imagen} alt={product.nombre} className="w-full h-48 object-cover mb-4" />
            <h2>{product.nombre}</h2>
            <p className="text-gray-100 mb-4">{product.descripcion}</p>
            <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Precio: ${product.precio}</span>
            </div>
            <div className="text-sm font-medium ">
                <span className="block" >Categoría: {product.categoria}</span>
                <span>Estado: <span className={product.estado === 'activo' ? 'text-green-600' : 'text-red-600'}>{product.estado}</span></span>

            </div>
            
            <div className="absolute bottom-3 left-3 flex items-center mt-4 ">
                <input
                    type="number"
                    min="1"
                    value={cantidad} // Valor actual de la cantidad
                    onChange={handleChange} // Manejador para actualizar la cantidad
                    className="rounded-md p-2 mr-2 w-28 bg-neutral-900 border border-white "
                    placeholder="Cantidad"
                />
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white rounded-md px-4 py-2"
                    onClick={handleClick}
                   
                >
                    Agregar
                </button>
            </div>
        </div>
    );
};

export default Card;
