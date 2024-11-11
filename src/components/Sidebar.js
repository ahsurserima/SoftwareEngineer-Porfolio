import React from 'react';
import styled from 'styled-components';
import { FaHome, FaUser, FaProjectDiagram, FaEnvelope, FaCode, FaTools, FaAward } from 'react-icons/fa';

// Sidebar for navigation links on the left
const SidebarContainer = styled.div`
  width: 250px;
  background-color: grey;
  color: #fff;
  padding: 2rem;
  padding-top: 80px;
  position: fixed;
  height: 100%;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.2); /* Shadow for the sidebar */
  top: 0; /* Ensures it stays at the top */
  left: 0; /* Fix position on the left */
  overflow-y: auto; /* Allows scrolling if content is long */

  h2 {
    color: white; /* White color for "My Portfolio" */
    font-size: 3rem; /* Larger font size */
    font-weight: bold;
    margin-bottom: 2rem; /* Space below the heading */
  }
`;

// Sidebar item for navigation links
const SidebarItem = styled.a`
  display: flex;
  align-items: center;
  color: #ff6347;
  text-decoration: none;
  margin: 4%;
  padding: 5%;
  transition: color 0.3s;

  &:hover {
    color: blue; /* Hover color for links */
  }

  & > svg {
    margin-right: 10px; /* Space between icon and text */
  }
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <h2>Software Engineer</h2>
      <SidebarItem href="/"><FaHome /> Home</SidebarItem> {/* Home link added */}
      <SidebarItem href="/about"><FaUser /> About Me</SidebarItem>
      <SidebarItem href="/projects"><FaProjectDiagram /> Completed Projects</SidebarItem>
      <SidebarItem href="/contact"><FaEnvelope /> Contact Info</SidebarItem>
      <SidebarItem href="/services"><FaTools /> Services Offered</SidebarItem>
      <SidebarItem href="/certification"><FaAward /> Certifications and Qualifications</SidebarItem>
      <SidebarItem href="/SourceCode"><FaCode /> Source Code</SidebarItem>
    </SidebarContainer>
  );
};

export default Sidebar;
