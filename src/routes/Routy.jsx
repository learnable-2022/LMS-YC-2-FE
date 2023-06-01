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
import SignUp from "../pages/StudentSignUp/StudentSignUp";
import SecondSignUp from "../pages/SecondSignUp/SecondSignUp";
import StudentDashboard from "../pages/StudentDashboard/StudentDashboard";
import SignUpOptions from "../pages/SignUpOptions/SignUpOptions";
import StudentSignUp from "../pages/StudentSignUp/StudentSignUp";
import ForgotPasswordAdmin from "../pages/ForgotPasswordAdmin/ForgotPasswordAdmin";
import AdminNavbar from "../components/AdminNavbar/AdminNavbar";
import AdminSignUp from "../pages/AdminSignUp/AdminSignUp";
import WelcomeAdmin from "../pages/WelcomeAdmin/WelcomeAdmin";

    const Routy = () => {
    
      const router = createBrowserRouter(
        createRoutesFromElements(
          <>
            <Route path='/' element= {<LandingPage />} />
            
            {/* DASHBOARD */}
              <Route path = "/student/dashboard" element = {<StudentSidebar />}> 
                <Route index element = {<StudentDashboard />} />
              </Route>
             
              {/* LOGIN PAGE*/}
              <Route path = "/login" element = {<ParentLogin />} />

              {/* SIGN UP OPTIONS */}
              <Route path = "/signup" element = {<SignUpOptions />} />

              {/* SIGN UP PAGE */}
              <Route path = "/signup/student" element = {<StudentSignUp />} />

              {/* SECOND SIGN UP PAGE */}
              <Route path = "/signup/student_2" element = {<SecondSignUp />} />

              {/* ADMIN PAGEs */}
              <Route path = "admin" element = {<AdminNavbar />}>
                <Route index element = {<AdminLogin />} />
                <Route path = "signup" element = {<AdminSignUp />} />
                <Route path = "forgotPassword" element = {<ForgotPasswordAdmin />} />
                <Route path = "welcome" element = {<WelcomeAdmin />} />
              </Route>
              
              

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