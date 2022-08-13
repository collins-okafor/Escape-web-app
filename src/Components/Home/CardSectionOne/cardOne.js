import React from "react";
import Author from "../../../Asset/5e4b1929fccc7ff9f8de8335_128-14.jpg";
import { cardDiv } from "./cardOne.styles";

const CardSectionOne = () => {
  return (
    <div>
      <cardDiv>
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
      </cardDiv>
    </div>
  );
};

export default CardSectionOne;
