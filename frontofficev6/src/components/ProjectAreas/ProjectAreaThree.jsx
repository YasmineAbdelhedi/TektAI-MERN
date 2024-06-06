import React from "react";
import ProjectAreaThreeItem from "./ProjectAreaThreeItem";
import { ProjectList } from "./ProjectList";

const ProjectAreaThree = () => {
  return (
    <section className="project-area-three">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-10">
            <div className="section-title-three text-center mb-60">
              <span className="sub-title">Our Projects</span>
              <h2 className="title">Explore Our Innovative Projects</h2>
              
            </div>
          </div>
        </div>

        <div className="row">
          {ProjectList.map((x, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <ProjectAreaThreeItem item={x} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectAreaThree;
