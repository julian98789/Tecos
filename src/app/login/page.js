import LoginForm from "@/components/form/LoginForm.js"

const login = () =>{
    return<div className="w-screen h-screen bg-neutral-800 flex justify-center items-center">

        <div className="w-4/5 max-w-[1000px] min-h-[450px]  border  border-neutral-50 rounded-2xl flex flex-row">
            <div className="w-1/2  flex justify-center items-center">
                <div className="max-w-[350px]">
                    <img className="w-full" src="/comida.png" />
                </div>
            </div>
            <div className="w-1/2 flex justify-center items-center">
                <LoginForm />
            </div>
        </div>

    </div>
}
export default login