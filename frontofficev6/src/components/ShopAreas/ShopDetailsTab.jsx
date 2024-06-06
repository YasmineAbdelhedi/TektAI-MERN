import React from "react";

const ShopDetailsTab = () => {
  return (
    <div className="product-desc-wrap">
      <ul className="nav nav-tabs" id="descriptionTab" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="description-tab"
            data-bs-toggle="tab"
            data-bs-target="#description-tab-pane"
            type="button"
            role="tab"
            aria-controls="description-tab-pane"
            aria-selected="true"
          >
            Description
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="reviews-tab"
            data-bs-toggle="tab"
            data-bs-target="#reviews-tab-pane"
            type="button"
            role="tab"
            aria-controls="reviews-tab-pane"
            aria-selected="false"
          >
            Reviews (0)
          </button>
        </li>
      </ul>
      <div className="tab-content" id="descriptionTabContent">
        <div
          className="tab-pane fade show active"
          id="description-tab-pane"
          role="tabpanel"
          aria-labelledby="description-tab"
          tabIndex="0"
        >
          <p>
            Lorem ipsum dolor sit amet consectetur. Ut tellus suspendisse nulla
            aliquam. Risus rutrum tellus eget ultrices pretium nisi amet
            facilisis. Augue eu vulputate tortor egestas cursus vivamus. Commodo
            dictum iaculis eget massa phasellus ultrices nunc dignissim. Id
            nulla amet tincidunt urna sed massa sed. Pellentesque imperdiet
            proin aliquam nisl nulla. In donec massa ultrices amet eget.
            Tristique sed purus et maecenas condimentum massa dolor. Lacus purus
            lectus diam diam tellus libero id sapien justo.Lorem ipsum dolor sit
            amet consectetur. Ut tellus suspendisse nulla aliquam. Risus rutrum
            tellus eget ultrices pretium nisi amet facilisis. Augue eu vulputate
            tortor egestas cursus vivamus. Commodo dictum iaculis eget massa
            phasellus ultrices nunc dignissim. Id nulla amet tincidunt urna sed
            massa sed. Pellentesque imperdiet proin aliquam nisl nulla. In donec
            massa ultrices amet eget. Tristique sed purus et maecenas
            condimentum massa dolor. Lacus purus lectus diam diam tellus libero
            id sapien justo.
          </p>
        </div>
        <div
          className="tab-pane fade"
          id="reviews-tab-pane"
          role="tabpanel"
          aria-labelledby="reviews-tab"
          tabIndex="0"
        >
          <div className="product-desc-review">
            <div className="product-desc-review-title mb-15">
              <h5 className="title">Customer Reviews (0)</h5>
            </div>
            <div className="left-rc">
              <p>No reviews yet</p>
            </div>
            <div className="right-rc">
              <a href="#">Write a review</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopDetailsTab;
