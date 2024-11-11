import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Grid, Button, AppBar, Tabs, Tab, Box } from '@mui/material';
import { FaCalendarAlt, FaCogs, FaBullseye, FaDraftingCompass, FaLaptopCode, FaWrench, FaCheckCircle, FaVideo, FaTools, FaMoneyBillWave} from 'react-icons/fa';
import '../components/ProjectDetails.css';

const projectDetailsData = {
    "Stock Management System": {
      title: "Stock Management System",
      description: "A full-featured Stock system that helps businesses manage their stock efficiently.",
      timeline: "Completed in 3 months",
      budget: "$5000",
      budgetBreakdown: {
        "Development Costs": "$3000",
        "Testing Costs": "$1000",
        "Deployment Costs": "$1000"
      },
      features: [
        "Real-time stock tracking",
        "User-friendly interface",
        "Automated reporting",
        "Multi-user access"
      ],
      technologies: [
        "React", "Node.js", "MongoDB", "Material-UI"
      ],
      limitations: [
        "Slow internet speeds affected data syncing.",
        "Intermittent power outages during development."
      ],
      images: ["image1.jpg", "image2.jpg"], // Add your image paths
      video: "video_link.mp4" // Link to your video
    },
    "Task Automation Tool": {
      title: "Task Automation Tool",
      description: "Automates repetitive tasks to improve productivity.",
      timeline: "Completed in 2 months",
      budget: "$3000",
      budgetBreakdown: {
        "Development Costs": "$1500",
        "Testing Costs": "$800",
        "Deployment Costs": "$700"
      },
      features: [
        "Customizable workflows",
        "Integration with popular apps",
        "Email notifications",
        "Analytics dashboard"
      ],
      technologies: [
        "Python", "Flask", "PostgreSQL"
      ],
      limitations: [
        "Limited testing resources due to budget constraints.",
        "Internet connection stability affected integration testing."
      ],
      images: ["image3.jpg", "image4.jpg"],
      video: "video_link.mp4"
    },
    "CRM": {
      title: "CRM",
      description: "A Customer Relationship Management system to manage interactions with customers.",
      timeline: "Completed in 4 months",
      budget: "$6000",
      budgetBreakdown: {
        "Development Costs": "$3500",
        "Testing Costs": "$1500",
        "Deployment Costs": "$1000"
      },
      features: [
        "Contact management",
        "Sales tracking",
        "Customer segmentation",
        "Automated follow-ups"
      ],
      technologies: [
        "JavaScript", "Node.js", "MySQL", "Express"
      ],
      limitations: [
        "Delayed feedback from users during testing phase.",
        "Some features required additional iterations due to changing requirements."
      ],
      images: ["image5.jpg", "image6.jpg"],
      video: "video_link.mp4"
    },
    "Time Tracking Software": {
      title: "Time Tracking Software",
      description: "Software designed to help users track time spent on various tasks and projects.",
      timeline: "Completed in 1.5 months",
      budget: "$2000",
      budgetBreakdown: {
        "Development Costs": "$1000",
        "Testing Costs": "$600",
        "Deployment Costs": "$400"
      },
      features: [
        "Task categorization",
        "Reporting tools",
        "User analytics",
        "Integration with calendars"
      ],
      technologies: [
        "React Native", "Firebase"
      ],
      limitations: [
        "Limited initial user base for beta testing.",
        "Data backup issues due to internet fluctuations."
      ],
      images: ["image7.jpg", "image8.jpg"],
      video: "video_link.mp4"
    },
    "Content Management System": {
      title: "Content Management System",
      description: "A system for managing digital content and enabling easy updates to websites.",
      timeline: "Completed in 3 months",
      budget: "$4500",
      budgetBreakdown: {
        "Development Costs": "$2500",
        "Testing Costs": "$1000",
        "Deployment Costs": "$1000"
      },
      features: [
        "Drag-and-drop content editor",
        "User role management",
        "SEO optimization tools",
        "Multi-language support"
      ],
      technologies: [
        "PHP", "Laravel", "MySQL", "Bootstrap"
      ],
      limitations: [
        "Initial setup was complicated due to server configurations.",
        "User feedback was slow to gather due to diverse client needs."
      ],
      images: ["image9.jpg", "image10.jpg"],
      video: "video_link.mp4"
    },
    "E-commerce Website": {
      title: "E-commerce Website",
      description: "An online platform for buying and selling products.",
      timeline: "Completed in 5 months",
      budget: "$8000",
      budgetBreakdown: {
        "Development Costs": "$5000",
        "Testing Costs": "$2000",
        "Deployment Costs": "$1000"
      },
      features: [
        "Product catalog",
        "Secure payment processing",
        "User account management",
        "Order tracking"
      ],
      technologies: [
        "React", "Node.js", "Stripe API", "MongoDB"
      ],
      limitations: [
        "Integration issues with payment gateways during testing.",
        "High traffic required additional server resources post-launch."
      ],
      images: ["image11.jpg", "image12.jpg"],
      video: "video_link.mp4"
    },
    "Portfolio Website": {
      title: "Portfolio Website",
      description: "A personal website showcasing projects and skills.",
      timeline: "Completed in 1 month",
      budget: "$1500",
      budgetBreakdown: {
        "Development Costs": "$800",
        "Testing Costs": "$300",
        "Deployment Costs": "$400"
      },
      features: [
        "Project showcase",
        "Contact form",
        "Responsive design",
        "SEO optimized"
      ],
      technologies: [
        "HTML", "CSS", "JavaScript", "React"
      ],
      limitations: [
        "Limited audience during initial launch.",
        "Need for regular updates to content and projects."
      ],
      images: ["image13.jpg", "image14.jpg"],
      video: "video_link.mp4"
    },
    "Blog Platform": {
      title: "Blog Platform",
      description: "A responsive blogging platform with user authentication.",
      timeline: "Completed in 2 months",
      budget: "$2500",
      budgetBreakdown: {
        "Development Costs": "$1300",
        "Testing Costs": "$700",
        "Deployment Costs": "$500"
      },
      features: [
        "User registration and login",
        "Post management",
        "Comment system",
        "Tagging and categorization"
      ],
      technologies: [
        "Node.js", "Express", "MongoDB"
      ],
      limitations: [
        "Initial bugs found during user testing.",
        "Hosting costs were higher than estimated."
      ],
      images: ["image15.jpg", "image16.jpg"],
      video: "video_link.mp4"
    },
    "Architectural Visualization": {
      title: "Architectural Visualization",
      description: "3D renderings of architectural designs.",
      timeline: "Completed in 3 months",
      budget: "$7000",
      budgetBreakdown: {
        "Development Costs": "$4000",
        "Rendering Costs": "$2000",
        "Presentation Costs": "$1000"
      },
      features: [
        "High-quality 3D models",
        "Interactive walkthroughs",
        "Realistic lighting effects",
        "Customizable design options"
      ],
      technologies: [
        "SketchUp", "3ds Max", "V-Ray"
      ],
      limitations: [
        "Rendering time was significant due to complexity.",
        "Client revisions required additional modeling time."
      ],
      images: ["image17.jpg", "image18.jpg"],
      video: "video_link.mp4"
    },
  };  


const ProjectDetails = () => {
    const { projectTitle } = useParams();
    const project = projectDetailsData[projectTitle] || {};
    const [currentImage, setCurrentImage] = useState(0);
    const [value, setValue] = useState(0); // State for tab value

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevIndex) => (prevIndex + 1) % project.images.length);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval); // Cleanup interval on unmount
    }, [project.images.length]);

    return (
        <div className="project-details">
            <Container className="main-content">
                <Typography variant="h4" className="page-title">{project.title}</Typography>
                <hr />
                <hr />
                <Typography variant="subtitle1" className="project-description">{project.description}</Typography>
                <hr />

                <AppBar position="static">
                    <Tabs value={value} onChange={handleChange} sx={{ backgroundColor: '#f5f5f5' }}>
                        <Tab label="Dashboard" sx={{ color: value === 0 ? '#1976d2' : '#000' }} />
                        <Tab label="Pictures"  sx={{ color: value === 2 ? '#1976d2' : '#000' }} />
                        <Tab label="Budget" sx={{ color: value === 1 ? '#1976d2' : '#000' }} />
                        <Tab label="Period"  sx={{ color: value === 3 ? '#1976d2' : '#000' }} />
                        <Tab label="Method" sx={{ color: value === 2 ? '#1976d2' : '#000' }} />
                        <Tab label="Technologies Used" sx={{ color: value === 2 ? '#1976d2' : '#000' }}  />
                        <Tab label="Video" sx={{ color: value === 2 ? '#1976d2' : '#000' }}  />
                    </Tabs>
                </AppBar>
                <hr />

                <Box sx={{ p: 3 }}>
                    {value === 0 && (
                        <Box>
                            <Typography variant="h6">Project Timeline: {project.timeline}</Typography>
                            <Typography variant="h6">Budget used: {project.budget}</Typography>
                            <Typography variant="h6">Technologies Used: {project.technologies}</Typography>
                        </Box>
                    )}
                    {value === 1 && (
                        <Grid container spacing={3} className="media-section">
                            <Grid item xs={12}>
                                <Typography variant="h5">Images</Typography>
                                <div className="image-slider">
                                    {project.images.map((image, index) => (
                                        <img 
                                            key={index} 
                                            src={image} 
                                            alt={project.title} 
                                            className={`slider-image ${index === currentImage ? 'active' : ''}`} 
                                        />
                                    ))}
                                </div>
                            </Grid>
                        </Grid>
                    )}
                    {value === 2 && (
    <Box style={{ padding: '20px', backgroundColor: '#e8f0fe', borderRadius: '8px', fontFamily: 'Arial, sans-serif' }}>
        <Typography variant="h6" style={{ color: '#007bff', marginBottom: '10px', fontWeight: 'bold' }}>
            <FaMoneyBillWave style={{ marginRight: '8px' }} /> Budget: {project.budget}
        </Typography>
        <Typography variant="body1" style={{ color: '#555555', marginBottom: '15px' }}>
            The total budget of <strong style={{ color: '#007bff' }}>{project.budget}</strong> encompasses all expenses associated with the project, ensuring a successful delivery.
        </Typography>
        <ul style={{ listStyleType: 'none', padding: 0, margin: 0, color: '#555555' }}>
            <li style={{ marginBottom: '10px' }}>
                <strong style={{ color: '#28a745' }}>Personnel Costs:</strong> Salaries for the development team, project managers, and support staff.
            </li>
            <li style={{ marginBottom: '10px' }}>
                <strong style={{ color: '#ffc107' }}>Tools and Technologies:</strong> Expenses for software licenses, hosting services, and development tools.
            </li>
            <li style={{ marginBottom: '10px' }}>
                <strong style={{ color: '#dc3545' }}>Quality Assurance:</strong> Budget allocated for testing and quality assurance processes.
            </li>
            <li style={{ marginBottom: '10px' }}>
                <strong style={{ color: '#007bff' }}>Marketing Costs:</strong> Funds set aside for marketing and promotion after project completion.
            </li>
        </ul>
    </Box>
)}
{value === 3 && (
    <Box style={{ padding: '20px', backgroundColor: '#f0f8ff', borderRadius: '8px', fontFamily: 'Arial, sans-serif', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
    <Typography variant="h6" style={{ color: '#007bff', marginBottom: '15px', fontWeight: 'bold' }}>
        <FaCalendarAlt style={{ marginRight: '8px' }} /> Period: {project.timeline}
    </Typography>
    
    <Typography variant="body1" style={{ color: '#333333', marginBottom: '20px' }}>
        This project spanned a total of <strong style={{ color: '#007bff' }}>{project.timeline} months</strong>, organized into several key phases, each essential to achieving our objectives. Here’s a breakdown of each stage, along with challenges encountered:
    </Typography>
    
    {/* Styled List */}
    <ul style={{ listStyleType: 'none', paddingLeft: '0', color: '#555555' }}>
        <li style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
            <FaCalendarAlt style={{ color: '#007bff', marginRight: '10px' }} />
            <div>
                <Typography variant="body1" style={{ color: '#007bff', fontWeight: 'bold' }}>Phase 1: Planning and Requirements Gathering</Typography>
                <Typography variant="body2" style={{ color: '#555555' }}>
                    Defined project goals and gathered requirements from stakeholders. Outlined initial project timeline.
                </Typography>
            </div>
        </li>
        
        <li style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
            <FaLaptopCode style={{ color: '#28a745', marginRight: '10px' }} />
            <div>
                <Typography variant="body1" style={{ color: '#28a745', fontWeight: 'bold' }}>Phase 2: Design and Prototyping</Typography>
                <Typography variant="body2" style={{ color: '#555555' }}>
                    Created wireframes and prototypes to visualize and refine design elements.
                </Typography>
            </div>
        </li>

        <li style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
            <FaCogs style={{ color: '#ffc107', marginRight: '10px' }} />
            <div>
                <Typography variant="body1" style={{ color: '#ffc107', fontWeight: 'bold' }}>Phase 3: Development</Typography>
                <Typography variant="body2" style={{ color: '#555555' }}>
                    Developed core functionality and implemented backend logic. Integrated UI components.
                </Typography>
            </div>
        </li>

        <li style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
            <FaTools style={{ color: '#dc3545', marginRight: '10px' }} />
            <div>
                <Typography variant="body1" style={{ color: '#dc3545', fontWeight: 'bold' }}>Phase 4: Testing and Quality Assurance</Typography>
                <Typography variant="body2" style={{ color: '#555555' }}>
                    Conducted functionality tests, fixed bugs, and optimized performance across platforms.
                </Typography>
            </div>
        </li>

        <li style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
            <FaCalendarAlt style={{ color: '#007bff', marginRight: '10px' }} />
            <div>
                <Typography variant="body1" style={{ color: '#007bff', fontWeight: 'bold' }}>Phase 5: Deployment and Launch</Typography>
                <Typography variant="body2" style={{ color: '#555555' }}>
                    Released the project, monitored initial feedback, and ensured stability post-launch.
                </Typography>
            </div>
        </li>
    </ul>

    {/* Limitations Section */}
    <Typography variant="h6" style={{ color: '#ff6347', marginTop: '20px', fontWeight: 'bold' }}>
        Project Limitations
    </Typography>
    <Typography variant="body1" style={{ color: '#555555', marginBottom: '15px' }}>
        During the project, certain challenges impacted timelines and productivity:
    </Typography>

    <ul style={{ listStyleType: 'circle', paddingLeft: '20px', color: '#555555' }}>
        <li style={{ marginBottom: '10px' }}>
            <strong style={{ color: '#ff6347' }}>Network Stability:</strong> Periodic network outages caused delays in communication and data uploads.
        </li>
        <li style={{ marginBottom: '10px' }}>
            <strong style={{ color: '#ff6347' }}>Power Outages:</strong> Frequent electricity interruptions affected development schedules and testing environments.
        </li>
        <li style={{ marginBottom: '10px' }}>
            <strong style={{ color: '#ff6347' }}>Resource Constraints:</strong> Limited access to certain tools and software licenses prolonged specific development tasks.
        </li>
    </ul>
</Box>

)}
{value === 4 && (
    <Box style={{ padding: '20px', fontFamily: 'Arial, sans-serif'}}>
    <Typography variant="h6" style={{ color: '#007bff', marginBottom: '15px', fontWeight: 'bold' }}>
        <FaCogs style={{ marginRight: '8px' }} /> Method: Agile Development
    </Typography>
    
    <Typography variant="body1" style={{ color: '#333333', marginBottom: '20px' }}>
        We adopted the <strong style={{ color: '#007bff' }}>Agile Development</strong> methodology, promoting iterative progress through sprints. This approach allowed us to adjust and respond to feedback efficiently, making continuous improvements throughout the project. Below is an outline of the key stages within our Agile workflow:
    </Typography>
    
    {/* Styled List of Agile Stages */}
    <ul style={{ listStyleType: 'none', paddingLeft: '0', color: '#555555' }}>
        <li style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
            <FaBullseye style={{ color: '#17a2b8', marginRight: '10px' }} />
            <div>
                <Typography variant="body1" style={{ color: '#17a2b8', fontWeight: 'bold' }}>1. Planning and Requirements</Typography>
                <Typography variant="body2" style={{ color: '#555555' }}>
                    Collaborated with stakeholders to outline goals, priorities, and requirements. Established the project roadmap and defined sprint objectives.
                </Typography>
            </div>
        </li>
        
        <li style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
            <FaDraftingCompass style={{ color: '#ffc107', marginRight: '10px' }} />
            <div>
                <Typography variant="body1" style={{ color: '#ffc107', fontWeight: 'bold' }}>2. Design and Prototyping</Typography>
                <Typography variant="body2" style={{ color: '#555555' }}>
                    Created mockups and prototypes to visualize each sprint's deliverables. Adjustments were made based on initial feedback.
                </Typography>
            </div>
        </li>

        <li style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
            <FaLaptopCode style={{ color: '#28a745', marginRight: '10px' }} />
            <div>
                <Typography variant="body1" style={{ color: '#28a745', fontWeight: 'bold' }}>3. Development (Sprints)</Typography>
                <Typography variant="body2" style={{ color: '#555555' }}>
                    Focused on coding and implementing features in cycles (sprints). Each sprint included tasks that could be completed, tested, and reviewed.
                </Typography>
            </div>
        </li>

        <li style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
            <FaWrench style={{ color: '#dc3545', marginRight: '10px' }} />
            <div>
                <Typography variant="body1" style={{ color: '#dc3545', fontWeight: 'bold' }}>4. Testing and Quality Assurance</Typography>
                <Typography variant="body2" style={{ color: '#555555' }}>
                    Each sprint included testing phases where features were validated, and bugs were identified and resolved before moving to the next sprint.
                </Typography>
            </div>
        </li>

        <li style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
            <FaCheckCircle style={{ color: '#007bff', marginRight: '10px' }} />
            <div>
                <Typography variant="body1" style={{ color: '#007bff', fontWeight: 'bold' }}>5. Review and Feedback</Typography>
                <Typography variant="body2" style={{ color: '#555555' }}>
                    Engaged stakeholders to review sprint outcomes. Gathered feedback to inform improvements for the next cycle, ensuring alignment with project goals.
                </Typography>
            </div>
        </li>
    </ul>

    {/* Benefits and Challenges Section */}
    <Typography variant="h6" style={{ color: '#ff6347', marginTop: '20px', fontWeight: 'bold' }}>
        Agile Benefits & Challenges
    </Typography>
    
    <ul style={{ listStyleType: 'circle', paddingLeft: '20px', color: '#555555' }}>
        <li style={{ marginBottom: '10px' }}>
            <strong style={{ color: '#17a2b8' }}>Flexibility:</strong> Agile allowed us to adapt to changes and incorporate feedback, but maintaining flexibility was sometimes challenging.
        </li>
        <li style={{ marginBottom: '10px' }}>
            <strong style={{ color: '#ffc107' }}>Efficient Collaboration:</strong> Agile fostered teamwork and communication. However, this required continuous alignment among team members.
        </li>
        <li style={{ marginBottom: '10px' }}>
            <strong style={{ color: '#dc3545' }}>Time and Resource Constraints:</strong> Sprints required tight schedules, which sometimes conflicted with limited resources like network reliability and power outages.
        </li>
        <li style={{ marginBottom: '10px' }}>
            <strong style={{ color: '#007bff' }}>Customer Satisfaction:</strong> Regular updates improved stakeholder trust, though managing expectations with limited resources was a balancing act.
        </li>
    </ul>
</Box>

)}
{value === 5 && (
    <Grid container spacing={3} className="details-section">
        <Grid item xs={12}>
            <Typography variant="h6" style={{ color: '#007bff', marginBottom: '10px', fontWeight: 'bold' }}>
                <FaLaptopCode style={{ marginRight: '8px' }} /> Technologies Used
            </Typography>
            <ul className="technologies-list" style={{ padding: 0, color: '#555555' }}>
                {project.technologies && project.technologies.map((tech, index) => (
                    <li key={index} style={{ marginBottom: '10px' }}>
                        <FaTools className="tech-icon" style={{ marginRight: '8px', color: '#007bff' }} />
                        {tech}
                    </li>
                ))}
            </ul>
        </Grid>
    </Grid>
)}
{value === 6 && (
    <Grid item xs={12}>
        <Typography variant="h6" style={{ color: '#007bff', marginBottom: '10px', fontWeight: 'bold' }}>
            <FaVideo style={{ marginRight: '8px' }} /> Video Overview
        </Typography>
        <video controls className="video-overview" style={{ width: '100%', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)' }}>
            <source src={project.video} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    </Grid>
)}

                </Box>

                <Button variant="contained" color="primary" onClick={() => window.history.back()}>Go Back</Button>
            </Container>
        </div>
    );
};

export default ProjectDetails;
