import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler
);

const OrdersGraph = () => {
  const chartData = {
    labels: ['16', '18', '20', '22', '24', '26', '28', '30', '02', '04', '06', '08', '10'],
    datasets: [
      {
        label: 'Orders Update',
        data: [1.5, 1.7, 1.2, 1.0, 2.2, 2.5, 1.8, 2.1, 2.5, 2.0, 1.7, 1.9],
        borderColor: 'rgba(236, 0, 140, 1)', 
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 400);
          gradient.addColorStop(0, '#F5F2FF'); 
          gradient.addColorStop(1, 'rgba(255, 255, 255, 0)'); 
          return gradient;
        },
        pointBackgroundColor: (ctx) => {
          return ctx.dataIndex === 7 ? '#ffffff' : 'rgba(0,0,0,0)';
        },
        pointBorderColor: (ctx) => {
          return ctx.dataIndex === 7 ? 'rgba(236, 0, 140, 1)' : 'rgba(0,0,0,0)';
        },
        pointBorderWidth: 2,
        pointRadius: (ctx) => (ctx.dataIndex === 7 ? 8 : 0), 
        pointHoverRadius: 8,
        tension: 0.4, 
        fill: true, 
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, 
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context.raw}M`;
          },
        },
        backgroundColor: '#f472b6',
        titleColor: '#ffffff',
        bodyColor: '#ffffff',
        displayColors: false,
        borderColor: '#ffffff',
        borderWidth: 1,
      },
    },
    scales: {
      x: {
        grid: {
          display: false, 
        },
        ticks: {
          color: '#9ca3af',
        },
      },
      y: {
        grid: {
          color: 'rgba(209, 213, 219, 0.3)', 
        },
        ticks: {
          color: '#9ca3af',
          callback: function (value) {
            return `$${value}M`; 
          },
        },
        min: 0.5, 
      },
    },
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold text-lg">Orders Update</h2>
        <button className="text-gray-500 hover:text-pink-500 text-sm font-medium">
          View Details →
        </button>
      </div>

      <div className="relative h-64">
        <Line data={chartData} options={options} />
      </div>
    </div>
  );
};

export default OrdersGraph;



