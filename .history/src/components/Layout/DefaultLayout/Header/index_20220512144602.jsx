import "./style.scss";
function Header() {
  return (
    <>
      {/* <h2>Header</h2> */}

      <div className="header">
        <div className="navbar-header">
          <div className="menu-left">
            <div className="subnav">
              <div className="shop">
                Cửa hàng
                <div className="subnav-content">
                  <div className="subnav-content-shop">
                    <a className="subnav-title  directions">CỬA HÀNG</a>
                    <a className="subnav-items">Tất cả sản phẩm </a>
                  </div>
                  <div className="subnav-content-fish">
                    <a className="subnav-title  directions"> CÁ</a>
                    <a className="subnav-items"> Cá Rông</a>
                    <a className="subnav-items"> Cá Koi </a>
                    <a className="subnav-items"> Cá cảnh nhỏ</a>
                    <a className="subnav-items"> Cá Xiêm</a>
                  </div>
                  <div className="subnav-content-item">
                    <a className="subnav-title  directions"> PHỤ KIỆN </a>
                    <a className="subnav-items"> Thức ăn cho cá</a>
                    <a className="subnav-items"> Thuốc cho cá</a>
                    <a className="subnav-items">Đèn led cho cá rồng</a>
                    <a className="subnav-items"> Thức ăn cho chim</a>
                    <a className="subnav-items"> Lồng chim</a>
                    <a className="subnav-items">Đèn led cho hồ thủy sinh</a>
                  </div>
                  <div className="subnav-content-aquarium">
                    <a className="subnav-title  directions">HỒ CÁ</a>
                    <a className="subnav-items">Hồ cá đúc</a>
                    <a className="subnav-items">Nhận đặt hồ cá theo yêu cầu</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="explore">Liên hệ</div>
          </div>
          <div className="logo">
            <img src={process.env.PUBLIC_URL + "/images/logo.png"} alt="" />
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
