'use client'
import { redirect } from "next/navigation"
const RouteProtected = ({children}) =>{
    let logged = false;

    return !logged ? redirect('/login') : children;

}

export default RouteProtected