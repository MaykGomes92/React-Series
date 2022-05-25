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
  }
  background-image: url(${(props) => 'https://image.tmdb.org/t/p/w500/'+props.backImage});
  background-size: cover;
  background-position:center;
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
    .containerDetailsSeries{
      margin-top:40px;
      margin-left:81px;
      ul{
        display:flex;
        margin-top:16px;
        color: #fff;
        list-style-type:none;

        
        #negativo{
          background-color:transparent;
        }

        #positivo{
          border-radius: 4px;
          background-image: linear-gradient(
            -39.31deg,
            rgba(140, 23, 181, 0.5),
            rgba(11, 144, 173, 0.5),
            #560bad,
            #b5179e
            ) ;
            background-size: 300%;
            background-position: left;
            background-color: red;
          }
          
        }
      }

      h1{
        color:#fff;
      }
  
`;
