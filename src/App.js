import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
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

function App() {
  return (
    <Router>
      <ResponsiveAppBar />
      <Routes>
        <Route path='/about' element={<About />} />
        <Route path='/education' element={<Education />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/certifications' element={<Certifications />} />
        <Route path='/work' element={<Work />} />
      </Routes>
      <Contact />
      <Footer />
    </Router>
  );
}

export default App;
