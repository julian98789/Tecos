'use client'
import { useForm } from "react-hook-form"
const LoginForm = () =>{

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    console.log(watch("user"))

    const enviarDatos = async (datos) =>{
        console.log('se estan enviando los datos')
        console.log(datos)
         await fetch("/api/login")
        .then(res=>res.json())
        .then(data=>console.log(data))
    }

    return <form 
    onSubmit={handleSubmit(enviarDatos)}
    className="w-full max-w-[300px] h-[300px] bg-neutral-600 rounded-xl flex flex-col justify-center items-center gap-2 ">

        <div className="text-xl text-white">LOGIN</div>
        <div className="flex flex-col gap-3">
            <input {...register("user")} className="bg-white rounded w-full outline-none"/>
            <input {...register("pass", { required: true })} className="bg-white rounded w-full outline-none"/>
        </div>
        {errors.pass && "esto es requerido"}
        <button className="w-full mt-2 max-w-[220px] bg-orange-600 rounded text-white" type="submit">
            ingresar
        </button>

    </form>
}
export default LoginForm