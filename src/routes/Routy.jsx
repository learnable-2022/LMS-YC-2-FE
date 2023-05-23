import {
    createBrowserRouter,
    Route, 
    createRoutesFromElements,
    RouterProvider
      } from "react-router-dom";
import StudentSidebar from "../components/StudentSideBar/StudentSidebar";
import LandingPage from "../pages/LandingPage/LandingPage";
import ParentLogin from "../pages/ParentLogin/ParentLogin";
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
             
              {/* ERROR PAGE */}
              <Route path = "*" element = {<NotFound />}/>

              {/*PARENT LOGIN AND SIGNUP PAGE*/}
              <Route path = "/parentLogin" element = {<ParentLogin />} />

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