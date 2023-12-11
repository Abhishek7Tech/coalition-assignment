import { NavLink } from "react-router-dom";
import "../index.css";
import { useState } from "react";
const ClimbNavBar = () => {

    const [isActive, setIsActive] = useState({mountain1: true, mountain2: false});

    const mountain1LinkHandler = (e) => {
        e.preventDefault();
        setIsActive({mountain1: true, mountain2: false})
    }

    const mountain2LinkHandler = (e) => {
        e.preventDefault();
        setIsActive({mountain1: false, mountain2: true})


    }
  return (
    <nav className="climb-navbar">
      <ul className="climb-navbar-list">
        <li className="mountain-1">
          <NavLink onClick={mountain1LinkHandler} to={""}>
            <span className={isActive.mountain1 ? "active-mountain-list" : "inactive-mountain-list"}>MOUNTAIN 1</span>
          </NavLink>
        </li>
        <li className="mountain-2">
          <NavLink onClick={mountain2LinkHandler} to={""}>
            <span className={isActive.mountain2 ? "active-mountain-list" : "inactive-mountain-list"}>MOUNTAIN 2</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default ClimbNavBar;
