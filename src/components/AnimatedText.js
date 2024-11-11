// components/AnimatedText.js
import { motion } from 'framer-motion';
import styled from 'styled-components';

const LoaderText = styled(motion.h1)`
  font-size: 2rem;
  color: ${({ theme }) => theme.accent};
`;

const AnimatedText = () => (
  <LoaderText
    animate={{ rotate: [0, 360] }}
    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
  >
    Loading...
  </LoaderText>
);

export default AnimatedText;
