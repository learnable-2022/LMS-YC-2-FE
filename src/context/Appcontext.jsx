import {createContext, useState} from "react"

const AppContext = createContext()

export const AppProvider = ({children}) => {

    const [studentStatus, setStudentStatus] = useState()
    const studentInfo = JSON.parse(window.localStorage.getItem("student-status"))
    const [courseIndex, setCourseIndex] = useState("")
    
    const [studentData, setStudentData] = useState({
        parent_name: "",
        email: "",
        relationship: "",
        child_name: "",
        child_class: "",
        DOB: "",
        password: "",
        gender: ""
    })
    const [loggedIn, setLoggedIn] = useState(false)
    const [studentSignedUp, setStudentSignedUp] = useState(false)
    return <AppContext.Provider value = {{
        studentData,
        loggedIn,
        studentStatus,
        studentInfo,
        courseIndex,
        setLoggedIn,
        setStudentSignedUp,
        setStudentStatus,
        setCourseIndex
   }}>
        {children}
    </AppContext.Provider>
}

export default AppContext