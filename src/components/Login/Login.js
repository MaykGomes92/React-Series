import React from "react";
import * as S from "./Styles";
import img from "../../assets/fundoLogin.png";
import star from "../../assets/Star.svg";
import serie from "../../assets/Series.png";
import Label from "../Label/Label";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

const Login = () => {
  return (
    <S.SectionLogin>
      <img className="backgroundLogin" src={img} alt="Fundo séries e filmes" />

      <form className="animeDown">
        <div className="logo">
          <img src={star} alt="Estrela" />
          <img className="serie" src={serie} alt="Palavra Séries" />
        </div>

        <h4>Entre para acessar conteúdos exclusivos</h4>

        <Label label="Login" type="text" />
        <Label label="Password" type="password" />

        <div className="buttons">
          <Button texto="Acessar Conteúdos" caminhoLink="/home"></Button>
          <button className="esqueciSenha">Esqueci minha senha</button>
        </div>

        <p className="semConta">Não possuo uma conta. Quero me cadastrar!</p>
      </form>
    </S.SectionLogin>
  );
};

export default Login;
