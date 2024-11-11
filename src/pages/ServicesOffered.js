import React from "react";
import { FaCode, FaMobileAlt, FaDatabase, FaGamepad, FaVrCardboard, FaCube, FaShieldAlt } from "react-icons/fa";
import { MdWeb, MdDeveloperMode } from "react-icons/md";
import { BsTools, BsPencilSquare } from "react-icons/bs";
import "../components/ServicesOffered.css";
import Sidebar from "../components/Sidebar";


const services = [
  {
    title: "Web Development",
    description: "Crafting responsive, dynamic, and visually appealing websites with the latest technologies. We focus on optimizing user experiences and creating seamless digital interactions.",
    icon: <MdWeb />
  },
  {
    title: "Mobile App Development",
    description: "Building engaging, high-performance apps for Android and iOS with React Native, Flutter, and native languages, tailored for a superb user experience.",
    icon: <FaMobileAlt />
  },
  {
    title: "Full Stack Development",
    description: "Offering complete, end-to-end solutions covering both frontend and backend development with robust database management.",
    icon: <MdDeveloperMode />
  },
  {
    title: "Software Consulting",
    description: "Guiding businesses through software solutions with expert advice on best practices, technology stacks, and optimal workflows.",
    icon: <BsTools />
  },
  {
    title: "Database Management",
    description: "Ensuring data integrity and security through efficient database setups and management for SQL, NoSQL, and cloud databases.",
    icon: <FaDatabase />
  },
  {
    title: "3D Modeling",
    description: "Creating high-quality 3D models for applications in gaming, VR, and more, using tools like Blender and Maya to bring visual concepts to life.",
    icon: <FaCube />
  },
  {
    title: "API Development & Integration",
    description: "Building and integrating robust APIs to ensure smooth data flow between systems, with expertise in REST and GraphQL.",
    icon: <FaCode />
  },
  {
    title: "Game Development",
    description: "Designing and developing engaging games across platforms, using engines like Unity and Unreal to bring immersive experiences to players.",
    icon: <FaGamepad />
  },
  {
    title: "Virtual Reality",
    description: "Developing interactive and immersive VR applications for a variety of industries, creating experiences that blend the real and virtual worlds.",
    icon: <FaVrCardboard />
  },
  {
    title: "Cybersecurity Services",
    description: "Securing digital assets through vulnerability assessment, encryption, and compliance with industry best practices.",
    icon: <FaShieldAlt />
  },
  {
    title: "Maintenance and Support",
    description: "Providing ongoing support, updates, and feature enhancements to keep applications running efficiently and securely.",
    icon: <BsTools />
  },
  {
    title: "Custom Software Development",
    description: "Building tailored software solutions to fit specific business needs, from initial concept through deployment.",
    icon: <BsPencilSquare />
  }
];

const ServicesOffered = () => (
  <div className="services-container">
    <div className="intro">
      <h1>My Software Engineering Services</h1>
      <p>My expertise in software engineering is dedicated to delivering innovative, scalable, and efficient solutions to meet each client’s unique needs. Here’s what I offer:</p>
    </div>
    <div className="services-list">
      {services.map((service, index) => (
        <div key={index} className="service-card">
          <div className="icon">{service.icon}</div>
          <h2>{service.title}</h2>
          <p>{service.description}</p>
        </div>
      ))}
    </div>
    <Sidebar />
   
  </div>
  
);

export default ServicesOffered;
