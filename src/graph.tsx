import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const primaryData = [
  {
    year: 1980,
    北海道: 12817,
    青森県: 13000,
  },
  {
    year: 1985,
    北海道: 12707,
    青森県: 14000,
  },
  {
    year: 1990,
    北海道: 12571,
    青森県: 14000,
  },
  {
    year: 1995,
    北海道: 12602,
    青森県: 14000,
  },
  {
    year: 2000,
    北海道: 12199,
    青森県: 14000,
  },
  {
    year: 2005,
    北海道: 11518,
    青森県: 14000,
  },
  {
    year: 2010,
    北海道: 10888,
    青森県: 14000,
  },
  {
    year: 2015,
    北海道: 10133,
    青森県: 14000,
  },
  {
    year: 2020,
    北海道: 9275,
    青森県: 14000,
  },
];
type prefType = {
  prefCode: string;
  prefName: string;
};

type graphDataType = {
  year: number;
  [index: string]: number;
};

const Graph = (props: {graphData:graphDataType[],prefList:prefType[]}) => {
  console.log(props);
  const {graphData,prefList} = props;
  return (
    <section>
      <LineChart width={500} height={300} data={primaryData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line dataKey='北海道' name='北海道' fill="#FF0000" />
        <Line dataKey='青森県' name='青森県' fill="#FF0000" />
      </LineChart>
      <h5>propsの値確認用</h5>
      <ul>
        {graphData.map((data:graphDataType) => {
          return (
            <li>{data.year} 沖縄: {data['沖縄県']} 鹿児島: {data['鹿児島県']}</li>
            )
        })}
      </ul>
      <h5>都道府県リスト出力確認用</h5>
      <ul>
        {prefList.map((pref) => {
          return (
            <li>{pref.prefName}</li>
          )
        })}
      </ul>

    </section>
  );
};

export default Graph;
