import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { useState, createContext} from 'react';
import Countdown from "react-countdown";
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import Home from './components/Home';
import Welcome from './components/Welcome';
import TimesUp from './components/TimesUp';
import Quiz from './components/Quiz';
import Scoreboard from './components/Scoreboard';
import './App.css';
import UsernameContext from './components/UsernameContext';

const App = () => {
  
  const [username, setUserName] = useState("No one")
  const [hasStarted, setHasStarted] = useState(false);
  const [score, setScore] = useState(0)
  const [completed, setCompleted] = useState(false);
  const [hasPlayer, setHasPlayer] = useState(false)

  const gotAPlayer  = (e) => {
    e.preventDefault()
    setUserName(e.target[0].value)
    setHasPlayer(true)
  }

  const startGame = (e) => {
     e.preventDefault()
     setHasStarted(true)  
     }

  const onComplete = () => {
    setCompleted(true)   
  }

  
  const addToScore = (e) => {
    e.preventDefault()
    console.log(score)
    let newScore = score + 1;
    setScore(newScore)
}



  return (
      
      <Router>
       <UsernameContext.Provider value={username}>
     <Header/>
      <div className='scoreAndQuiz'>
      <Scoreboard name={username} score={score}/>
      <div className="outerEdge">
      <Routes>      
      <Route path='/' element={<Home username={username} gotAPlayer={gotAPlayer} hasPlayer={hasPlayer} startGame={startGame}/>}/>
      <Route path='/quiz' element={<Quiz hasStarted={hasStarted} score={score} addToScore={addToScore}/>}/>
      </Routes>
      </div>
    </div>
    </UsernameContext.Provider>

    </Router>


  );
}

export default App;
