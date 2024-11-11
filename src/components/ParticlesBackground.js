// components/ParticlesBackground.js
import React from 'react';
import Particles from 'react-tsparticles';

const ParticlesBackground = () => (
  <Particles
    options={{
      background: { color: "#121212" },
      particles: {
        color: { value: "#ffffff" },
        move: { speed: 2 },
        number: { value: 100 },
      },
    }}
  />
);

export default ParticlesBackground;
