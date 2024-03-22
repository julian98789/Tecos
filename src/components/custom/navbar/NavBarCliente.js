'use client'
import { Macondo_Swash_Caps } from "next/font/google"


const Macon = Macondo_Swash_Caps({
	subsets: ['latin'],
	weight: '400',
	display: 'swap'
})

const NavBarCliente = () =>{
    return (
				<div className="w-full h-[60px] bg-[rgba(10,10,10,.8)] text-amber-500  flex items-center justify-center">
					<div className="w-16 ">
						<img className=" h-14 w-auto ml-4 sm:ml-20" src="/tecos-logo-circular.svg" alt="your company" />
					</div>

					<div className={`flex-1 text-lg sm:text-4xl text-center font-medium ${Macon.className}`}>
						<span className="w-2">Bienvenido a Tecos! </span>
					</div>
						
					
						
				</div>
    )
}
export default NavBarCliente