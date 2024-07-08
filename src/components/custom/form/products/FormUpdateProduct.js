import { GiTacos } from "react-icons/gi";
import { MdOutlineAttachMoney } from "react-icons/md";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Swal from "sweetalert2";

const FormUpdateProduct = ({ product, actualizarProducto, cerrarFormulario }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        setValue
    } = useForm();

    // Al cargar el formulario, establecer los valores iniciales del producto
    useState(() => {
        setValue("nombre", product.nombre);
        setValue("precio", product.precio);
        setValue("imagen", product.imagen);
        setValue("categoria", product.categoria);
        setValue("descripcion", product.descripcion);
        setValue("estado", product.estado);
    }, [product, setValue]);

    const enviarDatos = async (dataUser) => {
        if (dataUser.imagen && dataUser.imagen.length > 0) {
            // Convertir la imagen a base64
            const imagenBase64 = await convertirImagenABase64(dataUser.imagen[0]);
            // Agregar la imagen convertida a base64 a los datos del usuario
            dataUser.imagen = imagenBase64;
        }

        const options = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataUser)
        };

        await fetch(`/api/products/${product.id}`, options)
            .then(res => res.json())
            .then(data => processData(data));
    };

    const convertirImagenABase64 = (imagen) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => {
                const base64String = reader.result;
                resolve(base64String);
            };
            reader.onerror = () => {
                reject(new Error('Error al leer el archivo.'));
            };
            reader.readAsDataURL(imagen);
        });
    };

    const exito = () => {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Actualización Exitosa',
            showConfirmButton: false,
            timer: 1500
        });
    };

    const error = () => {
        Swal.fire({
            position: 'center',
            title: 'Error',
            text: 'Se ha detectado un error al actualizar el producto',
            icon: 'error',
            showConfirmButton: false,
            timer: 1500
        });
    };

    const processData = (data) => {
        if (data) {
            exito();
            actualizarProducto(data);
            cerrarFormulario();
        } else {
            error();
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit(enviarDatos)} className="w-[700px] bg-[rgba(17,17,16,0.92)] border rounded-2xl flex justify-center items-center flex-col space-y-6">
                <div className="text-center text-xl text-white pt-3">Formulario de Actualización de Producto</div>

                <div className="w-[500px] flex flex-col space-y-2">
                    <div className="flex flex-row gap-52">
                        <div className="text-[rgb(247,247,247)] text-start">Nombre</div>
                        <div className="text-[rgb(247,247,247)] text-start">Precio</div>
                    </div>

                    <div className="flex justify-center items-center flex-row gap-5">
                        <div className="relative flex flex-col">
                            <input {...register("nombre", { required: true })} autoComplete="off" className="bg-neutral-300 border rounded w-[240px] outline-none h-9 pl-12 placeholder:text-slate-600" placeholder="Ingrese el nombre" />
                            <GiTacos className="w-7 absolute top-[10px] left-2" />
                            {errors.nombre && <span className="text-[#ff0000] text-xs">Este campo es requerido</span>}
                        </div>
                        <div className="relative flex flex-col">
                            <input {...register("precio", { required: true })} autoComplete="off" className="bg-neutral-300 border rounded w-[240px] outline-none h-9 pl-12 placeholder:text-slate-600" placeholder="Ingrese el precio" />
                            <MdOutlineAttachMoney className="w-7 absolute top-[10px] left-2" />
                            {errors.precio && <span className="text-[#ff0000] text-xs">Este campo es requerido</span>}
                        </div>
                    </div>
                </div>

                <div className="w-[500px] flex flex-col space-y-2">
                    <div className="flex flex-row gap-52">
                        <div className="text-[rgb(247,247,247)] text-start">Imagen</div>
                        <div className="text-[rgb(247,247,247)] text-start">Categoría</div>
                    </div>

                    <div className="flex justify-items-start flex-row gap-5">
                        <div className="flex flex-col w-[240px]">
                            <input {...register("imagen")} autoComplete="off" className="w-full block text-lg text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-neutral-300 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" type="file" />
                            {errors.imagen && <span className="text-[#ff0000] text-xs">Este campo es requerido</span>}
                        </div>

                        <div className="flex items-center w-[240px]">
                            <select {...register("categoria", { required: true })} className="text-sm rounded-lg w-full p-2.5 bg-neutral-300">
                                <option value="platos fuertes">Platos Fuerte</option>
                                <option value="entradas">Entradas</option>
                                <option value="bebidas">Bebidas</option>
                            </select>
                            {errors.categoria && <span className="text-[#ff0000] text-xs">Este campo es requerido</span>}
                        </div>
                    </div>
                </div>

                <div className="w-[500px] flex flex-col space-y-2">
                    <div className="flex flex-row gap-52">
                        <div className="text-[rgb(247,247,247)] text-start">Descripción</div>
                        <div className="text-[rgb(247,247,247)] text-start">Estado</div>
                    </div>

                    <div className="flex flex-row gap-5 justify-items-start pb-7">
                        <div className="w-[240px] flex flex-col">
                            <textarea {...register("descripcion", { required: true })} className="w-full text-lg pl-4 bg-neutral-300 rounded"></textarea>
                            {errors.descripcion && <span className="text-xs text-[#ff0000]">Este campo es requerido</span>}
                        </div>

                        <div className="flex items-center w-[240px]">
                            <select {...register("estado", { required: true })} className="text-sm rounded-lg w-full p-2.5 bg-neutral-300">
                                <option value="activo">Activo</option>
                                <option value="agotado">Agotado</option>
                            </select>
                            {errors.estado && <span className="text-[#ff0000] text-xs">Este campo es requerido</span>}
                        </div>
                    </div>

                    <div className="flex flex-row gap-5">
                        <div className="flex items-center">
                            <button type="submit" className="bg-green-600 rounded-xl w-[240px] outline-none h-9 pl-5 hover:bg-green-700 text-white text-center">Actualizar</button>
                        </div>
                        <div className="flex items-center">
                            <button onClick={cerrarFormulario} className="bg-red-600 rounded-xl w-[240px] outline-none h-9 pl-5 hover:bg-red-700 text-white text-center">Cancelar</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default FormUpdateProduct;
