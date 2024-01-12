// recycle.js

import React, { useState } from 'react';
import './recycle.css';
import join from './join.png';
import noteJoin from './notejoin.png';

function Recycle() {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const handleAddTrashClick = () => {
    setPopupOpen(!isPopupOpen);
    // Toggle the body class to add/remove blur effect
    document.body.classList.toggle(isPopupOpen);
  };

  return (
    <div id='bg'>
      <div id='god'>
      <h1>Turning Trash into Treasure: Transforming the World Through Sustainable Scrap Solutions.</h1>
      </div>
      {!isPopupOpen && (
        <div id="addTrash" onClick={handleAddTrashClick}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-truck" viewBox="0 0 16 16 " id='truck'>
            <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5zm1.294 7.456A2 2 0 0 1 4.732 11h5.536a2 2 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456M12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2"/>
          </svg>
          <h2 id='schedule'>SCHEDULE PICKUP</h2>
        </div>
      )}
      <div id='join'>
        <h2>JOIN COMMUNITY</h2>
        <p>Discover and participate in ecological activities near you, and connect with like-minded people who share your passion for sustainability.</p>
      </div>
      <div id='noteJoin'>
        <h2>JOIN COMMUNITY</h2>
        <p>Discover and participate in ecological activities near you, and connect with like-minded people who share your passion for sustainability.</p>
      </div>
      <div id='quote'>
        <p>"Conveniently schedule pickups for scrap disposal, contributing to pollution reduction and a cleaner environment. 'Greedy Seed' simplifies recycling."</p>
      </div>
      {isPopupOpen && (
        <div id='blurbg'>
        <div className="popup">
          {/* Your registration page content goes here */}
          <h2 className='text' >Schedule a pickup</h2>
          <form className='text'>
            <p className='text' id='date'>Select a Date for Pickup</p>
            <input placeholder='Date' type='date' className='text'></input>
            <input type='number' placeholder='Weight of the Scrap(kg)' className='text'></input>
            <select className='text'>
              <option>Type of Scrap</option>
              <option>Degradable</option>
              <option>Non-Degradable</option>
              <option>E-Waste</option>
            </select>
            <button type='submit' className='text'>Submit</button>
          </form>
          {/* Add form components, text inputs, etc. */}
        </div>
        </div>
      )} 
    </div>
  );
}

export default Recycle;
