import React, { useState, useEffect } from "react";
import PrefectureListGet from "./prefecturesListGet";

type prefType = {
  prefCode: number;
  prefName: string;
};
const PrefecturesList = () => {
  const [datas, setDatas] = useState<prefType[]>([]);
  const apiUrl = "https://opendata.resas-portal.go.jp/api/v1/prefectures";
  useEffect(() => {
    setDatas(PrefectureListGet(apiUrl));
  }, []);

  return (
    <div>
      <h2>都道府県</h2>
    </div>
  );
};

export default PrefecturesList;
