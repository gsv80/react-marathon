import { useState } from "react";
import { useRouteMatch, Route, Switch } from "react-router-dom";

import cn from 'classnames';
import HomePage from "./routes/Home";
import GamePage from "./routes/Game";
import MenuHeader from "./components/MenuHeader";
import Footer from "./components/Footer";
import About from '../../react-marathon/src/routes/About'
import Contact from '../../react-marathon/src/routes/Contact';
import Notfound from '../../react-marathon/src/routes/Notfound';

import s from '../../react-marathon/src/style.module.css';

const App = () =>{
  const match=useRouteMatch('/');
  return (
    <Switch>
      <Route>
        <>
          <MenuHeader bgActive={!match.isExact}/>
          <div className = {cn(s.wrap, {
            [s.isHomePage] : match.isExact
          })}>
            <Switch>
              <Route path = "/" exact component = {HomePage} />
              <Route path = "/home" component = {HomePage} />
              <Route path = "/game" component = {GamePage} />
              <Route path = "/about" component = {About} />
              <Route path = "/contacts" component = {Contact} />
              <Route component = {Notfound} />
            </Switch>
          </div>
        
          <Footer /> 
        
        </>
      </Route>
    </Switch>


        
  )
};

export default App;