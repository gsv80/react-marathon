import { useLocation, Route, Switch, Redirect } from "react-router-dom";


import cn from 'classnames';
import './App.css';


import HomePage from "./routes/Home";
import GamePage from "./routes/Game";
import MenuHeader from "./components/MenuHeader";
import Footer from "./components/Footer";
import About from '../../react-marathon/src/routes/About'
import Contact from '../../react-marathon/src/routes/Contact';
import Notfound from '../../react-marathon/src/routes/Notfound';

import s from '../../react-marathon/src/style.module.css';
import { FireBaseContext } from "./context/firebaseContext";
import Firebase from "./services/firebase";


const App = () =>{
  const location=useLocation();
  const isPadding = location.pathname === '/' ||  location.pathname === '/game/board';
 
  return (

    <FireBaseContext.Provider value={new Firebase()}>

    
    <Switch>
      <Route path='/404' component = {Notfound} />
        <Route>
        <>
          <MenuHeader bgActive={!isPadding}/>
          <div className = {cn(s.wrap, {
            [s.isHomePage] : isPadding
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

    </FireBaseContext.Provider>

        
  )
};

export default App;