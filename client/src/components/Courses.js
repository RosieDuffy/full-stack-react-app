import { useState, useEffect } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";

import { api } from "../utils/apiHelper";

/*
Courses Component - retrieves data on all courses from the api and displays a link to each course. The user is also linked to create a new course
*/

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api("/courses", "GET");
        const returnedCourses = await response.json();

        if (response.status === 200) {
          setCourses(returnedCourses);
        } else if (response.status === 500) {
          navigate("/error");
        } else if (response.status === 404) {
          navigate("/notfound");
        }
      } catch (error) {
        console.log("Error finding courses", error);
        navigate("/error");
      }
    };
    fetchData();
  }, [navigate]);

  return (
    <main>
      <div className="wrap main--grid">
        {courses.map((course) => {
          return (
            <NavLink
              to={`courses/${course.id}`}
              className="course--module course--link"
              key={course.id}
            >
              <h2 className="course--label">Course</h2>
              <h3 className="course--title">{course.title}</h3>
            </NavLink>
          );
        })}

        <Link
          className="course--module course--add--module"
          to="courses/create"
        >
          <span className="course--add--title">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 13 13"
              className="add"
            >
              <polygon points="7,6 7,0 6,0 6,6 0,6 0,7 6,7 6,13 7,13 7,7 13,7 13,6 "></polygon>
            </svg>
            New Course
          </span>
        </Link>
      </div>
    </main>
  );
};

export default Courses;
