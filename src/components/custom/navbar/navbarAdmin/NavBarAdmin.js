'use client'
import Image from "next/image"
import { RiMenu3Line } from "react-icons/ri";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
  } from "@/components/ui/sheet"
import Menu from "../../menu/Menu";
import { Macondo_Swash_Caps } from "next/font/google"


const Macon = Macondo_Swash_Caps({
	subsets: ['latin'],
	weight: '400',
})

const NavBarAdmin = () =>{
    
    return (
        
            <Sheet>

                <div className="w-full h-[60px] fixed top-0 left-0 bg-neutral-900 flex flex-row justify-between items-center text-neutral-50 px-5">
                    <div className="w-[60px] h-[60px]">
                        <Image src='/tecos-logo-circular.svg' width={60} height={60} alt=""/>
                    </div>
                    <div className={` text-amber-500 text-4xl font-medium ${Macon.className}`}>
						<span className="w-2">Bienvenido a Tecos! </span>
					</div>
                    <SheetTrigger>
                        <RiMenu3Line className="text-3xl cursor-pointer hover:text-neutral-500  duration-75"   />
                    </SheetTrigger>
                </div>

                <SheetContent>
                    <Menu/>
                </SheetContent>
            </Sheet>

        
    )
} 
export default NavBarAdmin