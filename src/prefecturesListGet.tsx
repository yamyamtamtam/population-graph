import React from "react";
import axios, { AxiosResponse, AxiosError } from "axios";

type apiReslut = {
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

const PrefecturesListGet = (url: string): moduleReturn => {
  const returnArray: moduleReturn = {
    datas: [{prefCode:1,prefName:"初期値"}],
    status: true,
  };
  const apiKey = process.env.REACT_APP_API_KEY;
  if (typeof apiKey === "undefined") {
    return returnArray;
  }
  axios
    .get(url, { headers: { "X-API-KEY": apiKey } })
    .then((res: AxiosResponse<apiReslut>) => {
      returnArray.datas = res.data.result;
      returnArray.status = true;
      console.log('axios ok');
      return returnArray;
    })
    .catch((e: AxiosError) => {
      returnArray.status = true;
      console.log('axios ng');
      return returnArray;
    });
    console.log('axios first');
};

export default PrefecturesListGet;
