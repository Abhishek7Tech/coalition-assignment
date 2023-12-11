import NavBar from "../navbar/nav-main";
import Text from "../assets/img/text-1.png";
import "../index.css";
import NavBarSection from "../navbar/nav-section";
import History from "../history-section/history-section";
const Main = () => {
  return (
    <>
    <main>
      <NavBar></NavBar>
      <div className="heading">
       <img src={Text} alt="Los Angeles Mountain Logo"></img>
      </div>
    </main>
    <NavBarSection></NavBarSection>
    <History></History>
    </>
  );
};

export default Main;
