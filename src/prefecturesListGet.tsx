import React from "react";
import axios, { AxiosResponse, AxiosError } from "axios";

type apiResult = {
  message: string;
  result: prefType[];
};
type apiReturn = {
  datas: prefType[];
  status: boolean;
};
type prefType = {
  prefCode: string;
  prefName: string;
};

const PrefecturesListGet = (
  callback: (data: apiReturn) => void
) => {
  const returnArray: apiReturn = {
    datas: [{ prefCode: "", prefName: "" }],
    status: false,
  };
  const url = "https://opendata.resas-portal.go.jp/api/v1/prefectures";
  const apiKey = process.env.REACT_APP_API_KEY;
  if (typeof apiKey === "undefined") {
    return;
  }
  axios
    .get(url, { headers: { "X-API-KEY": apiKey } })
    .then((res: AxiosResponse<apiResult>) => {
      returnArray.datas = res.data.result;
      returnArray.status = true;
      callback(returnArray);
    })
    .catch((e: AxiosError) => {
      returnArray.status = false;
      callback(returnArray);
    });
};

export default PrefecturesListGet;
