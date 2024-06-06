import React from "react";
import ProgressBar from "../../ProgressBar/ProgressBar";
import { ProgressBarItems } from "../../ProgressBar/ProgressBarItems";

const TeamDetailsProgress = () => {
  return (
    <div className="progress-wrap">
      {ProgressBarItems.slice(0, 3).map((x, index) => (
        <ProgressBar key={index} item={x} />
      ))}
    </div>
  );
};

export default TeamDetailsProgress;
