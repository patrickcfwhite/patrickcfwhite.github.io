import React from 'react'

const Contact = () => {

  const links = [
    { name: 'Email', link: 'mailto:patrick.cf.white@gmail.com' },
    { name: 'Github', link: 'https://github.com/patrickcfwhite' },
    { name: 'Twitter', link: 'https://twitter.com/patrickcfwhite' },
    { name: 'LinkedIn', link: 'https://www.linkedin.com/in/patrickcfwhite/' }
  ]

  return (
    <>
    <div className="slideContainer contact section">
      <h1 className="title">~Contact</h1>
        <div className="section">
        <p className="subtitle">If you'd like to get in touch please use the links below to contact me via email or follow me on social media.</p>
        </div>
      <div className="columns has-text-centered is-vcentered hero-body">
        {links.map(link => {
          return <div key={`link-${link.name}`} className='column'><a rel="noopener noreferrer" target='_blank' href={link.link}><h1 className="contactText">{link.name}</h1></a></div>
        })}
      </div>
    </div>
    <footer class="my-footer">
    <div class="content has-text-centered">
      <p>
        by Patrick White
      </p>
    </div>
  </footer>
  </>
  )
}

export default Contact