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

const data = [
    {
      year: 1980,
      北海道 : 12817,
      青森県 : 13000,
    },
    {
      year: 1985,
      北海道 : 12707,
      青森県 : 14000,
    },
    {
      year: 1990,
      北海道 : 12571,
      青森県 : 14000,
    },
    {
      year: 1995,
      北海道 : 12602,
      青森県 : 14000,
    },
    {
      year: 2000,
      北海道 : 12199,
      青森県 : 14000,
    },
    {
      year: 2005,
      北海道 : 11518,
      青森県 : 14000,
    },
    {
      year: 2010,
      北海道 : 10888,
      青森県 : 14000,
    },
    {
      year: 2015,
      北海道 : 10133,
      青森県 : 14000,
    },
    {
      year: 2020,
      北海道 : 9275,
      青森県 : 14000,
    },
]  


const Graph = () => {
  return (
    <section>
      <LineChart width={500} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line dataKey="北海道" name="北海道" fill="#FF0000" />
        <Line dataKey="青森県" name="青森県" fill="#FF0000" />
      </LineChart>
    </section>
  );
};

export default Graph;
