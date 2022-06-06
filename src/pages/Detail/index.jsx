import React from "react";
import "./style.scss";
import Carousel from "src/components/Carousel";
import Button from "src/components/Button/Button";
import { BsSuitHeart } from "react-icons/bs";
function Detail() {
  return (
    <div className="content-wrapper container">
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
          <div className="information-product__properties">
            <div className="information-product__properties__distribute">
              <select name="" id="">
                <option value="">
                  <span>Ipsum Imperdie Omittam</span>
                </option>
                <option value="">
                  <span>Ipsum Imperdie Omittam</span>
                </option>
                <option value="">
                  <span>Ipsum Imperdie Omittam</span>
                </option>
              </select>
            </div>
          </div>
          <div className="information-product__description">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.
          </div>
          <div className="action-wrapper">
            <div className="action-wrapper__qty">
              <input placeholder="QTY" type="number" name="" id="" />
            </div>
            <div className="action-wrapper__actions">
              <Button className="btn btn-addCart">Thêm sản phẩm</Button>
              <Button className="btn btn-like">
                <span>
                  <BsSuitHeart />
                </span>
                <span>Yêu Thích</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
