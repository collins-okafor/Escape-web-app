import React from "react";
import "./home.style.css";

const Home = () => {
  return (
    <div>
      {/* HERO AREA */}
      <div className="hero">
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
    </div>
  );
};

export default Home;
