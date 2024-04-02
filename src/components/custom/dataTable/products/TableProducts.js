'use client'
import { FaEdit } from "react-icons/fa";
import { IoMdRemoveCircle } from "react-icons/io";
import Swal from "sweetalert2";


const TableProducts = ({products}) => {
    
    const eliminarProducto = async (productId) => {

        const options = {   
            method: 'DELETE',  
            header: {  
                'Content-Type': 'application/json'  
            },
            body: JSON.stringify(productId)   
        }
        
         await fetch(`/api/products/${productId}`,options)  
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
                <td className="px-4 py-4 break-all">{products.id}</td>
                <td className="px-4 py-4 break-all">{products.nombre}</td>
                <td className="px-4 py-4  break-all">{products.descripcion}</td>
                <td className="px-4 py-4 break-all">{products.categoria}</td>
                <td className="px-4 py-4 break-all">{products.imagen}</td>
                <td className="px-4 py-4  break-all">{products.precio}</td>
                
                <td className="px-4 py-2 text-neutral-800 text-left">
                    <button onClick={() => eliminarProducto(products.id)} className="font-medium text-neutral-800 hover:text-gray-500">
                    <IoMdRemoveCircle />
                    </button>
                </td>
                </tr>
            </tbody>
        </table>
     );
}
 
export default TableProducts;

/*
<td className="px-4 py-2 text-neutral-800 text-right">
       
     
 <a href="#" className="font-medium text-neutral-800 hover:text-gray-500">
          <FaEdit />
        </a>

         </td>
*/