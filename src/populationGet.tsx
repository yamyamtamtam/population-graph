import React from "react";
import axios, { AxiosResponse, AxiosError } from "axios";

type apiResult = {
  message: string;
  result: populationsType[];
};

type populationsType = {
  year: number;
  value: number;
};

let activePrefcode: string[] = [];

const PrefecturesClick = (prefcode: string) => {
  if (activePrefcode.includes(prefcode)) {
    activePrefcode = activePrefcode.filter((item) => item !== prefcode);
  } else {
    activePrefcode.push(prefcode);
  }
  populationGet(activePrefcode);
};

const populationGet = (prefcode: string[]) => {
  const apiKey = process.env.REACT_APP_API_KEY;
  prefcode.map((code: string) => {
    const url = `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?prefCode=${code}`;
    console.log(url);
    if (typeof apiKey === "undefined") {
      return;
    }
    axios
      .get(url, { headers: { "X-API-KEY": apiKey } })
      .then((res: AxiosResponse<apiResult>) => {
        console.log(res);
        return res;
      })
      .catch((e: AxiosError) => {
        return e;
      });
  });
};

export default PrefecturesClick;
