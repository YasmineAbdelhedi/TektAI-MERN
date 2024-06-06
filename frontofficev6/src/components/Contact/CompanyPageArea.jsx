import React from "react";
import Company from "../../pages/CompanyPage";
const CompanyPageArea = () => {
  return (

    <section className="contact-area ">
                 
    <div className="container " style={{
     marginBottom:'300px',

    }}>
    <div  >
      
          <div className="col-lg">
            <div className="contact-content" >
                <Company />
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};

export default CompanyPageArea;
