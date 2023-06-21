import {createContext, useState} from "react"

const AppContext = createContext()

export const AppProvider = ({children}) => {

    const [studentInfo, setStudentInfo] = useState(JSON.parse(window.localStorage.getItem("student-status")))
    const [adminInfo, setAdminInfo] = useState(JSON.parse(window.localStorage.getItem("admin-status")))
    const [studentLoggedIn, setStudentLoggedIn] = useState(JSON.parse(window.localStorage.getItem("loggedIn")))
    const [adminLoggedIn, setAdminLoggedIn] = useState(JSON.parse(window.localStorage.getItem("admin-loggedIn")))
    const [courseIndex, setCourseIndex] = useState("")
    const [showNav, setShowNav] = useState(false)
    const [showCourseNav, setShowCourseNav] = useState(false)
    const [studentToken, setStudentToken] = useState(JSON.parse(window.localStorage.getItem("student-token")))
    const [adminToken, setAdminToken] = useState(JSON.parse(window.localStorage.getItem("admin-token")))
    const [walletAddress, setWalletAddress] = useState();
    const [walletConnected, setWalletConnected] = useState(false)
    const [totalVideos, setTotalVideos] = useState()
    const [progress, setProgress] = useState(0)
    const [showModal, setShowModal] = useState(false)

    studentInfo?.track.trim() !== "NULL"
    ? (() => {
        const getTotalVideos = () => {
          const response = fetch('https://learnz.onrender.com/api/v1/user/courses', {
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${studentToken}`
            }
          })
            .then(res => res.json())
            .then(data => {
              console.log(data.courses);
              if (data.success) {
                setTotalVideos(data.courses.filter((course, index) => course.track.toLowerCase() === studentInfo.track.toLowerCase()).length);
              }
            });
  
          // console.log(totalVideos)
          // console.log(week)
        };
  
        getTotalVideos();
      })()
    : "";
  


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
        showCourseNav,
        studentToken,
        adminToken,
        walletAddress,
        walletConnected,
        totalVideos,
        progress,
        showModal,
        setStudentInfo,
        setShowNav,
        setShowCourseNav,
        setCourseIndex,
        setStudentToken,
        setStudentLoggedIn,
        setAdminLoggedIn,
        setAdminInfo, 
        setAdminToken,
        setWalletAddress,
        setWalletConnected,
        setTotalVideos,
        setProgress,
        setShowModal,
   }}>
        {children}
    </AppContext.Provider>
}

export default AppContext