// components/RingEffect.js
import React, { useEffect } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';

const Ring = styled.div`
  width: 100px;
  height: 100px;
  border: 5px solid ${({ theme }) => theme.accent};
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const RingEffect = () => {
  useEffect(() => {
    gsap.to('.ring', { rotation: 360, duration: 2, repeat: -1, ease: 'linear' });
  }, []);

  return <Ring className="ring" />;
};

export default RingEffect;
