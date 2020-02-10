import React, { useState, useEffect } from "react";
import BoxStatus from "../BoxStatus";

import { getDataFromURL } from "../../service";

const Pipeline = ({ url, title }) => {
  const [status, setStatus] = useState();

  useEffect(() => {
    getDataFromURL(url).then(async status => {
      setStatus(status);
    });

    const interval = setInterval(() => {
      getDataFromURL(url).then(async status => {
        setStatus(status);
      });
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  return <BoxStatus status={status} title={title}></BoxStatus>;
};

export default Pipeline;
