import React from "react";
import { Link } from "react-router-dom";

const TeamTwoItem = ({ item }) => {
  return (
    <div className="team-item-two">
      <div className="team-thumb-two">
        <Link to={item.url}>
          <img src={item.src2} alt="" />
        </Link>
      </div>

      <div className="team-content-two">
        <h3 className="title">
          <Link to={item.url}>{item.title}</Link>
        </h3>

        <span>{item.designation}</span>
        
      </div>
    </div>
  );
};

export default TeamTwoItem;
