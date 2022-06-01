import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./style.scss";
import Popup from "../Popups/Popup";
import { Link } from "react-router-dom";
import QuickViewPopup from "../Popups/QuickViewPopup";

const Product = (props) => {
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

const ProductItem = (props) => {
  console.log("props: ", props);
  console.log("props.item: ", props.item);
  const [buttonPopup, setButtonPopup] = useState(false);
  let handlePopup = (item) => {
    console.log(item);
    setButtonPopup(true);
  };
  return (
    <>
      <div className="product-item">
        <Link to=" /detail `${props.item.path}`">
          <div
            className="product-item__img"
            style={{ backgroundImage: "url(" + props.item.image + ")" }}
          ></div>
        </Link>

        <div className="product-item__info">
          <div
            className="product-item__btnView"
            onClick={() => handlePopup(props)} //! Để mở popup
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
      {/* //TODO: Code phần popup */}
      {buttonPopup && (
        <Popup
          // items={props.items} // pass item to popup
          // trigger={buttonPopup} check popup in line 61
          setTrigger={setButtonPopup}
        >
          <QuickViewPopup items={props.items} />
          {/* {(params = "quickview")} */}
          {/* <div className="popup__image">
            <img src={props.item.image} alt="" />
          </div>
          <div className="popup-info">
            <div className="popup-info__name-product title">
              {props.item.title}
            </div>
            <div className="popup-info__price-product">{props.item.price}</div>
            <div className="popup-info__sku-product">SKU: {props.item.sku}</div>
            <div className="popup-info__quantity-product">
              <div className="popup-info__quantity-product__txt">Quantity:</div>
              <input type="number" name="" id="" />
            </div>
            <button
              type="button"
              className="btn btn-add btn-transparent btn-addCart"
            >
              Thêm vào giỏ hàng
            </button>
            <Link to={`detail/${props.item.path}`}>
              <span className="directions"> Xem Chi Tiết Sản Phẩm</span>
            </Link>
          </div> */}
        </Popup>
      )}
    </>
  );
};

export default Product;
