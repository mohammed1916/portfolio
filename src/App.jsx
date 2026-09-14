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

import Portfolio, { PortfolioNav } from './Components/Portfolio/Portfolio.jsx';
import CertificatePage from "./Components/Certifications/CertificatePage.jsx";
import ProjectPage from "./Components/Projects/ProjectPage.jsx";
import WorkPage from "./Components/Work/WorkPage.jsx";
import Privacy from "./Components/Privacy/Privacy.jsx";

function App() {
  return (
    <Router>
      <PortfolioNav />
      <Routes>
        <Route path='/' element={<Portfolio />} />
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
