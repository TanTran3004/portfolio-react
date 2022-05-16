import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

const Product = (props) => {
  const data = props.data;
  // console.log("data: ", data);
  return (
    <div className="product">
      {data.map((item, index) => (
        <ProductItem key={index} item={item} />
      ))}
    </div>
  );
};

Product.propTypes = {
  data: PropTypes.array.isRequired,
};

const ProductItem = (props) => (
  <>
    <div className="product-item">
      <img
        className="product-item__img"
        src={props.item.image}
        alt={props.item.title}
      />
      <div className="product-item__btnView">Xem nhanh</div>
      <div className="product-item__title">{props.item.title}</div>
      <div className="product-item__description">{props.item.description}</div>
      <div className="product-item__btnAdd">Thêm vào Giỏ Hàng</div>
    </div>
  </>
);

export default Product;
