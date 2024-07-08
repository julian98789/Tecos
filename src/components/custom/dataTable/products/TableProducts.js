import { IoMdRemoveCircle, IoMdCreate } from "react-icons/io";
import Swal from "sweetalert2";
import { useState } from "react";
import { IoSaveSharp } from "react-icons/io5";
import { MdCancel } from "react-icons/md";

const TableProducts = ({ products, eliminarProducto, actualizarProducto }) => {
    const [editMode, setEditMode] = useState(false);
    const [editedProduct, setEditedProduct] = useState({ ...products });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedProduct({ ...editedProduct, [name]: value });
    };
    const exito = () => {
      Swal.fire({
          position: 'top-center',
          icon: 'success',
          title: 'Producto actualizado exitosamente',
          showConfirmButton: false,
          timer: 1500
      });
  };

  const error = () => {
      Swal.fire({
          position: 'top-center',
          title: 'Error',
          text: 'Se ha detectado un error al actualizar el producto',
          icon: 'error',
          showConfirmButton: false,
          timer: 2500
      });
  };


    const handleUpdateClick = async () => {
        const options = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(editedProduct)
        };

        try {
            const response = await fetch(`/api/products/${editedProduct.id}`, options);
            const data = await response.json();
            if (data) {
                exito();
                actualizarProducto(editedProduct);
                setEditMode(false);
            } else {
                error();
            }
        } catch (error) {
            console.error('Error updating product:', error);
           
        }
    };

    const handleEditClick = () => {
        setEditMode(true);
        setEditedProduct({ ...products });
    };

    const handleCancelClick = () => {
        setEditMode(false);
        setEditedProduct({ ...products });
    };

    const handleDeleteClick = () => {
        Swal.fire({
            title: '¿Estás seguro?',
            text: "¡No podrás revertir esto!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, eliminar'
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await eliminarProducto(products.id);
                    Swal.fire(
                        'Eliminado',
                        'El producto ha sido eliminado correctamente',
                        'success'
                    );
                } catch (error) {
                    console.error('Error al eliminar el producto:', error);
                    Swal.fire(
                        'Error',
                        'Se ha producido un error al eliminar el producto',
                        'error'
                    );
                }
            }
        });
    };

    
    return (
        <div className="flex justify-center">
            {editMode ? (
                <div className="flex items-center  bg-slate-50 rounded-lg p-2 border-2 border-neutral-900 ">
                    <div className="w-32 px-4 py-4 ">{products.id}</div>
                    <input
                        type="text"
                        name="nombre"
                        value={editedProduct.nombre}
                        onChange={handleInputChange}
                        className="w-40 px-1 py-2 bg-slate-50   outline-none"
                    />
                     <input
                        type="text"
                        name="descripcion"
                        value={editedProduct.descripcion}
                        onChange={handleInputChange}
                        className="w-36 px-4 py-2 bg-slate-50   outline-none"
                    />
                    <input
                        type="number"
                        name="precio"
                        value={editedProduct.precio}
                        onChange={handleInputChange}
                        className="w-24 px-1 py-2 bg-slate-50   outline-none"
                    />
                    <input
                        type="text"
                        name="categoria"
                        value={editedProduct.categoria}
                        onChange={handleInputChange}
                        className="w-36 px-4 py-2 bg-slate-50   outline-none"
                    />
                    <input
                        type="text"
                        name="imagen"
                        value={editedProduct.imagen}
                        onChange={handleInputChange}
                        className="w-64 px-1 py-2 bg-slate-50   outline-none"
                    />
                   
                    <div className="w-24 px-4 py-4 ">{products.estado}</div>
                    <button onClick={handleUpdateClick} className="w-24 px-4 py-4 bg-slate-50 overflow-hidden  text-neutral-800 hover:neutral-500">
                        <IoSaveSharp className="text-2xl text-neutral-800 hover:text-green-700" />
                    
                    </button>
                    <button onClick={handleCancelClick} className="w-28 px-4 py-4 bg-slate-50 overflow-hidden  text-neutral-800 hover:neutral-500">
                        <MdCancel className="text-2xl text-neutral-800 hover:text-red-600 " />
                    </button>
                </div>
            ) : (
                <div className="flex justify-center">
                    <div className="w-8 px-2 py-4 bg-slate-50  ">{products.id}</div>
                    <div className="w-40 px-1 py-4 bg-slate-50  ">{products.nombre}</div>
                    <div className="w-56 px-1 py-4 bg-slate-50  break-word">{products.descripcion}  </div>
                    <div className="w-24 px-1 py-4 bg-slate-50  ">{products.precio}</div>
                    <div className="w-36 px-4 py-4 bg-slate-50  ">{products.categoria}</div>
                    <div className="w-64 px-1 py-4 bg-slate-50  ">{products.imagen}</div>
                    <div className="w-24 px-4 py-4 bg-slate-50  ">{products.estado}</div>
                    <button onClick={handleEditClick} className="flex justify-center w-24 px-4 py-4 bg-slate-50 overflow-hidden  text-neutral-800 hover:neutral-500">
                        <IoMdCreate className="hover:text-neutral-600" />
                    </button>
                    <button onClick={handleDeleteClick} className="flex justify-center w-24 px-4 py-4 bg-slate-50 overflow-hidden  text-neutral-800 hover:neutral-500">
                        <IoMdRemoveCircle className="hover:text-neutral-600" />
                    </button>
                </div>
            )}
        </div>
    );
};

export default TableProducts;
