import { Link } from "react-router-dom";
import Trophy from './GoldCupTrophy.png';


const Home = ({name:name}) => {

    return (
    <div>
    <div className='imageContainer'>
      <img src={Trophy} alt="gold trophy"/>
      </div>
      <h2>Who will be Brains of the Day?</h2>
      <br/>
      <div className='buttons'><Link to="/name" >Let's get started</Link> 
        <Link to="/scoreboard" name={name}>Scoreboard</Link></div>
        </div>
    )
}

export default Home;