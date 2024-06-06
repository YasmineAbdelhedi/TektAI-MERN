import React from "react";

const ClientInfo = () => {
  return (
    <div className="project-info-wrap">
      <div className="project-info-item">
        <span>Clients:</span>
        <h5 className="title">Mike Hardson</h5>
      </div>

      <div className="project-info-item">
        <span>Category:</span>
        <h5 className="title">Cleaning, Washing</h5>
      </div>

      <div className="project-info-item">
        <span>Date:</span>
        <h5 className="title">26 Feb, 2023</h5>
      </div>

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
    </div>
  );
};

export default ClientInfo;
