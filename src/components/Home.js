import { Link } from "react-router-dom";
import Name from './Name';
import Welcome from "./Welcome";
import Trophy from './GoldCupTrophy.png';

const Home = ({username, gotAPlayer, hasPlayer, startGame}) => {
console.log(hasPlayer)
     return (
    <div>
      <h2>Who will be Brains of the Day?</h2>
      {!!hasPlayer ? <h3>It could be you, {username}!</h3> : " "}  
    <div className='imageContainer'>
      <img src={Trophy} alt="gold trophy"/>
      </div>
      <br/>
    
      {!!hasPlayer ? <Welcome startGame={startGame}/> : <Name gotAPlayer={gotAPlayer} />}
        </div>

    )
}

export default Home;