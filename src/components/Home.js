import React from 'react'

const Home = () => {
  return (
    <>
    <section className="slideContainer hero is-fullheight">
      <div data-aos="fade-up" className="hero-body">
        <div className="container">
          <h1 className="title">Patrick White</h1>
          <h2 className="subtitle">Web Developer</h2>
        </div>
      </div>
    <div className="hero-foot container">
      <img className='bounce' src={require('../assets/white-down-arrow-png-2.png')} alt="down arrow"/>
    </div>
    </section>

  </>
  )
}

export default Home