import React from "react"
import './App.css';

import Navbar from "./resources/navbar/navbar"
import Footer from "./resources/footer/footer"
import MainContent from "./resources/maincontent/maincontent"

function App() {
  return (
    <div>
      <Navbar/>
      <MainContent/>
      <Footer/>
    </div>
  );
}

export default App;
