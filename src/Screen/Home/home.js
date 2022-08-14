import React from "react";
import CardSectionOne from "../../Components/Home/CardSectionOne/cardOne";
import CardSectionOneArr from "../../Utils/home.cardSectonOneArr";
import { Card1, CardDiv, CardSectionTitle } from "./home.style";
// import "./home.style"
// CardDiv
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

      <CardDiv>
        <CardSectionTitle>Featured Posts</CardSectionTitle>
        <Card1>
          <CardSectionOne arr={CardSectionOneArr} />
          <CardSectionOne arr={CardSectionOneArr} />
        </Card1>
      </CardDiv>
    </div>
  );
};

export default Home;
