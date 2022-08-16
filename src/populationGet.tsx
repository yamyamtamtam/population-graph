import React from "react";
import axios, { AxiosResponse, AxiosError } from "axios";
import { callbackify } from "util";

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

const PrefecturesClick = (prefcode: string, prefname: string, callback: (data: returnDataType[]) => void) => {
  if (returnData.some((val) => val[prefname])) {
    deleteUncheck(prefname);
    callback(returnData);
  }else{
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
              if(returnVal.year === resVal.year){
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
        callback(returnData);
      })
      .catch((e: AxiosError) => {
        console.log(e);
      });  
  }
};

const deleteUncheck = (prefname: string) => {
  returnData.map((val) => {
    const returnVal = val;
    delete returnVal[prefname];
    return returnVal;
  })
}


export default PrefecturesClick;
