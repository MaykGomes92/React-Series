import styled from "styled-components";

export const LoadingDiv = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
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
  h1 {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color:black;
    border: 7px solid transparent;
    background-color: transparent;
  }
`;
