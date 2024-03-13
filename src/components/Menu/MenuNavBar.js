'use client'

function openMenu(){
    let menu = document.getElementById('menu');

    if(menu.classList.contains('hidden')){
        menu.classList.remove('hidden');
    }else{
        menu.classList.add('hidden');
    }
}

const MenuNavBar = () =>{
    return <nav className="bg-gray-800 py-6 relative">
            <div className="container mx-auto flex px-8 xl:px-0">
               <div className="flex flex-grow items-center">
                    <img   img src="/comida.pn"></img>
                </div> 
                <div className="flex lg:hidden ">
                    <img src="/menu.png" onClick={openMenu}></img>
                </div>
                    
                <div id="menu" className="lg:flex hidden flex-grow justify-between absolute lg:relative lg:top-0 top-20 left-0 bg-gray-800 w-full lg:w-auto items-center py-14 lg:py-0 px-8 sm:px-24 lg:px-0">
                    <div className="flex flex-col lg:flex-row mb-8 lg:mb-0"> 
                        <a href="#" className="text-white lg:mr-7 mb-8 lg:mb-0"> Menu </a>
                        <a href="#" className="text-white lg:mr-7 mb-8 lg:mb-0" > Caja </a>
                        <a href="#" className="text-white lg:mr-7 mb-8 lg:mb-0"> Admin </a>
                    </div>

                    <div  className="flex flex-col lg:flex-row">
                        <a href="/login" className="text-white border border-white py-2.5 px-5 rounded-md hover:bg-white hover:text-gray-800 transition duration-500 ease-in-out lg:mr-12"> Iniciar sesion </a>
                    </div>
                </div>
             
            </div>

    </nav>
    
}

export default MenuNavBar
    