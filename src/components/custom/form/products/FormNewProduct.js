'use client'

import { GiTacos } from "react-icons/gi";
import { MdOutlineAttachMoney } from "react-icons/md";
import { useForm } from "react-hook-form";
import { useState } from "react"
import Swal from "sweetalert2";
import { TrendingUp } from "lucide-react";


const FormNewProduct = () =>{

   
  
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    
    const enviarDatos = async (dataUser) =>{ 
        if (dataUser.imagen && dataUser.imagen.length > 0) {
            // Convertir la imagen a base64
            const imagenBase64 = await convertirImagenABase64(dataUser.imagen[0]);
            
            // Agregar la imagen convertida a base64 a los datos del usuario
            dataUser.imagen = imagenBase64;
        }
   
        const options = {   
            method: 'POST',  
            header: {  
                'Content-Type': 'application/json'  
            },
            body: JSON.stringify(dataUser)   
        }
        //console.log(dataUser)
         await fetch("/api/products",options)  

        .then(res=>res.json())
        .then(data=>processData(data)) 
       
    } 
  
    const convertirImagenABase64 = (imagen) => {
        return new Promise((resolve, reject) => {
            // Crear un nuevo objeto FileReader
            const reader = new FileReader();
            
            
            // Configurar la función de devolución de llamada cuando se complete la lectura del archivo
            reader.onloadend = () => {
                // La propiedad result contendrá la representación de base64 de la imagen
                const base64String = reader.result;
                resolve(base64String);
            };
            
            // Manejar posibles errores de lectura del archivo
            reader.onerror = () => {
                reject(new Error('Error al leer el archivo.'));
            };
            
            // Leer el contenido de la imagen como base64
            reader.readAsDataURL(imagen);
        });
    };
    
  

     

    const exito = () => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Registro Exitoso',
          showConfirmButton: false,
          timer: 1500
        });
      }   

      const error = () =>{
        Swal.fire({
            position: 'center',
            title: 'Error',
            text: 'Se ha detectado un error',
            icon: 'error',
            showConfirmButton: false,
            timer: 1500
         })      
    }
      
      const processData = (data) => {
        if (data) {
          exito()
          console.log(data.result)
        }else{
          error()
        }
      }
   
        const [formularioAbierto, setFormularioAbierto] = useState(true);

        const cerrarFormulario = () => {
          setFormularioAbierto(false);
        }

    return(
      <div>
         {formularioAbierto && (
        <form onSubmit={handleSubmit(enviarDatos)}  className="w-[700px] bg-[rgba(17,17,16,0.92)] border  rounded-2xl  flex justify-center items-center flex-col space-y-6 ">

            <div className="text-center text-xl text-white pt-3">Formulario de productos</div>

            <div className="w-[500px] flex flex-col space-y-2 ">
                <div className="flex flex-row gap-52">
                    <div className="text-[rgb(247,247,247)] text-start ">Nombre</div>
                   <div className="text-[rgb(247,247,247)] text-start ">Precio</div>
                </div> 

                <div className="flex justify-center items-center flex-row gap-5">

                    <div className=" relative flex flex-col ">
                        <input {...register("nombre",{required:true})}  autoComplete="off" className=" bg-neutral-300 border rounded w-[240px] outline-none h-9  pl-12 placeholder:text-slate-600"  placeholder="Ingrese el nombre"/>
                        <GiTacos className="w-7 absolute top-[10px] left-2"/>
                        {errors.nombre && <span className="text-[#ff0000] text-xs ">Este campo es requerido</span>}
                    </div>
                    <div className=" relative flex flex-col">
                        <input {...register("precio",{required:true})}
                           autoComplete="off" className="bg-neutral-300  border rounded w-[240px] outline-none h-9  pl-12 placeholder:text-slate-600" placeholder="Ingrese el precio"/>
                        <MdOutlineAttachMoney className="w-7 absolute top-[10px] left-2"/>
                        {errors.precio && <span className="text-[#ff0000] text-xs ">Este campo es requerido</span>}

                    </div>
                </div>
            </div>

            <div className="w-[500px] flex flex-col space-y-2">

            <div className="flex flex-row gap-52">
                    <div className="text-[rgb(247,247,247)] text-start ">Imagen</div>
                   <div className="text-[rgb(247,247,247)] text-start ">Categoria</div>
                </div> 

                <div className="flex justify-items-start flex-row gap-5">
                        
                 <div className="flex flex-col w-[240px]">
                     <input
                     {...register("imagen", { required: true })}
                     autoComplete="off"
                       
                        className="w-full block text-lg text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-neutral-300 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                        type="file"/>
                        {errors.imagen && <span className="text-[#ff0000] text-xs">Este campo es requerido</span>}
                </div>


                        <div className=" flex items-center w-[240px]">
                        <select {...register("categoria",{required:true})} id="countries" className="   text-sm rounded-lg w-full  p-2.5 bg-neutral-300 ">
                            <option   value="platos fuertes" >Platos Fuerte</option>
                            <option   value="entradas">Entradas</option>
                            <option  value="bebidas">Bebidas</option>
                         </select>
                         {errors.categoria && <span className="text-[#ff0000] text-xs ">Este campo es requerido</span>}
                        </div>
                </div>
            </div>

            <div className="w-[500px] flex flex-col  space-y-2">
                <div className="flex flex-row">
                <div className="text-[rgb(247,247,247)] text-start ">Descripcion</div>
                </div>

                <div className="flex flex-row gap-5 justify-items-start pb-7">
                <div className="w-[240px]  flex flex-col ">
                    <textarea {...register("descripcion",{required:true})} className="w-full text-lg pl-4 bg-neutral-300 rounded"></textarea>
                    {errors.descripcion && <span className="text-xs text-[#ff0000]">Este campo es requerido</span>}
                </div>
                <div className="w-[240px] flex flex-col space-y-2 ">
                    <button type="submit" className="bg-green-700 w-full h-7 rounded-lg text-white hover:bg-green-800">Registra</button>
                    <button  onClick={cerrarFormulario} className="bg-red-700 w-full h-7 rounded-lg text-white hover:bg-red-800 ">Cancelar</button>
                </div>
                </div>
            </div>

        </form>
        )}
    </div>  
    )
}
export default FormNewProduct;