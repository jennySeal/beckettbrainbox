import Countdown from "react-countdown";
import TimesUp from "./TimesUp";


const Welcome = ({name:name, startGame, hasStarted}) => {
console.log(hasStarted)

const renderer = ({hasStarted}) => {
    console.log(hasStarted)
    if (hasStarted) {
        autoStart = true
        
    } else {
        autoStart = false
    }
    return autoStart
}
    
    return(
        <div>
            <h2>Welcome {name}!</h2>
            <h4>You have 10 questions to answer today in 5 minutes</h4>
            <p>Good luck!</p>
            <button type="button" onClick={startGame}>Click to start answering</button>    
            <br/>
             {hasStarted && <Countdown date={Date.now() + 10000} controlled={true} />}
        </div>
    )
}

export default Welcome;