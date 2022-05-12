import logo from "./image/logo.png";
import "./style.scss";
function Header() {
  return (
    <>
      {/* <h2>Header</h2> */}

      <div className="header">
        <div className="container">
          <div className="menu-left">
            <div className="shop">Cửa hàng</div>
            <div className="explore">Liên hệ</div>
          </div>
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="menu-right">
            <div className="myCart">Giỏ hàng</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
