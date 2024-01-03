import { Route, Routes } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import Courses from "./components/Courses";
import CourseDetail from "./components/CourseDetail";
import UserSignIn from "./components/UserSignIn";
import UserSignUp from "./components/UserSignUp";
import UserSignOut from "./components/UserSignOut";
import CreateCourse from "./components/CreateCourse";
import PrivateRoute from "./components/PrivateRoute";
import UpdateCourse from "./components/UpdateCourse";
import Forbidden from "./components/Forbidden";
import NotFound from "./components/NotFound";

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
        <Route path="/signout" element={<UserSignOut />} />
        <Route element={<PrivateRoute />}>
          <Route path="/courses/create" element={<CreateCourse />} />
          <Route path="/courses/:id/create" element={<UpdateCourse />} />
        </Route>
        <Route path="/forbidden" element={<Forbidden />} />
        <Route path="/notfound" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
