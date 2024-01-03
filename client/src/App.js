import { Route, Routes } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import Courses from "./components/Courses";
import CourseDetail from "./components/CourseDetail";
import UserSignIn from "./components/UserSignIn";
import UserSignUp from "./components/UserSignUp";
import CreateCourse from "./components/CreateCourse";
import PrivateRoute from "./components/PrivateRoute";
import UpdateCourse from "./components/UpdateCourse";

// function testFunction() {
//   fetch("http://localhost:5000/api/courses")
//     .then((res) => res.json())
//     .then((res) => console.log(res));
// }

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Courses />} />
        <Route path="/courses/:id" element={<CourseDetail />} />
        <Route path="/signin" element={<UserSignIn />} />
        <Route path="/signup" element={<UserSignUp />} />
        <Route element={<PrivateRoute />}>
          <Route path="/courses/create" element={<CreateCourse />} />
          <Route path="/courses/:id/create" element={<UpdateCourse />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
