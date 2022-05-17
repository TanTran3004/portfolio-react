import React, { useState } from "react";
import PropTypes from "prop-types";
import "./style.scss";
import QuickViewPopup from "../Popups/QuickViewPopup";

const Product = (props) => {
  const [buttonPopup, setButtonPopup] = useState(false);
  const data = props.data;
  return (
    <>
      <div className="product">
        {data.map((item, index) => (
          <ProductItem key={index} item={item} />
        ))}
      </div>
    </>
  );
};

Product.propTypes = {
  data: PropTypes.array.isRequired,
};

const ProductItem = (props) => (
  <>
    <div className="product-item">
      <div
        className="product-item__img"
        style={{ backgroundImage: "url(" + props.item.image + ")" }}
      ></div>

      <div className="product-item__info">
        <div
          className="product-item__btnView"
          onClick={() => setButtonPopup(true)}
        >
          Xem nhanh
        </div>
        <div className="product-item__content">
          <div className="product-item__title">{props.item.title}</div>
          <div className="product-item__description">
            {props.item.description}
          </div>
        </div>
        <div className="product-item__btnAdd">Thêm vào Giỏ Hàng</div>
      </div>
    </div>
    <div className="popup">
      <QuickViewPopup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <h3>abc</h3>
      </QuickViewPopup>
    </div>
  </>
);

export default Product;
