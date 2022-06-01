import React from "react";
import "./style.scss";
// import Popup from "reactjs-popup";
// import "reactjs-popup/dist/index.css";
import QuickViewPopup from "./QuickViewPopup";
import TestPopup from "./testPopup";

const Popup = ({ children, setTrigger, ...rest }) => {
  // console.log("props: ", props);
  // props: items + setTrigger + children
  // rest: items

  // const component = () => {
  //   switch (params) {
  //     case "quickview":
  //       return (
  //         <QuickViewPopup
  //           className="quickViewPopup_inner"
  //           children={props.children}
  //         />
  //       );
  //     case "test":
  //       return <TestPopup />;
  //   }
  // };
  let Comp = children;

  return (
    <div className="quickViewPopup">
      <div className="popup">
        <button className="btn close-btn" onClick={() => setTrigger(false)}>
          &times;
        </button>
        <div className="quickViewPopup_inner">
          {children}
          {/* <Comp {...rest} /> */}
        </div>
        {/* {component()} */}
      </div>
    </div>
  );
};

export default Popup;
