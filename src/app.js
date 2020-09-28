import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import Home from './components/Home'
import About from './components/About'
import Work from './components/Work'
import Contact from './components/Contact'
import { Swiper, SwiperSlide } from 'swiper/react'
import  SwiperCore, { Mousewheel, Keyboard, EffectFade } from 'swiper'
import useMediaQuery from 'react-responsive'
import AOS from 'aos'


import 'swiper/swiper-bundle.css'
import 'swiper/components/effect-fade/effect-fade.scss'
import 'bulma'
import '../styles/second.css'
import 'aos/dist/aos.css'



SwiperCore.use([Mousewheel, Keyboard, EffectFade])

const App = () => {

  useEffect(() => {
    AOS.init({
      duration: 2000
    })
    AOS.refresh()
  })

  // const isMobile = useMediaQuery(({ query: '(max-width: 767px)' }))

  return (
    <Swiper
      direction={'vertical'}
      style={{ maxWidth: '100vw', maxHeight: '100vh' }}
      // effect='fade'
      // fadeEffect={{ crossFade: true }}
      speed={800}
      mousewheel={{ forceToAxis: true }}
      keyboard={true}
      allowTouchMove={false}
      centeredSlides={true}
    >
      <SwiperSlide id="homePage">
        <Home />
      </SwiperSlide>
      <SwiperSlide id="aboutSwipe">
        <About />
      </SwiperSlide>
      <SwiperSlide>
        <Work />
      </SwiperSlide>
      <SwiperSlide>
        <Contact />
      </SwiperSlide>
    </Swiper>
  )
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
)