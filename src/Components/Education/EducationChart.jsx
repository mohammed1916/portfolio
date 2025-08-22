import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import { data } from '../../data';

Chart.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const educationData = data.education.map(item => ({
  year: item['Year of Passing'],
  grade: parseFloat(item.percentage) || item.percentage
}));

const chartData = {
  labels: educationData.map(e => e.year),
  datasets: [
    {
      label: 'Grade',
      data: educationData.map(e => e.grade),
      backgroundColor: 'pink',
      borderColor: 'var(--color-secondary)',
      borderWidth: 2,
    }
  ]
};

const options = {
  responsive: true,
  plugins: {
    legend: { display: false },
    tooltip: { enabled: true }
  },
  scales: {
    y: { beginAtZero: true }
  }
};

export default function EducationChart() {
  return (
    <div style={{ background: 'var(--color-card-bg)', padding: 24, margin: 24, borderRadius: 16 }}>
      <Bar data={chartData} options={options} />
    </div>
  );
}
