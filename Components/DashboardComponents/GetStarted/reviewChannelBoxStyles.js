import css from "styled-jsx/css";

export const reviewChannelBoxStyles = css`
  .reviewChannelBox {
    padding: 25px;
  }
  .reviewChannelBoxHeader {
    margin-bottom: 40px;
  }
  .reviewBoxItemContainer {
    display: flex;
    margin-bottom: 20px;
    box-shadow: 0px 2px 4px #d8d8d8;
    padding: 15px;
    height: 198px;
  }
  .reviewBoxItemContainer > div:nth-child(1) {
    flex-basis: 20%;
    align-self: center;
  }
  .reviewBoxItemContainer > div:nth-child(2) {
    flex-basis: 68%;
    align-self: center;
    margin-left: 2%;
    word-break: break-all;
  }
  .reviewBoxItemContainer > div:nth-child(3) {
    flex-basis: 10%;
    align-self: flex-start;
    text-align: right;
  }

  .reviewBoxItemLogoContainer {
    max-width: 65px;
    height: auto;
  }
  .reviewBoxItemLogoContainer img {
    max-width: 100%;
    height: auto;
    border-radius: 5px;
  }
  .reviewBoxRatingContainer {
    margin: 10px 0 10px 0;
  }
  .trustPilotImageContainer {
    width: 108px;
    height: 20px;
  }
  .trustPilotImageContainer img {
    max-width: 100%;
    height: auto;
  }
`;
