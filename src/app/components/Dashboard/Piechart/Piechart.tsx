import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Cards", "Usage"],
  ["Fashion Card", 11],
  ["E-book Card", 2],
  ["Travel Card", 2],
  ["Traverl Card", 2],
  ["Travel Card", 7], // CSS-style declaration
];

export const options = {
  title: "Top Performing Data Cards",
  pieHole: 0.4,
  is3D: false,
};

export function PieChart() {
  return (
    <Chart
      chartType="PieChart"
      width="403px"
      height="370px"
      data={data}
      options={options}
    />
  );
}
