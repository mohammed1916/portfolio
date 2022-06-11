import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    useNavigate
} from "react-router-dom";
import About from '../About/About';
import CertificatePage from '../Certifications/CertificatePage';
import Certifications from '../Certifications/Certifications';
import Contact from '../Contact/Contact';
import Education from '../Education/Education';
import DownloadFooter from '../footer/Download/DownloadFooter';
import Footer from '../footer/Footer';
import ResponsiveAppBar from '../Navbar/ResponsiveAppBar';
import ProjectPage from '../Projects/ProjectPage';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import Work from '../Work/Work';
import WorkPage from '../Work/WorkPage';


function Home({ username }) {
    return (
        <>
            <ResponsiveAppBar
                userID={username} />
            <Routes>
                <Route path='/:username/home/' element={<About userID={username} />} />
                <Route path='/:username/home/education' element={<Education />} />
                <Route path='/:username/home/skills' element={<Skills />} />
                <Route path='/:username/home/projects' element={<Projects />} />
                <Route path='/:username/home/certifications' element={<Certifications />} />
                <Route path='/:username/home/work' element={<Work />} />
                <Route path="/:username/home/workpage/:i" element={<WorkPage />} />
                <Route path="/:username/home/projectpage/:i" element={<ProjectPage />} />
                <Route path=":username/home/certificatepage/:i" element={<CertificatePage />} />
            </Routes>
            <Contact />
            <Footer />
            <DownloadFooter />
        </>
    );
}
export default Home;