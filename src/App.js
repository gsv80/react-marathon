import { useState } from "react";
import { useRouteMatch, Route, Switch, Redirect } from "react-router-dom";

import firebase from "firebase/compat/app";
import "firebase/compat/database";

import cn from 'classnames';
import s from '../../react-marathon/src/style.module.css';
import './App.css';

import HomePage from "./routes/Home";
import GamePage from "./routes/Game";
import MenuHeader from "./components/MenuHeader";
import Footer from "./components/Footer";
import About from '../../react-marathon/src/routes/About'
import Contact from '../../react-marathon/src/routes/Contact';
import Notfound from '../../react-marathon/src/routes/Notfound';



const firebaseConfig = {
  apiKey: "AIzaSyB74-WW-7njwHwQvYfSzS-I_xtSJ9Cdw1c",
  authDomain: "pokemon-game-19f73.firebaseapp.com",
  databaseURL: "https://pokemon-game-19f73-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "pokemon-game-19f73",
  storageBucket: "pokemon-game-19f73.appspot.com",
  messagingSenderId: "428168442141",
  appId: "1:428168442141:web:c6d78bf795fa079b33b1f4"
};


firebase.initializeApp(firebaseConfig);

const database = firebase.database();

database.ref('pokemons').once('value', (snapshot) => {
  console.log('####: snapshot', snapshot.val());
})

// {
//   "rules": {
//     ".read": "now < 1634504400000",  // 2021-10-18
//     ".write": "now < 1634504400000",  // 2021-10-18
//   }
// }



const App = () =>{
  const match=useRouteMatch('/');
  
  return (
    <Switch>
      <Route path='/404' component = {Notfound} />
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
              <Route render = {() => (<Redirect to ='/404' />
              )} />
            </Switch>
          </div>
        
          <Footer /> 
        
        </>
      </Route>
    </Switch>


        
  )
};

export default App;