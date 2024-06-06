import React from "react";

const TeamDetailsSidebar = () => {
  return (
    <div className="team-details-img">
      <img src="/img/images/contactUs.jpg" alt="" />
      <div className="team-details-info">
        <h2 className="title">TektAi</h2>
        <div className="team-details-social">
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

        <div className="info-list">
          <ul className="list-wrap">
           
            <li>
              Phone : <a href="tel:0123456789">216 56 55 84 02</a>
            </li>
            <li>
              Email : <a href="mailto:custom@gmail.com">tektaitheoriginals@gmail.com</a>
            </li>
            <li>
              Address : <span>06 rue des jasmins , La Marsa 2078</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TeamDetailsSidebar;
