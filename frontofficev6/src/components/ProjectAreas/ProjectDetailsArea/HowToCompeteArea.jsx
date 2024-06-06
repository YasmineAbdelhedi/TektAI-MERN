import React from "react";
import ProjectAreaThreeItem from "../ProjectAreaThreeItem";
import { ProjectList } from "../ProjectList";
import ClientInfo from "./ClientInfo";
import ProjectDetailsPagination from "./ProjectDetailsPagination";

const HowToCompeteArea = () => {
  return (
    <section className="project-details-area pt-130 pb-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="project-details-wrap">
              <div className="project-details-thumb">
                <img src="/img/images/originlogo.svg" alt="" />

                {/* client info */}
              
              </div>

              <div className="project-details-content">
                <h2 className="title">Find challenges</h2>
                <span className="sub-title">Find challenges for every interest level</span>
                <p>
                To kickstart your journey with TektAI, 
                the first step is to discover challenges 
                that align with your interests and expertise level.
                 Explore our user-friendly platform where a diverse range 
                 of challenges awaits you. Whether you're a novice seeking
                  to gain experience or an expert looking to tackle complex 
                  problems, TektAI offers projects tailored to every skill level.
                   Browse through various challenge categories, spanning from 
                   machine learning to data analysis, and uncover exciting
                    opportunities to apply your data science skills. 
                    Once you've found a challenge that piques your interest, 
                    simply sign up as a team member or create your own team to 
                    start collaborating and tackling the challenge.
                </p>
              
                <h4 className="title">Joining a challenge</h4>
                <p>
                When you're ready to take your skills to the next level,
                 joining a challenge on TektAI is the perfect way to do it.
                  Participating in challenges not only offers the chance to showcase your 
                  expertise but also provides a platform for networking and learning from 
                  fellow participants. To join a competition, simply navigate to the challenges section
                   of our platform and explore the ongoing challenges.
                    Once you've found one that aligns with your interests and skill set, 
                    click on it to learn more and register your team. Whether you're aiming to win prizes,
                     gain recognition, or simply hone your skills, 
                     joining a competition on TektAI is a rewarding experience that opens
                      doors to new opportunities in the world of data science.
                </p>

                {/* <div className="pd-inner-img">
                  <div className="row">
                    <div className="col-md-6">
                      <img src="/img/project/pd_img01.jpg" alt="" />
                    </div>
                    <div className="col-md-6">
                      <img src="/img/project/pd_img02.jpg" alt="" />
                    </div>
                  </div>
                </div> */}
{/* 
                <ul className="list-wrap">
                  {Array.from(Array(8).keys()).map((item) => (
                    <li key={item}>
                      <i className="fas fa-check-circle"></i>In donec massa
                      ultrices amet eget condimentum massa dolor.
                    </li>
                  ))}
                </ul> */}

                <h5 className="title">Forming a Team</h5>

                <p>
                Forming a team on TektAI is a collaborative 
                journey that amplifies your potential and fosters
                 innovation. Whether you're a seasoned data scientist
                  or just starting out, assembling a team allows you to
                   combine diverse skill sets and tackle challenges more 
                   effectively. To form a team, navigate to the team formation
                    section of our platform, where you can either join an existing
                     team or create your own. Consider reaching out to fellow data
                      enthusiasts, colleagues, or classmates who share your passion 
                      for problem-solving. By pooling your talents and perspectives,
                       you can not only enhance your chances of success but also forge
                        valuable connections and friendships along the way. Joining forces
                         with like-minded individuals on TektAI is the first step towards
                          unlocking your full potential in the realm of data science.
                </p>
                <h5 className="title">Making a Submission</h5>
                <p>Making a submission on TektAI is the culmination 
                    of your hard work and collaboration, marking the
                     moment where your efforts are transformed into 
                     tangible solutions. Once your team has developed a
                      solution to a challenge, it's time to showcase your
                       work by submitting it through our platform. Navigate 
                       to the submission section of the challenge page and follow
                        the provided instructions to upload your solution. Be sure
                         to include all relevant documentation, code, and any additional
                          materials required for evaluation. Making a submission not only 
                          allows you to demonstrate your skills and creativity but
                           also positions you for recognition and potential rewards.
                            Whether you're vying for the top spot on the leaderboard
                             or simply aiming to contribute to the collective knowledge
                              base, making a submission on TektAI is a rewarding step in
                               your data science journey.</p>

                {/* pagination */}
                {/* <ProjectDetailsPagination /> */}
              </div>
            </div>
          </div>
        </div>

       
        {/* <div className="more-project-wrap">
          <h2 className="title">See More Projects</h2>

          <div className="row justify-content-center">
            {ProjectList.slice(0, 3).map((x, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <ProjectAreaThreeItem item={x} />
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default HowToCompeteArea;
