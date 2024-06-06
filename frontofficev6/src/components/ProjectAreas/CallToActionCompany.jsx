import React from "react";
import ProjectAreaTwoItem from "./ProjectAreaTwoItem";

const CallToActionCompany = () => {
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
                        title: "Create new Challenge! ",
                        url: "/estimate",
                        desc: `Creating  new challenges empowers you to engage with data science community, inspire innovation, and address real-world problems.`,
                        className: "big-item",
                      }}
                    />
                    <ProjectAreaTwoItem
                      item={{
                        src: "/img/images/abg.svg",
                        title: "On going challenges!",
                        url: "/project-details",
                        desc: `Browse the on going challenges on TektAi! `,
                        className: "small-item",
                      }}
                    />

                  </div>
                  <div className="col-lg-6">
                     <ProjectAreaTwoItem
                      item={{
                        src: "/img/images/abg.svg",
                        title: "Browse challenges!",
                        url: "/shop",
                        desc: `Browse challenges or add yours `,
                        className: "small-item",
                      }}
                    />
                      <ProjectAreaTwoItem
                      item={{
                        src: "/img/images/star-fill.svg",
                        title: "My favorite challenges ",
                        url: "/project-details",
                        desc: `Browse your most favorite challenges `,
                        className: "small-item",
                      }}
                    />
                     <ProjectAreaTwoItem
                      item={{
                        src: "/img/images/abg.svg",
                        title: "My challenges",
                        url: "/project-details",
                        desc: `Browse your own challenges `,
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

export default CallToActionCompany;
