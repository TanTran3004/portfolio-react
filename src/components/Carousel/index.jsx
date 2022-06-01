import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import "./style.scss";

const Carousel = () => {
  return (
    <div className="wrapper-swiper">
      <Swiper
        slidesPerView={3}
        spaceBetween={5}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          {" "}
          <img
            src="https://gray-wave-prod.cdn.arcpublishing.com/resizer/mxUB9tKk9icDY0qQKHYYilFl4ow=/1200x675/smart/filters:quality(85)/cloudfront-us-east-1.images.arcpublishing.com/gray/LCLCUBC4QBDB5L3XTYAX77Q2G4.jpg"
            alt=""
            className="mySwiper__subImage"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            src="https://gray-wave-prod.cdn.arcpublishing.com/resizer/mxUB9tKk9icDY0qQKHYYilFl4ow=/1200x675/smart/filters:quality(85)/cloudfront-us-east-1.images.arcpublishing.com/gray/LCLCUBC4QBDB5L3XTYAX77Q2G4.jpg"
            alt=""
            className="mySwiper__subImage"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            src="https://gray-wave-prod.cdn.arcpublishing.com/resizer/mxUB9tKk9icDY0qQKHYYilFl4ow=/1200x675/smart/filters:quality(85)/cloudfront-us-east-1.images.arcpublishing.com/gray/LCLCUBC4QBDB5L3XTYAX77Q2G4.jpg"
            alt=""
            className="mySwiper__subImage"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            src="https://gray-wave-prod.cdn.arcpublishing.com/resizer/mxUB9tKk9icDY0qQKHYYilFl4ow=/1200x675/smart/filters:quality(85)/cloudfront-us-east-1.images.arcpublishing.com/gray/LCLCUBC4QBDB5L3XTYAX77Q2G4.jpg"
            alt=""
            className="mySwiper__subImage"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            src="https://gray-wave-prod.cdn.arcpublishing.com/resizer/mxUB9tKk9icDY0qQKHYYilFl4ow=/1200x675/smart/filters:quality(85)/cloudfront-us-east-1.images.arcpublishing.com/gray/LCLCUBC4QBDB5L3XTYAX77Q2G4.jpg"
            alt=""
            className="mySwiper__subImage"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            src="https://gray-wave-prod.cdn.arcpublishing.com/resizer/mxUB9tKk9icDY0qQKHYYilFl4ow=/1200x675/smart/filters:quality(85)/cloudfront-us-east-1.images.arcpublishing.com/gray/LCLCUBC4QBDB5L3XTYAX77Q2G4.jpg"
            alt=""
            className="mySwiper__subImage"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            src="https://gray-wave-prod.cdn.arcpublishing.com/resizer/mxUB9tKk9icDY0qQKHYYilFl4ow=/1200x675/smart/filters:quality(85)/cloudfront-us-east-1.images.arcpublishing.com/gray/LCLCUBC4QBDB5L3XTYAX77Q2G4.jpg"
            alt=""
            className="mySwiper__subImage"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            src="https://gray-wave-prod.cdn.arcpublishing.com/resizer/mxUB9tKk9icDY0qQKHYYilFl4ow=/1200x675/smart/filters:quality(85)/cloudfront-us-east-1.images.arcpublishing.com/gray/LCLCUBC4QBDB5L3XTYAX77Q2G4.jpg"
            alt=""
            className="mySwiper__subImage"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            src="https://gray-wave-prod.cdn.arcpublishing.com/resizer/mxUB9tKk9icDY0qQKHYYilFl4ow=/1200x675/smart/filters:quality(85)/cloudfront-us-east-1.images.arcpublishing.com/gray/LCLCUBC4QBDB5L3XTYAX77Q2G4.jpg"
            alt=""
            className="mySwiper__subImage"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
