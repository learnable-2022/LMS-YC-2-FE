import {createContext, useState} from "react"

const AppContext = createContext()

export const AppProvider = ({children}) => {

    const [studentInfo, setStudentInfo] = useState(JSON.parse(window.localStorage.getItem("student-status")))
    const [adminInfo, setAdminInfo] = useState(JSON.parse(window.localStorage.getItem("admin-status")))
    const [studentLoggedIn, setStudentLoggedIn] = useState(JSON.parse(window.localStorage.getItem("loggedIn")))
    const [adminLoggedIn, setAdminLoggedIn] = useState(JSON.parse(window.localStorage.getItem("admin-loggedIn")))
    const [courseIndex, setCourseIndex] = useState("")
    const [showNav, setShowNav] = useState(false)
    const [studentToken, setStudentToken] = useState(JSON.parse(window.localStorage.getItem("student-token")))
    const [adminToken, setAdminToken] = useState(JSON.parse(window.localStorage.getItem("admin-token")))

    const [adminData, setAdminData] = useState({
        email: "",
        password: ""
    })
    
    const studentData = {
        parent_name: "",
        email: "",
        relationship: "",
        child_name: "",
        child_class: "",
        DOB: "",
        password: "",
        gender: ""
    }
    return <AppContext.Provider value = {{
        studentData,
        studentLoggedIn,
        adminLoggedIn,
        studentInfo,
        adminInfo,
        adminData,
        courseIndex,
        showNav,
        studentToken,
        adminToken,
        setStudentInfo,
        setShowNav,
        setCourseIndex,
        setStudentToken,
        setStudentLoggedIn,
        setAdminLoggedIn,
        setAdminInfo,
        setAdminToken
   }}>
        {children}
    </AppContext.Provider>
}

export default AppContext