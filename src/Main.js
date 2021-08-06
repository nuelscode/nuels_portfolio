import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import  Particles from "react-particles-js";
import { Home } from "./Home";
import { About } from "./About";
import { Experience } from "./Experience";
import { Services } from "./Services";
import { Portfolio } from "./Portfolio";
import { Contact } from "./Contact";
import { NoMatch } from "./NoMatch";

const Main = () => {
  return (
    <>
    <Router>
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
          <Route exact path="/home" component={Home} />
             <Route exact path="/about" component={About} />
             <Route exact path="/experience" component={Experience} />
             <Route exact path="/services" component={Services} />
             <Route exact path="/portfolio" component={Portfolio} />
             <Route exact path="/contact" component={Contact} />
             <Route component={NoMatch} />
             
    </Switch>
    </Router>
    <Particles
             className="particles-canvas"
           params={{
             particles: {
               number: {
                 value: 30,
                 density: {
                   enable: true,
                   value_area: 900
                 }
               },
               shape: {
                 type: "circle",
                 stroke: {
                   width: 6,
                   color:  "#f9ab00"
                 }
               }
             }
           }}
       />
    </>
  );
}

export default Main;