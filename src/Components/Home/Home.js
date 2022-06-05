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
                <Route path=':username/' element={<About userID={username} />} />
                <Route path=':username/education' element={<Education />} />
                <Route path=':username/skills' element={<Skills />} />
                <Route path=':username/projects' element={<Projects />} />
                <Route path=':username/certifications' element={<Certifications />} />
                <Route path=':username/work' element={<Work />} />
                <Route path=":usernameworkpage/:i" element={<WorkPage />} />
                <Route path=":usernameprojectpage/:i" element={<ProjectPage />} />
                <Route path=":usernamecertificatepage/:i" element={<CertificatePage />} />
            </Routes>
            <Contact />
            <Footer />
            <DownloadFooter />
        </>
    );
}
export default Home;