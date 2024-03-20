'use client'

const useSession = ()=>{

    const login = () =>{
        sessionStorage.setItem('logged', true)

    }
    const logout = () =>{
        sessionStorage.clear();
    }
    
  return { login, logout }
}
export default useSession