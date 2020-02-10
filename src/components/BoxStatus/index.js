import React from "react";
import * as S from "./styled";

const BoxStatus = ({ status, title }) => {
  return (
    <S.Box style={{ backgroundColor: status ? "green" : "red" }}>
      <S.BoxName>{title}</S.BoxName>
      <S.BoxStatus>{status ? "PASSING" : "FAILING"}</S.BoxStatus>
    </S.Box>
  );
};

export default BoxStatus;
