import React from "react";
import axios, { AxiosResponse, AxiosError } from "axios";

type RESULT = {
  message: string;
  result: prefType[];
};
type prefType = {
  prefCode: number;
  prefName: string;
};

let returnArray: prefType[] = [];

const PrefecturesListGet = (url: string): prefType[] => {
  const apiKey = process.env.REACT_APP_API_KEY;
  if (typeof apiKey === "undefined") {
    return returnArray;
  }
  axios
    .get(url, { headers: { "X-API-KEY": apiKey } })
    .then((res: AxiosResponse<RESULT>) => {
      returnArray = res.data.result;
      return returnArray;
    })
    .catch((e: AxiosError) => {
      return returnArray;
    });
  return returnArray;
};

export default PrefecturesListGet;
