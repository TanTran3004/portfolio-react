import React from "react";
import "./style.scss";
// import Popup from "reactjs-popup";
// import "reactjs-popup/dist/index.css";

const QuickViewPopup = (props) => {
  return props.trigger ? (
    <>
      <div className="quickViewPopup">
        <div className="quickViewPopup_inner">
          <button className="close-btn" onClick={() => props.setTrigger(false)}>
            close
          </button>
          {props.children}
        </div>
      </div>
      <div>QuickViewPopup</div>
    </>
  ) : (
    ""
  );
};

export default QuickViewPopup;
