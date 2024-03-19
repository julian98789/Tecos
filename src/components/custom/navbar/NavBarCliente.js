'use client'

const NavBarCliente = () =>{
    return (
<div class="w-full h-[60px] bg-neutral-800 text-amber-500  flex items-center justify-center">
					<div class="w-16">
						<img class="h-14 w-auto ml-4 sm:ml-20" src="/tecos-logo-circular.svg" alt="your company" />
					</div>

					<div className="flex-1 text-lg sm:text-2xl text-center font-medium ">
						<span className="w-2">Bienvenido a Tacos! Ingresa tu mesa</span>
					</div>
						
					<div className="mr-20">
						<a href="/login" className="text-white hover:bg-red-700 hover:text-white p-2  rounded-lg text-xs sm:text-2xl ">
                             Iniciar Sesión
                        </a>
					</div>
						
				</div>
    )
}
export default NavBarCliente