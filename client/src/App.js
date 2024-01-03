import { Route, Routes } from "react-router-dom";

import "./App.css";
import Courses from "./components/Courses";
import CourseDetail from "./components/CourseDetail";
import PrivateRoute from "./components/PrivateRoute";

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
        <Route element={<PrivateRoute />}>
          {/* <Route path="/:id/update" element={<UpdateDetail />} /> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
