import styled from "styled-components";

export const Main = styled.main`

  main{
    min-height:100vh;
    width:100vw;
    background: linear-gradient(
      180deg,
      rgba(8, 15, 26, 0) 0%,
      rgba(8, 15, 26, 0.376) 38.02%,
      rgba(8, 15, 26, 0.72) 72.4%,
      rgba(8, 15, 26, 0.8) 100%
    ),
    rgba(29, 51, 84, 0.3)
      linear-gradient(
        123.91deg,
        rgba(11, 144, 173, 0.5) 29.28%,
        rgba(140, 23, 181, 0.5) 68.34%
      );
  }
  background-image: url(${(props) => props.imgCarrousel});
  background-size: cover;
  background-position:left;
  background-repeat:no-repeat;

  .animeMenuDropDown {
    position: absolute;
    right: 190px;
    padding: 5px 0px;
    border-radius: 8px;
    top: 69px;
    color: #fff;
    display: ${(props) => (props.inputWork ? "block" : "none")};
    flex-direction: column;
    max-height: 40vh;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.5);

    ::-webkit-scrollbar {
      width: 4px;
    }

    ::-webkit-scrollbar-thumb {
      background: linear-gradient(
        rgba(11, 144, 173, 0.5) 29.28%,
        rgba(140, 23, 181, 0.5) 68.34%
      );
      border-radius: 15px;
    }

    li {
      min-width: 300px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      list-style: none;
      padding: 5px 0px;
      font-family: "Nunito";
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      padding: 15px 20px;
      p {
        cursor: pointer;
        width: calc(250px - 92px);
        margin-right: -15px;
      }
      &:hover {
        background-color: rgba(0, 0, 0, 0.2);
      }
    }

    img {
      width: 84px;
      height: 84px;
      border-radius: 5px;
      cursor: pointer;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
    }
  }

  .titleSerie {
    margin-left: 80px;
    margin-top: 110px;
    h1 {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 700;
      font-size: 48px;
      line-height: 59px;
      letter-spacing: 0.02em;
      width: 470px;
      color: #ffffff;
    }
    .information {
      display: flex;
      font-family: "Nunito";
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 16px;
      letter-spacing: 0.0025em;
      color: #ffffff;

      p {
        margin-top: 18px;
        margin-bottom: 40px;
      }
      p:nth-child(2) {
        margin-left: 16px;
        margin-right: 16px;
      }
    }
  }
  .sectionDown {
    margin-top: 60px;
    margin-left: 81px;

    h2 {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 22px;
      letter-spacing: 0.02em;
      color: #ffffff;
    }

    .carrouselInformation {
      ul {
        display: flex;
        margin-top: 18px;
        list-style-type: none;
        overflow: hidden;
        margin-right: 20px;
        li {
          position: relative;
          cursor: pointer;
          z-index: 102;
          button {
            display: none;
            position: absolute;
            top: 140px;
            left: 20px;
            z-index: 9999;
          }
          img {
            position: relative;
            z-index: -99;
            height: 315px;
            border-radius: 4px;
          }

          .backButton {
            display: none;
            position: absolute;
            z-index: 999;
            width: 100%;
            height: 80%;
            overflow: hidden;
            background: linear-gradient(
              123.91deg,
              rgba(11, 144, 173, 0.5) 29.28%,
              rgba(140, 23, 181, 0.5) 68.34%
            );
            backdrop-filter: blur(2px);
          }
        }
        li + li {
          margin-left: 30px;
        }
      }
    }

    .arrowsCarrousel {
      display: flex;
      justify-content: space-around;
      text-align: center;
      margin-top: 15px;
      color: #fff;
      font-size: 20px;
    }
    svg {
      cursor: pointer;
    }
  }
`;
