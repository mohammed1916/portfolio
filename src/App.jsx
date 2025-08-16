import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import About from './Components/About/About.jsx';
import Work from './Components/Work/Work.jsx';
import Certifications from './Components/Certifications/Certifications.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Education from './Components/Education/Education.jsx';
import Footer from './Components/footer/Footer.jsx';
import ResponsiveAppBar from './Components/Navbar/ResponsiveAppBar.jsx';
import Skills from './Components/Skills/Skills.jsx';
import Projects from './Components/Projects/Projects.jsx';
import CertificatePage from "./Components/Certifications/CertificatePage.jsx";
import ProjectPage from "./Components/Projects/ProjectPage.jsx";
import WorkPage from "./Components/Work/WorkPage.jsx";
import Privacy from "./Components/Privacy/Privacy.jsx";

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
        <Route path='/privacy' element={<Privacy />} />
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
