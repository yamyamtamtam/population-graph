import React from "react";
import axios, { AxiosResponse, AxiosError } from "axios";

type apiResult = {
  message: string;
  result: boundaryYear;
};
type boundaryYear = {
  boundaryYear: number;
  data: eachData[];
};
type eachData = {
  label: string;
  data: populationType[];
};
type populationType = {
  year: number;
  value: number;
};

let activePrefCode: string[] = [];

const PrefecturesClick = (prefcode: string, prefname: string) => {
  if (activePrefCode.includes(prefcode)) {
    activePrefCode = activePrefCode.filter((item) => item !== prefcode);
  } else {
    activePrefCode.push(prefcode);
  }
  console.log(activePrefCode);
  const url = `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?prefCode=${activePrefCode[0]}`;
  const apiKey = process.env.REACT_APP_API_KEY;
  if (typeof apiKey === "undefined") {
    return;
  }
  axios
    .get(url, { headers: { "X-API-KEY": apiKey } })
    .then((res: AxiosResponse<apiResult>) => {
      console.log(res.data.result.data[0].data);
    })
    .catch((e: AxiosError) => {
      console.log(e);
    });
};

export default PrefecturesClick;
