import React from 'react';
import "./About.css";
import aboutImg from "../../images/logo.png";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About BookHub</h2>
            <p className='fs-17'>This is a perfect website for book enthusiasts to find and get informations about their favorite books.</p>
            <p className='fs-17'>There is a search panel to search with the name of the book.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About