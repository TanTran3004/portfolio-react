import Header from "./Header";
import Footer from "./Footer";

function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      <div className="content">{children}</div>
      {/* <div className="container">
      </div> */}
      <Footer />
    </div>
  );
}

export default DefaultLayout;
