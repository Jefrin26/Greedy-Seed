// App.js
import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Community from './community'; // Import the Community component
import './App.css';
import Me from './me';
import Recycle from './recycle';

function App() {
  const [clickedIcon, setClickedIcon] = useState('recycle'); // Set the initial state to 'recycle'

  const handleIconClick = (iconId) => {
    if (iconId === 'trashIcon') {
      setClickedIcon('recycle');
    } else if (iconId === 'peopleIcon') {
      setClickedIcon('community'); // Set the icon to 'community' when people icon is clicked
    } else {
      setClickedIcon(iconId);
    }
  };

  return (
    <div>
      <Header onIconClick={handleIconClick} />
      {clickedIcon === 'me' && <Me />}
      {clickedIcon === 'recycle' && <Recycle />}
      {clickedIcon === 'community' && <Community />} {/* Render Community component when 'community' is clicked */}
      <Footer onIconClick={handleIconClick} />
    </div>
  );
}

export default App;
