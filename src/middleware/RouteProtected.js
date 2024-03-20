
'use client'
import { redirect } from "next/navigation"

const RouteProtected = ({children}) =>{
    let  logged = sessionStorage.getItem('logged')
    return !logged ? redirect('/login') : children;
}

export default RouteProtected