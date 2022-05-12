import "./style.scss";

function Home() {
  return (
    <>
      <div className="wallpaper-shop">
        <div className="img-wallpaper">
          <img src={process.env.PUBLIC_URL + "image/4645999.jpg"} alt="" />
        </div>
      </div>
    </>
  );
}

export default Home;
