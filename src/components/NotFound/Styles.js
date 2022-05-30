import styled from "styled-components";

export const SectionNotFound = styled.section`
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
  min-height: 100vh;
  width: 100vw;

  main {
    display: flex;
    margin: auto;
    margin-top: 100px;
    width: 100%;
    max-width: 1600px;
    .textLeft {
      margin-top: 195px;
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
      p {
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 29px;
        margin-top: 11px;
        color: #ffffff;
      }

      button {
        margin-top: 33px;
      }
    }

    .found404 {
      img {
        margin-top: 230px;
      }
    }
  }

  @media (max-width: 1000px) {
    main{
      flex-direction:column;
      margin-top:0px;
      align-items:center;

      .textLeft{
        margin-top:20px;
        margin-left:10px;
        h1,p{
          line-height:29px;
          font-size:1.3rem;
        }
      }
      .found404 {
        img {
          width: 300px;
          margin-top:20px;
        }
      }
    }
  }
`;
