import React from "react";
import * as S from "./Styles";
const ButtonsTemp = ({ title,toggleTab, classTest, idNameTeste }) => {

  if (title !== "") return <S.ButtonTemp className={classTest} id={idNameTeste} onClick={toggleTab}>{title}</S.ButtonTemp>;
  else return null;
};

export default ButtonsTemp;
