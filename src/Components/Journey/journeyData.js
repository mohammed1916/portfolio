import { data } from '../../data';

const education = [...data.education].sort((a, b) => Number(a['Year of Passing']) - Number(b['Year of Passing']));
export const chapters = [
  { key: 'school', label: 'School', year: education[0]['Year of Passing'], title: 'Every journey starts somewhere.', place: education[0].Institution, description: 'The school years. Building the foundations for everything that comes next.', stat: education[0].Grade, statLabel: '10th standard', tag: 'THE FIRST STOP', color: '#e4ac42', href: '#education' },
  { key: 'high-school', label: 'Higher secondary', year: education[1]['Year of Passing'], title: 'A bigger world ahead.', place: education[1].Institution, description: 'Higher secondary completed. The next stop: computer science and engineering.', stat: education[1].Grade, statLabel: '12th standard', tag: 'A NEW CHAPTER', color: '#d79549', href: '#education' },
  { key: 'college', label: 'Engineering', year: education[2]['Year of Passing'], title: 'Finding my own direction.', place: education[2].Institution, description: 'A B.E. in Computer Science and Engineering. Building software, exploring machine learning, and graduating as a merit holder.', stat: education[2].Grade, statLabel: 'B.E. / Merit holder', tag: 'TWO WHEELS. NEW POSSIBILITIES.', color: '#55998b', href: '#projects' },
  { key: 'masters', label: "Master's", year: education[3]['Year of Passing'], title: 'Going deeper into intelligence.', place: education[3].Institution, description: 'M.Tech IT, specializing in AI & Data Science. From foundations to research, graduating first in my class.', stat: education[3].Grade, statLabel: 'M.Tech / First rank', tag: 'CURIOSITY BECOMES A SPECIALTY', color: '#b57560', href: '#education' },
  { key: 'experience', label: 'Experience', year: 'NOW', title: 'Built for the real world.', place: data.work[0].company, description: data.work[0].description, stat: data.information.highlights[0].value, statLabel: 'AIS records processed', tag: 'THE JOURNEY CONTINUES', color: '#728cbd', href: '#work' },
];
export const clamp = (value, min = 0, max = 1) => Math.max(min, Math.min(max, value));
export const chapterAt = progress => Math.min(chapters.length - 1, Math.floor(clamp(progress) * (chapters.length - 1) + 0.5));
