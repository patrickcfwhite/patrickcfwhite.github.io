import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import 'devicon';

const links = [
  { name: 'Email', link: 'mailto:patrick.cf.white@gmail.com' },
  { name: 'Github', link: 'https://github.com/patrickcfwhite' },
  { name: 'Twitter', link: 'https://twitter.com/patrickcfwhite' },
  { name: 'LinkedIn', link: 'https://www.linkedin.com/in/patrickcfwhite/' },
];

const skills = [
  ['javascript', 'JavaScript'],
  ['nodejs', 'Node.js'],
  ['react', 'React'],
  ['html5', 'HTML5'],
  ['css3', 'CSS3'],
  ['sass', 'SASS'],
  ['nextjs', 'next.js'],
  ['graphql', 'GraphQL'],
  ['express', 'Express.js'],
  ['mongodb', 'MongoDB'],
  ['firebase', 'Firebase'],
  ['amazonwebservices', 'AWS'],
  ['postgresql', 'PostgreSQL'],
  ['python', 'Python'],
  ['django', 'Django'],
  ['visualstudio', 'Visual Studio'],
  ['webpack', 'Webpack'],
  ['github', 'Github'],
  // ['npm', 'NPM'],
  // ['yarn', 'Yarn'],
  // ['git', 'Git'],
  // ['heroku', 'Heroku'],
];

const photoOfMe = require('../assets/headshotbw.jpg');

const About = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  const devIconStyle = {
    color: '#69a5a4',
    fontSize: isMobile ? '13.8vw' : '3.2vw',
  };

  const [aboutDisplay, setAbout] = useState(true);
  const [skillsDisplay, setSkills] = useState(false);
  // const [nameDisplay, setNameDisplay] = useState(false)

  const handleAbout = (event) => {
    event.preventDefault();
    setSkills(false);
    setAbout(true);
  };
  const handleSkills = (event) => {
    event.preventDefault();
    setAbout(false);
    setSkills(true);
  };

  return (
    <div id="aboutSlide" className="slideContainer about section">
      <div className="columns">
        <div className="column is-three-fifths">
          <h1 className="title">About Me</h1>
          <div className="about-text section">
            <p>
              I am a Software Engineer specialising in JavaScript, React and
              Node.js. Having worked for a long time in the music industy I like
              to carry my focus on creativity and communication into all the
              work I do, whether that’s communicating with team members,
              stakeholders or clients it’s always at the forefront of my mind. I
              look forward to utilising my technical and soft skills to create
              well written code and quality products.
            </p>
            <br />
            <p>
              I'm currently working as a Full Stack Engineer and really enjoying
              it. It's inspired me to learn more dedicated back-end tools to
              take my skiils to the next level!
            </p>
            <br />
            <br />
            <h2 className="about-screen subtitle">Get in touch!</h2>
            <div className="photoLinks">
              <img src={photoOfMe} id="photo" alt="patrick white" />
              <div className="heroTable">
                {links.map((link) => {
                  return (
                    <div key={`link-${link.name}`}>
                      <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href={link.link}
                      >
                        <h1 className="contactText">{link.name}</h1>
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="column is-two-fifths">
          <h1 className="title">Skills</h1>
          <div className="columns is-mobile is-multiline section skills">
            {skills.map(([skill, name]) => {
              return (
                <div
                  key={`${skill}-icon`}
                  className="column mb-2 is-one-third-desktop is-half-mobile has-text-centered"
                >
                  {
                    <i
                      className={
                        skill === 'npm' || skill === 'express'
                          ? skill === 'express'
                            ? `devicon-${skill}-original skillIcon`
                            : `devicon-${skill}-original-wordmark skillIcon`
                          : `devicon-${skill}-plain skillIcon`
                      }
                      style={devIconStyle}
                    ></i>
                  }
                  <p className="skill-overlay">{name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
