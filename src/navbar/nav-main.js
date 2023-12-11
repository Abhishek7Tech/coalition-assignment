import Logo from "../assets/img/logo.png";
import { NavLink } from "react-router-dom";
import "../index.css";
const NavBar = () => {
  return (
    <nav>
      <div>
        <img src={Logo} alt="site-logo"></img>
      </div>
      <ol className="nav-bar-list">
        <li>
          <NavLink >
            <span>HISTORY</span>
          </NavLink>
        </li>
        <li>
          <NavLink>
            <span>TEAM</span>
          </NavLink>
        </li>
      </ol>
    </nav>
  );
};

export default NavBar;
