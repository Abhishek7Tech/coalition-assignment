import Logo from "../assets/img/logo.png";
import { NavLink } from "react-router-dom";
import "../index.css";
import { useContext, useRef, useState } from "react";
import { scrollToSection } from "../utils/scroller";
import { ScrollContext } from "../context/scroll-to";
import Arrow from "../assets/img/arrow-down.png";
import Cross from "../assets/img/cross.png";

const NavBarMobile = () => {
  const { teamSection, historySection } = useContext(ScrollContext);
  const [buttonBool, setButtonBool] = useState(true);
  const crossButtonHandler = (e) => {
    e.preventDefault();
    setButtonBool(true);
  };

  const arrowButtonHandler = (e) => {
    e.preventDefault();
    setButtonBool(false);
  };
  return (
    <>
      {buttonBool && (
        <button className="nav-bar-mobile-btn" onClick={arrowButtonHandler}>
          <img src={Arrow} alt="arrow-button"></img>
        </button>
      )}
      {!buttonBool && (
        <button className="nav-bar-mobile-btn" onClick={crossButtonHandler}>
          <img src={Cross} alt="cross-button"></img>
        </button>
      )}

      {buttonBool && (
        <nav className="nav-mobile">
          <div>
            <img src={Logo} alt="site-logo"></img>
          </div>
          <ol className="nav-mobile-bar-list">
            <li className="nav-mobile-link">
              <NavLink onClick={() => scrollToSection(historySection)}>
                <span>HISTORY</span>
              </NavLink>
            </li>
            <li className="nav-mobile-link">
              <NavLink onClick={() => scrollToSection(teamSection)}>
                <span>TEAM</span>
              </NavLink>
            </li>
          </ol>
        </nav>
      )}
    </>
  );
};

export default NavBarMobile;
