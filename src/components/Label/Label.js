import React from "react";
import * as S from "./Styles";

const Label = ({ label, type}) => {
  const estiloP = {
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: '600',
    fontSize: "14px",
    lineHeight: "19px",
    marginLeft: "30px",
    marginTop: "20px",
    marginBottom: "8px",
    color: "#292929",
  };

  return (
    <label>
      <p style={estiloP}>{label}</p>
      <S.Input type={type} />
    </label>
  );
};

export default Label;
