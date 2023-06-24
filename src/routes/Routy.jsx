import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import StudentSidebar from "../components/StudentSideBar/StudentSidebar";
import AdminLogin from "../pages/Admin/AdminLogin/AdminLogin";
import LandingPage from "../pages/LandingPage/LandingPage";
import StudentDashboard from "../pages/Student/StudentDashboard/StudentDashboard";
import SignUpOptions from "../pages/SignUpOptions/SignUpOptions";
import StudentSignUp from "../pages/Student/StudentSignUp/StudentSignUp";
import ForgotPasswordAdmin from "../pages/Admin/ForgotPasswordAdmin/ForgotPasswordAdmin";
import StudentMessage from "../pages/Student/StudentMessage/StudentMessage";
import StudentQuiz from "../pages/Student/StudentQuiz/StudentQuiz";
import AdminNavbar from "../components/AdminNavbar/AdminNavbar";
import AdminSignUp from "../pages/Admin/AdminSignUp/AdminSignUp";
import WelcomeAdmin from "../pages/Admin/WelcomeAdmin/WelcomeAdmin";
import StudentFormNavbar from "../components/StudentFormNavbar/StudentFormNavbar";
import ProductNav from "../components/ProductDesignNavBar/ProductNav";
import StudentLessons from "../pages/Student/StudentLessons/StudentLessons";
import StudentProfile from "../pages/Student/StudentProfile/StudentProfile";
import LessonsApply from "../pages/Student/LessonsApply/LessonsApply";
import StudentLogin from "../pages/Student/StudentLogin/StudentLogin";
import LoginOptions from "../pages/LoginOptions/LoginOption";
import AdminOverview from "../pages/Admin/AdminOverview/AdminOverview";
import LessonOverview from "../pages/Admin/LessonOverview/LessonOverview";
import SidebarAdmin from "../components/SidebarAdmin/SidebarAdmin";
import NotFound from "../pages/ErrorPage/NotFound";
import ProtectedRoutes from "../StudentProtectedRoutes";
import { useContext } from "react";
import CreateLesson from "../pages/Admin/CreateLesson/CreateLesson";
import CoursePage from "../pages/Student/CoursePage/CoursePage";
import AddAnswers from "../pages/AddAnswers/AddAnswers";
import StudentAssignments from "../pages/Student/StudentAssignments/StudentAssignments";
import StudentProtectedRoutes from "../StudentProtectedRoutes";
import AdminProtectedRoutes from "../AdminProtectedRoutes";
import StudentCertificate from "../pages/Student/StudentCertificate/StudentCertificate";
import StudentForgotPassword from "../pages/Student/StudentForgotPassword/StudentForgotPassword";
import Certificate from "../components/Certificate/Certificate";
import TicTacToeGame from "../pages/Student/TicTacToeGame/TicTacToeGame";


const Routy = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<LandingPage />} />

        {/* STUDENT DASHBOARD */}
        <Route element={<StudentProtectedRoutes />}>
          <Route path="/student/dashboard" element={<StudentSidebar />}>
            <Route index element={<StudentDashboard />} />
            <Route path="message" element={<StudentMessage />} />
            <Route path="studentQuiz" element={<StudentQuiz />} />
            <Route path = "lessons" element = {<StudentLessons />} />
            <Route path = "quiz" element = {<StudentAssignments />} />
            <Route path = "certification" element = {<StudentCertificate />} />
            <Route path = "profile" element = {<StudentProfile />} />
            <Route path = "lessons/enroll/:courseName" element = {<LessonsApply />} />
          </Route>

          {/* PRODUCT DESIGN SECTION */}
          <Route path="/student/course/:path/:week" element={<ProductNav />}>
            <Route index element={<CoursePage />} />
          </Route>

          <Route path = "/student/game" element = {<TicTacToeGame />}/>
        </Route>

        {/* STUDENT LOGIN PAGE*/}
        <Route path="login" element={<StudentFormNavbar />}>
          <Route index element={<LoginOptions />} />
          <Route path="student" element={<StudentLogin />} />
          <Route path = "student/forgotPassword" element = {<StudentForgotPassword />} />
        </Route>

        {/* STUDENT SIGN UP PAGE */}
        <Route path="signup" element={<StudentFormNavbar  />}>
          <Route index element={<SignUpOptions />} />
          <Route path="student" element={<StudentSignUp />} />
        </Route>

        {/* ADMIN DASHBOARD */}
        <Route element={<AdminProtectedRoutes />}>
          <Route path="/admin/dashboard" element={<SidebarAdmin />}>
            <Route index element={<AdminOverview />} />
            <Route path="lessons" element={<LessonOverview />} />
            <Route path="createLesson" element={<CreateLesson />} />
          </Route>
        </Route>

        {/* ADMIN PAGEs */}
        <Route path="admin" element={<AdminNavbar />}>
          <Route path="login" element={<AdminLogin />} />
          <Route path="signup" element={<AdminSignUp />} />
          <Route path="forgotPassword" element={<ForgotPasswordAdmin />} />
          <Route element={<AdminProtectedRoutes />}>
            <Route path="welcome" element={<WelcomeAdmin />} />
          </Route>
        </Route>

        <Route path="*" element={<NotFound />} />
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
