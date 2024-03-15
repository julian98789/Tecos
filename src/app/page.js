'use client'
import Table from "@/components/custom/tables/Table.js";
export default function Home() {
	return (
		<div  className="w-full h-[calc(100vh-60px)] flex justify-center items-center bg-cover bg-center bg-no-repeat  bg-[url('/Fondo.jpg')] p-9 ">
			<div className="w-[750px] grid grid-cols-5 gap-28">
				<Table status={true} num={"1"}/>
				<Table status={false} num={"2"}/>
				<Table status={true} num={"3"}/>
				<Table status={true} num={"4"}/>
				<Table status={true} num={"5"}/>
				<Table status={true} num={"6"}/>
				<Table status={false} num={"7"}/>
				<Table status={true} num={"8"}/>
				<Table status={true} num={"9"}/>
				<Table status={false} num={"10"}/>
		
			</div>
		</div>
	);
}