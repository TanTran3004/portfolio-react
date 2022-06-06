import React from "react";
import "./style.scss";

const Popup = ({
  children,
  setTrigger,
  widthModal = "55%",
  heightModal = "50%",
}) => {
  console.log("children", children);
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
  return (
    <div className="quickViewPopup">
      <div style={{ width: widthModal, height: heightModal }} className="popup">
        <button className="btn close-btn" onClick={() => setTrigger(false)}>
          &times;
        </button>
        <div className="quickViewPopup_inner">{children}</div>
      </div>
    </div>
  );
};

export default Popup;
/**
 * Một số lưu ý:
 * - Component Popup như vậy là có thể dynamic được content
 * - Ngoài ra có thể có thêm props.width, props.height truyền vào, nếu ko truyền sẽ để width height thì sẽ đè lên giá trị này --> dynamic dimension của popup
 * - Khi click chọn 1 sản phẩm, thông thường sẽ không truyền item vào theo cách bạn đang dùng, thay vào đó dùng redux (bạn research chỗ này), sau đó define thêm 1 component nữa có tên là * PopupProductItem. Component này sẽ lấy thông tin item từ redux sau đó truyền vào component Popup. Hiện tại là component PropductItem đang làm như vậy.
 */
