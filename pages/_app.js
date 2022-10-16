import React, { useRef, useEffect, useState  } from 'react';
import Navbar from "./Navbar.js"
import './styles/styles.css'
import Buy from "./links/buy"
import Sell from "./links/sell"
import Home from "./links/home"







function App() {
  let component 
  switch(window.location.pathname){
    case "/":
      component = <App/>
      break
    case "buy":
      component = <Buy/>
      break
    case "sell":
      component = <Sell/>   
      break
  }

  return (
    <>
      <Navbar/>
      {component}
    </>
  )
}

export default App;