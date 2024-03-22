'use client'
import { HiOutlineIdentification } from "react-icons/hi";
import { MdOutlineEmail } from "react-icons/md";
import { CgPassword } from "react-icons/cg";
import { useForm } from "react-hook-form";
import { FaRegUser } from "react-icons/fa";
import Link from "next/link";


 
const FormNewEmployed = () =>{
    

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const enviarDatos = async (datos) =>{
        console.log('se estan enviando los datos')
        console.log(datos)
         await fetch("/api/admin")
        .then(res=>res.json())
        .then(data=>console.log(data))
    }


    return  (  <form className=" bg-[rgba(17,17,16,0.92)] border  rounded-2xl p-8 flex justify-center items-center flex-col space-y-10 mt-auto mb-auto pb-16 w-[700px]" onSubmit={handleSubmit(enviarDatos)}>
        
            
    <div className="text-center text-2xl text-white pt-3">Formulario de registro de empleados</div>
    
    <div className="w-[500px] flex flex-col space-y-3 ">
    <div className="text-white text-start ">Nombre del empleado</div>
    <div className="flex flex-row gap-52">
    <div className="text-[rgb(141,143,138)] text-start ">Nombre</div>
    <div className="text-[rgb(141,143,138)] text-start ">Apellido</div>
    </div>

    <div className="flex justify-center items-center flex-row gap-5">
    
        <div className=" relative">
            <input {...register("name")} {...register("name",{ required: true })}className="bg-[rgba(141,143,138,0.82)] border rounded w-[240px] outline-none h-9  pl-10 placeholder:text-slate-300"  placeholder="Ingrese su nombre"/>
            <FaRegUser className="w-7 absolute top-[10px] left-1 text-slate-800"/>
            {errors.name && <span className="text-[#ff0000] text-xs ">Este espacio es requerido</span>}
        </div >
        
        <div className=" relative ">
       
            <input {...register("lastname")} {...register("lastname",{ required: true })} className="bg-[rgba(141,143,138,0.82)]  border rounded w-[240px] outline-none h-9  pl-10 placeholder:text-slate-300" placeholder="Ingrese su apellido"/>
            <FaRegUser className="w-7 absolute top-[10px] left-1 text-slate-800"/>
            {errors.lastname && <span className="text-[#ff0000] text-xs ">Este espacio es requerido</span>}
        </div>
        

    </div>
    </div>

    <div className="w-[500px] flex flex-row gap-5">
    <div className="w-[250px] flex flex-col space-y-3 ">
    <div className="text-white text-start ">Indentificacion del empleado</div>
    <div className="text-[rgba(141,143,138,255)] text-start ">C.C</div>

    <div className="flex justify-items-start flex-row gap-5">
    
        <div className=" relative ">
            <input {...register("id")} {...register("id",{ required: true })} className="bg-[rgba(141,143,138,0.82)] border rounded w-[240px] outline-none h-9  pl-10 placeholder:text-slate-300 text-start"  placeholder="Ingrese identificacion"/>
            <HiOutlineIdentification className="w-7 absolute top-[10px] left-1 text-slate-800"/>
            {errors.id && <span className="text-[#ff0000] text-xs ">Este espacio es requerido</span>}
        </div >
        
    </div>
    </div>

    <div className="w-[250px] flex flex-col space-y-3  ">
    <div className="text-white text-start ">Correo Electronico</div>
    <div className="text-[rgba(141,143,138,255)] text-start ">Email</div>

    <div className="flex justify-items-start flex-row gap-5">
    
        <div className=" relative ">
            <input {...register("email")} {...register("email",{ required: true })} className="bg-[rgba(141,143,138,0.82)] border  rounded w-[240px] outline-none h-9  pl-10 placeholder:text-slate-300 text-start"  placeholder="Ingrese Email"/>
            <MdOutlineEmail className="w-7 absolute top-[10px] left-1 text-slate-800"/>
            {errors.email && <span className="text-[#ff0000] text-xs ">Este espacio es requerido</span>}
        </div >
        
    </div>
    </div>
    </div>

    <div className="w-[500px] flex flex-col space-y-3 ">
    <div className="text-white text-start ">Contraeña</div>
    <div className="flex flex-row gap-36">
    <div className="text-[rgb(141,143,138)] text-start ">Ingresar Contraseña</div>
    <div className="text-[rgb(141,143,138)] text-start ">Confirmar Contraseña</div>
    </div>

    <div className="flex justify-center items-center flex-row gap-5">
    
        <div className=" relative">
            <input {...register("pass")} {...register("pass",{ required: true })} className="bg-[rgba(141,143,138,0.82)] border rounded w-[240px] outline-none h-9  pl-10 placeholder:text-slate-300"  placeholder="Ingrese su contraña"/>
            <CgPassword className="w-7 absolute top-[10px] left-1 text-slate-800"/>
            {errors.pass && <span className="text-[#ff0000] text-xs ">Este espacio es requerido</span>}
        </div >
        
        <div className=" relative ">
       
            <input {...register("ConfrimPass")} {...register("ConfrimPass",{ required: true })} className="bg-[rgba(141,143,138,0.82)]  border rounded w-[240px] outline-none h-9  pl-8 placeholder:text-slate-300" placeholder="Confirme su contraseña"/>
            <CgPassword className="w-7 absolute top-[10px] left-1 text-slate-800"/>
            {errors.ConfrimPass && <span className="text-[#ff0000] text-xs ">Este espacio es requerido</span>}
        </div>
       

    </div>
    </div>

    <div className="w-[500px] flex flex-col space-y-3  ">
    <div className="text-white text-start ">Cargo del empleado</div>
    <div className="text-[rgba(141,143,138,255)] text-start ">Seleciona un rol</div>

        <div className=" relative ">
      <select id="countries" className=" border  text-sm rounded-lg  w-full p-2.5 dark:bg-[rgba(141,143,138,0.82)]  dark:text-slate-100 ">
        
         <option value="admin">Administrador</option>
         <option value="cajero">Cajero</option>
       </select>
       </div>
   
    </div>      

        <div className="w-[500px] flex flex-row gap-5 ">

            <div className="relative ">
            <button type="submit" className="bg-green-600 rounded-xl w-[240px] outline-none h-9  pl-5 hover:bg-green-700 text-white">Registrar</button>
            </div>

            <div className="relative">
                
                    <button className=" bg-red-600  rounded-xl w-[240px] outline-none h-9  pl-5 hover:bg-red-700 text-white " href="/admin">Cancelar</button>
                
            </div>

        </div>

  </form>

  )
}
export default FormNewEmployed;