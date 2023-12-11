import "../index.css";

import Slide1 from "../assets/img/bg3.png";
import Slide2 from "../assets/img/man.png";
import { useState } from "react";

const slideArray = [Slide2, Slide1, Slide2, Slide1, Slide2, Slide1];

const SlideShow = () => {
  const [imgArray, setImageArray] = useState(slideArray.slice(0, 4));

  const [activeBtn, setActiveBtn] = useState({
    one: true,
    tow: false,
    three: false,
  });

  const button1Handler = (e) => {
    e.preventDefault();
    console.log("Clicked-1");
    setImageArray(slideArray.slice(0, 4));
    setActiveBtn({ one: true, tow: false, three: false });
  };

  const button2Handler = (e) => {
    e.preventDefault();
    console.log("Clicked-2");
    setImageArray(slideArray.slice(1, 5));
    setActiveBtn({ one: false, tow: true, three: false });
  };

  const button3Handler = (e) => {
    e.preventDefault();
    console.log("Clicked-3");
    setImageArray(slideArray.slice(2, 6));
    setActiveBtn({ one: false, tow: false, three: true });
  };
  return (
    <div className="slider">
      <div className="slides">
        {imgArray.map((img, i) => {
          return (
            <div className="slider-img" key={i}>
              <img src={img} alt={`slide-img-${i + 1}`}></img>
            </div>
          );
        })}
      </div>
      <div className="slides-btns">
        <button className="slider-btn active" onClick={button1Handler}>
          &#9679;
        </button>
        <button className="slider-btn inactive" onClick={button2Handler}>
          &#9679;
        </button>
        <button className="slider-btn inactive" onClick={button3Handler}>
          &#9679;
        </button>
      </div>
    </div>
  );
};

export default SlideShow;
