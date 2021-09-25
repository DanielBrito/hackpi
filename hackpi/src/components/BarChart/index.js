import React from "react";
import { Bar } from "react-chartjs-2";

import Consideration from "../Consideration";

import answers from "../../data/sample.json";

import "./styles.css";

const loadData = (info) => {
  return {
    labels: info.data.map((answer) => answer.x),
    datasets: [
      {
        label: "# Número de Respostas",
        data: info.data.map((answer) => answer.y),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const BarChart = () => {
  return (
    <div id="wrapper">
      {answers.map((answer, index) => (
        <div id="chart" key={index}>
          <div className="header">
            <h2 className="title">{answer.title}</h2>
          </div>
          <Consideration text={"Nossa consideração"} />
          <Bar data={loadData(answer)} options={options} />
        </div>
      ))}
    </div>
  );
};

export default BarChart;
