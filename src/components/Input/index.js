import React, { useState } from "react";
import * as S from "./styled";
import { useHistory } from "react-router";

const Input = () => {
  const history = useHistory();
  const [urlOne, setUrlOne] = useState();
  const [urlTwo, setUrlTwo] = useState();

  const handleClick = event => {
    event.preventDefault();
    setUrlOne(urlOne);
    setUrlTwo(urlTwo);

    history.push("/status-tv", { urlFrontEnd: urlOne, urlBackEnd: urlTwo });
  };

  return (
    <S.WrapperInput>
      <label htmlFor="url-one">Primeira URL:</label>
      <S.InputEl
        type="text"
        name="url-one"
        id="url-one"
        value={urlOne}
        onChange={event => setUrlOne(event.target.value)}
      />
      <label htmlFor="url-two">Segunda URL:</label>
      <S.InputEl
        type="text"
        name="url-two"
        id="url-two"
        value={urlTwo}
        onChange={event => setUrlTwo(event.target.value)}
      />

      <S.ButtonEl
        onClick={event => {
          handleClick(event);
        }}
      >
        Go!
      </S.ButtonEl>
    </S.WrapperInput>
  );
};

export default Input;
