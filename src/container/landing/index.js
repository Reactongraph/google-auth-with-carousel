import React, { useState, useEffect } from "react";
import developmentImage from "../../images/development.svg";
import communication from "../../images/communication.svg";
import engineering from "../../images/engineering.svg";
import painting from "../../images/painting.svg";
import arts from "../../images/arts.svg";
import explore from "../../images/explore.svg";
import mongoLogo from "../../images/mongo.svg";
import jsLogo from "../../images/js.svg";
import cLogo from "../../images/c.svg";
import htmlLogo from "../../images/html.svg";
import SliderContainer from "./sliderContainer";
import TabsConatiner from "./TabsContainer";
import { COURSE_CARDS, HEADER_TABS } from "../../metaComponent";

let settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  initialSlide: 0,
  centerPadding: "20px",

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

const LandingContainer = () => {
  const [selectedTabs, setSelectedTabs] = useState("development");
  useEffect(() => {
    if (!localStorage.getItem("userToken")) {
      this.props.history.push("/");
    }
  },[]);

  const handleTabs = data => {
    setSelectedTabs(data);
  };

  let selectedTabData = [];
  selectedTabData = COURSE_CARDS.filter(r => r.type === selectedTabs);
  return (
    <section className="content-wrapper">
        <div className="container">
          <div className="content-area">
            <h1 className="content-title">Learn what fascinates you</h1>
            <TabsConatiner
              developmentImage={developmentImage}
              communication={communication}
              engineering={engineering}
              painting={painting}
              arts={arts}
              explore={explore}
              tabsData={HEADER_TABS}
              selectedTabs={selectedTabs}
              handleTabs={handleTabs}
            />
          </div>
          <SliderContainer
            settings={settings}
            mongoLogo={mongoLogo}
            htmlLogo={htmlLogo}
            cLogo={cLogo}
            jsLogo={jsLogo}
            sliderData={selectedTabData}
          />
        </div>
      </section>
  );

}

export default LandingContainer;
