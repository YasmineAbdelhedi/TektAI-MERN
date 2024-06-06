import React from "react";
import { TeamOneItemsArray } from "./TeamOneItemsArray";
import TeamOneItem from "./TeamOneItem";

const TeamAll = () => {
  return (
    <section className="team-area inner-team-area pt-130 pb-100">
      <div className="container">
        <div className="row justify-content-center">
          {TeamOneItemsArray.map((x, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-sm-9">
              <TeamOneItem item={x} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamAll;
