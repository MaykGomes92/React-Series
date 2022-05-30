import styled from "styled-components";

export const SectionLogin = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: conic-gradient(
    from 178.82deg at 50% 50%,
    #b217b5 -58.12deg,
    #0b90ad 58.13deg,
    #b217b5 301.88deg,
    #0b90ad 418.13deg
  );
  .backgroundLogin {
    position: absolute;
    opacity: 0.15;
    z-index: 5;
    background-size: cover;
    width: 100%;
  }

  form {
    position: relative;
    background: #ffffff;
    box-shadow: 0px 281px 112px rgba(0, 0, 0, 0.01),
      0px 158px 95px rgba(0, 0, 0, 0.05), 0px 70px 70px rgba(0, 0, 0, 0.09),
      0px 18px 39px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    z-index: 9999;
    width: 400px;
    .logo {
      display: flex;
      margin-top: 20px;
      justify-content: center;
      align-items: center;
      .serie {
        margin-left: -40px;
      }
    }

    h4 {
      font-family: "Montserrat";
      margin: auto;
      width: 254px;
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 29px;
      text-align: center;
      color: #292929;
      margin-top: 20px;
    }

    .buttons {
      display: flex;
      margin-left: 30px;
      margin-top: 40px;

      .esqueciSenha {
        cursor: pointer;
        width: 130px;
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 15px;
        text-align: center;
        text-decoration-line: underline;
        color: #292929;
        background-color: transparent;
        border: none;
      }
    }
    .semConta {
      width: 350px;
      height: 40px;
      margin: auto;
      margin-bottom: 40px;
      margin-left: 30px;
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 10px;
      text-align: center;
      margin-top: 10px;
      border: 1px solid transparent;
      border-image: linear-gradient(to right, #0b90ad, #b217b5);
      box-shadow: 0px 2px 4px rgba(9, 132, 227, 0.05);
      border-image-slice: 1;
      cursor: pointer;
      padding: 12px 12px 11px 12px;
      transition: 0.3s linear;

      background-image: linear-gradient(
        to bottom,
        #f8406d,
        #ae10e6,
        #f8406d,
        #ae10e6
      );
      color: black;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;

      

      &:hover {
        font-family: "Montserrat";
        font-style: normal;
        background-color: #ffddfa;

        -webkit-background-clip: inherit;
        -webkit-text-fill-color: #6f7abf;
        background-image: linear-gradient(to bottom, #ffddfa, #ffddfa, #ffddfa);

        font-weight: 400;
        font-size: 12px;
        line-height: 15px;
        text-align: center;
      }
    }
  }
`;
