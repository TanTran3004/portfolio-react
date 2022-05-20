import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./style.scss";
import QuickViewPopup from "../Popups/QuickViewPopup";
import { Link } from "react-router-dom";
const Product = (props) => {
  const data = props.data;
  useEffect(() => {}, []);

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

const ProductItem = (props) => {
  const [buttonPopup, setButtonPopup] = useState(false);
  let handlePopup = (id) => {
    setButtonPopup(true);
  };
  return (
    <>
      <div className="product-item">
        <div
          className="product-item__img"
          style={{ backgroundImage: "url(" + props.item.image + ")" }}
        ></div>

        <div className="product-item__info">
          <div
            className="product-item__btnView"
            onClick={() => handlePopup(props.item.id)}
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

      {buttonPopup && (
        <QuickViewPopup trigger={buttonPopup} setTrigger={setButtonPopup}>
          <>
            <div className="popup__image">
              <img src={props.item.image} alt="" />
            </div>
            <div className="popup-info">
              <div className="popup-info__name-product title">
                {props.item.title}
              </div>
              <div className="popup-info__price-product">
                {props.item.price}
              </div>
              <div className="popup-info__sku-product">
                SKU: {props.item.sku}
              </div>
              <div className="popup-info__quantity-product">
                <div className="popup-info__quantity-product__txt">
                  Quantity:
                </div>
                <input type="number" name="" id="" />
              </div>
              <button
                type="button"
                className="btn btn-add btn-transparent btn-addCart"
              >
                Thêm vào giỏ hàng
              </button>
              <Link className="directions" to="/detail">
                Xem Chi Tiết Sản Phẩm
              </Link>
            </div>
          </>
        </QuickViewPopup>
      )}
    </>
  );
};

export default Product;
