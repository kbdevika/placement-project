
import Login from "./component/login/login";
import Studentsregistration from "./component/Studentsregistration/Studentsregistration";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StudentDashboard from "./dashboard/StudentDashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./component/Home/home";
import JobDashboard from "./dashboard/JobDashboard";
import RecuiteRegistation from "./component/RecuiteRegistation/RecuiteRegistation";
import RecuiteDashboard from "./dashboard/RecuiteDashboard";
import RegisterJob from "./component/RegisterJob/RegisterJob";
import PostJob from "./component/postJob/postJob";
import  ViewJob from "./component/viewJobs/viewJob";
import ProjectDetails from "./component/ProjectDetails/ProjectDetails";
import ForgotPassword from "./component/ForgotPassword/ForgotPassword";
import EditProfile from "./component/EditProfile/EditProfile";
import ResetPassword from "./component/ResetPassword/ResetPassword";
import RecruiterHome from "./component/Home/RecruiterHome";
import RecruiterProfile from "./component/RecruiterProfile/RecruiterProfile";
import RecruiterEdit from "./component/RecruiterEdit/RecruiterEdit";
import AdministratorstudentProfile from "./component/AdministratorstudentProfile/AdministratorstudentProfile";
import AdminstuduProfileview from "./component/AdminstuduProfileview/AdminstuduProfileview";
import AdministratorJobdetails from "./component/AdministratorJobdetails/AdministratorJobdetails";
import AdminJobdetailsview from "./component/AdminJobdetailsview/AdminJobdetailsview";
import AdminHome from "./component/Home/AdminHome";
import Information from "./component/Information/Information";
import DepartmentDetails from "./component/DepartmentDetails/DepartmentDetails";
import InternshipDetails from "./component/IntershipDetails/InternshipDetails";
import Skills from "./component/Skills/Skills";
import WorkExperience from "./component/WorkExperience/WorkExperience";
import AddDetails from "./component/AddDetails/AddDetails";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/studentsregistration" element={<Studentsregistration />} />
        <Route path="/recuiteregistration" element={<RecuiteRegistation />} />
        <Route path="/registerJob" element={<RegisterJob />} />
        <Route path="/" element={<Login />} />
        <Route path="/studentDashboard" element={<StudentDashboard />} />
        <Route path="/recuiteDashboard" element={<RecuiteDashboard />} />
        <Route path="/JobDashboard" element={<JobDashboard />} />
        <Route path="/postJob" element={<PostJob />} />
        <Route path="/viewJobs" element={<ViewJob />} />
        <Route path="/pojectDetails" element={<ProjectDetails />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/editProfile" element={<EditProfile />} />
        <Route path="/resetPassword" element={<ResetPassword />} />
        <Route path="/recruiterHome" element={<RecruiterHome />} />
        <Route path="/recruiterProfile" element={<RecruiterProfile />} />
        <Route path="/recruiterEdit" element={<RecruiterEdit/>} />
        <Route path="/administratorstudentProfile" element={<AdministratorstudentProfile/>} />
        <Route path="/adminstuduProfileview" element={<AdminstuduProfileview/>} />
        <Route path="/administratorJobdetails" element={<AdministratorJobdetails/>} />
        <Route path="/adminJobdetailsview" element={<AdminJobdetailsview/>} />
        <Route path="/adminHome" element={<AdminHome/>} />
        <Route path="/information" element={<Information/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/departmentDetails" element={<DepartmentDetails />} />
        <Route path="/internshipDetails" element={<InternshipDetails />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/workExperience" element={<WorkExperience />} /> 
        <Route path="/addDetails" element={<AddDetails/>} />   

      </Routes>
    </BrowserRouter>
  );
}

export default App;
 