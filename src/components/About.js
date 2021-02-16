import React, { useState } from 'react'
// import DevIcon from 'devicon-react-svg'
// import Devicon from 'devicon-react'
// import 'devicon'
// import Devicon from './Devicon'
import { useMediaQuery } from 'react-responsive'
// import AOS from 'aos'

// import 'aos/dist/aos.css'
import 'devicon'

const skills = [
 ['javascript', 'JavaScript'], ['nodejs', 'Node.js'], ['react', 'React'],
 ['html5', 'HTML5'], ['css3', 'CSS3'], ['sass','SASS'], 
 ['python', 'Python'], ['django', 'Django'], ['visualstudio', 'Visual Studio'],
 ['postgresql', 'PostgreSQL'], ['mongodb', 'MongoDB'], ['express', 'Express.js'], 
 ['npm', 'NPM'], ['yarn', 'Yarn'], ['webpack', 'Webpack'], 
 ['git', 'Git'], ['github', 'Github'],['heroku', 'Heroku']
]

const devIconStyle = {
  color: '#69a5a4',
  fontSize: '3.2vw',
}

const photoOfMe = require('../assets/headshotbw.jpg')

const About = () => {

  const isMobile = useMediaQuery(({ query: '(max-width: 767px)' }))

  const [aboutDisplay, setAbout] = useState(true)
  const [skillsDisplay, setSkills] = useState(false)
  // const [nameDisplay, setNameDisplay] = useState(false)

  const handleAbout = (event) => {
    event.preventDefault()
    setSkills(false)
    setAbout(true)
  }
  const handleSkills = (event) => {
    event.preventDefault()
    setAbout(false)
    setSkills(true)
  }
   

  return (
    <div id="aboutSlide" className="slideContainer about section">
      <div className="columns is-hidden-mobile">
        <div className="column is-three-fifths">
          <h1 className="title">~About Me</h1>
          <div className="about-text section">
            <p>Before becoming a web developer, my background was in music. To forge a career as a musician, my day to day work was very varied; 
              from performing on stage and weddings to teaching, composing and more.
            From this, I’ve developed a range of skills threaded together with a focus on creativity, and delivering something of high quality.
            </p><br />
            <p>While changing career and transitioning to software engineering, I realised that my previous experience was incredibly valuable.
            There has been a great deal of overlap with music and I’ve relished the opportunity to show my creative side whilst working in a more structured environment.
            I’ve particularly enjoyed the emphasis on collaboration and peer-review.
            </p><br />
            <p>I'm currently contracting as a Full Stack Developer and really enjoying it. It's inspired me to learn more dedicated back-end tools to take my skiils to the next level!
            </p><br /><br />
            <img src={photoOfMe} id="photo" alt="patrick white"/>
          </div>
          {/* <h1 className="subtitle">~Current Goals</h1> */}

        </div>
        <div className="column is-two-fifths">
          <h1 className="title">~Skills</h1>
          <div className="columns is-multiline section skills">
            {skills.map(([skill, name]) => {
              return (
                <div 
                  key={`${skill}-icon`} 
                  className="column is-one-third-desktop is-hidden-mobile has-text-centered"> 
                  {/* <DevIcon icon={skill} style={devIconStyle} /> */}
                  {
                  <i className={skill === 'npm' || skill === 'express' ? skill === 'express' ? `devicon-${skill}-original skillIcon`: `devicon-${skill}-original-wordmark skillIcon` :`devicon-${skill}-plain skillIcon`} style={devIconStyle}></i>
                  // :
                  // <img src={npmLogo} alt='npm logo' className="npm-logo"/>
                }
                  <p className="skill-overlay">{name}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      {isMobile && <>
        <div className="level is-mobile">
          <div className="level-left">
            <h2 className={`${aboutDisplay ? 'activeTitle' : ''} level-item about-tab`} onClick={(event) => handleAbout(event)}>~About Me</h2>
          </div>
          <div className="level-right">
            <h2 className={`${skillsDisplay ? 'activeTitle' : ''} level-item about-tab`} onClick={(event) => handleSkills(event)}>~Skills</h2>
          </div>
        </div>
        { aboutDisplay && <div className="about-text section">
          <p>Before becoming a web developer my background was as a musician, but to actually forge a career in music
          my day to day work has been rather varied. From performing on stage, to weddings, to teaching, to composing and more.
          From this, I’ve developed a range of skills threaded together with a focus on creativity, and delivering something of high quality.
          </p><br />
          <p>While changing career and transitioning to software engineering, I realised that my previous experience was incredibly valuable.
            There has been a great deal of overlap with music and I’ve relished the opportunity to show my creative side whilst working in a more structured environment.
            I’ve particularly enjoyed the emphasis on collaboration and peer-review.
          </p><br />
          <p>I'm currently contracting as a Full Stack Developer and really enjoying it. It's inspired me to learn more dedicated back-end tools to take my skiils to the next level!</p>
<br /><br />
        </div>}
         { skillsDisplay &&
         // <div className="columns is-mobile is-multiline section skills">
            <ul className="content section">
              {skills.map(([skill, name]) => {
                return (
                // <div key={`${skill}-icon`} className="column">
                //   <DevIcon icon={skill} style={devIconStyle} />
                // </div>
                  <li key={`${skill}-list`}><p>~{name}</p></li>
                )
              })}
            </ul>
           // </div>
         }
      </>}

    </div>
  )
}

export default About