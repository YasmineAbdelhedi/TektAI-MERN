import React from "react";
import ShopDetailsContent from "./ShopDetailsContent";
import ShopDetailsImages from "./ShopDetailsImages";
import ShopDetailsTab from "./ShopDetailsTab";
import ShopItem from "./ShopItem";
import { ShopItems } from "./ShopItems";

const ShopDetailsArea = () => {
  return (
    <section className="shop-details-area pt-130 pb-105">
      <div className="container">
        <div className="row align-items-center">
          {/* image displayer */}
          <ShopDetailsImages />

          {/* shop details content */}
          <div className="shop-details-content">
            <ShopDetailsContent />
          </div>
        </div>

        {/* tabs */}
        <div className="row">
          <div className="col-12">
            <ShopDetailsTab />
          </div>
        </div>

        {/* related products */}
        <div className="related-product-area">
          <div className="related-product-wrapper">
            <h2 className="related-title">Related products</h2>
            <div className="row row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 justify-content-center">
              {ShopItems.slice(0, 4).map((x, index) => (
                <div key={index} className="col">
                  <ShopItem item={x} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopDetailsArea;
