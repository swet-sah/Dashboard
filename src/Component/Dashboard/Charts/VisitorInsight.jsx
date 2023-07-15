import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const VisitorInsightChart = () => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    const data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June'],
      datasets: [
        {
          label: 'Dataset 1',
          data: [100, 200, 150, 250, 300, 200],
          backgroundColor: 'rgba(255, 99, 132, 0.6)', // Red color
          borderColor: 'rgba(255, 99, 132, 1)',
          tension: 0.4,
          fill: false,
        },
        {
          label: 'Dataset 2',
          data: [150, 250, 200, 300, 250, 350],
          backgroundColor: 'rgba(54, 162, 235, 0.6)', // Blue color
          borderColor: 'rgba(54, 162, 235, 1)',
          tension: 0.4,
          fill: false,
        },
        {
          label: 'Dataset 3',
          data: [200, 300, 250, 350, 300, 400],
          backgroundColor: 'rgba(75, 192, 192, 0.6)', // Green color
          borderColor: 'rgba(75, 192, 192, 1)',
          tension: 0.4,
          fill: false,
        },
      ],
    };

    if (chartRef.current) {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }

      const ctx = chartRef.current.getContext('2d');

      chartInstanceRef.current = new Chart(ctx, {
        type: 'line',
        data: data,
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: {
              grid: {
                display: false,
              },
            },
            y: {
              beginAtZero: true,
              grid: {
                color: 'rgba(0, 0, 0, 0.1)',
              },
            },
          },
        },
      });
    }

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, []);

  return <canvas ref={chartRef} />;
};

export default VisitorInsightChart;
