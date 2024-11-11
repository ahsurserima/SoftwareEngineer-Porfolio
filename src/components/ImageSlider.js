// src/components/ImageSlider.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { FaUser, FaProjectDiagram, FaEnvelope, FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Import the arrow icons
import { SliderData } from './SliderData';

// Container for the image slider
const SliderContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  position: relative;
`;

// Slide section
const Slide = styled.div`
  display: ${({ current }) => (current ? 'block' : 'none')};
  transition: opacity 0.5s ease-in-out;
  text-align: center;  /* Center the image */
`;

// Image styling
const SlideImageContainer = styled.div`
  width: 100%;  /* Full width */
  height: 200px;  /* Set a smaller height */
  overflow: hidden;  /* Hide overflow to keep it tidy */
  display: flex;  /* Flex to center image */
  justify-content: center;  /* Center image horizontally */
  align-items: center;  /* Center image vertically */
`;

const SlideImage = styled.img`
  width: 100%;  /* Make image fill the container */
  height: 100%;  /* Ensure the height matches the card's height */
  object-fit: cover;  /* Maintain aspect ratio while covering the area */
`;

// Navigation button styling
const NavButton = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  font-size: 2rem;
  color: white; // Change this to white
  background-color: rgba(0, 0, 0, 0.5); // Semi-transparent background for better visibility
  border-radius: 50%; // Make it round
  padding: 10px; // Add padding
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5); // Add shadow
  z-index: 10; // Ensure it is above the image

  &:hover {
    background-color: rgba(0, 0, 0, 0.7); // Darken on hover
  }
`;

const PrevButton = styled(NavButton)`
  left: 10px; // Position it on the left
`;

const NextButton = styled(NavButton)`
  right: 10px; // Position it on the right
`;

// Card container styling
const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

// Individual card styling
const Card = styled.div`
  border: 1px solid #ccc; // Optional: you can remove this if you want a borderless card
  border-radius: 10px;
  padding: 20px;
  width: 30%;
  height: 150px;  /* Set a fixed height for the cards */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

// Icon styling
const Icon = styled.div`
  font-size: 24px;
  margin-bottom: 10px;
`;

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);
  const length = SliderData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <SliderContainer>
      {/* Slider Section */}
      
      {SliderData.map((slide, index) => (
        <Slide key={index} current={index === current}>
          <SlideImageContainer>
            <PrevButton onClick={prevSlide}>
              <FaChevronLeft />
            </PrevButton>
            <SlideImage src={slide.image} alt={slide.alt} />
            <NextButton onClick={nextSlide}>
              <FaChevronRight />
            </NextButton>
          </SlideImageContainer>
        </Slide>
      ))}

      {/* Cards Section */}
      <CardContainer>
        <Card>
          <Icon><FaUser /></Icon>
          <h3>About Me</h3>
          <p>I am a passionate software engineer.</p>
        </Card>
        <Card>
          <Icon><FaProjectDiagram /></Icon>
          <h3>Projects</h3>
          <p>Explore my innovative solutions.</p>
        </Card>
        <Card>
          <Icon><FaEnvelope /></Icon>
          <h3>Contact Me</h3>
          <p>Get in touch for collaborations.</p>
        </Card>
      </CardContainer>
    </SliderContainer>
  );
};

export default ImageSlider;
