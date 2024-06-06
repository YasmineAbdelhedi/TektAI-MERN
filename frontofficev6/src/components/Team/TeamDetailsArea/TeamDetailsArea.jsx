import React from "react";
import TeamDetailsForm from "./TeamDetailsForm";
import TeamDetailsProgress from "./TeamDetailsProgress";
import TeamDetailsSidebar from "./TeamDetailsSidebar";
import TeamDetailsSlider from "./TeamDetailsSlider";

const TeamDetailsArea = () => {
  return (
    <section className="team-details-area pt-130 pb-100">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-8">
            {/* team details sidebar */}
            <TeamDetailsSidebar />
          </div>

          <div className="col-lg-8">
            <div className="team-details-content">

              <div className="team-details-form">
                <h2 className="title">
                  Feel Free to Write to Us <br /> 
                </h2>

                {/* form */}
                <TeamDetailsForm />
              </div>
            </div>
          </div>
        </div>

        <div className="related-member-wrap">
          {/* team details slider */}
          {/* <TeamDetailsSlider /> */}
        </div>
      </div>
    </section>
  );
};

export default TeamDetailsArea;
