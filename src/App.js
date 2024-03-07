import React, { useState } from 'react';
import Header from './header'; 

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
  }

  return (
    <div>
      <Header />
    </div>
  );
}

export default App;
