import React from "react";
import axios, { AxiosResponse, AxiosError } from "axios";

type apiResult = {
  message: string;
  result: boundaryYearType;
};
type boundaryYearType = {
  boundaryYear: number;
  data: eachDatatype[];
};
type eachDatatype = {
  label: string;
  data: populationType[];
};
type populationType = {
  year: number;
  value: number;
};
type tempDataType = {
  year: number;
  value?: any;
  [index: string]: number;
};
type returnDataType = {
  year: number;
  [index: string]: number;
};

const returnData: returnDataType[] = [];

const PrefecturesClick = (prefcode: string, prefname: string) => {
  getFromApi(prefcode,prefname);
};

const getFromApi = (prefcode: string, prefname: string) => {
  const url = `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?prefCode=${prefcode}`;
  const apiKey = process.env.REACT_APP_API_KEY;
  if (typeof apiKey === "undefined") {
    return;
  }
  axios
    .get(url, { headers: { "X-API-KEY": apiKey } })
    .then((res: AxiosResponse<apiResult>) => {
      res.data.result.data[0].data.forEach((resVal) => {
        if (returnData.some((val) => val.year === resVal.year)) {
          returnData.map((val) => {
            const returnVal = val;
            if(returnVal[prefname] && returnVal.year === resVal.year){ // チェック外された時。returnするデータに都道府県名が既に入っていたら消す
              delete returnVal[prefname];
            }else if(returnVal.year === resVal.year){
              returnVal[prefname] = resVal.value;
            }
            return returnVal;
          });
        } else {
          const tempItem:tempDataType = Object.assign(resVal, { [prefname]: resVal.value });
          delete tempItem.value;  
          returnData.push(resVal);
        }
      });
      console.log(returnData);

    })
    .catch((e: AxiosError) => {
      console.log(e);
    });

}



export default PrefecturesClick;
