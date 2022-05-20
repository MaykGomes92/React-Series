import styled from "styled-components";

export const Button = styled.button`
  width: 169px;
  height: 40px;
  color: #fff;
  border: none;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  line-height: 17px;
  text-align: center;
  margin-right: 39px;
  cursor: pointer;
  border-radius: 4px;
  background-image: linear-gradient(
    -39.31deg,
    rgba(140, 23, 181, 0.5),
    rgba(11, 144, 173, 0.5),
    #560bad,
    #b5179e
  );
  background-size: 300%;
  background-position: left;

  transition: 1s background-position ease-in-out;
  a {
    text-decoration: none;
    color: #fff;
  }
  &:hover {
    background-size: 300%;
    background-position: right;
  }
`;
