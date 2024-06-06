import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const slideImages = [
  { src: "/img/shop/shop_details01.jpg" },
  { src: "/img/shop/shop_details02.jpg" },
  { src: "/img/shop/shop_details03.jpg" },
];

const ShopDetailsImages = () => {
  const [openGallery, setOpenGallery] = useState(false);
  const [slides, setSlides] = useState(slideImages);

  const handleOpenGallery = (e, img) => {
    e.preventDefault();
    setOpenGallery(true);

    const selected = slideImages.filter((el) => el.src === img);
    const notSelected = slideImages.filter((el) => el.src !== img);
    const newArr = [...selected, ...notSelected];
    setSlides(newArr);
  };

  return (
    <>
      <div className="shop-details-images-wrap">
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="itemOne-tab"
              data-bs-toggle="tab"
              data-bs-target="#itemOne-tab-pane"
              type="button"
              role="tab"
              aria-controls="itemOne-tab-pane"
              aria-selected="true"
            >
              <img src="/img/shop/shop_nav_img01.jpg" alt="" />
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="itemTwo-tab"
              data-bs-toggle="tab"
              data-bs-target="#itemTwo-tab-pane"
              type="button"
              role="tab"
              aria-controls="itemTwo-tab-pane"
              aria-selected="false"
            >
              <img src="/img/shop/shop_nav_img02.jpg" alt="" />
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="itemThree-tab"
              data-bs-toggle="tab"
              data-bs-target="#itemThree-tab-pane"
              type="button"
              role="tab"
              aria-controls="itemThree-tab-pane"
              aria-selected="false"
            >
              <img src="/img/shop/shop_nav_img03.jpg" alt="" />
            </button>
          </li>
        </ul>

        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane show active"
            id="itemOne-tab-pane"
            role="tabpanel"
            aria-labelledby="itemOne-tab"
            tabIndex="0"
          >
            <a
              href="#"
              className="popup-image"
              onClick={(e) =>
                handleOpenGallery(e, "/img/shop/shop_details01.jpg")
              }
            >
              <img src="/img/shop/shop_details01.jpg" alt="" />
            </a>
          </div>

          <div
            className="tab-pane"
            id="itemTwo-tab-pane"
            role="tabpanel"
            aria-labelledby="itemTwo-tab"
            tabIndex="0"
          >
            <a
              href="#"
              className="popup-image"
              onClick={(e) =>
                handleOpenGallery(e, "/img/shop/shop_details02.jpg")
              }
            >
              <img src="/img/shop/shop_details02.jpg" alt="" />
            </a>
          </div>
          <div
            className="tab-pane"
            id="itemThree-tab-pane"
            role="tabpanel"
            aria-labelledby="itemThree-tab"
            tabIndex="0"
          >
            <a
              href="#"
              className="popup-image"
              onClick={(e) =>
                handleOpenGallery(e, "/img/shop/shop_details03.jpg")
              }
            >
              <img src="/img/shop/shop_details03.jpg" alt="" />
            </a>
          </div>
        </div>
      </div>

      <Lightbox
        open={openGallery}
        close={() => setOpenGallery(false)}
        slides={slides}
      />
    </>
  );
};

export default ShopDetailsImages;
