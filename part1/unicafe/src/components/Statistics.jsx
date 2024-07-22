import React from "react";
import StatisticList from "./StatisticList";

const Statistics = ({value_good, value_neutral, value_bad}) => {
  const total = value_good + value_neutral + value_bad;
  const average = total / 3;
  const positive = (value_good / total) * 100;

  if (total === 0) {
    return <p>No feedback given</p>;
  }

  return (
    <div>
      <StatisticList text="good" value={value_good} />
      <StatisticList text="neutral" value={value_neutral} />
      <StatisticList text="bad" value={value_bad} />
      <StatisticList text="all" value={total} />
      <StatisticList text="average" value={average.toFixed(2)} />
      <StatisticList text="positive" value={positive.toFixed(2) + " " + "%"} />
    </div>
  );
};

export default Statistics;
