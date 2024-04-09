'use client'
import { useState, useEffect } from "react"
import CampoOrder from "../dataTable/order/campoOrder"


const Pedidos = () =>{

        const [order, setOrder] = useState([])
        const [url, setUrl]= useState('/api/order')
        const recibirDatos = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setOrder(data.result)
    }

    useEffect(()=>{
        recibirDatos();
    },[url])

    const updateCampoOrder = async (orderId) => {

        const options = {   
            method: 'PUt',  
            header: {  
                'Content-Type': 'application/json'  
            },
			body: JSON.stringify({ estado: 'entregado' })
 
        }
        
         await fetch(`/api/order/${orderId}`,options)  
        .then(res=>res.json())    
    }  

    
    return ( <div className="pl-16" >
               
               
               <div>
                    <div className="flex flex-col">
                        {order.map((orders) => (
                            <CampoOrder orders={orders} updateCampoOrder={updateCampoOrder} />
                         ))}
                    </div>
                </div>
              
            </div>
    
)
    
}

export default Pedidos