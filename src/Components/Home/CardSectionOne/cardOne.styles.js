import styled from "styled-components";

/* CARD AREA */

export const CardDiv = styled.div`
  height: 180vh;
  background-color: rgb(227, 227, 227);
  display: flex;
  justify-content: center;

  .fPost-title {
    margin: auto;
    width: fit-content;
    display: flex;
    font-weight: 380;
    padding-bottom: 1%;
    padding-top: 4%;
    border-bottom: 1px solid rgb(187, 181, 181);
  }

  .card1 {
    width: 60vw;
    display: flex;
    padding: 20px 20px;
    justify-content: space-between;
  }

  .container {
    background-image: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.479),
        rgba(65, 33, 33, 0.292)
      ),
      url("../../Asset/5e4b1929fccc7fb465de834a_photo-1443926818681-717d074a57af\ \(1\).jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    transition: transform 0.5s;
    width: 29vw;
    padding-left: 2%;
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
  .tag1 {
    cursor: pointer;
    margin: 20px 0px 0px 0px;
    background-color: rgb(172, 111, 172);
    color: #fff;
    height: 10%;
    border: none;
  }

  .author {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    margin: 0px 0px 0px 0px;
  }

  .author img {
    width: 6%;
    border-radius: 50%;
    margin: 0px 0px 0px 0px;
  }

  .author span {
    font-weight: 350;
  }

  /* .container2 {
    border: 1px solid green;
    width: 29vw;
  } */
`;
