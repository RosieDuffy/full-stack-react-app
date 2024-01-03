import { Route, Routes } from "react-router-dom";

import "./App.css";
import Courses from "./components/Courses";
import CourseDetail from "./components/CourseDetail";
import UserSignIn from "./components/UserSignIn";

// function testFunction() {
//   fetch("http://localhost:5000/api/courses")
//     .then((res) => res.json())
//     .then((res) => console.log(res));
// }

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Courses />} />
        <Route path="/courses/:id" element={<CourseDetail />} />
        <Route path="/signin" element={<UserSignIn />} />
      </Routes>
    </div>
  );
}

export default App;
