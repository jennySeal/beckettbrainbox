import { Link } from "react-router-dom";
import {useContext} from 'react'
import UsernameContext from "./UsernameContext";

const Welcome = ({startGame}) => {

    const username = useContext(UsernameContext)
    
    return(
        <div>
            <h4>You have 10 questions to answer today in 3 minutes</h4>
            <p>Good luck!</p>
            <button type="button" onClick={startGame}><Link to='/Quiz'>Click to start answering</Link></button>    
            <br/>
        </div>
    )
}

export default Welcome;