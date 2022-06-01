import React from "react";
import "./style.scss";
import Carousel from "src/components/Carousel";
function Detail() {
  return (
    <div className="content-wrapper">
      <div className="thumbnail">
        <img
          src="https://s1.1zoom.me/big0/359/Tigers_Grass_Lying_down_Snout_Glance_579639_1280x853.jpg"
          alt=""
          className="thumbnail-product__image"
        />
        <div className="thumbnail-product__subImage">
          <Carousel />
        </div>
      </div>
      <div className="information-content">
        <div className="information-product">
          <div className="information-product__name">
            Ipsum Imperdie Omittam Inciderint
          </div>
          <div className="information-product__price">1.000.000 VND</div>
          <div className="information-product__description">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.
          </div>
        </div>
        <div className="action-wrapper">
          <input type="number" name="" id="" />
          <button className="btn btn-addCart">Thêm sản phẩm</button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
