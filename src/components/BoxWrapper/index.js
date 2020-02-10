import React, { useState, useEffect } from "react";
import Pipeline from "../Pipeline";
import { pipelines } from "../../utilities/pipelines";

import * as S from "./styled";

const BoxWrapper = () => {
  const [currentDate, setCurrentDate] = useState();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(getCurrentDate());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  const getCurrentDate = () => {
    var date = new Date();
    var time = date.toLocaleTimeString();
    return time;
  };

  return (
    <div className="App">
      <S.PainelName>Pipeline Status</S.PainelName>
      <S.PainelSubtitle>Cuscuz com Shark</S.PainelSubtitle>
      <S.BoxWrapper>
        {pipelines.map(pipeline => {
          return (
            <Pipeline
              key={pipeline.url}
              url={pipeline.url}
              title={pipeline.title}
            ></Pipeline>
          );
        })}
      </S.BoxWrapper>
      <p>Last Time sync: {currentDate}</p>
    </div>
  );
};

export default BoxWrapper;
