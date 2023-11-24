import { Link, NavLink } from "react-router-dom";
import "./Header.scss";
import { datCookie } from "../../../helpers/cookie";

function Header() {
  const token = datCookie("token");

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__wrap">
            <div className="header__logo">
              <Link to="/">Quiz</Link>
            </div>
            {token && (
              <div className="header__menu">
                <ul>
                  <li>
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li>
                    <NavLink to="/topic">Topic</NavLink>
                  </li>
                  <li>
                    <NavLink to="/answers">Answers</NavLink>
                  </li>
                </ul>
              </div>
            )}
            <div className="header__account">
              <ul>
                {token ? (
                  <>
                    <li>
                      <Link to="/logout">Logout</Link>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <NavLink to="/login">Login</NavLink>
                    </li>
                    <li>
                      <NavLink to="/register">Register</NavLink>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
