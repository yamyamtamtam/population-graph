import React, { useState, useEffect } from "react";
import PrefectureListGet from "./prefecturesListGet";
import PrefecturesClick from "./populationGet";

type apiReturn = {
  datas: prefType[];
  status: boolean;
};
type prefType = {
  prefCode: string;
  prefName: string;
};
const PrefecturesList = () => {
  const [dataList, setDataList] = useState<apiReturn>({
    datas: [],
    status: false,
  });
  const setDataCallback = (data: apiReturn) => {
    setDataList(data);
  };
  useEffect(() => {
    PrefectureListGet(setDataCallback);
  }, []);
  return (
    <div>
      <h2>都道府県</h2>
      <ul>
        {dataList.status &&
          dataList.datas.map((pref: prefType) => {
            return (
              <li>
                <input
                  onChange={() => {
                    PrefecturesClick(pref.prefCode, pref.prefName);
                  }}
                  type="checkbox"
                  name="pref"
                  id={pref.prefCode}
                  value={pref.prefCode}
                />
                <label htmlFor={pref.prefCode}>{pref.prefName}</label>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default PrefecturesList;
