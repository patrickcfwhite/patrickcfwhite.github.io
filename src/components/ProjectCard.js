import React from 'react'
import DevIcon from 'devicon-react-svg'


const devIconStyle = {
  fill: '#69a5a4',
  width: '80px'
}

const ProjectCard = ({ title, image, blurb, url }) => {

  const handleClick = (event) => {
    event.preventDefault()
    window.open(url.project, '_blank')
  }

  return (
    <section id='projectCard' className="">
      <div className='border'>
        <h1 className="title">{title}</h1>
        <div className="columns">
          <div className="column section has-text-left">
            {/* <h2 className="subtitle">task:</h2><small>{blurb.task}</small><br/> */}
            <h2 className="subtitle">process:</h2><p>{blurb.process}</p><br/>
            <h2 className="subtitle">tech used:</h2>
            <div>{blurb.used.map(item => <span key={item}><p>~ {item}</p></span>)}</div><br/>
          </div>
          <div className="column">
            <img src={image} alt={`${title} screenshot`} />
            <div className="level">
              <div className="level-left">
                <div className="level-item iconLink" onClick={(event) => handleClick(event)}>
                  <p>View the code on Github</p>
                  <DevIcon icon='github_badge' wordmark="true" style={devIconStyle}/>
                </div>
              </div>
              <div className="level-right">
                <div className="level-item iconLink" onClick={(event) => handleClick(event)}>
                  <p>Launch Project</p>
                  <DevIcon icon='code' wordmark="true" style={devIconStyle} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectCard