'use client'
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { useForm } from "react-hook-form"
const LoginForm = () =>{

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
         await fetch("/api/login",options)
        .then(res=>res.json())
        .then(data=>console.log(data))
    }

    return <form 
    onSubmit={handleSubmit(enviarDatos)}
    className="w-full max-w-[350px] h-[350px] bg-neutral-800 rounded-xl flex flex-col justify-center items-center gap-2 ">

        <div className="text-4xl  text-white  font-bold pb-11">LOGIN</div>
        <div className="flex flex-col gap-5">
            

            <div className=" relative ">
                <input {...register("user",{ required: true })} className="bg-white rounded w-full outline-none h-9  pl-10 " placeholder="Ingrese su usuario"/>
                <FaUser className="w-7 absolute top-[10px] left-1" />
            </div>
            {errors.user && <span className="text-[#ff0000] text-xs ">Este espacio es requerido</span>}
            
            <div className="  relative">
                <input {...register("pass", { required: true })} className="bg-white rounded w-full h-9 outline-none pl-10" placeholder="Ingrese su contraseña"/>
                <RiLockPasswordFill className="w-7 absolute top-[10px] left-1"/>
            </div>
            {errors.pass && <span className="text-[#ff0000] text-xs  ">Este espacio es requerido</span>}
           
        </div>

        <button className="w-full h-9 mt-4 max-w-[260px] bg-orange-600 rounded text-white" type="submit">
            Ingresar
        </button>

    </form>
}
export default LoginForm
