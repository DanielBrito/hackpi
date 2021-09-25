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
        label: "",
        data: info.data.map((answer) => answer.y),
        backgroundColor: [
          "rgba(235, 112, 113, 0.2)", // Discordo plenamente
          "rgba(124, 122, 158, 0.2)", // Discordo
          "rgba(14, 132, 204, 0.2)", // Neutro
          "rgba(31, 119, 131, 0.2)", // Concordo
          "rgba(49, 107, 60, 0.2)", // Concordo plenamente
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(235, 112, 113, 1)", // Discordo plenamente
          "rgba(124, 122, 158, 1)", // Discordo
          "rgba(14, 132, 204, 1)", // Neutro
          "rgba(31, 119, 131, 1)", // Concordo
          "rgba(49, 107, 60, 1)", // Concordo plenamente
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
    <>
      <div id="wrapper">
        {answers.map((answer, index) => (
          <>
            <div id="chart" key={index}>
              <div className="header">
                <h3 className="title">{answer.title}</h3>
              </div>
              <Consideration text={"Nossa consideração"} />
              <Bar data={loadData(answer)} options={options} />
              <div id="y-label">Número de respostas</div>
              <div id="x-label">Tipos de respostas</div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default BarChart;
