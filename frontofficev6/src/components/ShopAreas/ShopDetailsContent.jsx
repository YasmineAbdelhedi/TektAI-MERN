import React, { useState } from "react";
import { Link } from "react-router-dom";

const ShopDetailsContent = () => {
  const [count, setCount] = useState(1);

  const addCount = () => {
    setCount((old) => old + 1);
  };

  const minusCount = () => {
    setCount((old) => {
      if (old <= 1) return 1;
      else return old - 1;
    });
  };

  return (
    <>
      <span>Plumbing</span>

      <h2 className="title">Biovert Cleaner</h2>

      <h4 className="price">$19.99</h4>

      <p>
        Lorem ipsum dolor sit amet consectetur. Ut tellus suspendisse nulla
        aliquam. Risus rutrum tellus eget ultrices pretium nisi amet facilisis.
        Augue eu vulputate tortor egestas cursus vivamus. Commodo dictum iaculis
        eget massa phasellus ultrices nunc dignissim. Id nulla tincidunt urna
        sed massa dummy text sed.
      </p>

      <ul className="list-wrap">
        <li>
          <i className="fas fa-check-circle"></i>Augue eu vulputate tortor
          egestas cursus vivamus.
        </li>
        <li>
          <i className="fas fa-check-circle"></i>Aulputate tortor egestas cursus
          vivamus.
        </li>
        <li>
          <i className="fas fa-check-circle"></i>The dummy textortor egestas
          cursus.
        </li>
      </ul>

      <div className="shop-details-cat">
        <span className="cat-title">Category:</span>
        <Link to="/shop">Plumbing,</Link>
        <Link to="/shop">Cleaner</Link>
      </div>

      <div className="shop-details-qty">
        <div className="cart-plus-minus d-flex flex-wrap align-items-center">
          <form action="#" className="num-block">
            <input type="text" className="in-num" value={count} readonly="" />

            <div className="qtybutton-box">
              <span className="plus" onClick={addCount}>
                <i className="fas fa-sort-up"></i>
              </span>

              <span className="minus dis" onClick={minusCount}>
                <i className="fas fa-sort-down"></i>
              </span>
            </div>
          </form>
          <button className="shop-details-cart-btn btn btn-two">
            add to cart
          </button>
        </div>
      </div>
    </>
  );
};

export default ShopDetailsContent;
