import React from 'react'

import './Contact.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faStar);
export default function Contact() {
  return (
    <div className='Contact'>
      <div className='ContactContent mb-4'>
          <div className='ContactContentText'>
            <h2>CONATCT SECTION</h2>
            <div className='d-flex align-items-center justify-content-center mb-3' style={{marginTop : '-80px'}}>
              <div className='ContactLine me-3'></div>
              <FontAwesomeIcon icon="star"/>
              <div className='ContactLine ms-3'></div>
            </div>
          </div>
      </div>
      <div className='w-50 p-3 mx-atuo'>
        <div className='FormGroup'>
          <label for="userName">userName : </label>
          <input className='form-control border-0 border-bottom py-3 position-relative' id='userName' type='text' placeholder='userName'/>
        </div>
        <div className='FormGroup'>
          <label for="userAge">userAge : </label>
          <input className='form-control border-0 border-bottom py-3 position-relative' id='userAge' type='number' placeholder='userAge'/>
        </div>
        <div className='FormGroup'>
          <label for="userEmail">userEmail : </label>
          <input className='form-control border-0 border-bottom py-3 position-relative' id='userEmail' type='email' placeholder='userEmail'/>
        </div>
        <div className='FormGroup'>
          <label for="userPassword">userPassword : </label>
          <input className='form-control border-0 border-bottom py-3 position-relative' id='userPassword' type='password' placeholder='userPassword'/>
        </div>
      </div>
    </div>
  )
}
