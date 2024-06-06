import React, { useEffect } from "react";
import { bgImgFromData } from "../../lib/helpers";
import { Link } from "react-router-dom";

const BreadcrumbArea = ({ title, subtitle }) => {
  useEffect(() => {
    bgImgFromData();
  }, []);

  return (
    <section className="breadcrumb-area breadcrumb-bg" style={{ position: 'relative', width: '100%', height: '50vh', overflow: 'hidden' }}>
      <video autoPlay muted loop style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', minWidth: '100%', minHeight: '70%', width: 'auto', height: 'auto', maxWidth: '100%' }}>
        <source src="/img/images/home1.mp4" type="video/mp4" />
      </video>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="breadcrumb-content">
              {/* Votre contenu de breadcrumb ici */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BreadcrumbArea;
