import React from "react";
import ProjectAreaTwoItem from "./ProjectAreaTwoItem";

const ProjectAreaTwo = () => {
  return (
    <section className="project-area-two pt-70 pb-100">
      <div className="container">
        

        <div className="row">
          <div className="col-lg-12">
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="all-tab-pane"
                role="tabpanel"
                aria-labelledby="all-tab"
                tabIndex="0"
              >
                <div className="row">
                  <div className="col-lg-6" >
                    <ProjectAreaTwoItem
                    
                      item={{
                        src: "/img/images/trophy.svg",
                        title: "Learn to compete ! ",
                        url: "/learnToCompete",
                        desc: `Learn to compete on TektAi by challenging yourself,
                         engaging with others, and striving for excellence in your pursuits..`,
                        className: "big-item",
                      }}
                    />
                     <ProjectAreaTwoItem
                      item={{
                        src: "/img/images/star-fill.svg",
                        title: "My favorite challenges ",
                        url: "/project-details",
                        desc: `Browse data or add your own dataset `,
                        className: "small-item",
                      }}
                    />
                     <ProjectAreaTwoItem
                      item={{
                        src: "/img/images/abg.svg",
                        title: "My challenges",
                        url: "/project-details",
                        desc: `Browse data or add your own dataset `,
                        className: "small-item",
                      }}
                    />
                    
                  </div>
                  <div className="col-lg-6">
                    <ProjectAreaTwoItem
                      item={{
                        src: "/img/images/database-fill.svg",
                        title: "Explore datasets",
                        url: "/datasetArea",
                        desc: `Browse data or add your own dataset `,
                        className: "small-item",
                      }}
                    />

                    <ProjectAreaTwoItem
                      item={{
                        src: "/img/images/book.svg",
                        title: "Start learning!",
                        url: "/project-details",
                        desc: `Take a course now and enrich your knowledge!`,
                        className: "small-item",
                      }}
                    />
                     <ProjectAreaTwoItem
                      item={{
                        src: "/img/images/abg.svg",
                        title: "Browse challenges!",
                        url: "/project-details",
                        desc: `Browse data or add your own dataset `,
                        className: "small-item",
                      }}
                    /> <ProjectAreaTwoItem
                    item={{
                      src: "/img/images/people.svg",
                      title: "My Team",
                      url: "/project-details",
                      desc: `Browse data or add your own dataset `,
                      className: "small-item",
                    }}
                  />
                  </div>
                </div>
              </div>

              <div
                className="tab-pane fade"
                id="office-tab-pane"
                role="tabpanel"
                aria-labelledby="office-tab"
                tabIndex="0"
              >
                <div className="row">
                  <div className="col-lg-6">
                    <ProjectAreaTwoItem
                      item={{
                        src: "/img/images/trophy.svg",
                        title: "Home Cleaning Services",
                        url: "/project-details",
                        desc: `Lorem ipsum dolor sit consectetur. Ut tellus suspendisse aliquam.`,
                        className: "big-item",
                      }}
                    />
                  </div>
                  <div className="col-lg-6">
                    <ProjectAreaTwoItem
                      item={{
                        src: "/img/project/h2_project_img01.jpg",
                        title: "office Cleaning Services",
                        url: "/project-details",
                        desc: `Lorem ipsum dolor sit consectetur. Ut tellus suspendisse aliquam.`,
                        className: "small-item",
                      }}
                    />
                    <ProjectAreaTwoItem
                      item={{
                        src: "/img/project/h2_project_img02.jpg",
                        title: "Outdoor Cleaning Services",
                        url: "/project-details",
                        desc: `Lorem ipsum dolor sit consectetur. Ut tellus suspendisse aliquam.`,
                        className: "small-item",
                      }}
                    />
                  </div>
                </div>
              </div>

              <div
                className="tab-pane fade"
                id="home-tab-pane"
                role="tabpanel"
                aria-labelledby="home-tab"
                tabIndex="0"
              >
                <div className="row">
                  <div className="col-lg-6">
                    <ProjectAreaTwoItem
                      item={{
                        src: "/img/project/h2_project__img03.jpg",
                        title: "Home Cleaning Services",
                        url: "/project-details",
                        desc: `Lorem ipsum dolor sit consectetur. Ut tellus suspendisse aliquam.`,
                        className: "big-item",
                      }}
                    />
                  </div>
                  <div className="col-lg-6">
                    <ProjectAreaTwoItem
                      item={{
                        src: "/img/project/h2_project_img01.jpg",
                        title: "office Cleaning Services",
                        url: "/project-details",
                        desc: `Lorem ipsum dolor sit consectetur. Ut tellus suspendisse aliquam.`,
                        className: "small-item",
                      }}
                    />
                    <ProjectAreaTwoItem
                      item={{
                        src: "/img/project/h2_project_img02.jpg",
                        title: "Outdoor Cleaning Services",
                        url: "/project-details",
                        desc: `Lorem ipsum dolor sit consectetur. Ut tellus suspendisse aliquam.`,
                        className: "small-item",
                      }}
                    />
                  </div>
                </div>
              </div>

              <div
                className="tab-pane fade"
                id="outdoor-tab-pane"
                role="tabpanel"
                aria-labelledby="outdoor-tab"
                tabIndex="0"
              >
                <div className="row">
                  <div className="col-lg-6">
                    <ProjectAreaTwoItem
                      item={{
                        src: "/img/project/h2_project__img01.jpg",
                        title: "Home Cleaning Services",
                        url: "/project-details",
                        desc: `Lorem ipsum dolor sit consectetur. Ut tellus suspendisse aliquam.`,
                        className: "big-item",
                      }}
                    />
                  </div>
                  <div className="col-lg-6">
                    <ProjectAreaTwoItem
                      item={{
                        src: "/img/project/h2_project_img01.jpg",
                        title: "office Cleaning Services",
                        url: "/project-details",
                        desc: `Lorem ipsum dolor sit consectetur. Ut tellus suspendisse aliquam.`,
                        className: "small-item",
                      }}
                    />
                    <ProjectAreaTwoItem
                      item={{
                        src: "/img/project/h2_project_img02.jpg",
                        title: "Outdoor Cleaning Services",
                        url: "/project-details",
                        desc: `Lorem ipsum dolor sit consectetur. Ut tellus suspendisse aliquam.`,
                        className: "small-item",
                      }}
                    />
                  </div>
                </div>
              </div>

              <div
                className="tab-pane fade"
                id="laundry-tab-pane"
                role="tabpanel"
                aria-labelledby="laundry-tab"
                tabIndex="0"
              >
                <div className="row">
                  <div className="col-lg-6">
                    <ProjectAreaTwoItem
                      item={{
                        src: "/img/project/h2_project__img02.jpg",
                        title: "Home Cleaning Services",
                        url: "/project-details",
                        desc: `Lorem ipsum dolor sit consectetur. Ut tellus suspendisse aliquam.`,
                        className: "big-item",
                      }}
                    />
                  </div>
                  <div className="col-lg-6">
                    <ProjectAreaTwoItem
                      item={{
                        src: "/img/project/h2_project_img01.jpg",
                        title: "office Cleaning Services",
                        url: "/project-details",
                        desc: `Lorem ipsum dolor sit consectetur. Ut tellus suspendisse aliquam.`,
                        className: "small-item",
                      }}
                    />
                    <ProjectAreaTwoItem
                      item={{
                        src: "/img/project/h2_project_img02.jpg",
                        title: "Outdoor Cleaning Services",
                        url: "/project-details",
                        desc: `Lorem ipsum dolor sit consectetur. Ut tellus suspendisse aliquam.`,
                        className: "small-item",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectAreaTwo;
