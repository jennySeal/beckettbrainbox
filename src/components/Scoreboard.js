
import {Link} from 'react-router-dom';

const Scoreboard = ({name:name}) => {
    console.log(name)
   
    return (
        <div>
            <h4>{name} is the winner{(name == 'No one') ? " yet" : ""}</h4> 
            <br/>
            <Link to="/">Back </Link>
        </div>
    )
}

export default Scoreboard;