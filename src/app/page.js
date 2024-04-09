'use client'
import Table from "@/components/custom/tables/Table";
import NavBarCliente from "@/components/custom/navbar/NavBarCliente";
import useStore from "@/hook/useSession.js";
import { useEffect, useState } from "react";
import NavBarAdmin from "@/components/custom/navbar/navbarAdmin/NavBarAdmin";
import NavbarCashier from "@/components/custom/navbar/nabvarCashier/NavBarCashier";


export default function Home() {

	const {logged, user, login, logout,getUserData} = useStore()
	const [val , setVal] = useState(null)
	
	useEffect(()=>{

		console.log(logged)
		console.log(user)
		console.log(getUserData())
	
	},[logged,user])
	const role = getUserData();

  	const [table, setTable] = useState([])
  	const [url, setUrl]= useState('/api/table')
  	const recibirDatos = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setTable(data.result)
  }

	useEffect(()=>{
		recibirDatos();
	},[url])

	const updateTableState = async (userId) => {

        const options = {   
            method: 'PUt',  
            header: {  
                'Content-Type': 'application/json'  
            },
			body: JSON.stringify({ estado: 'ocupada' })
 
        }
        
         await fetch(`/api/table/${userId}`,options)  
        .then(res=>res.json())    
    }  
	
	return (
		<div className="w-full h-screen flex justify-center items-center bg-cover  bg-[url('/Fondo.jpg')] bg-top" >
			<div className="w-full h-full bg-[rgba(38,38,38,.4)] flex flex-col">
				{role === 'admin' ? <NavBarAdmin/> : <NavBarCliente/>}
				{role === 'cajero' ? <NavbarCashier/> : ""}

				<div className="w-full min-h-[calc(100%-60px)]">
					<div className="w-full min-h-full flex justify-center items-center ">
						<div className=" gap-4   grid   grid-cols-2 sm:grid-cols-4 lg:gap-6 xl:gap-8">
						{
							table.map((tables)=>{
							return <Table  tables={tables} updateTableState={updateTableState} />
							})
                  		}
						</div>

					</div>
				</div>
			</div>
		</div>
	);
}


