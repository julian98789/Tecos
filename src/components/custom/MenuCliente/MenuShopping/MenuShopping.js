'use client'
import React, { useState, useEffect } from 'react';
import useCart from '@/hook/useCart';
import Swal from 'sweetalert2';

const MenuShopping = ({ onItemRemoved }) => {
    const { getCart, removeFromCart } = useCart();
    const [subtotal, setSubtotal] = useState(0);
    const mesa = getCart();
    mesa.filter(item => !item.hasOwnProperty('id_mesa'),);

    const calculateSubtotal = () => {
        const cart = getCart();
        const total = cart
            .filter(item => !item.hasOwnProperty('id_mesa')) // Filtrar elementos que no sean mesas
            .reduce((acc, item) => acc + (item.precio * item.cantidad), 0); // Sumar precios de productos
        setSubtotal(total);
    };
    
    const handleRemoveFromCart = (index) => {
        removeFromCart(index);
        onItemRemoved();
        calculateSubtotal();
    };

    useEffect(() => {
        calculateSubtotal();
    }, []);

  
    const handleCheckout = () => {
      const inputAmount = parseFloat(document.getElementById("inputAmount").value);

      if (isNaN(inputAmount)) {
        Swal.fire({
          position: 'top-center',
          icon: 'error',
          title: 'Caracteres no validos',
          showConfirmButton: false,
          timer: 1500
        });
          return;
      }
  
      if (inputAmount < subtotal) {
        Swal.fire({
          position: 'top-center',
          text: 'Saldo insuficiente',
          icon: 'error',
          showConfirmButton: false,
          timer: 2500
       })  
          return;
      }
      const cart = getCart();
    const productos = cart
        .filter(item => item.id && item.cantidad && item.precio) // Filtrar elementos con todas las propiedades necesarias
        .map(item => ({
            id_producto: item.id,
            cantidad_producto: item.cantidad,
            valor_unitario: item.precio
        }));

    const payload = {
        productos,
        valor_total: subtotal,
        estado: "pagado",
        mesa_id: mesa[0].id_mesa,
        valor_pagado: inputAmount
    };
      fetch('/api/order', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
      })
      .then(response => {
          if (!response.ok) {
              throw new Error('Error al enviar la solicitud');
          }
          return response.json();
      })
      .then(data => processData(data))
      
      .catch(error => {
          console.error('Error al enviar el pedido:', error);
          
      });
      
    };
    
    const exito = () => {
      Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'pedido realizado con exito',
        showConfirmButton: false,
        timer: 1500
      });
    } 

    const error = () =>{
      Swal.fire({
          position: 'top-center',
          title: 'Error',
          text: 'Se ha detectado un error',
          icon: 'error',
          showConfirmButton: false,
          timer: 2500
       })      
  }

  const processData = (data) => {
      if (data) {
        exito();
      } else {
          error();
      }
  }

    return (
        <div>
            <h2 className='text-slate-400'>Resumen de compra</h2>
            <div className='gap-5'>
                <ul className='pt-6'>
                {getCart().map((item, index) => (
                        <li key={index}>
                            {item.hasOwnProperty('id_mesa') ? (
                                <>{<>Mesa: {item.id_mesa}<br/></>}</>
                            ) : (
                                <>
                                    
                                    {item.nombre} - Cantidad: {item.cantidad}
                                    <div className='flex flex-row'>
                                        Precio: ${item.precio.toLocaleString()}
                                        <button onClick={() => handleRemoveFromCart(index)} className='text-red-500 ml-2'>Eliminar</button>
                                    </div>
                                </>
                            )}
                        </li>
                    ))}

                </ul>
            </div>

            <div className='flex flex-col space-y-3 pt-6'>
                <p>Subtotal: ${subtotal.toLocaleString()}</p>
                <input className='pl-3 h-8'
                    id='inputAmount'
                    type="number"
                    placeholder="Ingrese la cantidad a pagar"
                />
                <button onClick={handleCheckout} className='bg-green-500 rounded-lg'>Realizar pago</button>
              
            </div>
        </div>
    );
};
 


export default MenuShopping;
