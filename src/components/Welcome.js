import { Link } from "react-router-dom";

const Welcome = ({name:name, startGame, hasStarted}) => {
console.log(hasStarted)


    
    return(
        <div>
            <h2>Welcome {name}!</h2>
            <h4>You have 10 questions to answer today in 5 minutes</h4>
            <p>Good luck!</p>
            <br/>
            <button type="button" onClick={startGame}><Link to={'/Quiz'}>Click to start answering</Link></button>    
            <br/>
        </div>
    )
}

export default Welcome;