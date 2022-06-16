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


export default class Home extends React.Component {
    render() {
        return (
            <>
                <ResponsiveAppBar
                    userID={this.props.userID} />
                <Routes>
                    <Route path='/' element={<About userID={this.props.userID} />} />
                    <Route path='/education' element={<Education userID={this.props.userID} />} />
                    <Route path='/skills' element={<Skills />} />
                    <Route path='/projects' element={<Projects />} />
                    <Route path='/certifications' element={<Certifications />} />
                    <Route path='/work' element={<Work />} />
                    <Route path="/workpage/:i" element={<WorkPage />} />
                    <Route path="/projectpage/:i" element={<ProjectPage />} />
                    <Route path="/certificatepage/:i" element={<CertificatePage />} />
                </Routes>
                <Contact />
                <Footer />
            </>
        );
    }
}
