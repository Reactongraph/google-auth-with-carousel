import React from "react";
import Slider from "../../../component/sharedComponents/Slider";

const SliderContainer = ({ settings, sliderData }) => (
  <div className="slider-content">
    <Slider config={settings}>
      {sliderData.map((data, i) => (
        <div className="parentWrap" key={i}>
          <div className="boxADS">
            <div className="course-card">
              <img width="125px" height="125px" src={data.icon} alt="mongodb" />
              <ul className="badges">
                <li>
                  <span className="badge">{data.time}</span>
                </li>
              </ul>
            </div>
            <div className="course-content">
              <h3>{data.title}</h3>
              <p>
                {" "}
                {data.description.length >= 40
                  ? `${data.description.substring(0, 65)}...`
                  : data.description}{" "}
              </p>
              <span>{`RM${data.price}`}</span>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  </div>
);

export default SliderContainer;
