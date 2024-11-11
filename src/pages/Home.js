import React from 'react';
import Lottie from 'lottie-react'; // Importing Lottie for JSON animations
import styled, { createGlobalStyle } from 'styled-components'; // Styled-components for styling
import LogoAnimation from '../components/LogoAnimation'; // Logo animation component
import Sidebar from '../components/Sidebar'; // Import the Sidebar component
import Footer from '../components/Footer';
import { SiPython, SiCplusplus, SiCsharp, SiPhp, SiJavascript, SiFrontendmentor, SiBackendless, SiUnity, SiAndroid, SiJirasoftware, SiUnrealengine } from 'react-icons/si'; // Added only available icons
import Slider from '../components/ImageSlider'; // Slider component for images
import profileImage from '../assets/profilepic.jpg'; // Profile image import
import pythonAnimation from '../assets/animations/python.json'; // Import JSON animations
import javaAnimation from '../assets/animations/java.json';
import csharpAnimation from '../assets/animations/csharp.json';
import cAnimation from '../assets/animations/c.json';
import andrewVideo from '../assets/Video/andrew.mp4';

// Global styles (apply to the whole app)
const GlobalStyle = createGlobalStyle`
  body {
    background-color: #1e1e2f; /* Dark blue background */
    color: #dcdcdc; /* Light gray text */
  }
`;

// Home page container, takes up the full height of the viewport
const HomeContainer = styled.div`
  display: flex;
  min-height: 100vh;
`;

// Wrapper for LogoAnimation with customizable position
const LogoWrapper = styled.div`
  position: absolute; /* Allows precise positioning */
  top: 75px; /* Adjust the top position */
  right: 110px; /* Adjust the right position */
  width: 150px; /* Set a width */
  height: 150px; /* Set a height */
  z-index: 10; /* Ensure it's on top of other elements if needed */

  @media (max-width: 768px) {
    /* Adjust for responsiveness */
    top: 20px;
    right: 20px;
    width: 100px;
    height: 100px;
  }
`;



// Main content area next to the sidebar
const MainContent = styled.div`
  margin-left: 250px; /* Offset by sidebar width */
  padding: 2rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #1e1e2f; /* Dark blue background */
`;

// Container for vision text and profile image
const VisionContainer = styled.div`
  display: flex; /* Align items in a row */
  align-items: flex-start; /* Align items to the start */
  justify-content: space-between; /* Space between image and right section */
  width: 100%;
  margin: 2rem 0;
`;

// Vision text section
const VisionText = styled.div`
  flex: 1; /* Allow it to take up remaining space */
  text-align: right; /* Align text to the right */
  display: flex;
  flex-direction: column; /* Stack vision text and video */
  align-items: flex-end; /* Align items to the end (right) */
`;

// Vision title styling
const VisionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 0.5rem;
  color: #dcdcdc; /* Light gray text */
`;

// Description text for the vision section
const VisionDescription = styled.p`
  font-size: 1.2rem;
  color: #aaa; /* Dimmed gray text */
`;

// Profile image next to the vision text
const ProfileImage = styled.img`
  width: 400px;
  height: 300px;
  margin-right: 20px;
  transition: transform 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.1); /* Enlarge image on hover */
  }
`;

// Add this styled component for the video container
const VideoContainer = styled.div`
  background-color: white; /* WHite background for the video card */
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin-top: 1rem; /* Space above the video */
  width: 67%; /* Full width */
  display: flex; /* Centering the video */
  justify-content: center; /* Center the video */
  margin-inline: 5rem;
`;

// Video element styling
const VideoElement = styled.video`
  width: 100%; /* Scale to fit the container */
  max-width: 600px; /* Set a max width */
  border-radius: 8px; /* Rounded corners */
  padding-right: 4rem;
`;

const ProfileName = styled.p`
font-size: 1.2rem;
text-align: center;
margin-top: 0.5rem;
color: #fff;
`;

const VideoDescription = styled.p`
font-size: 1rem;
text-align: left;
margin-top: 0.5rem;
color: blue;
margin-right: 8rem; 
`;


// Database section container
const DatabaseContainer = styled.div`
  margin: 2rem 0;
  width: 30%;
  text-align: center; /* Centering the content */
`;

// Title for the database section
const DatabaseTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #dcdcdc; /* Light gray text */
`;

// Grid layout for database cards
const DatabaseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 columns */
  gap: 20px;
  padding: 1rem;
`;

// Each database card styling
const DatabaseCard = styled.div`
  background-color: #007bff; /* Bootstrap primary blue */
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 1px;
  transition: transform 0.3s;
  color: #fff; /* White text for contrast */
  text-align: center; /* Center text within the card */

  &:hover {
    transform: translateY(-10px); /* Lift card on hover */
  }
`;

// Horizontal line for section separation
const Hr = styled.hr`
  width: 100%;
  border: 1px solid #ccc;
  margin: 2rem 0;
`;

// Skills section container
const SkillsContainer = styled.div`
  margin: 2rem 0;
  width: 100%;
  text-align: center;
`;

// Title for the skills section
const SkillsTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #dcdcdc; /* Light gray text */
`;

// Grid layout for skill cards
const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 columns */
  gap: 20px;
  padding: 1rem;
`;

// Each skill card styling
const SkillCard = styled.div`
  background-color: #444; /* Darker background */
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-10px); /* Lift card on hover */
  }
`;

// Title of each skill card
const SkillTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #dcdcdc; /* Light gray text */
  display: flex;
  align-items: center;

  & > svg {
    margin-right: 10px; /* Space between icon and text */
  }
`;

// List of programming languages with icons
const LanguageList = styled.div`
  text-align: left;
  margin: 2rem 0;
  flex: 1; /* Allow it to take up remaining space */
  display: flex; /* Use flexbox for layout */
  flex-direction: column; /* Stack language items vertically */
`;

// Each language item in the list
const LanguageItem = styled.div`
  color: #dcdcdc; /* Light gray text */
 
  display: flex;
  align-items: center;

  & > svg {
    margin-right: 8px; /* Space between icon and text */
  }
`;

// Slideshow container for JSON logos
const LanguageSlideshowContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem; /* Space between list and slideshow */
`;

// Language slider styling (for JSON animations)
const LanguageSlider = styled.div`
  width: 670px;
  height: 160px;
  overflow: hidden;
  position: relative;
  border: 2px solid #dcdcdc; /* Light gray border */
  border-radius: 10px;
  background-color: #444; /* Dark background */
`;

// Container to hold both language list and slideshow side by side
const LanguagesContainer = styled.div`
  display: flex; /* Use flexbox to position items side by side */
  align-items: flex-start; /* Align items at the start */
  margin: 2rem 0; /* Margin for the container */
`;
// Wrapper for JSON logos in the slider
const LanguageLogoWrapper = styled.div`
  display: flex; /* Set to flex to arrange items in a row */
  width: 400%; /* Adjust based on the number of logos */
  height: 100%;
  position: absolute;
  margin: 500px
  animation: slide 50s infinite ease-in-out; /* Sliding animation */
  transition: transform 0.5s ease; /* Smooth transition effect */

  @keyframes slide {
    0% { transform: translateX(0); }
    20% { transform: translateX(0); }
    25% { transform: translateX(-100%); }
    45% { transform: translateX(-100%); }
    50% { transform: translateX(-200%); }
    70% { transform: translateX(-200%); }
    75% { transform: translateX(-300%); }
    95% { transform: translateX(-300%); }
    100% { transform: translateX(0); }
`;


// Main Home component
const Home = () => {
  return (
    <>
      <GlobalStyle />
      <HomeContainer>
      <Sidebar />
      

        {/* Main content area */}
        <MainContent>
          {/* Floating logo animation on the right */}

          <LogoWrapper>
            <LogoAnimation />
          </LogoWrapper>
          

          {/* Vision and profile image section */}
          <VisionContainer>
            <div >
            <ProfileImage src={profileImage} alt="Misheck" />
            </div>
            <ProfileName>Misheck Serima</ProfileName>
            
            <VisionText>
              <VisionTitle>My Vision</VisionTitle>
              <VisionDescription>
                To create innovative solutions that enhance user experiences and drive positive change in the tech industry.
              </VisionDescription>
              
              <VideoContainer>
            <VideoElement controls>
            <source src={andrewVideo} type="video/mp4" />
            Your browser does not support the video tag.
            </VideoElement>

            <VideoDescription> {/* Add video description here */}
             This video explains my latest project and its impact.
            </VideoDescription> 

            </VideoContainer>

            </VisionText>
          </VisionContainer>

          



          <Hr />

          {/* Skills section */}
          <SkillsContainer>
            <SkillsTitle>My Skills</SkillsTitle>
            <SkillsGrid>
            <SkillCard>
                <SkillTitle><SiJirasoftware /> Software Development</SkillTitle>
              </SkillCard>
              <SkillCard>
                <SkillTitle><SiFrontendmentor /> Front & Backend Development</SkillTitle>
              </SkillCard>
              <SkillCard>
                <SkillTitle><SiBackendless /> Full Stack Development</SkillTitle>
              </SkillCard>
              <SkillCard>
                <SkillTitle><SiUnity /> Game Development</SkillTitle>
              </SkillCard>
              <SkillCard>
                <SkillTitle><SiAndroid /> Android App Development</SkillTitle>
              </SkillCard>
              <SkillCard>
                <SkillTitle><SiUnrealengine /> 3D Modeling & Virtual Reality</SkillTitle>
              </SkillCard>
            </SkillsGrid>

            <Hr />

            {/* Languages section */}
            <LanguagesContainer>
            <SkillsTitle>Languages</SkillsTitle>
            <LanguageList>
              <LanguageItem><SiPython /> Python</LanguageItem>
              <LanguageItem> <img src="../assets/java.ico" alt="Java" style={{ width: '20px', height: '20px' }} /> Java</LanguageItem>
              <LanguageItem><SiCsharp /> C#</LanguageItem>
              <LanguageItem><SiCplusplus /> C++</LanguageItem>
              <LanguageItem><SiPhp /> PHP</LanguageItem>
              <LanguageItem><SiJavascript /> JavaScript</LanguageItem>
            </LanguageList>

            {/* Slideshow for JSON logos */}
            <LanguageSlideshowContainer>
  <LanguageSlider>
    <LanguageLogoWrapper>
      <Lottie animationData={pythonAnimation} />
      <Lottie animationData={javaAnimation} />
      <Lottie animationData={csharpAnimation} />
      <Lottie animationData={cAnimation} />
    </LanguageLogoWrapper>
  </LanguageSlider>
</LanguageSlideshowContainer>
</LanguagesContainer>
          </SkillsContainer>

     <Hr />

{/* Database section */}
<DatabaseContainer>
  <DatabaseTitle>DATABASES</DatabaseTitle>
  <DatabaseGrid>
    <DatabaseCard>
      <DatabaseTitle>MySQL</DatabaseTitle>
    </DatabaseCard>
    <DatabaseCard>
      <DatabaseTitle>SQLite3</DatabaseTitle>
    </DatabaseCard>
    <DatabaseCard>
      <DatabaseTitle>MongoDB</DatabaseTitle>
    </DatabaseCard>
  </DatabaseGrid>
</DatabaseContainer>


     
     <Hr />



          {/* Image slider for previous projects */}
          <SkillTitle>Sample Projects images</SkillTitle>
          <Slider />
          <Hr />
          <Hr />
          <Hr />
        </MainContent>
        
      </HomeContainer>
      <Footer />
    </>
  );
};

export default Home;
