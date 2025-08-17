/*
 * Portfolio Website - Mohammed Abdullah's Personal portfolio showcasing projects and skills.
 * Copyright (C) 2025 MOHAMMED ABDULLAH
 * 
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <https://www.gnu.org/licenses/>.
 */

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
