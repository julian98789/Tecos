'use client'
import { GiTacos } from "react-icons/gi";
import { MdOutlineAttachMoney } from "react-icons/md";
import { useForm } from "react-hook-form";
import { TrendingUp } from "lucide-react";

const FormNewProduct = () =>{

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const enviarDatos = async (datos) =>{
        console.log('se estan enviando los datos')
        console.log(datos)
         await fetch("/api/products")
        .then(res=>res.json())
        .then(data=>console.log(data))
    }

    return(<form className="w-[700px] bg-[rgba(17,17,16,0.92)] border  rounded-2xl  flex justify-center items-center flex-col space-y-6 "onSubmit={handleSubmit(enviarDatos)}>

            <div className="text-center text-xl text-white pt-3">Formulario de productos</div>

            <div className="w-[500px] flex flex-col space-y-2 ">
                <div className="flex flex-row gap-52">
                    <div className="text-[rgb(247,247,247)] text-start ">Nombre</div>
                   <div className="text-[rgb(247,247,247)] text-start ">Precio</div>
                </div> 

                <div className="flex justify-center items-center flex-row gap-5">

                    <div className=" relative flex flex-col ">
                        <input {...register("name")}{...register("name",{required:true})} className=" bg-neutral-300 border rounded w-[240px] outline-none h-9  pl-12 placeholder:text-slate-600"  placeholder="Ingrese el nombre"/>
                        <GiTacos className="w-7 absolute top-[10px] left-2"/>
                        {errors.name && <span className="text-[#ff0000] text-xs ">Este campo es requerido</span>}
                    </div>
                    <div className=" relative flex flex-col">
                        <input {...register("price")}{...register("price",{required:true})} className="bg-neutral-300  border rounded w-[240px] outline-none h-9  pl-12 placeholder:text-slate-600" placeholder="Ingrese el precio"/>
                        <MdOutlineAttachMoney className="w-7 absolute top-[10px] left-2"/>
                        {errors.price && <span className="text-[#ff0000] text-xs ">Este campo es requerido</span>}

                    </div>
                </div>
            </div>

            <div className="w-[500px] flex flex-col space-y-2">

            <div className="flex flex-row gap-52">
                    <div className="text-[rgb(247,247,247)] text-start ">Imagen</div>
                   <div className="text-[rgb(247,247,247)] text-start ">Categoria</div>
                </div> 

                <div className="flex justify-items-start flex-row gap-5">
                        
                        <div className=" flex flex-col  w-[240px] ">
                        <input {...register("image")} className=" w-full block text-lg text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-neutral-300 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" type="file"/>
                       
                        </div >

                        <div className=" flex items-center w-[240px]">
                        <select  id="countries" className="   text-sm rounded-lg w-full  p-2.5 bg-neutral-300 ">
                            <option {...register("category")}  value="platesf" >Platos Fuerte</option>
                            <option {...register("category")}  value="inputs">Entradas</option>
                            <option {...register("category")} value="drinks">Bebidas</option>
                         </select>
                         
                        </div>
                </div>
            </div>

            <div className="w-[500px] flex flex-col  space-y-2">
                <div className="flex flex-row">
                <div className="text-[rgb(247,247,247)] text-start ">Descripcion</div>
                </div>

                <div className="flex flex-row gap-5 justify-items-start pb-7">
                <div className="w-[240px]  flex flex-col ">
                    <textarea {...register("description")}{...register("description",{required:true})} className="w-full text-lg pl-4 bg-neutral-300 rounded"></textarea>
                    {errors.description && <span className="text-xs text-[#ff0000]">Este campo es requerido</span>}
                </div>
                <div className="w-[240px] flex flex-col space-y-2 ">
                    <button className="bg-green-700 w-full h-7 rounded-lg text-white hover:bg-green-800">Registra</button>
                    <button className="bg-red-700 w-full h-7 rounded-lg text-white hover:bg-red-800 "type="submit">Cancelar</button>
                </div>
                </div>
            </div>

    </form>)
}
export default FormNewProduct;