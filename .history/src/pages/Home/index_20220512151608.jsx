import "./style.scss";
import img from "./wallpaper.jpg";
function Home() {
  console.log(wallpaper);
  return (
    <>
      <div className="wallpaper-shop">
        <div className="img-wallpaper">
          <div className="img">{wallpaper}</div>
        </div>
      </div>
    </>
  );
}

export default Home;
