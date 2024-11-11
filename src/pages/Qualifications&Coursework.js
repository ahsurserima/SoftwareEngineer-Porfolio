// QualificationsAndCoursework.js
import React, { useState } from 'react';
import Sidebar from "../components/Sidebar";
import { Container, Grid, Card, CardContent, Typography, IconButton, Collapse, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,  Divider, List, ListItem, ListItemText } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SchoolIcon from '@mui/icons-material/School';
import TranscriptImage from '../assets/images/transcript.jpg'; // Adjust the path to your image
import "../components/Qualifications&Coursework.css";



const qualifications = [
  { 
    title: "HBSc. in Software Engineering", 
    institution: "Bindura University of Science Education", 
    duration: "2022-2026", 
    highlights: "Focus on Software, Website and Mobile App development", 
    description: "Specialized in Software, Website, Mobile App development, deep learning, and software project management."
  },
];

// Sample course data for both years with specific courses and scores
const yearOneCourses = [
  { name: "Introduction to Programming", score: 85 },
  { name: "Mathematics for Computer Science", score: 78 },
  { name: "Web Development Basics", score: 90 },
  { name: "Database Management Systems", score: 88 },
  { name: "Software Engineering Principles", score: 82 },
  { name: "Computer Networks", score: 76 },
  { name: "Operating Systems", score: 80 },
  { name: "Discrete Mathematics", score: 89 },
  { name: "Human-Computer Interaction", score: 92 },
  { name: "Mobile App Development", score: 87 },
  { name: "Professional Ethics in Computing", score: 95 },
  { name: "Data Science Fundamentals", score: 79 },
  { name: "Cloud Computing", score: 84 },
  { name: "Game Development", score: 86 },
  { name: "Project Management", score: 90 },
];

const yearTwoCourses = [
  { name: "Advanced Programming", score: 88 },
  { name: "Software Testing", score: 85 },
  { name: "Machine Learning", score: 90 },
  { name: "Web Application Security", score: 83 },
  { name: "Mobile Application Development", score: 91 },
  { name: "Systems Analysis and Design", score: 80 },
  { name: "Artificial Intelligence", score: 89 },
  { name: "Data Analytics", score: 82 },
  { name: "Blockchain Technology", score: 78 },
  { name: "Agile Methodologies", score: 84 },
  { name: "IT Project Management", score: 87 },
  { name: "User Experience Design", score: 92 },
  { name: "Capstone Project", score: 95 },
];

// Function to convert percentage to GPA
const convertToGPA = (percentage) => (percentage / 100) * 4;

// Function to calculate average percentage
const calculateAveragePercentage = (courses) => {
  const totalScore = courses.reduce((sum, course) => sum + course.score, 0);
  return (totalScore / courses.length).toFixed(2);
};

// Function to calculate weighted results
const calculateWeightedResults = (averagePercentage, weight) => {
  const weightedValue = (averagePercentage / 100) * weight; // Updated calculation
  return weightedValue.toFixed(2);
};

const QualificationsAndCoursework = () => {
  const [expanded, setExpanded] = useState(null);

  const handleExpandClick = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  // Calculate average percentages for both years
  const averageYearOne = calculateAveragePercentage(yearOneCourses);
  const averageYearTwo = calculateAveragePercentage(yearTwoCourses);

  // Calculate GPA and weights
  const gpaYearOne = convertToGPA(averageYearOne).toFixed(2);
  const gpaYearTwo = convertToGPA(averageYearTwo).toFixed(2);

  const weightYearOne = calculateWeightedResults(averageYearOne, 10);
  const weightYearTwo = calculateWeightedResults(averageYearTwo, 30);

  return (
    <div className="qualifications-page">
      <Sidebar />
      <Container 
        className="content-container" 
        style={{ marginInlineStart: '300px', padding: '40px 20px', maxWidth: '1300px' }}
      >
{/* Grading System Explanation */}
<Box sx={{ mb: 2, p: 1, border: '1px solid #ccc', borderRadius: '8px', backgroundColor: 'transparent' }}>
  <Typography variant="h5" gutterBottom sx={{ color: 'green', fontWeight: 'bold', mb: 1 }}>
    Grading System Used
  </Typography>
  <Divider sx={{ mb: 1, backgroundColor: 'green' }} />
  <Typography sx={{ color: 'green', mb: 1 }}>
    The grading system is based on a percentage scale that assesses students' performance in their coursework. 
    Each course is graded out of 100%, with the following classifications based on the percentage score:
  </Typography>
  
  <List sx={{ padding: 0 }}>
    <ListItem sx={{ padding: '2px 0' }}>
      <ListItemText primary={<Typography sx={{ fontWeight: 'bold', color: '#4caf50' }}>First Class</Typography>} secondary="75% and above (GPA: 4.0)" />
    </ListItem>
    <Divider sx={{ my: 0.5 }} />
    <ListItem sx={{ padding: '2px 0' }}>
      <ListItemText primary={<Typography sx={{ fontWeight: 'bold', color: '#4caf50' }}>Upper Second Class</Typography>} secondary="65% - 74% (GPA: 3.7)" />
    </ListItem>
    <Divider sx={{ my: 0.5 }} />
    <ListItem sx={{ padding: '2px 0' }}>
      <ListItemText primary={<Typography sx={{ fontWeight: 'bold', color: '#ff9800' }}>Lower Second Class</Typography>} secondary="60% - 64% (GPA: 3.3)" />
    </ListItem>
    <Divider sx={{ my: 0.5 }} />
    <ListItem sx={{ padding: '2px 0' }}>
      <ListItemText primary={<Typography sx={{ fontWeight: 'bold', color: '#ff9800' }}>Pass</Typography>} secondary="50% - 59% (GPA: 2.0)" />
    </ListItem>
    <Divider sx={{ my: 0.5 }} />
    <ListItem sx={{ padding: '2px 0' }}>
      <ListItemText primary={<Typography sx={{ fontWeight: 'bold', color: '#f44336' }}>Fail</Typography>} secondary="Below 50% (GPA: 0.0)" />
    </ListItem>
  </List>

  <Divider sx={{ my: 1, backgroundColor: 'green' }} />
  
  <Typography sx={{ color: 'green' }}>
    The weight of Year 1 is 10% of the final score, while Year 2 contributes 30%. 
    This indicates that the overall performance is weighted more heavily towards the second year, reflecting the increasing complexity and depth of the courses taken.
    The overall weighted average is calculated by taking the average percentage of each year, which is then used to determine the final GPA.
  </Typography>
</Box>


        {/* Qualifications Section */}
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <SchoolIcon sx={{ color: '#b0c4de', mr: 1 }} />
          <Typography variant="h4">Qualifications</Typography>
        </Box>
        
        <Grid container spacing={3}>
          {qualifications.map((qual, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card className="qualification-card">
                <CardContent>
                  <Typography variant="h6" className="qualification-title">{qual.title}</Typography>
                  <Typography variant="subtitle2" className="institution-name">{qual.institution}</Typography>
                  <Typography variant="body2" className="qualification-duration">{qual.duration}</Typography>
                  
                  <IconButton onClick={() => handleExpandClick(index)} aria-expanded={expanded === index} aria-label="show more">
                    <ExpandMoreIcon />
                  </IconButton>
                  
                  <Collapse in={expanded === index} timeout="auto" unmountOnExit>
                    <Typography variant="body2" color="textSecondary" className="qualification-highlights">
                      {qual.highlights}
                    </Typography>
                    <Typography variant="body2" className="qualification-description">
                      {qual.description}
                    </Typography>
                  </Collapse>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Transcript Image Section */}
        <Box sx={{ mb: 4, textAlign: 'center' }}>
          <Typography variant="h6" sx={{ mb: 1 }}>Transcript</Typography>
          <img src={TranscriptImage} alt="Transcript" style={{ width: '80%', maxWidth: '600px', borderRadius: '8px' }} />
          <Typography variant="body2" sx={{ mt: 1 }}>75% and above indicates Upper First Class.</Typography>
        </Box>

        {/* Results Table Section */}
        <Box sx={{ mt: 5 }}>
          <Typography variant="h5" gutterBottom>Year One Course Results</Typography>
          <TableContainer component={Paper}>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Course</TableCell>
                  <TableCell align="right">Score (%)</TableCell>
                  <TableCell align="right">GPA</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {yearOneCourses.map((course, index) => (
                  <TableRow key={index}>
                    <TableCell padding="normal">{course.name}</TableCell>
                    <TableCell align="right" padding="normal">{course.score}%</TableCell>
                    <TableCell align="right" padding="normal">{convertToGPA(course.score).toFixed(2)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Typography variant="h6" sx={{ mt: 2 }}>
            Average results are: 
            <br />
            Percentage: {averageYearOne}%, GPA: {gpaYearOne}, Weight: {weightYearOne}/10
          </Typography>
        </Box>

        <Box sx={{ mt: 5 }}>
          <Typography variant="h5" gutterBottom>Year Two Course Results</Typography>
          <TableContainer component={Paper}>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Course</TableCell>
                  <TableCell align="right">Score (%)</TableCell>
                  <TableCell align="right">GPA</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {yearTwoCourses.map((course, index) => (
                  <TableRow key={index}>
                    <TableCell padding="normal">{course.name}</TableCell>
                    <TableCell align="right" padding="normal">{course.score}%</TableCell>
                    <TableCell align="right" padding="normal">{convertToGPA(course.score).toFixed(2)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Typography variant="h6" sx={{ mt: 2 }}>
            Average results are: 
            <br />
            Percentage: {averageYearTwo}%, GPA: {gpaYearTwo}, Weight: {weightYearTwo}/30
          </Typography>
        </Box>
      </Container>
    </div>
  );
};

export default QualificationsAndCoursework;
