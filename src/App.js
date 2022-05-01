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
    <>
      <ResponsiveAppBar />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Certifications />
      <Work />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
