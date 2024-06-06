import React from "react";
import { TeamOneItemsArray } from "./TeamOneItemsArray";
import TeamTwoItem from "./TeamTwoItem";

const TeamTwo = () => {
  return (
    <section className="team-area-two pt-125 pb-100">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section-title-two text-center mb-60 tg-heading-subheading animation-style1">
              <span className="sub-title">Expert Team</span>
              <h2 className="title">
                Meet Our Experienced &{" "}
                <span>
                  Professional Team
                  <svg
                    viewBox="0 0 173 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 22.9998C8.5 14.2152 90 -14 172 14.2148"
                      strokeWidth="3"
                    />
                  </svg>
                </span>
                
              </h2>
            </div>
          </div>
        </div>

        <div className="row">
          {TeamOneItemsArray.slice(0,4).map((x, index) => (
            <div key={index} className="col-lg-4 col-sm-6">
              <TeamTwoItem item={x} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamTwo;
