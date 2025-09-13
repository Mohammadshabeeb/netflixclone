import React from "react";
import "./home.css";
import Navbar from "../../components/Navbar/Navbar";
import hero_banner from "../../assets/hero_banner.jpg";
import hero_title from "../../assets/hero_title.png";
import play_icons from "../../assets/play_icon.png";
import info_icons from "../../assets/info_icon.png";
import Titlecard from "../../components/Titlecard/Titlecard";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img src={hero_banner} alt="" className="banner-image" />
        <div className="hero-caption">
          <img src={hero_title} alt="" className="caption-img" />
          <p>
            Discovering his ties to a secret ancient order, a young man living
            in modern Istanbul embarks on a quest to a Save the City fro an
            immortal enemy.
          </p>

          <div className="hero-btns">
            <button className="btn">
              <img src={play_icons} alt="" />
              play
            </button>

            <button className="btn darkbtn">
              <img src={info_icons} alt="" />
              More Info
            </button>
          </div>

          <Titlecard />
        </div>
      </div>

      <div className="more-cards">
      <Titlecard title={"Blockbuster Movies"} category={"top_rated"}/>
      <Titlecard title={"Only on Netflix"} category={"popular"}/>
      <Titlecard title={"Upcoming"} category={"upcoming"}/>
      <Titlecard title={"Top pics for You"} category={"now_playing"}/>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
