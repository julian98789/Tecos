import LoginForm from "@/components/form/LoginForm.js"

const login = () =>{
    return<div className="w-screen h-screen bg-neutral-800 flex justify-center items-center bg-cover bg-center bg-no-repeat  bg-[url('/Fondo.jpg')] ">

            
            <div className=" w-80  flex justify-center items-center md:w-1/2">
                <LoginForm />
            </div>
        </div>

}
export default login