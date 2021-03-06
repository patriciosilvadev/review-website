import css from "styled-jsx/css";

export const reviewListStyles = css`
  .userInfoCard {
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.2);
    margin: 10px 0px;
    background-color: #ffffff;
    padding: 2% 10%;
  }

  .displayFlex {
    display: flex;
  }

  .displayBlock {
    display: block;
  }

  .displayFlex img {
    height: auto;
    width: 20%;
    border-radius: 50%;
  }

  .verticalAlign {
    display: flex;
    flex-direction: column;
    alignitems: flex-end;
    justify-content: flex-end;
    margin-left: 12%;
  }

  .verticalAlign h3 {
    text-align: center;
  }

  .countryName {
    font-size: 14px;
  }

  .reviewCard {
    border: 1px solid #f3f3f3;
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.2);
    margin: 10px 0px;
    background-color: #fff;
    border-radius: 5px;
  }

  .pointerCursor {
  }

  .pointerCursor:hover {
    cursor: pointer;
  }

  .topBox {
    border-bottom: 1px solid #f1f1f1;
    padding: 2%;
    margin: 0;
  }

  .cardLink {
    font-size: 18px;
    cursor: pointer;
    font-weight: 550;
  }

  .cardLink:hover {
    color: #4084bd;
  }

  .userName {
    margin-top: 10px;
  }

  .source {
    margin-top: 10px;
    color: grey;
    font-size: 12px;
  }

  .date {
    font-size: 14px;
  }

  .bottomBox {
    margin-top: 10px;
    padding: 0% 11%;
  }

  .bottomBoxInner {
    display: flex;
  }

  .footerLinks {
    padding: 0px 20px;
    cursor: pointer;
  }

  // .footerLinks::after {
  //     content: '';
  //     width: 20%;
  //     position: absolute;
  //     top: 100%;
  //     left: 0;
  //     display: none;
  // }

  .footerLinks:hover {
    color: #4084bd;
    border-bottom: 5px solid #4084bd;
  }

  // .footerLinks:hover.footerLinks::after {
  //     display: block;

  // }

  .icons {
    margin-right: 8px;
  }

  .replyCard {
    border: 1px solid #f3f3f3;
    background-color: #f7f7f7;
    border-radius: 0px 5px 5px 0px;
  }

  .companyName {
    margin-top: 20px;
    margin-left: 30px;
  }

  .replyInputBox {
    margin-top: 20px;
  }

  .postReplyButton {
    width: auto;
    padding: 10px;
    border: 1px solid #28b661;
    background: #28b661;
    color: #fff;
    font-size: 14px;
    letter-spacing: 0.5px;
    font-weight: 400;
    border-radius: 3px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    -ms-border-radius: 3px;
    -o-border-radius: 3px;
    cursor: pointer;
    transition: all 0.4s;
    margin-bottom: 20px;
  }

  .postReplyButton:disabled {
    border: 1px solid #baf0d0;
    background: #baf0d0;
  }

  .postReplyIcon {
    padding: 0px 8px;
    font-size: 15px;
  }

  .wordBreak {
    word-break: break-word;
  }

  .smallDate {
    display: none;
  }

  .dateContainer {
    text-align: right;
    margin: 20px 40px 0px 0px;
    font-weight: bold;
  }
  .ratingContainer {
    margin-top: 10px;
  }

  .mr-10 {
    margin-right: 10px;
  }
  .bottomBtn {
    padding: 14px;
  }
`;
