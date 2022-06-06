import PropTypes from "prop-types";
import React from "react";
import ProductItem from "../ProductItems/ProductItem";
import "./style.scss";

const Product = (props) => {
  console.log("props.productsData", props.productsData);
  const data = props.productsData;

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

export default Product;
