import "./style.scss";
import img from "./wallpaper.jpg";
function Home() {
  return (
    <>
      <div className="wallpaper-shop">
        <div className="img-wallpaper">
          <div className="img">{img}</div>
        </div>
      </div>
    </>
  );
}

export default Home;
