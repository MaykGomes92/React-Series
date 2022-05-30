import styled from "styled-components";

export const MainHome2 = styled.main`
  main {
    min-height: 100vh;
    width: 100vw;
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
    margin: auto;
  }
  background-image: url(${(props) =>    "https://image.tmdb.org/t/p/w500/" + props.backImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  .informationMovie {
    margin-top: 80px;
    margin-left: 80px;
    h1 {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 700;
      font-size: 48px;
      line-height: 59px;
      letter-spacing: 0.02em;
      color: #ffffff;
    }

    .subInformation {
      display: flex;
      font-family: "Nunito";
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 16px;
      letter-spacing: 0.0025em;
      color: #ffffff;
      margin-top: 20px;

      p + p {
        margin-left: 16px;
      }
    }

    h2 {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 700;
      font-size: 12px;
      line-height: 160%;
      letter-spacing: 0.0025em;
      margin-top: 16px;
      color: #ffffff;
    }

    .sinopse {
      width: 550px;
      max-height: 130px;
      font-family: "Nunito";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 160%;
      margin-top: 16px;
      letter-spacing: 0.0025em;
      color: #ffffff;
    }
  }
  .containerDetailsSeries {
    margin-top: 40px;
    margin-left: 81px;
    ul {
      display: flex;
      margin-top: 16px;
      list-style-type: none;
      align-items: center;
      justify-content: flex-start;
      width: 800px;
      #negativo {
        background-color: transparent;
        font-family: "Nunito";
        font-style: normal;
        font-weight: 400;
        font-size: 10px;
        line-height: 14px;
        text-align: center;
        letter-spacing: 0.02em;
        color: #ffffff;
      }

      #positivo {
        border-radius: 20px;
        background-image: linear-gradient(
          -39.31deg,
          rgba(140, 23, 181, 0.5),
          rgba(11, 144, 173, 0.5),
          #560bad,
          #b5179e
        );
        width: 150px;
        background-size: 300%;
        background-position: left;
        font-family: "Nunito";
        font-style: normal;
        font-weight: 400;
        font-size: 10px;
        line-height: 14px;
        letter-spacing: 0.02em;
        color: #ffffff;
      }
    }
    h1 {
      color: #fff;
    }
  }

  .containerDetailsEpisodios {
    margin-top: 17px;
    ul {
      max-height: 40vh;
      overflow: auto;
      width:50vw;

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
        display: flex;
        margin-left: 80px;
        h1 {
          font-family: "Montserrat";
          font-style: normal;
          font-weight: 400;
          font-size: 24px;
          line-height: 29px;

          color: #ffffff;
        }
        h2 {
          width: 395px;
          height: 60px;
          overflow: hidden;
          font-family: "Nunito";
          font-style: normal;
          font-weight: 600;
          font-size: 14px;
          line-height: 19px;

          color: #ffffff;
          p {
            font-size: 12px;
            margin-top: 8px;
          }
        }
        img {
          width: 108px;
          height: 60px;
          border-radius: 5px;
          margin-left: 30px;
          margin-bottom: 20px;
          margin-right: 47px;
        }
      }
    }
  }
`;
