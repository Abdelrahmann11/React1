import React from 'react'

import './Portfolio.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faPlus, faStar);


export default function Portfolio() {
  return (
    <div className='Portfolio'>
      <div className='PortfolioContent mb-4'>
          <div className='PortfolioContentText'>
            <h2>PORTFOLIO COMPONENT</h2>
            <div className='d-flex align-items-center justify-content-center mb-3' style={{marginTop : '-80px'}}>
              <div className='PortfolioLine me-3'></div>
              <FontAwesomeIcon icon="star"/>
              <div className='PortfolioLine ms-3'></div>
            </div>
          </div>
        <div className='container'>
          <div className='row g-5'>
            <div className='col-md-4'>
              <div className='rounded-3 overflow-hidden position-relative'>
                <img className='w-100 rounded-3' src="https://routeegy.github.io/startFramework/assets/images/poert1.png" alt=''/>
                <div className='Layer position-absolute start-0 top-0 w-100 h-100 d-flex justify-content-center align-items-center'>
                  <div className='text-center'>
                    <FontAwesomeIcon icon={faPlus} className='fa-6x text-white'/>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='rounded-3 overflow-hidden position-relative'>
                <img className='w-100 rounded-3' src="https://routeegy.github.io/startFramework/assets/images/port2.png" alt=''/>
                <div className='Layer position-absolute start-0 top-0 w-100 h-100 d-flex justify-content-center align-items-center'>
                  <div className='text-center'>
                    <FontAwesomeIcon icon={faPlus} className='fa-6x text-white'/>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='rounded-3 overflow-hidden position-relative'>
                <img className='w-100 rounded-3' src="https://routeegy.github.io/startFramework/assets/images/port3.png" alt=''/>
                <div className='Layer position-absolute start-0 top-0 w-100 h-100 d-flex justify-content-center align-items-center'>
                  <div className='text-center'>
                    <FontAwesomeIcon icon={faPlus} className='fa-6x text-white'/>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='rounded-3 overflow-hidden position-relative'>
                <img className='w-100 rounded-3' src="https://routeegy.github.io/startFramework/assets/images/poert1.png" alt=''/>
                <div className='Layer position-absolute start-0 top-0 w-100 h-100 d-flex justify-content-center align-items-center'>
                  <div className='text-center'>
                    <FontAwesomeIcon icon={faPlus} className='fa-6x text-white'/>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='rounded-3 overflow-hidden position-relative'>
                <img className='w-100 rounded-3' src="https://routeegy.github.io/startFramework/assets/images/port2.png" alt=''/>
                <div className='Layer position-absolute start-0 top-0 w-100 h-100 d-flex justify-content-center align-items-center'>
                  <div className='text-center'>
                    <FontAwesomeIcon icon={faPlus} className='fa-6x text-white'/>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='rounded-3 overflow-hidden position-relative'>
                <img className='w-100 rounded-3' src="https://routeegy.github.io/startFramework/assets/images/port3.png" alt=''/>
                <div className='Layer position-absolute start-0 top-0 w-100 h-100 d-flex justify-content-center align-items-center'>
                  <div className='text-center'>
                    <FontAwesomeIcon icon={faPlus} className='fa-6x text-white'/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
