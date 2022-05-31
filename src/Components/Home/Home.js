import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    useNavigate
} from "react-router-dom";
import { useState, useEffect } from 'react';
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


function Home() {
    return (
        <>
            <ResponsiveAppBar />
            <Routes>
                <Route path='/' element={<About />} />
                <Route path='/education' element={<Education />} />
                <Route path='/skills' element={<Skills />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='/certifications' element={<Certifications />} />
                <Route path='/work' element={<Work />} />
                <Route path="projectpage/:i" element={<WorkPage />} />
                <Route path="projectpage/:i" element={<ProjectPage />} />
                <Route path="certificatepage/:i" element={<CertificatePage />} />
            </Routes>
            <Contact />
            <Footer />
            <DownloadFooter />
        </>
    );
}
export default Home;