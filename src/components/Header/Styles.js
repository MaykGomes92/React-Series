import styled from "styled-components";
export const Header = styled.header`
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  padding-top: 32px;

  .leftSection {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 80px;

    img:first-child {
      width: 25.55px;
      height: 27.67px;
    }

    .arrow {
      margin-left: 49px;
      margin-right: 8.5px;
    }

    p {
      font-family: "Nunito";
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 19px;

      letter-spacing: 0.02em;

      color: #ffffff;
    }
  }

  .rightSection {
    display: flex;
    align-items: center;
    img {
      margin-left: 48.33px;
      border-radius: 50%;
    }
    .iconArrowDown {
      margin-right: 81px;
      color: #fff;
      margin-left: 9.27px;
      width: 20px;
      height: 20.67px;
    }

    .divInput {
      height: 34px;
      width: 20px;
      transition: 0.5s;

      label {
        cursor: pointer;
        .search {
          width: 20px;
          height: 20px;
          margin-left: 5px;
          margin-bottom: -15px;
          color: #fff;
        }
      }
    }

    .animeDiv {
      width: 185px;
      transition: 0.5s;
      border-radius: 4px;
      background-color: red;
      height: 34px;
      display: flex;
      align-items: center;
      background-color: #fff;
      border: 0.122rem solid transparent;
      border-image: conic-gradient(
        from 178.82deg at 50% 50%,
        #a8406d -117.45deg,
        #ae10e6 58.13deg,
        #ae10e6 242.55deg,
        #ae10e6 418.13deg
      );
      border-image-slice: 1;
      label {
        .animeSearch {
          cursor: pointer;
          width: 20px;
          height: 20px;
          margin-left: 5px;
          margin-bottom: -5px;

          color: #ae10e6;
        }
      }
      #inputSearch {
        border: none;
        outline: none;
        font-family: "Nunito";
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;

        background: conic-gradient(
          from 178.82deg at 50% 50%,
          #ae1091 -117.45deg,
          #ae11f6 58.13deg,
          #ae1091 242.55deg,
          #ae10e6 418.13deg
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-align: center;
        ::placeholder {
          color: rgb(255, 59, 255);
        }
      }
    }
  }
`;
