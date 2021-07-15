import React from "react"
import './App.css';

import Navbar from "./resources/navbar/navbar"
import Footer from "./resources/footer/footer"
import MainContent from "./resources/maincontent/maincontent"
import Comingsoon from "./resources/comingsoon/comingsoon"
import AboutUs from "./resources/aboutus/aboutus"
import PeopleBehindLynshia from "./resources/peoplebehindlynshia/peoplebehindlynshia"
import Careers from "./resources/careers/careers"

import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <MainContent />
          </Route>
          <Route path="/comingsoon">
            <Comingsoon />
          </Route>
          <Route path="/aboutus">
            <AboutUs />
          </Route>
          <Route path="/peoplebehindlynshia">
            <PeopleBehindLynshia />
          </Route>
          <Route path="/careers">
            <Careers />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
