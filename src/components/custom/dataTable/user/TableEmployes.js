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
        <table className="table-fixed w-75 text-left bg-white">
            <tbody>
                <tr>
                <td className="px-4 py-4 break-all">{users.nombre}</td>
                <td className="px-4 py-4  break-all">{users.apellido}</td>
                <td className="px-4 py-4 break-all">{users.cedula}</td>
                <td className="px-4 py-4 break-all">{users.correo}</td>
                <td className="px-4 py-4  break-all">{users.password}</td>
                <td className="px-4 py-4  break-all">{users.rol}</td>
                
                <td className="px-4 py-2 text-neutral-800 text-left">
                    <button onClick={() => eliminarUsuario(users.cedula)} className="font-medium text-neutral-800 hover:text-gray-500">
                    <IoMdRemoveCircle />
                    </button>
                </td>
                </tr>
            </tbody>
        </table>
     );
}
 
export default TableEmployes;

/*
<td className="px-4 py-2 text-neutral-800 text-right">
       
     
 <a href="#" className="font-medium text-neutral-800 hover:text-gray-500">
          <FaEdit />
        </a>

         </td>
*/