import React, { useState, useEffect } from "react";
import PrefectureListGet from "./prefecturesListGet";
import PrefecturesClick from "./populationGet";
import Graph from "./graph";
import Style from "./css/prefecturesList.module.css";

type apiReturn = {
  datas: prefType[];
  status: boolean;
};
type prefType = {
  prefCode: string;
  prefName: string;
  prefColor: string;
};

type graphDataType = {
  year: number;
  [index: string]: number;
};

const PrefecturesList = () => {
  const [dataList, setPrefList] = useState<apiReturn>({
    datas: [],
    status: false,
  });
  const setPrefCallback = (data: apiReturn) => {
    setPrefList(data);
  };
  useEffect(() => {
    PrefectureListGet(setPrefCallback);
  }, []);

  const [graphData, setgraphData] = useState<graphDataType[]>([
    { year: 0, "": 0 },
  ]);
  const setgraphCallback = (data: graphDataType[]) => {
    const graphDataCopy: graphDataType[] = [];
    data.map((val) => {
      return graphDataCopy.push(val);
    });
    setgraphData(graphDataCopy);
  };

  return (
    <div>
      <ul className={Style.prefList}>
        {dataList.status &&
          dataList.datas.map((pref: prefType) => {
            return (
              <li>
                <input
                  onChange={() => {
                    PrefecturesClick(
                      pref.prefCode,
                      pref.prefName,
                      setgraphCallback
                    );
                  }}
                  type="checkbox"
                  name="pref"
                  id={pref.prefCode}
                  value={pref.prefCode}
                />
                <label htmlFor={pref.prefCode} style={{borderColor: pref.prefColor}}>{pref.prefName}</label>
              </li>
            );
          })}
      </ul>
      <Graph graphData={graphData} prefList={dataList.datas} />
    </div>
  );
};

export default PrefecturesList;
