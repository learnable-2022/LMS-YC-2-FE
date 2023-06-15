import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import StudentSidebar from "../components/StudentSideBar/StudentSidebar";
import AdminLogin from "../pages/AdminLogin/AdminLogin";
import LandingPage from "../pages/LandingPage/LandingPage";
import StudentDashboard from "../pages/StudentDashboard/StudentDashboard";
import SignUpOptions from "../pages/SignUpOptions/SignUpOptions";
import StudentSignUp from "../pages/StudentSignUp/StudentSignUp";
import ForgotPasswordAdmin from "../pages/ForgotPasswordAdmin/ForgotPasswordAdmin";
import StudentMessage from "../pages/StudentDashboard/StudentMessage/StudentMessage";
import StudentQuiz from "../pages/StudentDashboard/StudentQuiz/StudentQuiz";
import AdminNavbar from "../components/AdminNavbar/AdminNavbar";
import AdminSignUp from "../pages/AdminSignUp/AdminSignUp";
import WelcomeAdmin from "../pages/WelcomeAdmin/WelcomeAdmin";
import StudentFormNavbar from "../components/StudentFormNavbar/StudentFormNavbar";
import ProductNav from "../components/ProductDesignNavBar/ProductNav";
import StudentLessons from "../pages/StudentLessons/StudentLessons";
import StudentProfile from "../pages/StudentProfile/StudentProfile";
import LessonsApply from "../pages/LessonsApply/LessonsApply";
import StudentLogin from "../pages/StudentLogin/StudentLogin";
import LoginOptions from "../pages/LoginOptions/LoginOption";
import AdminOverview from "../pages/AdminOverview/AdminOverview";
import LessonOverview from "../pages/LessonOverview/LessonOverview";
import SidebarAdmin from "../components/SidebarAdmin/SidebarAdmin";
import NotFound from "../pages/ErrorPage/NotFound";
import ProtectedRoutes from "../ProtectedRoute";
import { useContext, useEffect } from "react";
import EmptyStatePage from "../pages/EmptyStatePage/EmptyStatePage";
import CoursePage from "../pages/CoursePage/CoursePage";
import MyLoader from "../components/Loader/MyLoader";
import { useState } from "react";

const Routy = () => {

  const[loading, setLoading] = useState(true)

  useEffect(()=>{
      setTimeout(()=>{
          setLoading(false)
      }, 2000)
  },[])

  //  STUDENT INFO
  const { studdntInfo } = useContext;
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<LandingPage />} />
    
        {/* STUDENT DASHBOARD */}
        {/* <Route element = {<ProtectedRoutes />}> */}
        <Route path="/student/dashboard" element={<StudentSidebar />}>
          <Route index element={<StudentDashboard />} />
          <Route path="studentMessage" element={<StudentMessage />} />
          <Route path="studentQuiz" element={<StudentQuiz />} />
          <Route path="lessons" element={<StudentLessons />}>
            {/* <Route path = "frontend" ></Route> */}
          </Route>
          <Route path="profile" element={<StudentProfile />} />
          <Route path="lessons/enroll/:courseName" element={<LessonsApply />} />
        </Route>
        {/* </Route> */}

        {/* STUDENT LOGIN PAGE*/}
        <Route path="login" element={<StudentFormNavbar />}>
          <Route index element={<LoginOptions />} />
          <Route path="student" element={<StudentLogin />} />
        </Route>

        {/* STUDENT SIGN UP PAGE */}
        <Route path="signup" element={<StudentFormNavbar />}>
          <Route index element={<SignUpOptions />} />
          <Route path="student" element={<StudentSignUp />} />
        </Route>

        {/* ADMIN DASHBOARD */}
        <Route path="/admin/dashboard" element={<SidebarAdmin />}>
          <Route index element={<AdminOverview />} />
          <Route path="lessons" element={<LessonOverview />} />
          <Route path="createLesson" element={<EmptyStatePage />} />
        </Route>

        {/* ADMIN PAGEs */}
        <Route path="admin" element={<AdminNavbar />}>
          <Route path="login" element={<AdminLogin />} />
          <Route path="signup" element={<AdminSignUp />} />
          <Route path="forgotPassword" element={<ForgotPasswordAdmin />} />
          <Route path="welcome" element={<WelcomeAdmin />} />
        </Route>

        <Route path="*" element={<NotFound />} />
        {/* PRODUCT DESIGN SECTION */}
        <Route path="/student/course" element={<ProductNav />}>
          <Route index element={<CoursePage />} />
        </Route>
      </>
    )
  );
  return (
    <div>
      
      <RouterProvider
        router={router}

      />
    </div>
  );
};

export default Routy;
