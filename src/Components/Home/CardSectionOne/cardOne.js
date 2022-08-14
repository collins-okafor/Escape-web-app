import React from "react";
import { CardDiv } from "./cardOne.styles";

const CardSectionOne = ({ arr }) => {
  return (
    <div>
      {arr.map((item, key) => (
        <div key={key}>
          <CardDiv>
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
          </CardDiv>
        </div>
      ))}
    </div>
  );
};

export default CardSectionOne;
