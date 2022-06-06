import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Popup from "../Popups/Popup";
import QuickViewPopup from "../Popups/QuickViewPopup";
import "./style.scss";
import Button from "../Button/Button";
import PropTypes from "prop-types";

const ProductItem = (props) => {
  console.log("props: ", props);
  console.log("props.item: ", props.item);
  const [buttonPopup, setButtonPopup] = useState(false);
  let handlePopup = () => {
    // mở popup ko cần truyền item vào
    setButtonPopup(true);
  };
  return (
    <>
      <div className="product-item">
        {/* template string*/}
        <Button href="/detail">
          <div
            className="product-item__img"
            style={{ backgroundImage: "url(" + props.item.image + ")" }}
          ></div>
        </Button>

        <div className="product-item__info">
          <div
            className="product-item__btnView"
            onClick={() => handlePopup(props)} //! Để mở popup
          >
            Xem nhanh
          </div>
          <div className="product-item__content">
            <div className="product-item__title">{props.item.title}</div>
            <div className="product-item__description">
              {props.item.description}
            </div>
          </div>
          <div className="product-item__btnAdd">Thêm vào Giỏ Hàng</div>
        </div>
      </div>
      {/* //TODO: Code phần popup */}
      {buttonPopup && (
        <Popup
          // items={props.items} // pass item to popup => {...props}
          // trigger={buttonPopup} check popup in line 61
          setTrigger={setButtonPopup}
        >
          <QuickViewPopup item={props.item} />
          {/* {(params = "quickview")} */}
        </Popup>
      )}
    </>
  );
};

ProductItem.propTypes = {};

export default ProductItem;
