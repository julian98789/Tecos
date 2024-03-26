'use client'
import { useForm } from "react-hook-form";
 
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


    return  (  <form className=" bg-[rgba(17,17,16,0.92)] border  rounded-2xl p-8 flex justify-center items-center flex-col space-y-6 pb-16 w-[700px]" onSubmit={handleSubmit(enviarDatos)}>
        
            
    <div className="text-center text-2xl text-white pt-3">Formulario de registro de empleados</div>
    
    <div className="w-[500px] flex flex-col space-y-2 ">
    <div className="flex flex-row gap-52">
    <div className="text-[rgb(247,247,247)] text-start ">Nombre</div>
    <div className="text-[rgb(247,247,247)] text-start ">Apellido</div>
    </div>

    <div className="flex justify-center items-center flex-row gap-5">
    
        <div className="flex justify-between items-center  flex-col">
    
            <input {...register("name")} {...register("name",{ required: true })}className=" bg-neutral-300 border rounded w-[240px] h-9 outline-none   pl-3 placeholder:text-slate-600"  placeholder="Ingrese su nombre"/>
            {errors.name && <span className="text-[#ff0000] text-xs ">Este espacio es requerido</span>}
        
        </div >
        
        <div className=" flex items-center flex-col">
       
            <input {...register("lastname")} {...register("lastname",{ required: true })} className="bg-neutral-300  border rounded w-[240px] outline-none h-9  pl-3 placeholder:text-slate-600" placeholder="Ingrese su apellido"/>
            {errors.lastname && <span className="text-[#ff0000] text-xs ">Este espacio es requerido</span>}
        </div>
        

    </div>
    </div>

    <div className="w-[500px] flex flex-col space-y-2">
    <div className="flex flex-row gap-40">
    <div className="text-[rgb(247,247,247)] text-start ">Identificacion</div>
    <div className="text-[rgb(247,247,247)] text-start ">Correo</div>
    </div>

    <div className="flex justify-items-start flex-row gap-5">
    
        <div className=" flex items-center flex-col">
            <input {...register("id")} {...register("id",{ required: true })} className="bg-neutral-300 border rounded w-[240px] outline-none  h-9  pl-3 placeholder:text-slate-600 text-start"  placeholder="Ingrese identificacion"/>
            
            {errors.id && <span className="text-[#ff0000] text-xs ">Este espacio es requerido</span>}
        </div >
        
    

   
    
        <div className=" flex items-center flex-col ">
            <input {...register("email")} {...register("email",{ required: true })} className="bg-neutral-300 border  rounded w-[240px] outline-none h-9  pl-3 placeholder:text-slate-600 text-start"  placeholder="Ingrese Email"/>
           
            {errors.email && <span className="text-[#ff0000] text-xs ">Este espacio es requerido</span>}
        </div >
        
    </div>
    </div>
    

    <div className="w-[500px] flex flex-col space-y-2 ">
    
    <div className="flex flex-row gap-28">
    <div className="text-[rgb(247,247,247)] text-start ">Ingresar Contraseña</div>
    <div className="text-[rgb(247,247,247)] text-start ">Confirmar Contraseña</div>
    </div>

    <div className="flex justify-center items-center flex-row gap-5">
    
        <div className=" flex items-center flex-col">
            <input {...register("pass")} {...register("pass",{ required: true })} className="bg-neutral-300 border rounded w-[240px] outline-none h-9  pl-3 placeholder:text-slate-600"  placeholder="Ingrese su contraña"/>
            
            {errors.pass && <span className="text-[#ff0000] text-xs ">Este espacio es requerido</span>}
        </div >
        
        <div className=" flex items-center flex-col">
       
            <input {...register("ConfrimPass")} {...register("ConfrimPass",{ required: true })} className="bg-neutral-300  border rounded w-[240px] outline-none h-9  pl-3 placeholder:text-slate-600" placeholder="Confirme su contraseña"/>
           
            {errors.ConfrimPass && <span className="text-[#ff0000] text-xs flex justify-start">Este espacio es requerido</span>}
        </div>
       

    </div>
    </div>

    <div className="w-[500px] flex flex-col space-y-2  ">
    <div className="text-[rgb(247,247,247)] text-start ">Seleciona un rol</div>

        <div className=" flex items-center ">
      <select  id="countries" className=" border  text-sm rounded-lg  w-full p-2.5 bg-neutral-300 ">
        
         <option {...register("rolValue")} value="admin" className="">Administrador</option>
         <option {...register("rolValue")} value="cajero">Cajero</option>
       </select>
       </div>
   
    </div>      

        <div className="w-[500px] flex flex-row gap-5 ">

            <div className="flex items-center ">
            <button type="submit" className="bg-green-600 rounded-xl w-[240px] outline-none h-9  pl-5 hover:bg-green-700 text-white">Registrar</button>
            </div>

            <div className="flex items-center">
                
                    <button className=" bg-red-600  rounded-xl w-[240px] outline-none h-9  pl-5 hover:bg-red-700 text-white " href="/admin">Cancelar</button>
                
            </div>

        </div>

  </form>

  )
}
export default FormNewEmployed;