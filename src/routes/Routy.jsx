import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import StudentSidebar from "../components/StudentSideBar/StudentSidebar";
import AdminLogin from "../pages/AdminLogin/AdminLogin";
import LandingPage from "../pages/LandingPage/LandingPage";
import ParentLogin from "../pages/StudentLogin/StudentLogin";
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
import AppContext from "../context/Appcontext";
import StudentLessons from "../pages/StudentLessons/StudentLessons";
import StudentProfile from "../pages/StudentProfile/StudentProfile";
import LessonsApply from "../pages/LessonsApply/LessonsApply";
import StudentLogin from "../pages/StudentLogin/StudentLogin";
import AdminCreateLesson from "../pages/AdminCreateLesson/AdminCreateLesson";


const Routy = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<LandingPage />} />

        {/* DASHBOARD */}
        <Route path="/student/dashboard" element={<StudentSidebar />}>
          <Route index element={<StudentDashboard />} />
          <Route path="studentMessage" element={<StudentMessage />} />
          <Route path="studentQuiz" element={<StudentQuiz />} />
          <Route path = "studentLessons" element = {<StudentLessons />}>
            {/* <Route path = "frontend" ></Route> */}
          </Route>
          <Route path = "profile" element = {<StudentProfile />} />
          <Route path = "studentLessons/enroll/:courseName" element = {<LessonsApply />} />
        </Route>

        {/* LOGIN PAGE*/}
        <Route path="/student/login" element={<StudentLogin />} />

        {/* STUDENT SIGN UP PAGE */}
        <Route path = "signup" element = {<StudentFormNavbar />}>
          <Route index element = {<SignUpOptions />} />
          <Route path = "student" element = {<StudentSignUp />}/>
        </Route>

        {/* ADMIN PAGEs */}
        <Route path = "admin" element = {<AdminNavbar />}>
          <Route index element = {<AdminLogin />} />
          <Route path = "signup" element = {<AdminSignUp />} />
          <Route path = "forgotPassword" element = {<ForgotPasswordAdmin />} />
          <Route path = "welcome" element = {<WelcomeAdmin />} />
          <Route path = "createLesson" element = {<AdminCreateLesson />} />
        </Route>
      </>
    )
  );
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default Routy;

