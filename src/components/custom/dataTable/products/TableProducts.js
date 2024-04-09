'use client'
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
    <div className="flex justify-center  ">
        <div className="w-16 px-4 py-4 bg-slate-50 overflow-hidden break-word ">{products.id}  </div>
        <div className="w-40 px-1 py-4 bg-slate-50 overflow-hidden break-word">{products.nombre}  </div>
        <div className="w-56 px-1 py-4 bg-slate-50 overflow-hidden break-word">{products.descripcion}  </div>
        <div className="w-36 px-4 py-4 bg-slate-50 overflow-hidden break-word">{products.categoria}  </div>
        <div className="w-64 px-1 py-4 bg-slate-50 overflow-hidden break-word ">{products.imagen}  </div>
        <div className="w-24 px-4 py-4 bg-slate-50 overflow-hidden break-word">{products.precio}  </div>
        <button onClick={() => eliminarProducto(products.id)} className=" flex justify-center w-24 px-4 py-4 bg-slate-50 overflow-hidden break-word text-neutral-800 hover:neutral-500">
           <IoMdRemoveCircle className="hover:text-neutral-600" />
       </button>
    </div>
     );
}
 
export default TableProducts;

