import { Bar } from 'react-chartjs-2';
import { Chart, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import { data } from '../../data';
Chart.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

// Plot the percentages supplied in the portfolio data; retain original grades
// beside them because CGPA conversion rules differ between institutions.
const education = [...data.education].sort((a,b) => Number(a['Year of Passing']) - Number(b['Year of Passing']));
const values = education.map(e => parseFloat(e.percentage));
const peak = Math.max(...values);
const options = {
  responsive: true, maintainAspectRatio: false,
  animation: false,
  plugins: { legend: { display: false }, tooltip: { callbacks: {
    title: items => education[items[0].dataIndex].Institution,
    label: context => `${education[context.dataIndex].Grade} · plotted at ${context.raw}%`
  } } },
  scales: {
    x: { ticks: { color: '#c9d2bf' }, grid: { display: false } },
    y: { min: 0, max: 100, ticks: { color: '#c9d2bf', callback: value => `${value}%` }, grid: { color: '#ffffff16' } }
  }
};
export default function EducationChart() {
  return <figure className="education-chart"><figcaption>Academic performance <span>Highest plotted value: {peak}%</span></figcaption><div className="education-chart-canvas"><Bar options={options} data={{ labels: education.map(e => e['Year of Passing']), datasets: [{ label: 'Recorded percentage', data: values, backgroundColor: values.map(v => v === peak ? '#c4f564' : '#829b63'), borderRadius: 4, maxBarThickness: 48 }] }} role="img" aria-label={education.map((e,i)=>`${e['Year of Passing']}: ${e.Grade}, plotted at ${values[i]} percent`).join('; ')}/></div><div className="grade-labels">{education.map(e=><span key={e['Year of Passing']}><small>{e['Year of Passing']}</small>{e.Grade}</span>)}</div><p>Bars use the percentages recorded in this portfolio. Original grades are shown above; CGPA and percentage scales are not directly equivalent across institutions.</p></figure>;
}
