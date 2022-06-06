import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import Button from "src/components/Button/Button";
const QuickViewPopup = (props) => {
  const item = props.item;
  console.log("item: ", item);
  if (!item) return null;
  return (
    <>
      <div className="popup__image">
        <img src={props.item.image} alt="" />
      </div>
      <div className="popup-info">
        <div className="popup-info__name-product title">{props.item.title}</div>
        <div className="popup-info__price-product"> {props.item.price} </div>
        <div className="popup-info__sku-product"> SKU: {props.item.sku} </div>
        <div className="popup-info__quantity-product">
          <div className="popup-info__quantity-product__txt"> Quantity: </div>
          <input placeholder="QTY" type="number" name="" id="" />
        </div>
        <Button
          type="button"
          className="btn btn-add btn-transparent btn-addCart"
        >
          Thêm vào giỏ hàng
        </Button>
        <Button href="/detail">
          <span className="directions"> Xem Chi Tiết Sản Phẩm</span>
        </Button>
      </div>
    </>
  );
};

export default QuickViewPopup;
