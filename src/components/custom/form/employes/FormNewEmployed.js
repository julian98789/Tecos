'use client'
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { HiOutlineIdentification } from "react-icons/hi";
import { MdOutlineEmail } from "react-icons/md";
import { CgPassword } from "react-icons/cg";

 
const FormNewEmployed = () =>{
    
    const { 
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const enviarDatos = async (dataUser) =>{   
        const options = {   
            method: 'POST',  
            header: {  
                'Content-Type': 'application/json'  
            },
            body: JSON.stringify(dataUser)   
        }
        
         await fetch("/api/user",options)  
        .then(res=>res.json()) 
        .then(data=>processData(data))    
    }    
      const exito = () => {
        Swal.fire({
          position: 'top-center',
          icon: 'success',
          title: 'Registro Exitoso',
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
    if (data.result) {
      exito();
    } else {
      error();
    }
  }

      

       
        const [formularioAbierto, setFormularioAbierto] = useState(true);

        const cerrarFormulario = () => {
          setFormularioAbierto(false);
        }

      

    return (
      <div>
         {formularioAbierto && (
        <form onSubmit={handleSubmit(enviarDatos)} className="bg-[rgba(17,17,16,0.92)] border rounded-2xl p-8 flex justify-center items-center flex-col space-y-6 pb-14 w-[700px]">
          <div className="text-center text-2xl text-white pt-3">Formulario de registro de empleados</div>
      
          <div className="w-[500px] flex flex-col space-y-2 ">
            <div className="flex flex-row gap-52">
              <div className="text-[rgb(247,247,247)] text-start ">Nombre</div>
              <div className="text-[rgb(247,247,247)] text-start ">Apellido</div>
            </div>
      
            <div className="flex justify-center items-center flex-row gap-5">
              <div className="flex justify-between items-center flex-col">
                <div className=" relative">
                  <input {...register("nombre",{required: true })}  autoComplete="off" className="bg-neutral-300 border rounded w-[240px] h-9 outline-none pl-10 placeholder:text-slate-600"  placeholder="Ingrese su nombre"/>
                  <FaRegUser className="w-7 absolute top-[10px] left-1 text-slate-800"/>
                  {errors.nombre && <span className="text-[#ff0000] text-xs">Este espacio es requerido</span>}
                </div>
              </div>
              <div className="flex items-center flex-col">
                <div className=" relative">
                  <input {...register("apellido",{ required: true })}  autoComplete="off" className="bg-neutral-300 border rounded w-[240px] outline-none h-9 pl-10 placeholder:text-slate-600" placeholder="Ingrese su apellido"/>
                  <FaRegUser className="w-7 absolute top-[10px] left-1 text-slate-800"/>
                  {errors.apellido && <span className="text-[#ff0000] text-xs">Este espacio es requerido</span>}
                </div>
              </div>
            </div>
          </div>
      
          <div className="w-[500px] flex flex-col space-y-2">
            <div className="flex flex-row gap-40">
              <div className="text-[rgb(247,247,247)] text-start">Identificacion</div>
              <div className="text-[rgb(247,247,247)] text-start">Correo</div>
            </div>
      
            <div className="flex justify-items-start flex-row gap-5">
              <div className="flex items-center flex-col">
                <div className=" relative">
                  <input {...register("cedula",{ required: true })}  autoComplete="off" className="bg-neutral-300 border rounded w-[240px] outline-none h-9 pl-10 placeholder:text-slate-600 text-start" placeholder="Ingrese identificacion"/>
                  <HiOutlineIdentification className="w-7 absolute top-[10px] left-1 text-slate-800"/>
                  {errors.cedula && <span className="text-[#ff0000] text-xs">Este espacio es requerido</span>}
                </div>
              </div>
              <div className="flex items-center flex-col">
                <div className=" relative">
                  <input {...register("correo",{ required: true })} name="correo" autoComplete="off" className="bg-neutral-300 border rounded w-[240px] outline-none h-9 pl-10 placeholder:text-slate-600 text-start" placeholder="Ingrese Email"/>
                  <MdOutlineEmail className="w-7 absolute top-[10px] left-1 text-slate-800"/>
                  {errors.correo && <span className="text-[#ff0000] text-xs">Este espacio es requerido</span>}
                </div>
              </div>
            </div>
          </div>
      
          <div className="w-[500px] flex flex-col space-y-2 ">
            <div className="flex flex-row gap-28">
              <div className="text-[rgb(247,247,247)] text-start">Ingresar Contraseña</div>
              <div className="text-[rgb(247,247,247)] text-start">Seleciona un rol</div>
            </div>
      
            <div className="flex justify-center items-center flex-row gap-5">
              <div className="flex items-center flex-col">
              <div className=" relative">
                  <input {...register("password",{ required: true })}   type="password" className="bg-neutral-300 border rounded w-[240px] outline-none h-9 pl-10 placeholder:text-slate-600" placeholder="Ingrese su contraña"/>
                  <CgPassword className="w-7 absolute top-[10px] left-1 text-slate-800"/>
                  {errors.password && <span className="text-[#ff0000] text-xs">Este espacio es requerido</span>}
                </div>
              </div>
              <div className="flex items-center flex-col">
                <div className=" relative">
                  <select {...register("rol",{ required: true })}  id="countries" className="bg-neutral-300 border rounded w-[240px] outline-none h-9 pl-3">
                    <option  value="admin">Administrador</option>
                    <option value="cajero">Cajero</option>
                  </select>
                </div>
              </div>
            </div>
          </div>    

          <div className="w-[500px] flex flex-row gap-5 space-y-6">
            <div className="flex items-center mt-[29px]">
              <button  type="submit" className="bg-green-600 rounded-xl w-[240px] outline-none h-9 pl-5 hover:bg-green-700 text-white">Registrar</button>
            </div>
            <div className="flex items-center ">
              <button  onClick={cerrarFormulario} className="bg-red-600 rounded-xl w-[240px] outline-none h-9 pl-5 hover:bg-red-700 text-white">Cancelar</button>
            </div>
          </div>
        </form>
           )}
      </div>
      );
}
export default FormNewEmployed;