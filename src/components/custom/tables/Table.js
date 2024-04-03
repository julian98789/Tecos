
import { MdTableRestaurant } from "react-icons/md";
import { useEffect, useState } from "react";
import useStore from "@/hook/useSession.js";

const Table = ({ tables, updateTableState }) => {
    const [clicked, setClicked] = useState(false);
    const [ocupada, setOcupada] = useState(false);

    useEffect(() => {
        setOcupada(tables.estado === 'ocupada');
    }, [tables.estado]);

    const {logged, user, login, logout,getUserData} = useStore()
	const [val , setVal] = useState(null)

    useEffect(()=>{

		console.log(logged)
		console.log(user)
		console.log(getUserData())
	
	},[logged,user])
	const role = getUserData();


    const handleClick = async () => {
        if (role !== 'cajero' && role !== 'admin') { 
            await updateTableState(tables.id);
            setClicked(true);
        }
    };

   

    return (
        <a href="/menu" onClick={handleClick}>
        <div className={`w-[150px] h-[150px] flex justify-center items-center rounded-lg ${ocupada ? 'bg-zinc-600' : 'bg-zinc-200'} ${ocupada ? 'cursor-default' : 'hover:transition transition-transform hover:scale-105 duration-300 shadow-2xl cursor-pointer'}`}>
            <div className="w-full h-[110px] flex flex-col justify-center items-center">
                <MdTableRestaurant className={`text-8xl text-zinc-700`} />
                <div className={`w-full text-2xl font-medium flex justify-center text-zinc-700`}>
                    {tables.descripcion}
                </div>
            </div>
        </div>
    </a>
    );
};

export default Table;