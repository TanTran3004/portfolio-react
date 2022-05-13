import React from "react";
import "./style.scss";
// import img from "./4645999.jpg";
import img from "../../assets/image/products/rong2.jpg";
function Home() {
  return (
    <>
      <div className="section wallpaper-shop ">
        <div className="txt-wallpaper">
          <h3 className="banner">What is Lorem Ipsum?</h3>
          <p className="slogan">
            It is a long established fact that a reader will be distracted by
          </p>
          <span className="directions">Lorem Ipsum</span>
        </div>
      </div>

      <div className="section design-wrapper">
        <div className="txt-wrapper">
          <h3 className="title design-title">What is Lorem Ipsum?</h3>
          <p className="slogan design-slogan">
            It is a long established fact that a reader will be distracted by
          </p>
          <span className="directions">Lorem Ipsum</span>
        </div>
      </div>
      <div className="section introduction">
        <div className="introduction-product">
          <img src={img} alt="" />
          <h3 className="title">Lorem Ipsum</h3>
          <span className="directions">Lorem Ipsum</span>
        </div>
        <div className="introduction-product">
          <img src={img} alt="" />
          <h3 className="title">Lorem Ipsum</h3>
          <span className="directions">Lorem Ipsum</span>
        </div>
      </div>
      <div className="section">
        <div className="featured-wrapper">
          <h3 className="title">What is Lorem Ipsum</h3>
          <p className="slogan">
            It is a long established fact that a reader will be distracted by
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
