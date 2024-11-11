import React, { useState } from 'react'; 
import { FaBars, FaChevronUp } from 'react-icons/fa'; // Adding 'FaChevronUp' for active icon
import styled, { createGlobalStyle } from 'styled-components';

import Sidebar from '../components/Sidebar'; 
import Footer from '../components/Footer'; 
import industryImage from '../assets/images/industry.jpg'; 
import familyImage from '../assets/images/family.jpg'; 
import friendsImage from '../assets/images/friends.jpg'; 
import colleaguesImage from '../assets/images/colleagues.jpg'; 
import hobbiesImage from '../assets/images/hobbies.jpg'; 
import '../components/PersonalDetailsText.css'; // External CSS for more styling control
import '../components/EducationalJourneyText.css'; // External CSS for more styling control
import '../components/FriendshipSection.css'; // External CSS for more styling control
import '../components/FamilySection.css'; // External CSS for more styling control 
import '../components/VisionSection.css'; // External CSS for more styling control
import '../components/MyselfSection.css'; // External CSS for more styling control
import ahsur from '../assets/images/ahsur.jpg'; // Import your image
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket, faLightbulb } from '@fortawesome/free-solid-svg-icons';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #1e1e2f;
    color: #dcdcdc;
  }
`;

const AboutContainer = styled.div`
  display: flex;
  min-height: 100vh;
`;

const MainContent = styled.div`
  margin-left: 250px;
  padding: 2rem;
  flex: 1;
  background-color: #1e1e2f;
`;

const CareerSection = styled.div`
  position: relative;
  height: 400px;
  background-image: url(${industryImage});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const CareerTextOverlay = styled.div`
  color: #ffffff;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
  font-size: 2.5rem;
  max-width: 60%;
`;

const CareerDetails = styled.div`
  padding: 2rem 0;
  text-align: left;
`;

const Subtitle = styled.h3`
  font-size: 1.6rem;
  color: #aaa;
  margin-top: 1.5rem;
`;

const Text = styled.p`
  font-size: 1.2rem;
  color: #dcdcdc;
  line-height: 1.6;
`;

const SectionDivider = styled.hr`
  border: 1px solid #2c3e50;
  margin: 3rem 0;
`;

const PersonalSection = styled.div`
background: linear-gradient(90deg, #0a0a0a 0%, #1a1a1a 50%, #002147 100%);
  padding: 2rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
  color: white;
`;

const PersonalHeader = styled.h2`
  font-size: 1.8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const InspirationalText = styled.h3`
  text-align: center;
  font-size: 1.4rem;
  color: #ffffff;
  margin-bottom: 1.5rem;
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.7);
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 2rem;
  margin-top: 1rem;
`;

const IconWrapper = styled.div`
  display: inline-block;
  cursor: pointer;
  color: ${({ isActive }) => (isActive ? '#0b3d91' : '#ffffff')};
  font-size: 2rem;
  text-align: center;
  &:hover {
    color: #ffffb3;
    transform: scale(1.1);
    transition: transform 0.2s;
  }
`;

const ExpandableContainer = styled.div`
  display: ${({ isExpanded }) => (isExpanded ? 'block' : 'none')};
  background-color: rgba(255, 255, 255, 0.1);
  padding: 1rem;
  margin-top: 1rem;
  backdrop-filter: blur(5px);
`;

const ExpandedImage = styled.img`
  width: 50rem;
  height: 30rem;
  border-radius: 8px;
  margin-bottom: 1rem;
`;

const IntroText = styled.h4`
  color: #ffffff;
  text-align: center;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.7);
`;

const PersonalDetailsText = styled.p`
  color: #fff;
  font-size: 1.2rem;
`;

const About = () => {
  const [expanded, setExpanded] = useState('family'); // Set default to 'family'

  const toggleExpand = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <>
      <GlobalStyle />
      <AboutContainer>
        <Sidebar />

        <MainContent>
        <div className="myself-section-container">
  <div className="myself-content">
    <h2 className="myself-title">My Story</h2>
    <p className="myself-paragraph">
      My name is <span className="myself-highlight">Misheck Serima</span>,I was born on 12 October 2002. I experienced a significant change in my life at a young age when I lost my father. Fortunately, my aunt and her husband took me in when I was just five years old. They have been my guardians ever since, providing me with love, support, and everything I needed. Thanks to their dedication, I never felt the absence of parents; I grew up in a nurturing environment that allowed me to thrive.
    </p>
    <p className="myself-paragraph">
      From an early age, I exhibited various talents, particularly in academics. I started my education in a rural area, where I worked hard to excel. Throughout my early years, I consistently achieved top positions in my class, earning awards and recognition for my academic performance.
    </p>
    <p className="myself-paragraph">
      Currently, I am studying <span className="myself-highlight">Software Engineering</span> at <span className="myself-highlight">Bindura University</span>, where I am immersed in a world of technology and innovation. My journey has been shaped by the unwavering support of my aunt and uncle, as well as my siblings, who have always been there for me. I cherish the love and care they have given me, and I am grateful for the strong bond we share.
    </p>
    <p className="myself-paragraph">
      I am passionate about learning and growing, and I am excited about the future. My experiences have instilled in me a deep appreciation for education and the importance of family.
    </p>
    <p className="myself-quote-style">
      "Family is not an important thing. It's everything." – Michael J. Fox
    </p>
  </div>
  <div className="myself-image-container">
  <div className="overlay-text">
    I am actively seeking opportunities to expand my knowledge and experience in game design, software development, and emerging technologies. My goal is to take my career to the next level by participating in workshops, internships, and collaborative projects that challenge me and allow me to showcase my abilities.
  </div>
  
  <img src={ahsur} alt="Misheck Serima" className="myself-image" />

  <div className="career-goal-text">
    <FontAwesomeIcon icon={faRocket} className="icon" />
    <span>Driven by ambition, I aim to continuously grow, learn, and collaborate with forward-thinking professionals to turn innovative ideas into reality.</span>
  </div>

  <div className="inspiration-text">
    <FontAwesomeIcon icon={faLightbulb} className="icon" />
    <span>Embracing challenges and celebrating achievements fuels my passion for technology. I am dedicated to making a positive impact through every project I undertake.</span>
  </div>
</div>


</div>

<SectionDivider />
        <CareerTextOverlay>
              My Career
              <SectionDivider />
            </CareerTextOverlay>
          <CareerSection>
            <CareerTextOverlay>
            As a passionate software engineer, I strive to create solutions that not only solve problems but also have a lasting impact on society.
            </CareerTextOverlay>
          </CareerSection>

          <CareerDetails>
            <Subtitle>My Vision</Subtitle>
            <div className="vision-section-container">
      <h2 className="vision-title">Vision</h2>
      <p className="vision-paragraph">
        My vision is rooted in a profound passion for technology and its potential to transform the world. I envision a future where I can harness the power of <span className="vision-highlight">virtual reality</span> and <span className="vision-highlight">game development</span> to create immersive experiences that inspire and engage people across the globe. My goal is to be at the forefront of technological innovation, much like the visionary <span className="vision-highlight">Elon Musk</span>, striving to push boundaries and explore new frontiers.
      </p>
      <p className="vision-paragraph">
        I believe that technology can be a catalyst for positive change, and I am dedicated to contributing to this evolution. I aim to develop cutting-edge solutions that enhance human experiences, whether through entertainment, education, or social impact. This vision drives me to constantly learn, innovate, and collaborate with like-minded individuals who share a commitment to making a difference.
      </p>
      <p className="quote-style">
        "Technology is best when it brings people together." – Matt Mullenweg
      </p>
    </div>

            <Subtitle>Career Development</Subtitle>
            <Text>
              I am always eager to learn new technologies and methodologies that can further enhance my skills.
            </Text>

            <SectionDivider />
          </CareerDetails>

        

          <PersonalHeader>
              Personal Life
            <SectionDivider />

            </PersonalHeader>

           <PersonalSection>
            <PersonalHeader>
              Click Menu icons to expand
            <SectionDivider />
            
            </PersonalHeader>

            <InspirationalText>
              My good character shines in all my interactions, whether with family, friends, colleagues, or in my hobbies.
              <SectionDivider />
            </InspirationalText>

            <IconContainer>
              <IconWrapper onClick={() => toggleExpand('family')} isActive={expanded === 'family'}>
                {expanded === 'family' ? <FaChevronUp /> : <FaBars />}
                <div>Family</div>
              </IconWrapper>
              <IconWrapper onClick={() => toggleExpand('friends')} isActive={expanded === 'friends'}>
                {expanded === 'friends' ? <FaChevronUp /> : <FaBars />}
                <div>Friends</div>
              </IconWrapper>
              <IconWrapper onClick={() => toggleExpand('colleagues')} isActive={expanded === 'colleagues'}>
                {expanded === 'colleagues' ? <FaChevronUp /> : <FaBars />}
                <div>EducationalJourney</div>
              </IconWrapper>
              <IconWrapper onClick={() => toggleExpand('hobbies')} isActive={expanded === 'hobbies'}>
                {expanded === 'hobbies' ? <FaChevronUp /> : <FaBars />}
                <div>Hobbies</div>
              </IconWrapper>
            </IconContainer>

            <ExpandableContainer isExpanded={expanded === 'family'}>
              <IntroText>
                Family is my foundation, and I always show them the utmost care and respect.
              </IntroText>
              <ExpandedImage src={familyImage} alt="Family" />
              <PersonalDetailsText>
              <div className="family-section-container">
      <h2 className="section-title">My Family</h2>
      <p className="section-paragraph">
        Family is the cornerstone of who I am. They have been my unwavering support system, guiding me through life’s challenges and celebrating my successes. I cherish the moments we share, whether it’s enjoying a simple meal together or embarking on adventures that create lasting memories.
      </p>

      <h3 className="section-subtitle">Values and Interactions</h3>
      <p className="section-paragraph">
        I believe in the importance of <span className="highlighted-text">kindness and compassion</span>, values instilled in me by my family. We engage in open conversations, share our dreams, and encourage each other to pursue our passions. I make it a priority to spend quality time with them, as these moments strengthen our bonds and enrich our lives.
      </p>

      <h3 className="section-subtitle">Appreciation</h3>
      <p className="section-paragraph">
        I am deeply grateful for the sacrifices my family has made to ensure my happiness and growth. Their encouragement has empowered me to strive for excellence, both personally and professionally. I want to express my heartfelt appreciation for their love and support, which have shaped me into the person I am today.
      </p>

      <h3 className="section-subtitle">A Commitment to Family</h3>
      <p className="section-paragraph">
        Being present for my family is a commitment I take seriously. I strive to reciprocate the love and support they have shown me throughout my life. Whether through acts of kindness, listening to their concerns, or simply being there in times of need, I aim to foster an environment of warmth and understanding.
      </p>

      <p className="concluding-text">
        My family’s influence remains a <span className="highlighted-text">lasting source of strength</span> and inspiration, grounding me as I continue to grow.
      </p>
    </div>
              </PersonalDetailsText>
            </ExpandableContainer>

            <ExpandableContainer isExpanded={expanded === 'friends'}>
              <IntroText>
                Friends keep life interesting, and I am always there for my closest companions.
              </IntroText>
              <ExpandedImage src={friendsImage} alt="Friends" />
              <PersonalDetailsText>
              <div className="friendship-section-container">
      <p className="section-intro">
        My friends are an essential part of my life, and I cherish the bonds we've built over time. We share countless interests and passions, which has led to many memorable experiences together.
      </p>

      <p className="friendship-paragraph">
        From going out to play and enjoying fun activities to sharing interesting stories, each moment spent with them adds joy to my life.
      </p>

      <p className="friendship-paragraph">
        I truly value the friendships I have cultivated. They <span className="friendship-highlight">inspire me, support me, and bring laughter</span> into my days. Events we celebrate together are not just gatherings; they are opportunities to strengthen our connections and create lasting memories.
      </p>

      <p className="friendship-paragraph">
        Being friendly and approachable, I easily adapt to new environments. Wherever I go, I engage with new friends quickly, embracing the chance to build new relationships. This openness has enriched my life, allowing me to learn from diverse perspectives and experiences.
      </p>

      <p className="concluding-text">
        I am incredibly grateful for my friends and the happiness they bring into my life. Their presence reminds me that <span className="friendship-highlight">friendship is one of life’s greatest gifts</span>.
      </p>
    </div>
              </PersonalDetailsText>
            </ExpandableContainer>

            <ExpandableContainer isExpanded={expanded === 'colleagues'}>
              <IntroText>
                Collaboration is key.
              </IntroText>
              <ExpandedImage src={colleaguesImage} alt="Colleagues" />
              <PersonalDetailsText>
              <div className="educational-journey-container">
      <p className="intro-text">
        Throughout my educational journey, I have been fortunate to spend significant time with <span className="section-highlight">incredible colleagues</span> who have made my school years truly memorable.
      </p>

      <p className="section-paragraph">
        From <span className="school-name">Form 1 at Mutoko High School to Form 6 at Rusununguko High School</span>, I experienced a blend of challenges and joyful moments, learning not just from textbooks but also from each other. Despite the times I spent alone, I engaged with my classmates in various events and activities that enriched our lives.
      </p>

      <p className="section-paragraph">
        Together, we tackled projects, shared ideas, and celebrated achievements. These experiences allowed us to understand what life is truly about—<span className="section-highlight">collaboration, support, and friendship</span>. The friendships I built during this time were invaluable, and I cherish the memories of working together on challenging assignments and celebrating our successes.
      </p>

      <p className="section-paragraph">
        Now, as I pursue my studies at <span className="school-name">Bindura University of Science Education</span>, I continue to learn and grow in a vibrant environment. This beautiful institution has provided me with the chance to experience real-life situations and expand my horizons alongside <span className="supportive-colleagues">supportive colleagues</span>.
      </p>

      <p className="conclusion-text">
        I am immensely grateful for my friends and colleagues who have been with me through this journey. Their encouragement and assistance have played a crucial role in my development. I pride myself on being friendly and open to new friendships; I believe that <span className="section-highlight">collaboration</span> and the exchange of ideas are fundamental to success. I appreciate every ounce of help I receive, especially from those with whom I share common goals and interests.
      </p>
    </div>
              </PersonalDetailsText>
            </ExpandableContainer>

            <ExpandableContainer isExpanded={expanded === 'hobbies'}>
              <IntroText>
                My hobbies provide the balance I need.
              </IntroText>
              <ExpandedImage src={hobbiesImage} alt="Hobbies" />
              <PersonalDetailsText>
              <div className="personal-details-container">
      <p className="intro-text">
        I consider myself a <span className="highlight">multifaceted individual</span> with a wide array of talents and interests. Here are some of the hobbies that define me:
      </p>

      <div className="hobby-list">
        <div className="hobby-item">
          <h3 className="hobby-title">Martial Arts:</h3>
          <p className="hobby-description">
            I have a strong passion for martial arts, which has taught me discipline and focus. It was a significant part of my life during high school.
          </p>
        </div>

        <div className="hobby-item">
          <h3 className="hobby-title">Soccer:</h3>
          <p className="hobby-description">
            I am a dedicated soccer player with aspirations to reach higher levels, despite the challenges faced by players in my country. I love the teamwork and strategy involved in the game.
          </p>
        </div>

        <div className="hobby-item">
          <h3 className="hobby-title">Volleyball:</h3>
          <p className="hobby-description">
            I have also dabbled in volleyball, enjoying the camaraderie and competition it brings.
          </p>
        </div>

        <div className="hobby-item">
          <h3 className="hobby-title">Video Editing:</h3>
          <p className="hobby-description">
            I have experience with Adobe After Effects, Premiere Pro, and Photoshop, where I create engaging video content and stunning visuals.
          </p>
        </div>

        <div className="hobby-item">
          <h3 className="hobby-title">3D Modeling and Animation:</h3>
          <p className="hobby-description">
            I enjoy using Blender to create 3D models and animations, exploring the endless possibilities of digital art.
          </p>
        </div>

        <div className="hobby-item">
          <h3 className="hobby-title">Game Development:</h3>
          <p className="hobby-description">
            I have experience with Unity, where I create and develop my own games, combining creativity with technical skills.
          </p>
        </div>

        <div className="hobby-item">
          <h3 className="hobby-title">Sound Production:</h3>
          <p className="hobby-description">
            I use FL Studio to create sound effects and compose musical pieces, showcasing my passion for music.
          </p>
        </div>

        <div className="hobby-item">
          <h3 className="hobby-title">Singing and Rapping:</h3>
          <p className="hobby-description">
            Music is a huge part of my life. I love to sing and rap, expressing myself through my own original tracks.
          </p>
        </div>

        <div className="hobby-item">
          <h3 className="hobby-title">Acting:</h3>
          <p className="hobby-description">
            Acting is another passion of mine. I enjoy stepping into different roles and exploring characters, and I aspire to pursue this further in the future.
          </p>
        </div>
      </div>

      <p className="closing-text">
        These hobbies reflect my commitment to personal growth and creativity. I am always eager to learn new skills and explore different avenues of expression, making me a well-rounded individual ready to tackle any challenge.
      </p>
    </div>
              </PersonalDetailsText>
            </ExpandableContainer>
          </PersonalSection>
        </MainContent>
      </AboutContainer>
      <Footer />
    </>
  );
};

export default About;
