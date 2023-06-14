import {useContext} from "react"
import { Navigate, Outlet } from "react-router"
import AppContext from "./context/Appcontext"


const ProtectedRoutes = () => {

    const {studentLoggedIn} = useContext(AppContext)
    
    return (
        studentLoggedIn ? <Outlet /> : <Navigate to = "/login" />
    )
}

export default ProtectedRoutes
