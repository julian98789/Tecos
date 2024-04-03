'use client'
import { FaEdit } from "react-icons/fa";
import { IoMdRemoveCircle } from "react-icons/io";
import Swal from "sweetalert2";


const TableEmployes = ({users}) => {
    
    const eliminarUsuario = async (userId) => {

        const options = {   
            method: 'DELETE',  
            header: {  
                'Content-Type': 'application/json'  
            },
            body: JSON.stringify(userId)   
        }
        
         await fetch(`/api/user/${userId}`,options)  
        .then(res=>res.json()) 
        .then(data=>processData(data))  

         
    }  
   

      const exito = () => {
        Swal.fire({
          position: 'top-center',
          icon: 'success',
          title: 'Se elimino con Exitoso',
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
        if (data) {
          exito();
        } else {
            error();
        }
    }
      
    return (   
        <div className="flex justify-center">
            <div className="w-40 px-4 py-4 bg-slate-50 overflow-hidden break-word ">{users.nombre}  </div>
            <div className="w-40 px-4 py-4 bg-slate-50 overflow-hidden break-word">{users.apellido}  </div>
            <div className="w-40 px-4 py-4 bg-slate-50 overflow-hidden break-word">{users.cedula}  </div>
            <div className="w-52 px-4 py-4 bg-slate-50 overflow-hidden break-word">{users.correo}  </div>
            <div className="w-32 px-4 py-4 bg-slate-50 overflow-hidden break-word ">{users.password}  </div>
            <div className="w-24 px-4 py-4 bg-slate-50 overflow-hidden break-word">{users.rol}  </div>
            <button onClick={() => eliminarUsuario(users.cedula)} className=" flex justify-center w-24 px-4 py-4 bg-slate-50 overflow-hidden break-word text-neutral-800 ">
               <IoMdRemoveCircle className="hover:text-neutral-600"/>
           </button>
        </div>
     );
}
 
export default TableEmployes;
