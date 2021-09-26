import React from "react";
import { Bar } from "react-chartjs-2";

import "./styles.css";

const loadData = (answer) => {
  return {
    labels: answer.data.map((info) => info.x),
    datasets: [
      {
        label: "",
        data: answer.data.map((info) => info.y),
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

const BarChart = ({ payload }) => {
  return (
    <>
      <div className="wrapper">
        {payload.map((answer, index) => (
          <div className="chart" key={index}>
            <div className="header">
              <h3 className="title">{`${answer.title} (${answer.question_id})`}</h3>
            </div>
            <Bar data={loadData(answer)} options={options} />
            <div className="y-label">Número de respostas</div>
            <div className="x-label">Respostas</div>
            <div className="hider"></div>
          </div>
        ))}
      </div>
    </>
  );
};

export default BarChart;
