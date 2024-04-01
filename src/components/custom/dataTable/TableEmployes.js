'use client'
import { FaEdit } from "react-icons/fa";
import { IoMdRemoveCircle } from "react-icons/io";


const TableEmployes = ({users}) => {
      
    return (   
        <table className="table-fixed w-75 bg-white">
            <tbody>
                <tr>
                <td className="px-4 py-4 break-all">{users.nombre}</td>
                <td className="px-4 py-4  break-all">{users.apellido}</td>
                <td className="px-4 py-4 break-all">{users.cedula}</td>
                <td className="px-4 py-4 break-all">{users.correo}</td>
                <td className="px-4 py-4  break-all">{users.password}</td>
                <td className="px-4 py-4  break-all">{users.rol}</td>
                
                <td className="px-4 py-2 text-neutral-800 text-right">
                    <button className="font-medium text-neutral-800 hover:text-gray-500">
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