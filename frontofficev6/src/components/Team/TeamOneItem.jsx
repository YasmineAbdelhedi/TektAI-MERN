import React from "react";
import { Link } from "react-router-dom";

const TeamOneItem = ({ item }) => {
  return (
    <div className="team-item">
      <div className="team-thumb">
        <Link to={item.url}>
          <img src={item.src} alt="" />
        </Link>
      </div>

      <div className="team-content">
        <h3 className="title">
          <Link to={item.url}>{item.title}</Link>
        </h3>

        <span>{item.designation}</span>

        <div className="team-social">
          <span className="social-toggle-icon">
            <i className="fas fa-share-alt"></i>
          </span>
          <ul className="list-wrap">
            <li>
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TeamOneItem;
