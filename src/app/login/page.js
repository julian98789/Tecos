import LoginForm from "@/components/custom/form/LoginForm.js"

const login = () =>{
    return<div className="w-full h-[calc(100vh-60px)] bg-neutral-800 flex justify-center items-center bg-cover bg-center bg-no-repeat  bg-[url('/Fondo.jpg')] "> 
            <div className=" w-80  flex justify-center items-center md:w-1/2">
                <LoginForm />
            </div>
        </div>

}
export default login