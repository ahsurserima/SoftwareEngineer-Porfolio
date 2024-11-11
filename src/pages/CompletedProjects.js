import React from 'react';
import { Container, Grid, Card, CardContent, Typography, Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import '../components/CompletedProjects.css';

const categories = [
  {
    title: "Software Development",
    description: "A variety of software solutions developed to enhance workflows and support business operations.",
  },
  {
    title: "Web Development",
    description: "Responsive web applications focused on user engagement and performance optimization.",
  },
  {
    title: "3D Modeling",
    description: "3D projects focused on asset creation, realistic rendering, and animation.",
  },
  {
    title: "Game Development",
    description: "Interactive and immersive games designed for various platforms.",
  },
  {
    title: "Mobile App Development",
    description: "Creating user-friendly mobile applications for both iOS and Android platforms.",
  },
  {
    title: "Virtual Reality",
    description: "Innovative VR experiences that transport users to immersive digital environments.",
  },
];


const CompletedProjects = () => {
  return (
    <div className="source-code-page">
      <Sidebar />
      <Container className="main-content">
        <Typography variant="h4" className="page-title">Completed Projects</Typography>
        <Typography variant="subtitle1" className="page-description">
          Discover completed projects by category. Click on any category to explore projects in detail.
        </Typography>
        <Divider className="divider" />
        
        <Grid container spacing={3}>
          {categories.map((category, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Link to={`/projects-list/${category.title}`} style={{ textDecoration: 'none' }}>
                <Card className="source-card">
                  <CardContent>
                    <Typography variant="h6" className="category-title">{category.title}</Typography>
                    <Divider className="divider" />
                    <Typography variant="body2" className="category-description">{category.description}</Typography>
                    <Typography variant="caption" className="click-message">
                      Click to view all projects in {category.title}.
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default CompletedProjects;
