import React, { useState } from 'react';
import Header from './Header'; // Assuming the filename is 'Header.js' and follows PascalCase convention
import Main from './Main';
import Me from './Me';
import './App.css'

function App() {
  const [content,setContent]=useState(<Main/>);
  function clickHandler(button){
    if(button=="me"){
      setContent(<Me/>);
    }
  }
  return (
    <div id='bg'>
      <Header clickHandler={clickHandler} />
      {content}
      <h6 id='pickup'>Add Pickup</h6>
    </div>
  );
}

export default App;
