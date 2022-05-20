import React from "react";
import "./style.scss";
// import Popup from "reactjs-popup";
// import "reactjs-popup/dist/index.css";

const QuickViewPopup = (props) => {
  return props.trigger ? (
    <>
      <div className="quickViewPopup">
        <div className="popup">
          <button
            className="btn close-btn"
            onClick={() => props.setTrigger(false)}
          >
            &times;
          </button>
          <div className="quickViewPopup_inner">{props.children}</div>
        </div>
      </div>
    </>
  ) : (
    ""
  );
};

export default QuickViewPopup;
