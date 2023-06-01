import {createContext, useState} from "react"

const AppContext = createContext()

export const AppProvider = ({children}) => {
    
    const [studentData, setStudentData] = useState({
        parent_name: "",
        email: "",
        relationship: "",
        child_name: "",
        child_class: "",
        DOB: "",
        password: ""
    })
    return <AppContext.Provider value = {{
        studentData,
   }}>
        {children}
    </AppContext.Provider>
}

export default AppContext