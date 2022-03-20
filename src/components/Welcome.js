import { useSelector} from "react-redux";
import {selectUsername } from '../slice_reducers/usernameSlice';


const Welcome = () => {
    const usernameData = useSelector(selectUsername)
    const username = usernameData.username.username


    return(
        <div>
            <h3>Welcome {username}!</h3>
            <h4>You have 10 questions to answer today in 5 minutes</h4>
            <p>Good luck!</p>
            <button>Click to start answering</button>
        </div>
    )
}

export default Welcome;