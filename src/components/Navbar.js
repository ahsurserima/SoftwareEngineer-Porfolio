// components/Navbar.js
import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  background: grey;
  padding: 1rem;
  height: 50px;
  opacity: 70%;
`;

const NavLink = styled(ScrollLink)`
  color: blue;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.accent};
  }
`;

const Navbar = () => (
  <Nav>
    <RouterLink to="/"></RouterLink>
    <NavLink to="projects" smooth={true}></NavLink>
    <RouterLink to="/about"></RouterLink>
    <RouterLink to="/contact"></RouterLink>
  </Nav>
);

export default Navbar;
