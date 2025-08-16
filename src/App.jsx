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

// Main single-page component
const MainPage = () => {
  return (
    <div style={{ paddingTop: '70px' }}> {/* Reduced padding since compact navbar is shorter */}
      <section id="about">
        <About />
      </section>
      <section id="education">
        <Education />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="certifications">
        <Certifications />
      </section>
      <section id="work">
        <Work />
      </section>
      <Contact />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Router>
      <ResponsiveAppBar />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/privacy' element={<Privacy />} />
        {/* Deep navigation routes for detailed views */}
        <Route path="workpage/:i" element={<WorkPage />} />
        <Route path="projectpage/:i" element={<ProjectPage />} />
        <Route path="certificatepage/:i" element={<CertificatePage />} />
      </Routes>
    </Router>
  );
}

export default App;
