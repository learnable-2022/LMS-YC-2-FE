import {useContext} from "react"
import { Navigate, Outlet } from "react-router"
import AppContext from "./context/Appcontext"


const AdminProtectedRoutes = () => {

    const {adminLoggedIn} = useContext(AppContext)
    
    return (
        adminLoggedIn ? <Outlet /> : <Navigate to = "/login" />
    )
}

export default AdminProtectedRoutes
