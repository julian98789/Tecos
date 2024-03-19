'use client'
import Table from "@/components/custom/tables/Table.js";
import NavBarCliente from "@/components/custom/navbar/NavBarCliente";
export default function Home() {
	return (
		<div className="w-full h-screen flex justify-center items-center bg-repeat bg-[url('/Fondo.jpg')] bg-top" >
			<div className="w-full h-full bg-[rgba(38,38,38,.4)] flex flex-col">
				<NavBarCliente/>

				<div className="w-full min-h-[calc(100%-60px)]">
					<div className="w-full min-h-full flex justify-center items-center ">
						<div className=" gap-4   grid   grid-cols-2 sm:grid-cols-4 lg:gap-6 xl:gap-8">
							<Table status={true} num={1} href="/login"/>
							<Table status={true} num={2}/>
							<Table status={true} num={3}/>
							<Table status={true} num={4}/>
							<Table status={true} num={5}/>
							<Table status={true} num={6}/>
							<Table status={true} num={7}/>
							<Table status={true} num={8}/>
							
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}


/*
<div  className="w-full h-screen flex justify-center items-center bg-cover bg-center bg-no-repeat  bg-[url('/Fondo.jpg')]  ">
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

*/