import React from "react"
import './App.css';

import Navbar from "./resources/navbar/navbar"
import Footer from "./resources/footer/footer"
import MainContent from "./resources/maincontent/maincontent"
import Comingsoon from "./resources/comingsoon/comingsoon"
import AboutUs from "./resources/aboutus/aboutus"
import PeopleBehindLynshia from "./resources/peoplebehindlynshia/peoplebehindlynshia"
import Careers from "./resources/careers/careers"
import PrivacyPolicy from "./resources/privacypolicy/privacypolicy";
import TermsOfUse from "./resources/termsofuse/termsofuse";
import CopyRight from "./resources/copyright/copyright";
import Disclamer from "./resources/disclamer/disclamer";

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
          <Route exact path="/comingsoon">
            <Comingsoon />
          </Route>
          <Route exact path="/aboutus">
            <AboutUs />
          </Route>
          <Route exact path="/peoplebehindlynshia">
            <PeopleBehindLynshia />
          </Route>
          <Route exact path="/careers">
            <Careers />
          </Route>
          <Route exact path="/privacypolicy">
            <PrivacyPolicy />
          </Route>
          <Route exact path="/termsofuse">
            <TermsOfUse />
          </Route>
          <Route exact path="/copyright">
            <CopyRight />
          </Route>
          <Route exact path="/disclamer">
            <Disclamer />
          </Route>
          <Route>
            <MainContent />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
