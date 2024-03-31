import React from "react";

const Card = ({ producto }) => {
   
  
    return (
      <div className="bg-white rounded-md shadow-md p-4">
        <img src={producto.img} alt={producto.nombre} className="w-full h-48 object-cover mb-4" />
        <h2>{nombre}</h2>
        <p className="text-gray-700 mb-4">{producto.descripcion}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium">Precio: ${producto.precio}</span>
          <span className="text-sm font-medium">Categoría: {producto.categoria}</span>
        </div>
        <div className="flex items-center mt-4">
          <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} className="border rounded-md p-1 mr-2" />
          <button className="bg-blue-500 text-white rounded-md px-4 py-2">Agregar</button>
        </div>
      </div>
    );
  };
  
  export default Card;