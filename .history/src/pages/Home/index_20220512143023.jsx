import "./style.scss";
import { wallpaper } from "./4645999.jpg";
function Home() {
  return (
    <>
      <div className="wallpaper-shop">
        <div className="img-wallpaper">
          <img src={wallpaper} alt="" />
        </div>
      </div>
    </>
  );
}

export default Home;
