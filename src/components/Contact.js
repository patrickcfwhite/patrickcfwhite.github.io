import React from 'react'

const Contact = () => {

  const links = [
    { name: 'Email', link: 'mailto:patrick.cf.white@gmail.com' },
    { name: 'Github', link: 'https://github.com/patrickcfwhite' },
    { name: 'Twitter', link: 'https://twitter.com/patrickcfwhite' },
    { name: 'LinkedIn', link: 'https://www.linkedin.com/in/patrickcfwhite/' }
  ]

  return (
    <div className="slideContainer contact section centercenter">
      <h1 className="title">Get in touch</h1>
      <div className="columns has-text-centered is-vcentered">
        {links.map(link => {
          return <div key={`link-${link.name}`} className='column section'><a rel="noopener noreferrer" target='_blank' href={link.link}><h1 className="contactText">{link.name}</h1></a></div>
        })}
      
        {/* <div className="column section"><h1 className="contactText">Github</h1></div>
      <div className="column section"><h1 className="contactText">Twitter</h1></div>
      <div className="column section"><h1 className="contactText">LinkedIn</h1></div> */}
      </div>
      {/* <a class="twitter-timeline" href="https://twitter.com/patrickcfwhite?ref_src=twsrc%5Etfw">Tweets by patrickcfwhite</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> */}
    </div>
  )
}

export default Contact