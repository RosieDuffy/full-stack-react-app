import { NavLink } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../context/UserContext";

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
                <a href="sign-up.html">Sign Up</a>
              </li>
              <li>
                <a href="sign-in.html">Sign In</a>
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
