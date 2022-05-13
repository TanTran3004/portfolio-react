import React from "react";
import Products from "../../components/Product/Product";
import "./style.scss";
import productsData from "../../assets/data/data";
function Result() {
  return (
    <div className="result">
      <>
        <Products data={productsData} />
      </>
    </div>
  );
}

export default Result;
