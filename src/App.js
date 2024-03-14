import React, { useState, useEffect } from 'react';
import Header from './Header'; // Assuming the filename is 'Header.js' and follows PascalCase convention
import Main from './Main';
import Me from './Me';
import './App.css'
import './font.css'

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
    </div>
  );
}

export default App;
