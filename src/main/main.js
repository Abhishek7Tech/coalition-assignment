import NavBar from "../navbar/nav-main";
import Text from "../assets/img/text-1.png";
import "../index.css";
import NavBarSection from "../navbar/nav-section";
import History from "../history-section/history-section";
import Climb from "../climb/climb";
import { useRef } from "react";
import NavBarMobile from "../navbar/nav-main-mobile";
const Main = () => {
  const width = useRef(window.innerWidth);
  console.log(width);
  return (
    <>
      <main>
         <NavBar></NavBar>
         <NavBarMobile></NavBarMobile>
        <div className="heading">
          <img src={Text} alt="Los Angeles Mountain Logo"></img>
        </div>
      </main>
      <NavBarSection></NavBarSection>
      <History></History>
      <Climb></Climb>
    </>
  );
};

export default Main;
