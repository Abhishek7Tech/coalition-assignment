import Logo from "../assets/img/logo.png";
import Text from "../assets/img/text-2.png";
import { NavLink } from "react-router-dom";
import "../index.css";
import { useContext } from "react";
import { ScrollContext } from "../context/scroll-to";
import { scrollToSection } from "../utils/scroller";
const NavBarSection = () => {
  const {historySection, teamSection} = useContext(ScrollContext);
  return (
    <nav className="nav-section nav">
      <div className="site-logo">
        <img src={Logo} alt="site-logo" className="logo"></img>
        <img src={Text} alt="los angles mountain text" className="text"></img>
      </div>
      <ol className="nav-section-bar-list">
        <li>
          <NavLink onClick={() => scrollToSection(historySection)} >
            <span>HISTORY</span>
          </NavLink>
        </li>
        <li className="nav-bar-link">
          <NavLink onClick={() => scrollToSection(teamSection)}>
            <span>TEAM</span>
          </NavLink>
        </li>
      </ol>
    </nav>
  );
};

export default NavBarSection;
