import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import About from './Components/About/About';
import Work from './Components/Work/Work';
import Certifications from './Components/Certifications/Certifications';
import Contact from './Components/Contact/Contact';
import Education from './Components/Education/Education';
import Footer from './Components/footer/Footer';
import ResponsiveAppBar from './Components/Navbar/ResponsiveAppBar';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
import CertificatePage from "./Components/Certifications/CertificatePage";
import ProjectPage from "./Components/Projects/ProjectPage";
import WorkPage from "./Components/Work/WorkPage";

function App() {
  return (
    <Router>
      <ResponsiveAppBar />
      <Routes>
        <Route path='/' element={<About />} />
        <Route path='/education' element={<Education />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/certifications' element={<Certifications />} />
        <Route path='/work' element={<Work />} />
        <Route path="workpage/:i" element={<WorkPage />} />
        <Route path="projectpage/:i" element={<ProjectPage />} />
        <Route path="certificatepage/:i" element={<CertificatePage />} />
      </Routes>
      <Contact />
      <Footer />
    </Router>
  );
}

export default App;
