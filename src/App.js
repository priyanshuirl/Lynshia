import React from "react"
import './App.css';

import Navbar from "./resources/navbar/navbar"
import Footer from "./resources/footer/footer"
import MainContent from "./resources/maincontent/maincontent"
import Comingsoon from "./resources/comingsoon/comingsoon"

import { BrowserRouter as Router, Route, Switch} from "react-router-dom"

function App() {
  return (
    <Router>
    <div>
      <Navbar/>
      <Switch>
        <Route exact path="/lynshia">
        <MainContent/>
        </Route>
        <Route path="/lynshia/comingsoon">
          <Comingsoon/>
        </Route>
      </Switch>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
