import { NavLink } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../context/UserContext";


// Header Component - displays links to sign in/out, displays user name if user is signed in


const Header = () => {
  const { authUser } = useContext(UserContext);

  return (
    <header>
      <div className="wrap header--flex">
        <h1 className="header--logo">
          <NavLink to="/" end>
            Courses
          </NavLink>
        </h1>
        <nav>
          {authUser === null ? (
            <ul className="header--signedout">
              <li>
                <NavLink to="/signup">Sign Up</NavLink>
              </li>
              <li>
                <NavLink to="/signin">Sign In</NavLink>
              </li>
            </ul>
          ) : (
            <ul className="header--signedin">
              <span>
                Welcome {authUser.firstName} {authUser.lastName}
              </span>
              <li>
                <NavLink to="signout">Sign Out</NavLink>
              </li>
            </ul>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
