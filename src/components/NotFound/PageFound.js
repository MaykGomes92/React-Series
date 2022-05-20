import React from "react";
import * as S from "./Styles";
import found from "../../assets/404.svg";
import Button from "../Button/Button";
import Header from "../Header/Header";

const PageFound = () => {

  return (
    <S.SectionNotFound>
      <Header />
      <main>
        <div className="textLeft">
          <h1>
            Ops... <br /> Essa página não foi encontrada.
          </h1>
          <p>
            o link que você pesquisou provavelmente não <br /> existe ou a
            página foi removida.
          </p>
          <Button texto="Voltar para a Home" caminhoLink="home" />
        </div>
        <div className="found404">
          <img src={found} alt="Numero 404" />
        </div>
      </main>
    </S.SectionNotFound>
  );
};

export default PageFound;
