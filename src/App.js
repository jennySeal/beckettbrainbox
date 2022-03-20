import {Link} from 'react-router-dom';

import Header from './components/Header';
import Name from './components/Name';
import Welcome from './components/Welcome';


import { useSelector} from "react-redux";
import {selectUsername } from './slice_reducers/usernameSlice';



import './App.css';

const App = () => {

  const username = useSelector(selectUsername)
  const haveWeGotAUser = username.isEmpty;
  console.log(username) 

  return (
       <div className="App" id="outerEdge">
      <Header/>
      {haveWeGotAUser ? 
      
      <Name/> : <Welcome/>}
      <Link to="/scoreboard">Scoreboard</Link>


    </div>

  );
}

export default App;
