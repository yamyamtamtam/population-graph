import React from "react";
import axios, { AxiosResponse, AxiosError } from "axios";

type apiResult = {
  message: string;
  result: prefType[];
};
type moduleReturn = {
  datas: prefType[];
  status: boolean;
};
type prefType = {
  prefCode: number;
  prefName: string;
};

const PrefecturesListGet = (url: string, callback:(data:moduleReturn)=>void): boolean => {
  const returnArray: moduleReturn = {
    datas: [{prefCode:0,prefName:""}],
    status: false,
  };
  const apiKey = process.env.REACT_APP_API_KEY;
  if (typeof apiKey === "undefined") {
    return false;
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
    return true;

};

export default PrefecturesListGet;
