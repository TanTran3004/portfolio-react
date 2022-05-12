import { logo } from "public/image/logo.jpg";
function Header() {
  return (
    <>
      <h2>Header</h2>
      <div className="header">
        <div className="row">
          <div className="menu-left">
            <div className="shop">Cửa hàng</div>
            <div className="explore">Liên hệ</div>
          </div>
          <div className="logo"></div>
          <div className="menu-right">
            <div className="myCart">Giỏ hàng</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
