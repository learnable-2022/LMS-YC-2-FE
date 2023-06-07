import {useContext} from "react"
import { Navigate, Outlet } from "react-router"
import AppContext from "./context/Appcontext"



const useAuth = () => {
    const {studentInfo} = useContext(AppContext)
    return studentInfo && studentInfo?.loggedin
}

const ProtectedRoutes = () => {
    const {studentInfo} = useContext(AppContext)
    studentInfo?.loggedin !== "" || studentInfo?.loggedin !== null || studentInfo?.loggedin !== undefined ? <Outlet /> : <Navigate to = "/login" />
}

export default ProtectedRoutes
