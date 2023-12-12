import "../index.css";
import ClimbNavBar from "../navbar/climb-nav";

const ClimbSection = () => {
  return (
    <>
      <section className="climb-section">
        <ClimbNavBar></ClimbNavBar>
        <div className="climb-list-section">
          <ul className="climb-list">
            <h1>SCHEDULE</h1>
            <li className="climb-list-element">
              <span className="climb-list-date">25 Nov 2016</span>
              <span className="climb-list-name">Vestibulum viverra</span>
            </li>

            <li className="climb-list-element">
              <span className="climb-list-date">28 Nov 2016</span>
              <span className="climb-list-name">Vestibulum viverra</span>
            </li>
            <br></br>
            <li className="climb-list-element">
              <span className="climb-list-date">18 Dec 2016</span>
              <span className="climb-list-name">Vestibulum viverra</span>
            </li>
            <br></br>

            <li className="climb-list-element">
              <span className="climb-list-date">7 Jan 2017</span>
              <span className="climb-list-name">Vestibulum viverra</span>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default ClimbSection;
