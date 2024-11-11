// components/ProjectSlider.js
import React from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';

const SlideContainer = styled.div`
  width: 100%;
  overflow: hidden;
`;

const Slide = styled(animated.div)`
  display: flex;
`;

const ProjectSlider = () => {
  const slideProps = useSpring({ transform: 'translateX(0)', from: { transform: 'translateX(-100%)' }, loop: true });

  return (
    <SlideContainer>
      <Slide style={slideProps}>
        <img src="/assets/project1.png" alt="Project 1" />
        <img src="/assets/project2.png" alt="Project 2" />
        {/* Add more images */}
      </Slide>
    </SlideContainer>
  );
};

export default ProjectSlider;
