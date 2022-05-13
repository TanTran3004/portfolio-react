import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

const Product = (props) => {
  const data = props.data;
  console.log("data: ", data);
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
  <div className="product-item">
    <div className="product-item__title">{props.item.title}</div>
    <img src={props.item.img} alt={props.item.title} />
  </div>
);

export default Product;
