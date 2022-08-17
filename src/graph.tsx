import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import Style from "./css/graph.module.css";


type prefType = {
  prefCode: string;
  prefName: string;
  prefColor: string;
};

type graphDataType = {
  year: number;
  [index: string]: number;
};

const Graph = (props: { graphData: graphDataType[]; prefList: prefType[] }) => {
  const { graphData, prefList } = props;

  const [windowResize, setWindowResize] = useState(
    document.body.clientWidth * 0.9
  );
  useEffect(() => {
    const onResize = () => {
      setWindowResize(document.body.clientWidth * 0.9);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  
  return (
    <section className={Style.graph}>
      <LineChart width={windowResize} height={500} data={graphData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <Legend />
        {prefList.map((pref) => {
          if (pref.prefName in graphData[0]) {
            return (
              <Line
                dataKey={pref.prefName}
                name={pref.prefName}
                stroke={pref.prefColor}
              />
            );
          }
          return "";
        })}
      </LineChart>
    </section>
  );
};

export default Graph;
