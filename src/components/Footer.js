// Footer.js
import React from 'react';
import styled from 'styled-components';
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaTools,
  FaProjectDiagram,
} from 'react-icons/fa';

// Footer.js
const FooterContainer = styled.footer`
  background-color: #0f0f1a; /* Darker dim blue color */
  color: #fff;
  padding: 1rem;
  text-align: center;
  position: relative; /* Allows it to fit within the content */
  bottom: 0;
  width: calc(100% - 250px); /* Adjust for sidebar width */
  margin-left: 250px; /* Space for the sidebar */
`;

// Wrapper for footer content
const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 1200px;
  margin: 0 auto;
  flex-wrap: wrap;
  gap: 2rem;
`;

// Footer column for sections like About, Services, etc.
const FooterColumn = styled.div`
  flex: 1;
  text-align: left;

  h3 {
    font-size: 1.5rem; /* Increased font size for section headers */
    margin-bottom: 1rem;
    font-weight: bold;
  }

  a {
    color: #fff;
    text-decoration: none;
    font-size: 0.7rem; /* Adjusted font size for links */
    display: flex;
    align-items: center;
    margin-bottom: 0.8rem;

    &:hover {
      color: #ff6347; /* Hover effect for links */
    }

    & > svg {
      margin-right: 8px; /* Space between icon and text */
    }

  }
`;

// Social media icons section
const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;

  a {
    color: #fff;
    font-size: 1.5rem;
    transition: color 0.3s;

    &:hover {
      color: #ff6347; /* Hover effect for social media icons */
    }
  }
`;

// Copyright text
const CopyrightText = styled.p`
  margin-top: 2rem;
  font-size: 0.8rem; /* Reduced font size for copyright text */
  color: #ccc;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>

        {/* Column 2: Services */}
        <FooterColumn>
          <h3><FaTools /> Services</h3>
          <a href="#services"><FaTools /> Full Stack Development</a>
          <a href="#services"><FaTools /> Mobile App Development</a>
          <a href="#services"><FaTools /> Game Development</a>
          <a href="#services"><FaTools /> Web Design</a>
        </FooterColumn>

        {/* Column 3: Projects */}
        <FooterColumn>
          <h3><FaProjectDiagram /> Projects</h3>
          <a href="#projects"><FaProjectDiagram /> Recent Projects</a>
          <a href="#projects"><FaProjectDiagram /> GitHub Repositories</a>
          <a href="#projects"><FaProjectDiagram /> Open Source Contributions</a>
        </FooterColumn>

        {/* Column 4: Contact */}
        <FooterColumn>
          <h3><FaEnvelope /> Contact</h3>
          <a href="mailto:your-email@example.com"><FaEnvelope /> misheckserima2002@gmail.com</a>
          <a href="tel:+123456789"><FaPhone /> +263 773 385 732</a>
          <a href="#location"><FaMapMarkerAlt /> Location: Melfort Park, Goromonzi, Zimbabwe</a>
        </FooterColumn>

        {/* Column 5: Social Media */}
        <FooterColumn>
          <h3>Follow Us</h3>
          <SocialIcons>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
          </SocialIcons>
        </FooterColumn>
      </FooterWrapper>

      <CopyrightText>
        © {new Date().getFullYear()} Misheck Serima Portfolio. All rights reserved.
      </CopyrightText>
    </FooterContainer>
  );
};

export default Footer;
