import React, { useEffect } from "react";
import { intersectingAnimation } from "../../lib/helpers";
import HowWeWorkItem from "./HowWeWorkItem";

const HowWeWork = () => {
  useEffect(() => {
    intersectingAnimation();
  }, []);

  const how_we_work_items = [
    {
      url: "/services-details",
      count: "01",
      delay: "0.2",
      title: "Register and Collaborate",
      desc: `Join TektAI's platform, collaborate in teams, and solve real-world challenges together.





      `,
      icon: (
        <>
         <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-person-check" viewBox="0 0 16 16">
  <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.708l.547.548 1.17-1.951a.5.5 0 1 1 .858.514M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/>
  <path d="M8.256 14a4.5 4.5 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10q.39 0 .74.025c.226-.341.496-.65.804-.918Q8.844 9.002 8 9c-5 0-6 3-6 4s1 1 1 1z"/>
</svg>
        </>
      ),
    },
    {
      url: "/services-details",
      count: "02",
      delay: "0.4",
      title: "Develop Innovative Solutions",
      desc: `Utilize your data science and development skills to innovate solutions for real challenges. Maximize platform resources for efficient collaboration.`,
      icon: (
        <>
          <svg
            width="39"
            height="37"
            viewBox="0 0 39 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M30.7119 12.95L28.6859 8.51L24.2656 6.475L28.6859 4.44L30.7119 0L32.7379 4.44L37.1582 6.475L32.7379 8.51L30.7119 12.95ZM34.3955 25.9L32.9221 22.755L29.791 21.275L32.9221 19.795L34.3955 16.65L35.8689 19.795L39 21.275L35.8689 22.755L34.3955 25.9ZM10.4522 37L9.89965 32.6525C9.65407 32.56 9.41648 32.4367 9.18687 32.2825C8.95603 32.1283 8.76387 31.9742 8.61039 31.82L4.55844 33.5775L0 25.53L3.45336 22.94V21.46L0 18.87L4.55844 10.8225L8.61039 12.58C8.76387 12.4258 8.95603 12.2717 9.18687 12.1175C9.41648 11.9633 9.65407 11.84 9.89965 11.7475L10.4522 7.4H19.6612L20.2137 11.7475C20.4593 11.84 20.6975 11.9633 20.9283 12.1175C21.1579 12.2717 21.3495 12.4258 21.503 12.58L25.5549 10.8225L30.1133 18.87L26.66 21.46V22.94L30.1133 25.53L25.5549 33.5775L21.503 31.82C21.3495 31.9742 21.1579 32.1283 20.9283 32.2825C20.6975 32.4367 20.4593 32.56 20.2137 32.6525L19.6612 37H10.4522ZM15.0567 27.75C16.5915 27.75 17.8961 27.2104 18.9705 26.1313C20.0449 25.0521 20.5821 23.7417 20.5821 22.2C20.5821 20.6583 20.0449 19.3479 18.9705 18.2688C17.8961 17.1896 16.5915 16.65 15.0567 16.65C13.5218 16.65 12.2172 17.1896 11.1429 18.2688C10.0685 19.3479 9.53129 20.6583 9.53129 22.2C9.53129 23.7417 10.0685 25.0521 11.1429 26.1313C12.2172 27.2104 13.5218 27.75 15.0567 27.75ZM15.0567 24.05C14.5348 24.05 14.0971 23.8724 13.7435 23.5172C13.3911 23.1632 13.2149 22.7242 13.2149 22.2C13.2149 21.6758 13.3911 21.2361 13.7435 20.8809C14.0971 20.527 14.5348 20.35 15.0567 20.35C15.5785 20.35 16.0162 20.527 16.3699 20.8809C16.7223 21.2361 16.8985 21.6758 16.8985 22.2C16.8985 22.7242 16.7223 23.1632 16.3699 23.5172C16.0162 23.8724 15.5785 24.05 15.0567 24.05ZM13.6753 33.3H16.438L16.8064 29.97C17.6966 29.7233 18.4566 29.4076 19.0865 29.0228C19.7152 28.6368 20.3365 28.12 20.9504 27.4725L23.9894 28.86L25.2786 26.5475L22.608 24.5125C22.8536 23.8033 22.9764 23.0325 22.9764 22.2C22.9764 21.3675 22.8536 20.5967 22.608 19.8875L25.2786 17.8525L23.9894 15.54L20.9504 16.9275C20.3365 16.28 19.7152 15.7632 19.0865 15.3772C18.4566 14.9924 17.6966 14.6767 16.8064 14.43L16.438 11.1H13.6753L13.307 14.43C12.4168 14.6767 11.6573 14.9924 11.0287 15.3772C10.3988 15.7632 9.77686 16.28 9.16293 16.9275L6.12397 15.54L4.83471 17.8525L7.50531 19.8875C7.25974 20.5967 7.12959 21.3675 7.11485 22.2C7.09889 23.0325 7.22904 23.8033 7.50531 24.5125L4.83471 26.5475L6.12397 28.86L9.16293 27.4725C9.77686 28.12 10.3988 28.6368 11.0287 29.0228C11.6573 29.4076 12.4168 29.7233 13.307 29.97L13.6753 33.3Z"
              fill="currentcolor"
            />
          </svg>
        </>
      ),
    },
    {
      url: "/services-details",
      count: "03",
      delay: "0.6",
      title: "Compete and Win Recognition",
      desc: `
Submit solutions to TektAI challenges, compete, and earn recognition for industry-driven data science contributions.`,
      icon: (
        <>
         <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-trophy" viewBox="0 0 16 16">
  <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5q0 .807-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33 33 0 0 1 2.5.5m.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935m10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935M3.504 1q.01.775.056 1.469c.13 2.028.457 3.546.87 4.667C5.294 9.48 6.484 10 7 10a.5.5 0 0 1 .5.5v2.61a1 1 0 0 1-.757.97l-1.426.356a.5.5 0 0 0-.179.085L4.5 15h7l-.638-.479a.5.5 0 0 0-.18-.085l-1.425-.356a1 1 0 0 1-.757-.97V10.5A.5.5 0 0 1 9 10c.516 0 1.706-.52 2.57-2.864.413-1.12.74-2.64.87-4.667q.045-.694.056-1.469z"/>
</svg>
        </>
      ),
    },
  ];

  return (
    <section className="work-area has-animation pt-125 pb-95">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section-title-two text-center mb-90 tg-heading-subheading animation-style1">
              <span className="sub-title">Three Key Steps to Success</span>
              <h6 className="title tg-element-title">Conquering Challenges with Strategy and Adaptability!</h6>
            </div>
          </div>
        </div>

        <div className="work-item-wrap">
          <div className="work-line-shape">
            <svg viewBox="0 0 1173 212" xmlns="http://www.w3.org/2000/svg">
              <g fill="none" stroke-width="2">
                <path
                  className="dashed1"
                  stroke="rgba(199 199 199)"
                  d="M1 1C81 80.5 310.5 248.5 484 159.5L674.5 81C807 34 922.5 91.4 1172.5 211"
                />
                <path
                  className="dashed2"
                  stroke="white"
                  d="M1 1C81 80.5 310.5 248.5 484 159.5L674.5 81C807 34 922.5 91.4 1172.5 211"
                />
              </g>
            </svg>
          </div>

          <div className="row justify-content-center">
            {how_we_work_items.map((x, index) => (
              <div key={index} className="col-lg-4 col-md-6 col-sm-8">
                <HowWeWorkItem item={x} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
