import React from 'react';
import { Container, Grid, Card, CardContent, Typography, Button } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import '../components/SourceCode.css';

const repositories = [
  { title: "Stock Management System", description: "A complete system for managing stock, sales, and inventory in a business environment.", link: "https://github.com/username/stock-management-system" },
  { title: "Portfolio Website", description: "My personal portfolio showcasing projects, skills, and achievements.", link: "https://github.com/username/portfolio-website" },
  { title: "Mini Jobs Platform", description: "A scalable e-commerce platform with payment processing and user accounts.", link: "https://github.com/username/ecommerce-platform" },
];

const SourceCode = () => {
  return (
    <div>
    <div className="source-code-page">
      <Sidebar />
      <Container className="main-content">
        <Typography variant="h4" gutterBottom className="page-title">
          <CodeIcon style={{ marginRight: '8px', color: '#1e88e5' }} />
          Source Code
          
        </Typography>
        <hr/>
          <hr/>
        <hr/>
        <Grid container spacing={3}>
          {repositories.map((repo, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card className="source-card">
                <CardContent>
                  <Typography variant="h6" className="source-title">
                    {repo.title}
                  </Typography>
                  <Typography variant="body2" className="source-description">
                    {repo.description}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    href={repo.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Code
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      
    </div>
    <Footer />
    </div>
  );
};

export default SourceCode;
