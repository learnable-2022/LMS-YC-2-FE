import {createContext, useState} from "react"

const AppContext = createContext()

export const AppProvider = ({children}) => {

    const [studentStatus, setStudentStatus] = useState()
    // const studentInfo =  JSON.parse(window.localStorage.getItem("student-status")).loggedIn !== null || 
    //     JSON.parse(window.localStorage.getItem("student-status")).loggedIn !== undefined ||
    //     JSON.parse(window.localStorage.getItem("student-status")).loggedIn !== "" ?  JSON.parse(window.localStorage.getItem("student-status")).loggedIn 
    //     : JSON.parse(window.localStorage.getItem("student-status2")).user[0]

    const studentInfo = JSON.parse(window.localStorage.getItem("student-status"))
    const adminInfo = JSON.parse(window.localStorage.getItem("admin-status"))
    const [courseIndex, setCourseIndex] = useState("")
    const [showNav, setShowNav] = useState(false)

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
    const [loggedIn, setLoggedIn] = useState(false)
    const [studentSignedUp, setStudentSignedUp] = useState(false)
    return <AppContext.Provider value = {{
        studentData,
        loggedIn,
        studentStatus,
        studentInfo,
        adminInfo,
        adminData,
        courseIndex,
        showNav,
        setShowNav,
        setLoggedIn,
        setStudentSignedUp,
        setStudentStatus,
        setCourseIndex
   }}>
        {children}
    </AppContext.Provider>
}

export default AppContext