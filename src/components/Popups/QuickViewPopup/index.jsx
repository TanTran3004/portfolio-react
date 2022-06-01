import React from "react";
import { Link } from "react-router-dom";
const QuickViewPopup = (props) => {
  console.log(props);
  return (
    <div>
      <div className="popup-info">
        <div className="popup-info__name-product title">{props.item.title}</div>
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
      </div>
    </div>
  );
};

export default QuickViewPopup;
