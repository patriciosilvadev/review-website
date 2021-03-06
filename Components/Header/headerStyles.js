import css from 'styled-jsx/css';

export default  css`
  .headerContainer {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    height: 75.51px;
    padding: 1.7% 1.7% 1% 1.7%;
    background-color: #fff;
    box-shadow: 0 0 18px 0 rgba(0, 0, 0, 0.12);
  }

  @media only screen and (max-width: 725px) {
    .headerContainer {
      padding-top: 3.5%;
    }
  }
`;