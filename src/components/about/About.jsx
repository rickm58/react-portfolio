import React from 'react';
import './about.css';
import ME from '../../assets/rick2.jpg'
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <FaAward className='about_icon' />
              <h5>Experience</h5>
              <small>13+ Years Working</small>
            </article>

            <article className='about_card'>
              <VscFolderLibrary className='about_icon' />
              <h5>Projects</h5>
              <small>30+ Completed</small>
            </article>

          </div>
            <p>
              My name is Rick. Before becoming a developer, I worked in the mortgage industry for over a decade.
              I wanted to become a part of the technology industry before it was too late, so I left my career
              as a mortgage underwriter and dove headfirst into coding and continue to aborb new knowledge each day.
              Outside of work, I live in West Chester, PA with my wife Beibei, our son, Maximus, and our two dogs,
              and coach my high school alma mater's varsity ice hockey team.
            </p>

            <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About