// src/components/ContactInfo.js
import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import '../components/ContactInfo.css';
import Sidebar from '../components/Sidebar';

const ContactInfo = () => {
  return (
    <div>
    <div className="contact-info">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact Me
      </motion.h2>
      
      <div className="contact-details">
        <motion.div className="contact-item"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <FaEnvelope className="contact-icon" />
          <span>Email: misheckserima2002@gmail.com</span>
        </motion.div>

        <motion.div className="contact-item"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <FaPhone className="contact-icon" />
          <span>Phone: +263 77 338 5732</span>
        </motion.div>

        <motion.div className="contact-item"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <FaMapMarkerAlt className="contact-icon" />
          <span>Location: Melfort Park , Zimbabwe</span>
        </motion.div>
      </div>

      <div className="social-media">
        <motion.a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.3 }}
        >
          <FaLinkedin />
        </motion.a>
        <motion.a href="https://github.com" target="_blank" rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.3 }}
        >
          <FaGithub />
        </motion.a>
        <motion.a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.3 }}
        >
          <FaTwitter />
        </motion.a>
      </div>
    </div>
    <Sidebar />
    </div>
  );
};

export default ContactInfo;
