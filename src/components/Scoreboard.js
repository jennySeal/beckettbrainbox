import Trophy from './GoldCupTrophy.png';
import {Link} from 'react-router-dom';

const date = new Date()
const dateString = date.toDateString()
console.log(dateString)

const Scoreboard = ({name:name, score}) => {
    console.log(name)
   
    return (
        <div className='scoreboard'>
            <div className='imageContainer'>
            <img src={Trophy} alt="gold trophy"/>
            </div>
            <p>{dateString}</p>
            <h4>Scoreboard</h4>
            <ol>
                <li type="1">{name} : {score} {(name == 'No one') } {(score == 0)}</li>
            </ol> 
            <br/>
            </div>
    )
}

export default Scoreboard;