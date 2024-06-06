import React from "react";
import { ProjectList } from "./ProjectList";
import { Link } from "react-router-dom";

const ProjectAllMasonry = () => {
  return (
    <section className="inner-project-area-two pt-130 pb-130">
      <div className="container">
        <div className="project-item-wrap">
          <div className="row justify-content-center">
            {[...ProjectList, ...ProjectList].map((item, index) => (
              <div key={index} className="col-lg-4 col-md-6 col-sm-10">
                <div className="project-item inner-project-item">
                  <div className="project-thumb">
                    <Link to={item.url}>
                      <img src={item.src2} alt="" />
                    </Link>
                  </div>

                  <div className="project-content">
                    <h2 className="title">
                      <Link to={item.url}>{item.title}</Link>
                    </h2>
                    <span>{item.title}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="autoload-btn text-center mt-30">
            <a href="#!" className="btn">
              Auto load
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectAllMasonry;
