import React, { useEffect } from "react";
import $ from "jquery";
import { Link } from "react-router-dom";

const MobileMenu = () => {
  useEffect(() => {
    //SubMenu Dropdown Toggle
    if ($(".menu-area li.menu-item-has-children ul").length) {
      $(".menu-area .navigation li.menu-item-has-children").append(
        '<div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>'
      );
    }

    //Mobile Nav Hide Show
    if ($(".mobile-menu").length) {
      var mobileMenuContent = $(".menu-area .main-menu").html();
      $(".mobile-menu .menu-box .menu-outer").append(mobileMenuContent);

      //Dropdown Button
      $(".mobile-menu li.menu-item-has-children .dropdown-btn").on(
        "click",
        function () {
          $(this).toggleClass("open");
          $(this).prev("ul").slideToggle(300);
        }
      );
      //Menu Toggle Btn
      $(".mobile-nav-toggler").on("click", function () {
        $("body").addClass("mobile-menu-visible");
      });

      //Menu Toggle Btn
      $(".menu-backdrop, .mobile-menu .close-btn").on("click", function () {
        $("body").removeClass("mobile-menu-visible");
      });
    }
  }, []);

  return (
    <>
      <div className="mobile-menu">
        <nav className="menu-box">
          <div className="close-btn">
            <i className="fas fa-times"></i>
          </div>
          <div className="nav-logo">
            <Link to="/">
              <img src="/img/logo/logo.svg" alt="Logo" />
            </Link>
          </div>
          <div className="menu-outer">
            {/* <!--Here Menu Will Come Automatically Via Javascript / Same Menu as in Header--> */}
          </div>
          <div className="social-links">
            <ul className="clearfix list-wrap">
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
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-youtube"></i>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="menu-backdrop"></div>
    </>
  );
};

export default MobileMenu;
