import "../index.css";
import ClimbNavBar from "../navbar/climb-nav";

const Climb = () => {
  return (
    <>
    <section className="climb">
      <div className="climb-head">
        <div className="climb-heading">
          <div className="heading-1">
            <h1>02</h1>
          </div>
          <div className="heading-2">
            <h2>CLIMB</h2>
            <h3>&#9632;</h3>
          </div>
        </div>
        <p className="climb-para">
          {" "}
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias
          aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis
          suscipit eaque?
        </p>
      </div>
    </section>
    <ClimbNavBar></ClimbNavBar>
    </>
  );
};

export default Climb;
