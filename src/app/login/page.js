import LoginForm from "@/components/custom/form/LoginForm.js"

const login = () =>{
    return<div className="w-full h-full items-center bg-center bg-no-repeat  bg-[url('/Fondo.jpg')]">
        <div className="w-full h-screen  bg-[rgba(38,38,38,.4)]  flex justify-center  "> 
            <div className=" w-80  flex justify-center items-center md:w-1/2">
                <LoginForm />
            </div>
        </div>

    </div>
        
}
export default login