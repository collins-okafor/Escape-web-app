import React from "react";
// import CardSectionOneArr from "../../../Utils/home.cardSectonOneArr";
import { CardDiv } from "./cardOne.styles";

const CardSectionOne = ({ arr }) => {
  return (
    <div>
      <CardDiv>
        {arr.map((item, key) => (
          <div key={key}>
            <div class="container">
              <button>{item.tag}</button>
              <h1>{item.title}</h1>
              <p>{item.excerpt}</p>
              <div className="base">
                <div className="author-detail">
                  <img src={item.authorPicture} alt="#" />
                  <span>{item.authorName}</span>
                </div>
                <div>
                  <p>{item.date}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
        {/* <div>
          <h3 className="fPost-title">Featured Posts</h3>
          <div class="card1">
            <div class="container">
              <button className="tag">PHOTOGRAPHY</button>
              <h1>The Road Ahead</h1>
              <p>The road ahead might be paved - it might not be.</p>
              <div className="base">
                <div className="author-detail">
                  <img src={Author} alt="#" />
                  <span>Mat Vogels</span>
                </div>
                <div>
                  <p> September 25, 2015</p>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </CardDiv>
    </div>
  );
};

export default CardSectionOne;
