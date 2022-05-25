import React from "react";
import "./style.scss";
// import Popup from "reactjs-popup";
// import "reactjs-popup/dist/index.css";
import QuickViewPopup from "./QuickViewPopup";

const Popup = (props) => {
  console.log("props: ", props);

  return props.trigger ? (
    <div className="quickViewPopup">
      <div className="popup">
        <button
          className="btn close-btn"
          onClick={() => props.setTrigger(false)}
        >
          &times;
        </button>
        <div className="quickViewPopup_inner">{props.children}</div>
        {/* <QuickViewPopup
          className="quickViewPopup_inner"
          children={props.children}
        /> */}
      </div>
    </div>
  ) : (
    ""
  );
};

export default Popup;
