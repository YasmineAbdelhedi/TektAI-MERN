import React from "react";
import ChallengeUpdateForm from "./ChallengeUpdateForm";

const ChallengeArea = () => {
  return (
    <section className="estimate-area pt-50 pb-130">
      <div className="container" >
        <div className="row justify-content-center">
          

          <div className=" col-md-10">
            <div className="estimate-form"style={{backgroundColor:"#88BBDD"}}>
              <h2 className="title">Welcome , Submit your challenge here!</h2>
              {/* form */}
              <ChallengeUpdateForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChallengeArea;