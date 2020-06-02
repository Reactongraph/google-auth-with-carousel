import React from "react";

const TabsConatiner = ({ tabsData, selectedTabs, handleTabs }) => (
  <ul className="content-tabs">
    {tabsData.map((data, i) => (
      <li onClick={data.name !== "explore" ? () => handleTabs(data.name) : ""}>
        <div
          className={`tabs ${data.name === "explore" ? "explore" : ""} ${
            selectedTabs === data.name ? "active" : ""
          }`}
        >
          <div className="icon">
            <img src={data.icon} alt={data.name} />
          </div>
          <span>{data.title}</span>
        </div>
      </li>
    ))}
  </ul>
);

export default TabsConatiner;
