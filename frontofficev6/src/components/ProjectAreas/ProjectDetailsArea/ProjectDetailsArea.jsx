import React from "react";
import ProjectAreaThreeItem from "../ProjectAreaThreeItem";
import { ProjectList } from "../ProjectList";
import ClientInfo from "./ClientInfo";
import ProjectDetailsPagination from "./ProjectDetailsPagination";

const ProjectDetailsArea = () => {
  return (
    <section className="project-details-area pt-130 pb-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="project-details-wrap">
              <div className="project-details-thumb">
                <img src="/img/project/project_details_img.jpg" alt="" />

                {/* client info */}
                <ClientInfo />
              </div>

              <div className="project-details-content">
                <h2 className="title">Outdoor Cleaning</h2>
                <span className="sub-title">Office cleaning</span>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Ut tellus suspendisse
                  nulla aliquam. Risus rutrum tellus eget ultrices pretium nisi
                  amet facilisis. Augue eu vulputate tortor egestas cursus
                  vivamus. Commodo dictum iaculis eget massa phasellus ultrices
                  nunc dignissim. Id nulla amet tincidunt urna sed massa sed.
                  Pellentesque imperdiet proin aliquam nisl nulla. In donec
                  massa ultrices amet eget. Tristique sed purus et maecenas
                  condimentum massa dolor. Lacus purus lectus diam diam tellus
                  libero id sapien justo.Lorem ipsum dolor sit amet consectetur.
                  Ut tellus suspendisse nulla aliquam. Risus rutrum tellus eget
                  ultrices pretium nisi amet facilisis. Augue eu vulputate
                  tortor egestas cursus vivamus. Commodo dictum iaculis eget
                  massa phasellus ultrices nunc dignissim. Id nulla amet
                  tincidunt urna sed massa sed. Pellentesque imperdiet proin
                  aliquam nisl nulla. In donec massa ultrices amet eget.{" "}
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Ut tellus suspendisse
                  nulla aliquam. Risus rutrum tellus eget ultrices pretium nisi
                  amet facilisis. Augue eu vulputate tortor egestas cursus
                  vivamus. Commodo dictum iaculis eget massa phasellus ultrices
                  nunc dignissim. Id nulla amet tincidunt urna sed massa sed.
                  Pellentesque imperdiet proin aliquam nisl nulla. In donec
                  massa ultrices amet eget. Tristique sed purus et maecenas
                  condimentum massa dolor. Lacus purus lectus diam diam tellus
                  libero id sapien justo.
                </p>
                <h4 className="title-two">The Challenge of Project</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Ut tellus suspendisse
                  nulla aliquam. Risus rutrum tellus eget ultrices pretium nisi
                  amet facilisis. Augue eu vulputate tortor egestas cursus
                  vivamus. Commodo dictum iaculis eget massa phasellus ultrices
                  nunc dignissim. Id nulla amet tincidunt urna sed massa sed.
                  Pellentesque imperdiet proin aliquam nisl nulla. In donec
                  massa ultrices amet eget. Tristique sed purus et maecenas
                  condimentum massa dolor. Lacus purus lectus diam id sapien
                  justo.Lorem ipsum dolor sit amet consectetur.
                </p>

                <div className="pd-inner-img">
                  <div className="row">
                    <div className="col-md-6">
                      <img src="/img/project/pd_img01.jpg" alt="" />
                    </div>
                    <div className="col-md-6">
                      <img src="/img/project/pd_img02.jpg" alt="" />
                    </div>
                  </div>
                </div>

                <ul className="list-wrap">
                  {Array.from(Array(8).keys()).map((item) => (
                    <li key={item}>
                      <i className="fas fa-check-circle"></i>In donec massa
                      ultrices amet eget condimentum massa dolor.
                    </li>
                  ))}
                </ul>

                <h5 className="title-three">The Result of Project</h5>

                <p>
                  Lorem ipsum dolor sit amet consectetur. Ut tellus suspendisse
                  nulla aliquam. Risus rutrum tellus eget ultrices pretium nisi
                  amet facilisis. Augu the at vulputate tortor egestas cursus
                  vivamus. Commodo dictum iaculis eget massa phasellus ultrices
                  nunc dignissim. Id nulla amet tincidunt urna sed any massa
                  sed. Pellentesque imperdiet proin aliquam nisl nulla. In donec
                  massa ultrices amet eget. Tristique sed purus et maecenas
                  condimentum massa dolor. Lacus purus lectus diam id sapien
                  justo.Lorem ipsum dolor sit amet consectetur.
                </p>

                {/* pagination */}
                {/* <ProjectDetailsPagination /> */}
              </div>
            </div>
          </div>
        </div>

        {/* see more projects */}
        <div className="more-project-wrap">
          <h2 className="title">See More Projects</h2>

          <div className="row justify-content-center">
            {ProjectList.slice(0, 3).map((x, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <ProjectAreaThreeItem item={x} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetailsArea;
