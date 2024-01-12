import React from 'react';
import './community.css'
import plant from './planting.jpg';
import plantTwo from './planting2.jpg';
import clean from './cleaning.jpg';
import bombay from './bombay.jpeg'
import pond from './pond.jpeg'
import aw from './aw.jpg'

function Community() {
  return (
    <div id='bgC'>
      <h1 id='eventHead'>UPCOMING EVENTS</h1>
      <div>
        <img src={plant} className='image' alt='Planting Image'></img>   
        <h6 id='one'>PLANTING TREES on 12/02/2024</h6>
      </div>
      <div>
        <img src={plantTwo} alt='Planting Image 2'className='image'></img>
        <h6 id='two'>PLANTING on 19/02/2024</h6>
      </div>
      <div>
        <img src={clean} alt='Cleaning Image' className='image'></img>
        <h6 id='three'>Cleaning the Beach on 18/03/2024</h6>
      </div>
      <div>
        <img src={bombay} alt='Cleaning Image' className='image'></img>
        <h6 id='four'>Cleaning the SLUM on 31/03/2024</h6>
      </div>
      <div>
        <img src={pond} alt='Cleaning Image' className='image'></img>
        <h6 id='five'>Cleaning the POND on 18/03/2024</h6>
      </div>
      <div>
        <img src={aw} alt='Cleaning Image' className='image'></img>
        <h6 id='six'>Cleaning the Beach on 18/03/2024</h6>
      </div>
    </div>
  );
}

export default Community;