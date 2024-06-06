import React from "react";
import OdometerItem from "../Odometer/OdometerItem";

const CounterAreaOneItem = ({ item, userData }) => {
  let countValue;

  switch (item.type) {
    case 'datasets':
      countValue = userData.datasets;
      break;
    case 'challenges':
      countValue = userData.challenges;
      break;
    case 'courses':
      countValue = userData.courses;
      break;
    case 'awards':
      countValue = userData.winningAwards;
      break;
    default:
      countValue = 0;
  }

  return (
    <div className="counter-item">
      <div className="icon">{item.icon}</div>
      <div className="content">
        <h2 className="count">
          <span
            className="odometer counter-one-odometer"
            data-count={countValue}
          >
            <OdometerItem amount={countValue} /> +
          </span>
        </h2>
        <p>{item.title}</p>
      </div>
    </div>
  );
};

export default CounterAreaOneItem;
