import "./style.scss";

function Home() {
  return (
    <>
      <div className="wallpaper-shop">
        <div className="img-wallpaper">
          <div
            className="img"
            style={{
              background: `url('${process.env.PUBLIC_URL}/4645999.jpg
              ')`,
            }}
          ></div>
        </div>
      </div>
    </>
  );
}

export default Home;
