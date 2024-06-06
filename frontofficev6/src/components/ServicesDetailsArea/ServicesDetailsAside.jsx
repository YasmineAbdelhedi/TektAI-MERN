import React, { useEffect } from "react";
import { bgImgFromData } from "../../lib/helpers";

const ServicesDetailsAside = () => {
  useEffect(() => {
    bgImgFromData();
  }, []);

  const services = [
    "Kitchen Cleaning",
    "Window Cleaning",
    "Cleaning",
    "Laundry Services",
    "Office Cleaning",
    "Toilet Cleaning",
  ];

  return (
    <aside className="services-sidebar">
      <div className="widget">
        <div className="services-cat-list">
          <h4 className="title">All Services</h4>

          <ul className="list-wrap">
            {services.map((item, index) => (
              <li key={index}>
                <a href={`#${item.split(" ").join("-")}`}>{item}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="widget">
        <div
          className="download-wrap"
          data-background="/img/images/download_bg.jpg"
        >
          <span>PDF Files</span>

          <h2 className="title">Download Brochures</h2>

          <a href="#">
            Company Brochure <i className="far fa-file-pdf"></i>
          </a>

          <a href="#">
            2020 Brochute <i className="far fa-file-pdf"></i>
          </a>
        </div>
      </div>
    </aside>
  );
};

export default ServicesDetailsAside;
