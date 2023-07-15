import React, { useEffect, useRef } from 'react';
import {Chart} from 'chart.js';

const Fundgraph = () => {
  const funds = [
    { id: 1, source: 'Donor A', amount: 1000 },
    { id: 2, source: 'Donor B', amount: 500 },
    { id: 3, source: 'Donor C', amount: 2000 },
  ];

  const chartRef = useRef(null);
  let chartInstance = useRef(null);

  useEffect(() => {
    const labels = funds.map((fund) => fund.source);
    const data = funds.map((fund) => fund.amount);

    const chartConfig = {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Fundraising Usage',
            data: data,
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
            borderWidth: 2,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              stepSize: 500,
            },
          },
        },
      },
    };

    const ctx = chartRef.current.getContext('2d');
    chartInstance.current = new Chart(ctx, chartConfig);

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
        chartInstance.current = null;
      }
    };
  }, []);

  return (
    <div>
      <canvas ref={chartRef} height={400} width={800} />
    </div>
  );
};

export default Fundgraph;
