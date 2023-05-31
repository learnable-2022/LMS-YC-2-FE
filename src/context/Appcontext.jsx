import {createContext, useState} from "react"

const AppContext = createContext()

export const AppProvider = ({children}) => {
    
    const [studentData, setStudentData] = useState({
        parentName : "",
        parentEmail :  "",
        parentRelationship : ""
    })
    return <AppContext.Provider value = {{
        studentData,
   }}>
        {children}
    </AppContext.Provider>
}

export default AppContext