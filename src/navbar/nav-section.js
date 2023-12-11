import Logo from "../assets/img/logo.png";
import Text from "../assets/img/text-2.png";
import { NavLink } from "react-router-dom";
import "../index.css";
const NavBarSection = () => {
  return (
    <nav className="nav-section">
      <div>
        <img src={Logo} alt="site-logo"></img>
        <img src={Text} alt="los angles mountain text" className="text"></img>
      </div>
      <ol className="nav-section-bar-list">
        <li>
          <NavLink >
            <span>HISTORY</span>
          </NavLink>
        </li>
        <li className="nav-bar-link">
          <NavLink>
            <span>TEAM</span>
          </NavLink>
        </li>
      </ol>
    </nav>
  );
};

export default NavBarSection;
