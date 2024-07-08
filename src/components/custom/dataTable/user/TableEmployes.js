'use client'
'use client'
import { FaEdit } from "react-icons/fa";
import { IoMdRemoveCircle } from "react-icons/io";
import { IoSaveSharp } from "react-icons/io5";
import { MdCancel } from "react-icons/md";
import Swal from "sweetalert2";
import { useState } from "react";

const TableEmployes = ({ users, actualizarUsuario }) => {
    const [editMode, setEditMode] = useState(false);
    const [editedUser, setEditedUser] = useState({ ...users });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedUser({ ...editedUser, [name]: value });
    };

    const exito = () => {
        Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Operación exitosa',
            showConfirmButton: false,
            timer: 1500
        });
    };

    const error = () => {
        Swal.fire({
            position: 'top-center',
            title: 'Error',
            text: 'Se ha detectado un error',
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
            body: JSON.stringify(editedUser)
        };

        try {
            const response = await fetch(`/api/user/${editedUser.cedula}`, options);
            const data = await response.json();
            if (data) {
                exito();
                actualizarUsuario(editedUser);
                setEditMode(false);
            } else {
                error();
            }
        } catch (error) {
            console.error('Error updating user:', error);
            error();
        }
    };

    const handleEditClick = () => {
        setEditMode(true);
        setEditedUser({ ...users });
    };

    const handleCancelClick = () => {
        setEditMode(false);
        setEditedUser({ ...users });
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
                    await eliminarUsuario(users.cedula);
                    Swal.fire(
                        'Eliminado',
                        'El usuario ha sido eliminado correctamente',
                        'success'
                    );
                } catch (error) {
                    console.error('Error al eliminar el usuario:', error);
                    Swal.fire(
                        'Error',
                        'Se ha producido un error al eliminar el usuario',
                        'error'
                    );
                }
            }
        });
    };

    const eliminarUsuario = async (userId) => {
        const options = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: userId })
        };

        try {
            const response = await fetch(`/api/user/${userId}`, options);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error deleting user:', error);
            throw error;
        }
    };

    return (
        <div className="flex justify-center">
            {editMode ? (
                <div className="flex items-center bg-slate-50 rounded-lg p-2 border-2 border-neutral-900">
                    
                    <input
                        type="text"
                        name="nombre"
                        value={editedUser.nombre}
                        onChange={handleInputChange}
                        className="w-36 px-1 py-2 bg-slate-50 outline-none"
                    />
                    <input
                        type="text"
                        name="apellido"
                        value={editedUser.apellido}
                        onChange={handleInputChange}
                        className="w-36 pl-8 py-2 bg-slate-50 outline-none"
                    />
                    <div className="w-40 pl-10 py-4">{users.cedula}</div>
                    <input
                        type="text"
                        name="correo"
                        value={editedUser.correo}
                        onChange={handleInputChange}
                        className="w-52 pl-8 py-2 bg-slate-50 outline-none"
                    />
                    <input
                        type="text"
                        name="password"
                        value={editedUser.password}
                        onChange={handleInputChange}
                        className="w-32 pl-8 py-2 bg-slate-50 outline-none"
                    />
                    <select
                        name="rol"
                        value={editedUser.rol}
                        onChange={handleInputChange}
                        className="w-28 pl-8 py-2 bg-slate-50 outline-none"
                    >
                        <option value="admin">admin</option>
                        <option value="cajero">cajero</option>
                    </select>
                    <button onClick={handleUpdateClick} className="w-24 px-4 py-4 bg-slate-50 overflow-hidden text-neutral-800 hover:neutral-500">
                        <IoSaveSharp className="text-2xl text-neutral-800 hover:text-green-700" />
                    </button>
                    <button onClick={handleCancelClick} className="w-28 px-4 py-4 bg-slate-50 overflow-hidden text-neutral-800 hover:neutral-500">
                        <MdCancel className="text-2xl text-neutral-800 hover:text-red-600" />
                    </button>
                </div>
            ) : (
                <div className="flex justify-center">
                    <div className="w-40 px-4 py-4 bg-slate-50">{users.nombre}</div>
                    <div className="w-40 px-4 py-4 bg-slate-50">{users.apellido}</div>
                    <div className="w-40 px-4 py-4 bg-slate-50">{users.cedula}</div>
                    <div className="w-52 px-4 py-4 bg-slate-50">{users.correo}</div>
                    <div className="w-32 px-4 py-4 bg-slate-50">{users.password}</div>
                    <div className="w-24 px-4 py-4 bg-slate-50">{users.rol}</div>
                    <button onClick={handleEditClick} className="flex justify-center w-24 px-4 py-4 bg-slate-50 overflow-hidden text-neutral-800 hover:neutral-500">
                        <FaEdit className="hover:text-neutral-600" />
                    </button>
                    <button onClick={handleDeleteClick} className="flex justify-center w-24 px-4 py-4 bg-slate-50 overflow-hidden text-neutral-800 hover:neutral-500">
                        <IoMdRemoveCircle className="hover:text-neutral-600" />
                    </button>
                </div>
            )}
        </div>
    );
};

export default TableEmployes;
