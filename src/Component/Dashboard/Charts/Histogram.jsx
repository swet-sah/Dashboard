import React from 'react';
import { Bar } from 'react-chartjs-2';

const BarChart = () => {
  // Example data for corporate and college age groups
  const data = {
    January: { corporate: 25, college: 20 },
    February: { corporate: 30, college: 18 },
    March: { corporate: 28, college: 22 },
    April: { corporate: 35, college: 24 },
    May: { corporate: 32, college: 26 },
    June: { corporate: 38, college: 28 },
  };

  // Prepare data for the chart
  const chartData = {
    labels: Object.keys(data),
    datasets: [
      {
        label: 'Corporate',
        data: Object.values(data).map((item) => item.corporate),
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
      {
        label: 'College',
        data: Object.values(data).map((item) => item.college),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Define options for the chart
  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 5,
        },
      },
    },
  };

  return (
    <div className="bar-chart">
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
};

export default BarChart;
