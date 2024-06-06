import React from "react";
import ContactForm from "./ContactForm";
import imageSrc from "../../assets/loginpic.png"; // Import your image

const ContactPageArea = () => {
  return (
    <section className="contact-area ">
                 
      <div className="container " style={{
        marginTop:'100px',marginBottom:'100px',

      }}>
        <div className="row">
          <div className="col-lg-6">
            <img src={imageSrc} className="img-fluid" alt="Your Image"  />
          </div>
          <div className="col-lg-6">
            <div className="contact-content p-4" style={{ boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)', backgroundColor: 'rgba(255, 255, 255, 0.7)', borderRadius: '10px' }}>
              <h2 className="mb-4">Sign up </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPageArea;
