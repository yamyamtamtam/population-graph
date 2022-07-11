import React, { useState, useEffect } from "react";
import PrefectureListGet from "./prefecturesListGet";

type moduleReturn = {
  datas: prefType[];
  status: boolean;
}
type prefType = {
  prefCode: number;
  prefName: string;
};
const PrefecturesList = () => {
  const [dataList, setdataList] = useState<moduleReturn>({datas: [], status: false});
  const apiUrl = "https://opendata.resas-portal.go.jp/api/v1/prefectures";
  useEffect(() => {
    setdataList(PrefectureListGet(apiUrl));
  }, []);
  console.table(dataList);

  return (
    <div>
      <h2>都道府県</h2>
      <ul>
        {
          (()=>{
            if(dataList.status){
              return(
                <ul>
                  <li>{dataList.datas[0].prefName}</li>
                </ul>)
            }
              return(<p>データが取得できませんでした。</p>)
          })()
        }
      </ul>
    </div>
  );
};

export default PrefecturesList;
