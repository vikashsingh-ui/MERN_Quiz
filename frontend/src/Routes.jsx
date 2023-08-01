import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import NotFound from "pages/NotFound";
import RequireAuth from "./PrivateRoute";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ReviewQuestions = React.lazy(() => import("pages/ReviewQuestions"));
const AnswerQuestion = React.lazy(() => import("pages/AnswerQuestion"));
const Instruction = React.lazy(() => import("pages/Instruction"));
const SelectTopicOne = React.lazy(() => import("pages/SelectTopicOne"));
const Dashboard = React.lazy(() => import("pages/Dashboard"));
const Login = React.lazy(() => import("pages/Login"));
const SignUpPage = React.lazy(() => import("pages/SignUp"));

const ProjectRoutes = () => {
 
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/dashboard"   element={<RequireAuth><Dashboard /></RequireAuth>} />
          <Route path="/selecttopicone" element={<RequireAuth><SelectTopicOne /></RequireAuth>} />
          <Route path="/instruction" element={<RequireAuth><Instruction /></RequireAuth>} />
          <Route path="/answerquestion" element={<RequireAuth><AnswerQuestion /></RequireAuth>} />
          <Route path="/reviewquestions" element={<RequireAuth><ReviewQuestions /></RequireAuth>} />
        </Routes>
        <ToastContainer />
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
