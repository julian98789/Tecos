'use client'
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useState } from "react";

 
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
            timer: 1500
         })      
    }
      
      const processData = (data) => {
        if (data.result) {
          exito()
        }else{
          error()
        }
      }
       
        const [formularioAbierto, setFormularioAbierto] = useState(true);

        const cerrarFormulario = () => {
          setFormularioAbierto(false);
        }

      

    return (
      <div>
         {formularioAbierto && (
        <form onSubmit={handleSubmit(enviarDatos)} className="bg-[rgba(17,17,16,0.92)] border rounded-2xl p-8 flex justify-center items-center flex-col space-y-6 pb-16 w-[700px]">
          <div className="text-center text-2xl text-white pt-3">Formulario de registro de empleados</div>
      
          <div className="w-[500px] flex flex-col space-y-2 ">
            <div className="flex flex-row gap-52">
              <div className="text-[rgb(247,247,247)] text-start ">Nombre</div>
              <div className="text-[rgb(247,247,247)] text-start ">Apellido</div>
            </div>
      
            <div className="flex justify-center items-center flex-row gap-5">
              <div className="flex justify-between items-center flex-col">
                <input {...register("nombre",{required: true })} className="bg-neutral-300 border rounded w-[240px] h-9 outline-none pl-3 placeholder:text-slate-600"  placeholder="Ingrese su nombre"/>
                {errors.nombre && <span className="text-[#ff0000] text-xs">Este espacio es requerido</span>}
              </div>
              <div className="flex items-center flex-col">
                <input {...register("apellido",{ required: true })} className="bg-neutral-300 border rounded w-[240px] outline-none h-9 pl-3 placeholder:text-slate-600" placeholder="Ingrese su apellido"/>
                {errors.apellido && <span className="text-[#ff0000] text-xs">Este espacio es requerido</span>}
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
                <input {...register("cedula",{ required: true })} className="bg-neutral-300 border rounded w-[240px] outline-none h-9 pl-3 placeholder:text-slate-600 text-start" placeholder="Ingrese identificacion"/>
                {errors.cedula && <span className="text-[#ff0000] text-xs">Este espacio es requerido</span>}
              </div>
              <div className="flex items-center flex-col">
                <input {...register("correo",{ required: true })} className="bg-neutral-300 border rounded w-[240px] outline-none h-9 pl-3 placeholder:text-slate-600 text-start" placeholder="Ingrese Email"/>
                {errors.correo && <span className="text-[#ff0000] text-xs">Este espacio es requerido</span>}
              </div>
            </div>
          </div>
      
          <div className="w-[500px] flex flex-col space-y-2 ">
            <div className="flex flex-row gap-28">
              <div className="text-[rgb(247,247,247)] text-start">Ingresar Contraseña</div>
              <div className="text-[rgb(247,247,247)] text-start">Confirmar Contraseña</div>
            </div>
      
            <div className="flex justify-center items-center flex-row gap-5">
              <div className="flex items-center flex-col">
                <input {...register("password",{ required: true })} className="bg-neutral-300 border rounded w-[240px] outline-none h-9 pl-3 placeholder:text-slate-600" placeholder="Ingrese su contraña"/>
                {errors.password && <span className="text-[#ff0000] text-xs">Este espacio es requerido</span>}
              </div>
              <div className="flex items-center flex-col">
                <input {...register("ConfrimPass",{ required: true })} className="bg-neutral-300 border rounded w-[240px] outline-none h-9 pl-3 placeholder:text-slate-600" placeholder="Confirme su contraseña"/>
                {errors.ConfrimPass && <span className="text-[#ff0000] text-xs flex justify-start">Este espacio es requerido</span>}
              </div>
            </div>
          </div>
      
          <div className="w-[500px] flex flex-col space-y-2">
            <div className="text-[rgb(247,247,247)] text-start">Seleciona un rol</div>
      
            <div className="flex items-center">
              <select {...register("rol",{ required: true })}  id="countries" className="border text-sm rounded-lg w-full p-2.5 bg-neutral-300">
                <option  value="admin" className="">Administrador</option>
                <option value="cajero">Cajero</option>
              </select>
            </div>
          </div>      
      
          <div className="w-[500px] flex flex-row gap-5">
            <div className="flex items-center">
              <button  type="submit" className="bg-green-600 rounded-xl w-[240px] outline-none h-9 pl-5 hover:bg-green-700 text-white">Registrar</button>
            </div>
            <div className="flex items-center">
              <button  onClick={cerrarFormulario} className="bg-red-600 rounded-xl w-[240px] outline-none h-9 pl-5 hover:bg-red-700 text-white" href="/admin">Cancelar</button>
            </div>
          </div>
        </form>
           )}
      </div>
      );
}
export default FormNewEmployed;