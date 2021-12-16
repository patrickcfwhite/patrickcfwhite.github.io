import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
// import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Mousewheel, Keyboard, EffectFade } from 'swiper';
// import useMediaQuery from 'react-responsive'
import AOS from 'aos';

import 'swiper/swiper-bundle.css';
import 'swiper/components/effect-fade/effect-fade.scss';
import 'bulma';
import './styles/second.css';
import 'aos/dist/aos.css';

SwiperCore.use([Mousewheel, Keyboard, EffectFade]);

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
    AOS.refresh();
  });

  return (
    <>
      <Home id="homePage" />
      <About id="aboutSwipe" />
      {/* <Work /> */}
      {/* <Contact /> */}
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
