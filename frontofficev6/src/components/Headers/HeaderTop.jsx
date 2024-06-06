import React from "react";
import cn from "classnames";

const HeaderTop = ({ className }) => {
  return (
    <div className={cn("header-top", className)}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="header-top-left">
              <span>
                <i className="fas fa-fire-alt"></i> best cleaning company
                website forever!
              </span>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="header-top-right">
              <span>
                <i className="far fa-clock"></i> working hours : Mon-sat (8.00am
                - 6.00PM)
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
