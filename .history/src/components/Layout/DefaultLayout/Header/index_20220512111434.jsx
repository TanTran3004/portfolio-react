import logo from "./image/logo.png";
import "./style.scss";
function Header() {
  return (
    <>
      {/* <h2>Header</h2> */}

      <div className="header">
        <div className="container-fluid">
          <div className="navbar-header">
            <div className="menu-left">
              <div className="shop">Cửa hàng</div>
              <div className="subnav">
                <div className="subnav-content">
                  <div className="subnav-content-shop">
                    <a className="">CỬA HÀNG</a>
                    <a className="">Tất cả sản phẩm </a>
                  </div>
                  <div className="subnav-content-fish">
                    <a className=""> CÁ</a>
                    <a className=""> Cá Rông</a>
                    <a className=""> Cá Koi </a>
                    <a className=""> Cá cảnh nhỏ</a>
                    <a className=""> Cá Xiêm</a>
                  </div>
                  <div className="subnav-content-item">
                    <a className=""> PHỤ KIỆN </a>
                    <a className=""> Thức ăn cho cá</a>
                    <a className=""> Thuốc cho cá</a>
                    <a className="">Đèn led cho cá rồng</a>
                    <a className=""> Thức ăn cho chim</a>
                    <a className=""> Lồng chim</a>
                    <a className="">Đèn led cho hồ thủy sinh</a>
                  </div>
                  <div className="subnav-content-aquarium">
                    <a className="">HỒ CÁ</a>
                    <a className="">Hồ cá đúc</a>
                    <a className="">Nhận đặt hồ cá theo yêu cầu</a>
                  </div>
                </div>
              </div>
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
      </div>
    </>
  );
}

export default Header;
