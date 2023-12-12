import Logo from "../assets/img/logo.png";
import { NavLink } from "react-router-dom";
import "../index.css";
import { useContext } from "react";
import { ScrollContext } from "../context/scroll-to";
import { scrollToSection } from "../utils/scroller";
const NavBar = () => {
  const {teamSection, historySection} = useContext(ScrollContext);
  return (
    <nav>
      <div>
        <img src={Logo} alt="site-logo"></img>
      </div>
      <ol className="nav-bar-list">
        <li>
          <NavLink onClick={() => scrollToSection(historySection)}>
            <span>HISTORY</span>
          </NavLink>
        </li>
        <li>
          <NavLink onClick={() => scrollToSection(teamSection)}>
            <span>TEAM</span>
          </NavLink>
        </li>
      </ol>
    </nav>
  );
};

export default NavBar;
