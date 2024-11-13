// App.js
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalStyles } from './styles/GlobalStyles';
import { darkTheme } from './styles/Theme';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './components/ContactInfo';
import ServicesOffered from './pages/ServicesOffered';
import Certification from './pages/Qualifications&Coursework';
import SourceCode from './pages/SourceCode';
import CompletedProjects from './pages/CompletedProjects';
import ProjectsList from './pages/ProjectsList';
import ProjectDetails from './pages/ProjectDetails';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <Router basename="/SoftwareEngineer-Porfolio"> {/* basename */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<CompletedProjects />} />
          <Route path="/projects-list/:category" element={<ProjectsList />} />
          <Route path="/project-details/:projectTitle" element={<ProjectDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<ServicesOffered />} />
          <Route path="/certification" element={<Certification />} />
          <Route path="/SourceCode" element={<SourceCode />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
