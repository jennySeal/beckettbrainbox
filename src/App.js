import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { useState } from 'react';

import Header from './components/Header';
import Home from './components/Home';
import Name from './components/Name';
import Welcome from './components/Welcome';
import Countdown from "react-countdown";
import TimesUp from './components/TimesUp';


import './App.css';
import Scoreboard from './components/Scoreboard';

const App = () => {
  
  const [username, setUserName] = useState("No one")
  const [hasStarted, setHasStarted] = useState('false');
  const gameHasStarted  = (e) => {
    e.preventDefault()
    setUserName(e.target.value)
            }

    const startGame = (e) => {
              e.preventDefault()
              setHasStarted(true)  
                        
           }


  const onComplete = () => {
    console.log('hello')   
  }

  return (
      <Router>
      <Header/>
      <div className="App" id="outerEdge">
      <Routes>      
      <Route path='/' element={<Home name={username}/>}/>
      <Route path='/scoreboard' element={<Scoreboard name={username}/>}/>
      <Route path='/name' element={<Name name={username} hasStarted={hasStarted} handleSubmit={gameHasStarted}/>}/>
      <Route path='/welcome/' element={<Welcome name={username} startGame={startGame} hasStarted={hasStarted}/>}/>

      </Routes>

    </div>
    </Router>

  );
}

export default App;
