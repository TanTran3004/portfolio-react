import React from "react";
import Products from "../../components/Product/Product";
import "./style.scss";

import data from "../../assets/data/data";
function Result() {
  return (
    <div className="result">
      <>
        {/* https://www.wix.com/website-template/view/html/2204?siteId=a044bb6e-eac4-456a-8fa8-e0bcce863b4b&metaSiteId=5a5f2cd8-e2a4-40f0-a187-5f056f2385e1&originUrl=https%3A%2F%2Fwww.wix.com%2Fwebsite%2Ftemplates%3Fcriteria%3Dtech%2Bstore&tpClick=view_button */}
        <Products
          productsData={data}
          // data={productsData}
        />
      </>
    </div>
  );
}

export default Result;
