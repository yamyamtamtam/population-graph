import React from "react";
import axios, { AxiosResponse, AxiosError } from "axios";

type apiResult = {
  message: string;
  result: prefType[];
};
type apiReturn = {
  datas: prefTypePlus[];
  status: boolean;
};
type prefType = {
  prefCode: string;
  prefName: string;
};
type prefTypePlus = {
  prefCode: string;
  prefName: string;
  prefColor: string;
};

const PrefecturesListGet = (callback: (data: apiReturn) => void) => {
  const randomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const color = `rgb(${r},${g},${b})`;
    return color;
  };

  const returnArray: apiReturn = {
    datas: [{ prefCode: "", prefName: "", prefColor: "" }],
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
      const prefArray: prefTypePlus[] = [];
      res.data.result.map((data) => {
        const tempData: prefTypePlus = {
          prefCode: "",
          prefName: "",
          prefColor: "",
        };
        tempData.prefCode = data.prefCode;
        tempData.prefName = data.prefName;
        tempData.prefColor = randomColor();
        return prefArray.push(tempData);
      });
      returnArray.datas = prefArray;
      returnArray.status = true;
      callback(returnArray);
    })
    .catch((e: AxiosError) => {
      returnArray.status = false;
      callback(returnArray);
    });
};

export default PrefecturesListGet;
