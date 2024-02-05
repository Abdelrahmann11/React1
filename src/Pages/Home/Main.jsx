import React from 'react'

import './Main.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import {  faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function Main() {

    library.add(faStar);
    return (

        <div className='home'>
            <div className='homeContent'>
                <img src="https://routeegy.github.io/startFramework/assets/images/avataaars.svg" alt=''/>
                <div>
                    <div className='homeContentText'>
                        <h2>Start Framework</h2>
                        <div className='d-flex align-items-center justify-content-center mb-3'>
                            <div className='Line me-3'></div>
                            <FontAwesomeIcon icon="star"/>
                            <div className='Line ms-3'></div>
                        </div>
                    </div>
                </div>
                <div>Graphic Artist - Web Designer - Illustrator</div>
            </div>
        </div>

    )

}
