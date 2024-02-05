import React from 'react'
import './About.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import {  faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function About() {
  library.add(faStar)
  return (
    <div className='About'>
      <div className='AboutContent'>
        <div>
          <div className='AboutContentText'>
            <h2>ABOUT COMPONENT</h2>
            <div className='d-flex align-items-center justify-content-center mb-3'>
              <div className='Line me-3'></div>
              <FontAwesomeIcon icon={faStar}/>
              <div className='Line ms-3'></div>
            </div>
            <div className='container'>
              <div className='row px-5'>
                <div className='col-md-6 ps-md-5'>
                  <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                </div>
                <div className='col-md-6 pe-5'>
                  <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
