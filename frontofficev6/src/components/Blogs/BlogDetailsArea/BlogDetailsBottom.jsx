import React from "react";

const BlogDetailsBottom = () => {
  return (
    <>
      <div className="row align-items-center">
        <div className="col-lg-7">
          <div className="tg-post-tags">
            <h4 className="tags-title">Tags:</h4>
            <ul className="list-wrap">
              <li>
                <a href="#">Cleaning</a>
              </li>
              <li>
                <a href="#">carpet</a>
              </li>
              <li>
                <a href="#">house</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-lg-5">
          <div className="blog-post-social">
            <ul className="list-wrap">
              <li>
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetailsBottom;
