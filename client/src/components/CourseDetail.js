import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import Markdown from "react-markdown";

import { api } from "../utils/apiHelper";
import UserContext from "../context/UserContext";

/*
Course Detail Component - retrieves course data from the api to display. If the user is the course owner, "update" and "delete" are visible
*/

const CourseDetail = () => {
  const [course, setCourse] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const { id } = useParams();
  const navigate = useNavigate();
  const { authUser } = useContext(UserContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api(`/courses/${id}`, "GET");

        if (response.status === 200) {
          const returnedCourses = await response.json();
          setCourse(returnedCourses);
          setIsLoaded(true);
        } else if (response.status === 500) {
          navigate("/error");
        } else if (response.status === 404) {
          navigate("/notfound");
        }
      } catch (error) {
        console.log("Error finding requested course", error);
        navigate("/error");
      }
    };
    fetchData();
  }, [id, navigate]);

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      const response = await api(`/courses/${id}`, "DELETE", null, authUser);

      if (response.status === 204) {
        console.log("Course deleted");
        navigate("/");
      } else if (response.status === 403) {
        navigate("/forbidden"); // if user is not the course owner access is denied
      } else {
        throw new Error();
      }
    } catch (error) {
      console.log("Error finding course to delete", error);
      navigate("/error");
    }
  };
  if (isLoaded) {
    return (
      <main>
        <div className="actions--bar">
          <div className="wrap">
            {authUser && authUser.id === course.userId ? (
              <>
                <Link className="button" to={`/courses/${course.id}/update`}>
                  Update Course
                </Link>
                <Link className="button" to="/" onClick={handleDelete}>
                  Delete Course
                </Link>
              </>
            ) : null}

            <Link className="button button-secondary" to="/">
              Return to List
            </Link>
          </div>
        </div>

        <div className="wrap">
          {/* <h2>Course Detail</h2> */}
          <form>
            <div className="main--flex">
              <div>
                <h3 className="course--detail--title">Course Detail</h3>
                <h4 className="course--name">{course.title}</h4>
                <p>
                  By {course.User.firstName} {course.User.lastName}
                </p>
                <Markdown children={course.description} />
              </div>
              <div>
                <h3 className="course--detail--title">Estimated Time</h3>
                <p>{course.estimatedTime}</p>

                <h3 className="course--detail--title">Materials Needed</h3>
                <ul className="course--detail--list">
                  <Markdown children={course.materialsNeeded} />
                </ul>
              </div>
            </div>
          </form>
        </div>
      </main>
    );
  }
};

export default CourseDetail;
