import React from "react";
import cn from "classnames";

const FaqItem = ({ item, parentId }) => {
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id={item.id}>
        <button
          className={cn("accordion-button", item.btnClass)}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#${item.controls}`}
          aria-expanded={item.expanded}
          aria-controls={item.controls}
        >
          {item.title}
        </button>
      </h2>

      <div
        id={item.controls}
        className={cn("accordion-collapse collapse", item.contentClass)}
        aria-labelledby={item.id}
        data-bs-parent={"#" + parentId}
      >
        <div className="accordion-body">
          <p>{item.details}</p>
        </div>
      </div>
    </div>
  );
};

export default FaqItem;
