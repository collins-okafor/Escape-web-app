import styled from "styled-components";
import cardBg from "../../../Asset/5e4b1929fccc7f8ce9de833d_photo-1433854304641-67729357fe18.jpg";
/* CARD AREA */

export const CardDiv = styled.div`
  .container {
    background-image: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.479),
        rgba(65, 33, 33, 0.292)
      ),
      url(${cardBg});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    transition: transform 0.5s;
    width: 29vw;
    padding: 0 2% 0 2%;
    height: 38vh;
    color: #fff;
    border-radius: 5px;
    cursor: pointer;
  }
  .container:hover {
    transform: scale3d(1, 1.05, 1);
    transform-style: preserve-3d;
  }

  .container h1 {
    margin-top: 20%;
    font-weight: 350;
  }

  .container p {
    font-weight: 350;
  }

  button {
    cursor: pointer;
    margin: 20px 0px 0px 0px;
    background-color: rgb(172, 111, 172);
    color: #fff;
    height: 10%;
    border: none;
  }

  .base {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .author-detail {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }

  .author-detail img {
    width: 15%;
    border-radius: 50%;
    margin: 0px 0px 0px 0px;
  }

  .author-detail span {
    font-weight: 350;
  }

  .container2 {
    border: 1px solid green;
    width: 29vw;
  }
`;
