import React from "react";
import "./home.style.css";
// import Nav from "../../UniversalComponents/NavBar/nav";
// import { NavArr } from "../../Utils/navArr";
import Author from "../../Asset/5e4b1929fccc7ff9f8de8335_128-14.jpg";

const Home = () => {
  return (
    <div>
      {/* HERO AREA */}
      <div className="hero">
        {/* <Nav navArr={NavArr} /> */}
        <div className="hero-text">
          <div>
            <h1 className="footer-h1">Let's do it together.</h1>
            <p className="footer-p">
              We travel the world in search of stories. Come along for the ride.
            </p>
            <button className="footer-btn" type="submit">
              View Latest Posts
            </button>
          </div>
        </div>
      </div>
      <div className="grid">
        <button className="grid-btn">Nature</button>
        <button className="grid-btn">Photography</button>
        <button className="grid-btn">Relaxation</button>
        <button className="grid-btn">Vacation</button>
        <button className="grid-btn">Travel</button>
        <button className="grid-btn">Adventure</button>
      </div>

      {/* CARD AREA */}
      <div className="cards">
        <div className="featured-post">
          <h3 className="fPost-title">Featured Posts</h3>
          <div class="card1">
            <div class="container">
              <button className="tag1">PHOTOGRAPHY</button>
              <h1>The Road Ahead</h1>
              <p>The road ahead might be paved - it might not be.</p>
              <div className="author">
                <img src={Author} alt="#" />
                <span>Mat Vogels</span>
              </div>
            </div>
            <div class="container2">
              <h4>
                <b>John Doe</b>
              </h4>
              <p>Architect & Engineer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
