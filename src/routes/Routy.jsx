import {
    createBrowserRouter,
    Route, 
    createRoutesFromElements,
    RouterProvider
      } from "react-router-dom";
import StudentSidebar from "../components/StudentSideBar/StudentSidebar";
import AdminLogin from "../pages/AdminLogin/AdminLogin";
import LandingPage from "../pages/LandingPage/LandingPage";
import ParentLogin from "../pages/ParentLogin/ParentLogin";
import SignUp from "../pages/SignUp/SignUp";
import StudentDashboard from "../pages/StudentDashboard/StudentDashboard";


    const Routy = () => {
    
      const router = createBrowserRouter(
        createRoutesFromElements(
          <>
            <Route path='/' element= {<LandingPage />} />
            
            {/* DASHBOARD */}
              <Route path = "dashboard" element = {<StudentSidebar />}> 
                <Route index element = {<StudentDashboard />} />
              </Route>
             
              {/* LOGIN PAGE*/}
              <Route path = "/login" element = {<ParentLogin />} />
              <Route path = "/adminLogin" element = {<AdminLogin />}/>

              {/* SIGN UP PAGE */}
              <Route path = "/signup" element = {<SignUp />} />


              {/* ADMIN PAGE */}
          </>
          
      
        )
      )
      return (
        
        <div>
             <RouterProvider router={router} />
        </div>
      )
    }
    
    export default Routy