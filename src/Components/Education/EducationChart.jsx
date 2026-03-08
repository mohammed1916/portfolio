import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import { data } from '../../data';

Chart.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const parseGradeToPercent = (item) => {
  const raw = `${item.percentage || item.Grade || ''}`.trim();
  const normalized = raw.toLowerCase();

  if (normalized.includes('cgpa') || raw.includes('/10')) {
    const cgpaValue = parseFloat(raw);
    if (!Number.isNaN(cgpaValue)) {
      return cgpaValue * 10;
    }
  }

  const percentValue = parseFloat(raw);
  return Number.isNaN(percentValue) ? 0 : percentValue;
};

const educationData = data.education.map(item => ({
  year: item['Year of Passing'],
  grade: parseGradeToPercent(item),
  displayGrade: item.Grade || item.percentage || '',
  institution: item.Institution
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
    tooltip: {
      enabled: true,
      callbacks: {
        title: (tooltipItems) => educationData[tooltipItems[0].dataIndex].institution,
        label: (context) => `Grade: ${educationData[context.dataIndex].displayGrade}`
      }
    }
  },
  scales: {
    y: {
      beginAtZero: true,
      max: 100
    }
  }
};

export default function EducationChart() {
  return (
    <div style={{ background: 'var(--color-card-bg)', padding: 24, margin: 24, borderRadius: 16 }}>
      <Bar data={chartData} options={options} />
    </div>
  );
}
