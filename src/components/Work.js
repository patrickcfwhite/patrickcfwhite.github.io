import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Mousewheel, Keyboard, Navigation, Pagination } from 'swiper'
import ProjectCard from './ProjectCard'
import 'swiper/swiper-bundle.css'
import { useMediaQuery } from 'react-responsive'

SwiperCore.use([Mousewheel, Keyboard, Navigation, Pagination])



const Work = () => {

  const work = [
    {
      title: 'Project 1: Tetris',
      image: 'https://i.imgur.com/Cu0IOIO.png?2',
      blurb: {
        task: 'To make a game to run in a browser using \'vanilla\' JS, HTML & CSS only',
        process: 'For this project I recreated Tetris. I focussed on the mechanics of movement and line-clearing before adding the gameplay elements of dropping, increased speed and scoring. I also created the sound effects and composed some short musical cues.',
        used: ['HTML5/CSS', 'Javascript', 'Logic Pro']
      },
      url: { project: 'https://patrickcfwhite.github.io/project-1/', readme: 'https://github.com/patrickcfwhite/project-1' },
      id: 1
    },
    {
      title: 'Project 2: Soundtrack',
      image: 'https://i.imgur.com/xv5HpRf.png',
      blurb: {
        task: '48-hour pair-programming hackathon to create a React Front-End project with multiple Routes that consumes a public API.',
        process: 'My partner and I decided to use the Deezer API and create a site where you could search through the music on that platform. I added a feature upon where you enter your birthday and it creates a playlist with each number one song that year for every birthday. To create this we made a database of songs on Excel and converted it to a JSON object.',
        used: ['React', 'HTML5/CSS', 'JavaScript', 'Moment.js', 'Axios', 'Excel']
      },
      url: { project: 'https://patrickcfwhite.github.io/Project-2/', readme: 'https://github.com/patrickcfwhite/Project-2' },
      id: 2
    },
    {
      title: 'Project 3: KAP Guide for Isolation',
      image: 'https://i.imgur.com/g94BvEJ.png',
      blurb: {
        task: 'For my project I did this blah blah blah',
        process: 'A group development of a full stack application utilising a MERN stack. Inspired by the COVID-19 lockdown, KAP features login authentication and provides users with a collection of activity ideas whilst being kept indoors. KAP was designed to bring people together through the sharing of ideas. The app utilises CRUD operations giving users power to manage their uploaded content.',
        used: ['React', 'JavaScript', 'MongoDB', 'Mongoose', 'Node.js', 'Express.js', 'HTML5/SASS', 'GreenSock Animation Platform', 'Axios', 'JSON Web Token', 'Nodemailer']
      },
      url: { project: 'https://patrick-white-ga-project-3.herokuapp.com/', readme: 'https://github.com/patrickcfwhite/Project-3' },
      id: 3
    },
    {
      title: 'Project 4: Fretbored',
      image: 'https://i.imgur.com/n4UKAxl.png',
      blurb: {
        task: 'For my project I did this blah blah blah',
        process: 'The app is a learning tool for guitarists. It takes a “key” input and a corresponding scale I.e. “C - Major Scale” and generates a fretboard that displays every note within the scale and can highlight positions one would play these scales in. The app also displays a score below showing one octave of the scale and will play one octave ascending and descending. Finally each fret is clickable and will play the correct pitch at that fret. The app has a React front-end and a Django backend, using PostgreSQL to store information about the scales, and also user details and saved scales. It uses two external libraries Vex Flow to generate an image of the scale and midi-sounds-react to handle the audio.',
        used: ['React', 'JavaScript', 'Python', 'Django', 'HTML5/SASS', 'Axios', 'JSON Web Token', 'Vex Flow', 'MIDI Sounds']
      },
      url: { project: 'https://patrick-white-fretbored.herokuapp.com/', readme: 'https://github.com/patrickcfwhite/Project-4' },
      id: 4
    }
  ]

  const isMobile = useMediaQuery(({ query: '(max-width: 767px)' }))


  return (

    <div className="slideContainer work section">
      <div className="level">
        <div className="level-left">
        
            <div className="level-item">
              <div className={isMobile ? "project-button swiper-button-prev": ''}></div>
              <h1 className="title">~Projects</h1>
              <div className={isMobile ? "project-button swiper-button-next": ''}></div>
            </div>
        </div>
        <div className="level-right">
          <div className="swiper-pagination level-item"></div>
        </div>
      </div>
      <Swiper
        mousewheel={{ forceToAxis: true }}
        allowTouchMove={true}
        keyboard={true}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }}
        pagination={{
          clickable: true, el: '.swiper-pagination', renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>'
          }
        }}
        speed={500}
        autoHeight={false}

      // style={{ maxHeight: '100vh' }}
      >
        {
          work.map(project => {
            return (
              <SwiperSlide key={`swiper-${project.id}`}>
                <ProjectCard key={project.id} title={project.title} image={project.image} blurb={project.blurb} url={project.url} />
              </SwiperSlide>
            )
          })
        }
      </Swiper>

    </div>
  )
}

export default Work