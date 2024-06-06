import React from "react";

const OurHistoryItem = ({ item }) => {
  return (
    <div className="history-item">
      <div className="history-date">
        <h2 className="title">{item.year}</h2>
      </div>

      <div className="history-content">
        <h2 className="title">{item.title}</h2>

        <p>
          {item.desc}
        </p>
      </div>
    </div>
  );
};

export default OurHistoryItem;
