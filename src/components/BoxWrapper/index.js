import React, { useState, useEffect } from "react";
import BoxStatus from "../BoxStatus";

import { getDataFromURL } from "../../service";

import * as S from "./styled";

const BoxWrapper = ({
  location: {
    state: { urlFrontEnd, urlBackEnd }
  }
}) => {
  const [frontend, setFrontend] = useState();
  const [backend, setBackend] = useState();
  const [currentDate, setCurrentDate] = useState();

  useEffect(() => {
    getDataFromURL(urlFrontEnd).then(async response => {
      setFrontend(response);
    });

    getDataFromURL(urlBackEnd).then(async response => {
      setBackend(response);
    });
    const interval = setInterval(() => {
      getDataFromURL(urlFrontEnd).then(async response => {
        console.log("Getting data of frontend");
        setFrontend(response);
      });

      getDataFromURL(urlBackEnd).then(async response => {
        console.log("Getting data of backend");
        setBackend(response);
      });

      setCurrentDate(getCurrentDate());
    }, 10000);
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
        <BoxStatus status={frontend} title="aw-rewards-ui (UI)"></BoxStatus>
        <BoxStatus status={backend} title="aw-rewards (API)"></BoxStatus>
        <p>Last Time sync: {currentDate}</p>
      </S.BoxWrapper>
    </div>
  );
};

export default BoxWrapper;
