import React, { useState, useEffect } from "react";
import { isNoSubstitutionTemplateLiteral } from "typescript";
import PrefectureListGet from "./prefecturesListGet";

type apiReturn = {
  datas: prefType[];
  status: boolean;
}
type prefType = {
  prefCode: number;
  prefName: string;
};
const PrefecturesList = () => {
  const [dataList, setDataList] = useState<apiReturn>({datas: [], status: false});
  let apiKeyStatus = true;
  const apiUrl = "https://opendata.resas-portal.go.jp/api/v1/prefectures";
  const setDataCallback = (data: apiReturn) => {
    setDataList(data);
  }
  useEffect(() => {
    apiKeyStatus = PrefectureListGet(apiUrl,setDataCallback);
  }, []);
  return (
    <div>
      <h2>都道府県</h2>
      <ul>
        {
          (()=>{
            if(dataList.status){
              if(apiKeyStatus){
                return(
                  <ul>
                    <li>{dataList.datas[0].prefName}</li>
                  </ul>)
              }
              return(<p>APIの設定が間違っています。</p>)
            }
              return(<p> </p>)
          })()
        }
      </ul>
    </div>
  );
};

export default PrefecturesList;
