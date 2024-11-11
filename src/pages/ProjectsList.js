import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Grid, Card, CardContent, Typography, Button, IconButton } from '@mui/material';
import { ArrowBack } from '@mui/icons-material'; // Import back icon
import Sidebar from '../components/Sidebar';
import '../components/ProjectsList.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

// Project data structured to match with project details
const projectsData = {
  "Software Development": [
    { title: "Stock Management System", description: "A full-featured Stock system that helps businesses manage their stock efficiently." },
    { title: "Task Automation Tool", description: "Automates repetitive tasks to improve productivity." },
    { title: "CRM", description: "A Customer Relationship Management system to manage interactions with customers." },
    { title: "Time Tracking Software", description: "Software designed to help users track time spent on various tasks and projects." },
    { title: "Content Management System", description: "A system for managing digital content and enabling easy updates to websites." },
  ],
  "Web Development": [
    { title: "E-commerce Website", description: "An online platform for buying and selling products." },
    { title: "Portfolio Website", description: "A personal website showcasing projects and skills." },
    { title: "Blog Platform", description: "A responsive blogging platform with user authentication." },
  ],
  "3D Modeling": [
    { title: "Architectural Visualization", description: "3D renderings of architectural designs." },
  ],
};

const ProjectsList = () => {
  const { category } = useParams();
  const navigate = useNavigate(); // Use navigate instead of useHistory
  const projects = projectsData[category] || [];

  return (
    <div className="source-code-page">
      <Sidebar />
      <Container className="main-content">
        <IconButton 
          className="back-button" 
          onClick={() => navigate(-1)} // Use navigate to go back
          aria-label="back"
        >
          <ArrowBack fontSize="large" />
        </IconButton>
        <Typography variant="h4" className="page-title">{category} Projects</Typography>
        <Grid container spacing={3}>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card className="source-card">
                <CardContent>
                  <Typography variant="h6">{project.title}</Typography>
                  <Typography variant="body2">{project.description}</Typography>
                  <Link to={`/project-details/${project.title}`}>
                    <Button variant="contained" color="primary">View Details</Button>
                  </Link>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default ProjectsList;
