import {Link} from 'react-router-dom';
import Header from './components/Header';
import Name from './components/Name';
import UseForm from './components/useForm';
import Scoreboard from './components/Scoreboard';
import {useState} from 'react';


import './App.css';

const App = () => {

  const [values, handleChange] = UseForm({username: ""})
  console.log(values)


  return (
       <div className="App" id="outerEdge">
      <Header/>
      <Name values={values} handleChange={handleChange}/>
      <Link to="/scoreboard">Scoreboard</Link>


    </div>

  );
}

export default App;
