import React from 'react';
import { Line } from 'react-chartjs-2';

const ScrollGraph = () => {
  // Example data for last month and this month
  const lastMonthData = [
    { x: 1, y: 20 },
    { x: 2, y: 25 },
    { x: 3, y: 30 },
    // Add more data points for last month
  ];

  const thisMonthData = [
    { x: 1, y: 22 },
    { x: 8,y: 28 },
    { x: 3, y: 32 },
   
  ];

  const chartData = {
    datasets: [
      {
        label: 'Last Month',
        data: lastMonthData,
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgba(54, 162, 235, 1)',
        pointRadius: 0,
        lineTension: 0,
      },
      {
        label: 'This Month',
        data: thisMonthData,
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        borderColor: 'rgba(255, 99, 132, 1)',
        pointRadius: 0,
        lineTension: 0,
      },
    ],
  };

  // Define options for the chart
  const chartOptions = {
    scales: {
      x: {
        type: 'linear',
        position: 'bottom',
      },
    },
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      },
      zoom: {
        pan: {
          enabled: true,
          mode: 'x',
          speed: 10,
          threshold: 10,
        },
        zoom: {
          enabled: true,
          mode: 'x',
          speed: 0.1,
        },
      },
    },
  };

  return (
    <div className="scroll-graph">
      <Line data={chartData} options={chartOptions}  />
    </div>
  );
};

export default ScrollGraph;
