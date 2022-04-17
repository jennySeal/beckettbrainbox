import Countdown from "react-countdown";
import TimesUp from "./TimesUp";

const Quiz = (username) => {


return (
<div>
    <Countdown className="countdown" date={Date.now() + 300000}>
    <TimesUp/>
    </Countdown>
    <br/> 
    <h4>Question One</h4>
    <p>What is the capital of New Zealand</p>
    <input type="text" id="one" name="one" autoFocus/>
    
</div>
)
}

export default Quiz;